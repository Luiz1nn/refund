import { useState } from "react";
import { useNavigate } from "react-router";
import { z } from "zod";
import type { $ZodFlattenedError } from "zod/v4/core";
import { Button } from "~/components/button";
import { FileInput } from "~/components/file-input";
import { Input } from "~/components/input";
import { PageCard } from "~/components/page-card";
import { SelectInput } from "~/components/select";
import useReceipt from "~/contexts/receipts/hooks/use-receipt";
import { receiptNewFormSchema } from "~/contexts/receipts/schemas";
import { categoryOptions } from "~/contexts/refunds/helpers";
import { useCreateRefund } from "~/contexts/refunds/hooks/use-refund";
import { refundStepOneSchema } from "~/contexts/refunds/schemas";

const newRefundFormSchema = refundStepOneSchema.extend({
  receiptFile: receiptNewFormSchema.shape.receiptFile,
});

type ValidationErrors = $ZodFlattenedError<z.infer<typeof newRefundFormSchema>>;

export function NewRefundPage() {
  const navigate = useNavigate();
  const [validationErrors, setValidationErrors] =
    useState<ValidationErrors | null>(null);

  const { createRefund, isCreatingRefund } = useCreateRefund();
  const { createReceipt, isCreatingReceipt } = useReceipt();
  const isSubmitting = isCreatingRefund || isCreatingReceipt;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title");
    const category = formData.get("category");
    const value = Number(formData.get("value"));
    const file = formData.get("file");

    const formValidation = newRefundFormSchema.safeParse({
      title,
      category,
      value,
      receiptFile: file,
    });

    if (!formValidation.success) {
      const formattedErrors = z.flattenError(formValidation.error);
      setValidationErrors(formattedErrors);
      return;
    }

    setValidationErrors(null);

    try {
      const { receipt } = await createReceipt({
        receiptFile: formValidation.data.receiptFile,
      });

      await createRefund({
        category: formValidation.data.category,
        title: formValidation.data.title,
        value: formValidation.data.value,
        receipt: receipt.id,
      });

      navigate("/confirmation");
    } catch {}
  }

  return (
    <PageCard
      title="Nova solicitação de reembolso"
      description="Dados da despesa para solicitar reembolso."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <fieldset
          disabled={isSubmitting}
          className="flex flex-col gap-6 group/fieldset"
        >
          <Input
            name="title"
            labelText="Nome da solicitação"
            error={validationErrors?.fieldErrors.title?.[0]}
          />

          <div className="flex items-center gap-4">
            <SelectInput
              labelText="Categoria"
              name="category"
              options={categoryOptions}
              disabled={isSubmitting}
              error={validationErrors?.fieldErrors.category?.[0]}
            />

            <Input
              labelText="Valor"
              type="number"
              step="0.01"
              min="0"
              name="value"
              placeholder="0,00"
              className="max-w-38.5"
              error={validationErrors?.fieldErrors.value?.[0]}
            />
          </div>

          <FileInput
            labelText="Comprovante"
            className="w-full"
            name="file"
            placeholder="Nome do arquivo.pdf"
            error={validationErrors?.fieldErrors.receiptFile?.[0]}
          />
        </fieldset>

        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </PageCard>
  );
}
