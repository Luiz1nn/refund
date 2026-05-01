import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { RefundNewFormSchema } from "~/contexts/refunds/schemas";
import { api, fetcher } from "~/helpers/api";
import type { RefundCreate, RefundDelete, RefundShow } from "~/types/api";

export function useRefundQuery(id?: string) {
  const { data, isLoading } = useQuery<RefundShow>({
    queryKey: ["refund", id],
    queryFn: () => fetcher(`/refunds/${id}`),
    enabled: !!id,
  });

  return {
    refund: data?.refund,
    isLoading,
  };
}

export function useCreateRefund() {
  const queryClient = useQueryClient();

  const { mutateAsync: createRefund, isPending: isCreatingRefund } =
    useMutation({
      mutationFn: async (payload: RefundNewFormSchema) => {
        const response = await api.post<RefundCreate>("/refunds", {
          title: payload.title,
          category: payload.category,
          value: payload.value,
          receipt: payload.receipt,
        });

        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["refunds"] });
      },
      onError: () => {
        toast.error("Erro ao criar solicitação de reembolso");
      },
    });

  return {
    createRefund,
    isCreatingRefund,
  };
}

export function useDeleteRefund() {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteRefund, isPending: isDeletingRefund } =
    useMutation({
      mutationFn: async (refundId: string) => {
        const response = await api.delete<RefundDelete>(`/refunds/${refundId}`);

        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["refunds"] });
        toast.success("Solicitação de reembolso excluída com sucesso");
      },
      onError: () => {
        toast.error("Erro ao deletar solicitação de reembolso");
      },
    });

  return {
    deleteRefund,
    isDeletingRefund,
  };
}
