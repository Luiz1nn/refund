import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import type { ReceiptNewFormSchema } from "~/contexts/receipts/schemas";
import { api } from "~/helpers/api";
import type { ReceiptCreate } from "~/types/api";

export default function useReceipt() {
  const { mutateAsync: createReceipt, isPending: isCreatingReceipt } =
    useMutation({
      mutationFn: async (payload: ReceiptNewFormSchema) => {
        const formData = new FormData();
        formData.append("receiptFile", payload.receiptFile);

        const receipt = await api.post<ReceiptCreate>("/receipts", formData);

        return receipt.data;
      },
      onError: () => {
        toast.error("Erro ao cadastrar comprovante.");
      },
    });

  return {
    createReceipt,
    isCreatingReceipt,
  };
}
