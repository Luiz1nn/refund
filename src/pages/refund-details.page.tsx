import { FileIcon } from "@phosphor-icons/react";
import { useNavigate, useParams } from "react-router";
import { Button } from "~/components/button";
import {
  ConfirmAlertDialogAction,
  ConfirmAlertDialogCancel,
  ConfirmAlertDialogContent,
  ConfirmAlertDialogDescription,
  ConfirmAlertDialogOverlay,
  ConfirmAlertDialogPortal,
  ConfirmAlertDialogRoot,
  ConfirmAlertDialogTitle,
  ConfirmAlertDialogTrigger,
} from "~/components/confirm-dialog";
import { FieldSkeleton } from "~/components/form-field";
import { Input } from "~/components/input";
import { PageCard } from "~/components/page-card";
import { SelectInput } from "~/components/select";
import { categoryOptions } from "~/contexts/refunds/helpers";
import {
  useDeleteRefund,
  useRefundQuery,
} from "~/contexts/refunds/hooks/use-refund";
import { useRefundReceipt } from "~/contexts/refunds/hooks/use-refund-receipt";
import type { RefundWithReceipt } from "~/types/api";

export function RefundDetailsPage() {
  const { id } = useParams();
  const { refund, isLoading } = useRefundQuery(id);
  const { deleteRefund, isDeletingRefund } = useDeleteRefund();
  const { fetchRefundReceipt, isLoading: isLoadingReceipt } =
    useRefundReceipt();

  async function handleOpenReceipt() {
    if (refund?.receipt.id) {
      const { url } = await fetchRefundReceipt(refund.receipt.id);
      window.open(`${import.meta.env.VITE_API_URL}${url}`, "_blank");
    }
  }

  return (
    <PageCard
      title="Solicitação de reembolso"
      description="Dados da despesa para solicitar reembolso."
    >
      <div className="flex flex-col gap-8">
        {isLoading ? (
          <FieldSkeleton labelText="Nome da solicitação" />
        ) : (
          refund && (
            <Input
              readOnly
              name="name"
              value={refund.title}
              labelText="Nome da solicitação"
            />
          )
        )}

        <div className="flex items-center gap-4">
          {isLoading ? (
            <FieldSkeleton labelText="Categoria" />
          ) : (
            refund && (
              <SelectInput
                labelText="Categoria"
                name="category"
                options={categoryOptions}
                value={refund.category}
                open={false}
              />
            )
          )}

          {isLoading ? (
            <FieldSkeleton
              labelText="Valor"
              containerProps={{ className: "max-w-[154px]" }}
              className="w-10"
            />
          ) : (
            refund && (
              <Input
                labelText="Valor"
                type="number"
                step="0.01"
                min="0"
                value={refund.value}
                name="value"
                placeholder="0,00"
                readOnly
                className="max-w-38.5"
              />
            )
          )}
        </div>

        <div className="space-y-4">
          <Button
            disabled={isLoading || isDeletingRefund || isLoadingReceipt}
            variant="outline"
            onClick={handleOpenReceipt}
          >
            <FileIcon weight="bold" size="18" />
            {isLoadingReceipt ? "Abrindo comprovante..." : "Abrir comprovante"}
          </Button>

          <ConfirmFileDeletionDialog
            refund={refund}
            isLoading={isLoading}
            isDeleting={isDeletingRefund}
            onDelete={deleteRefund}
          />
        </div>
      </div>
    </PageCard>
  );
}

type ConfirmFileDeletionDialogProps = {
  refund?: RefundWithReceipt;
  isLoading: boolean;
  isDeleting: boolean;
  onDelete: (refundId: string) => Promise<unknown>;
};

function ConfirmFileDeletionDialog({
  refund,
  isLoading,
  isDeleting,
  onDelete,
}: ConfirmFileDeletionDialogProps) {
  const navigate = useNavigate();

  async function handleDelete() {
    if (refund) {
      await onDelete(refund.id);
      navigate("/");
    }
  }

  return (
    <ConfirmAlertDialogRoot>
      <ConfirmAlertDialogTrigger asChild>
        <Button disabled={isDeleting || isLoading} variant="primary">
          {isDeleting ? "Excluindo..." : "Excluir"}
        </Button>
      </ConfirmAlertDialogTrigger>

      <ConfirmAlertDialogPortal>
        <ConfirmAlertDialogOverlay />
        <ConfirmAlertDialogContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <ConfirmAlertDialogTitle>
              Excluir solicitação
            </ConfirmAlertDialogTitle>
            <ConfirmAlertDialogDescription>
              Tem certeza que deseja excluir essa solicitação? Essa ação é
              irreversível.
            </ConfirmAlertDialogDescription>
          </div>

          <div className="flex items-center w-full justify-end gap-4">
            <ConfirmAlertDialogCancel className="w-fit">
              Cancelar
            </ConfirmAlertDialogCancel>
            <ConfirmAlertDialogAction onClick={handleDelete} className="w-fit">
              Confirmar
            </ConfirmAlertDialogAction>
          </div>
        </ConfirmAlertDialogContent>
      </ConfirmAlertDialogPortal>
    </ConfirmAlertDialogRoot>
  );
}
