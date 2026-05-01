import { useState } from "react";
import { toast } from "sonner";
import { api } from "~/helpers/api";
import type { RefundReceiptShow } from "~/types/api";

export function useRefundReceipt() {
  const [isLoading, setIsLoading] = useState(false);

  async function fetchRefundReceipt(receiptId: string) {
    try {
      setIsLoading(true);
      const response = await api.get<RefundReceiptShow>(
        `/receipts/download/${receiptId}`,
      );
      return response.data;
    } catch (error) {
      toast.error("Erro ao buscar comprovante do reembolso.");
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    fetchRefundReceipt,
    isLoading,
  };
}
