import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import type { RefundNewFormSchema } from "~/contexts/refunds/schemas";
import { api, fetcher } from "~/helpers/api";
import type { RefundCreate, RefundDelete, RefundShow } from "~/types/api";

export default function useRefund(id?: string) {
  const queryClient = useQueryClient();
  const [isDeleting, setIsDeleting] = useState(false);

  async function createRefund(payload: RefundNewFormSchema) {
    try {
      await api.post<RefundCreate>("/refunds", {
        title: payload.title,
        category: payload.category,
        value: payload.value,
        receipt: payload.receipt,
      });

      queryClient.invalidateQueries({ queryKey: ["refunds"] });
    } catch (error) {
      toast.error("Erro ao criar solicitação de reembolso");
      throw error;
    }
  }

  async function deleteRefund(refundId: string) {
    try {
      setIsDeleting(true);
      const response = await api.delete<RefundDelete>(`/refunds/${refundId}`);

      queryClient.invalidateQueries({ queryKey: ["refunds"] });
      toast.success("Solicitação de reembolso excluída com sucesso");
      return response.data;
    } catch (error) {
      toast.error("Erro ao deletar solicitação de reembolso");
      throw error;
    } finally {
      setIsDeleting(false);
    }
  }

  const { data, isLoading } = useQuery<RefundShow>({
    queryKey: ["refund", id],
    queryFn: () => fetcher(`/refunds/${id}`),
    enabled: !!id,
  });

  return {
    createRefund,
    deleteRefund,
    isDeleting,
    refund: data?.refund,
    isLoading,
  };
}
