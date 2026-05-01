import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { api } from "~/helpers/api";
import type { RefundReceiptShow } from "~/types/api";

export function useRefundReceipt() {
  const { mutateAsync: fetchRefundReceipt, isPending: isLoading } = useMutation(
    {
      mutationFn: async (receiptId: string) => {
        const response = await api.get<RefundReceiptShow>(
          `/receipts/download/${receiptId}`,
        );

        return response.data;
      },
      onError: () => {
        toast.error("Erro ao buscar comprovante do reembolso.");
      },
    },
  );

  return {
    fetchRefundReceipt,
    isLoading,
  };
}
