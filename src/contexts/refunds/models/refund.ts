import type { RefundCategory } from "~/contexts/refunds/schemas";

export type Refund = {
  id: string;
  title: string;
  category: RefundCategory;
  value: number;
};
