import { toast } from "sonner";
import type { ReceiptNewFormSchema } from "~/contexts/receipts/schemas";
import { api } from "~/helpers/api";
import type { ReceiptCreate } from "~/types/api";

export default function useReceipt() {
  async function createReceipt(payload: ReceiptNewFormSchema) {
    try {
      const formData = new FormData();
      formData.append("receiptFile", payload.receiptFile);

      const receipt = await api.post<ReceiptCreate>("/receipts", formData);

      return receipt.data;
    } catch (error) {
      toast.error("Erro ao cadastrar comprovante.");
      throw error;
    }
  }

  return {
    createReceipt,
  };
}
