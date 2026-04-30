import type { Receipt } from "~/contexts/receipts/models/receipt";
import type { Refund } from "~/contexts/refunds/models/refund";

export type PaginationMeta = {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string | null;
  previousPageUrl: string | null;
};

export type RefundIndex = {
  refunds: {
    meta: PaginationMeta;
    data: (Refund & {
      deletedAt: string | null;
      createdAt: string;
      updatedAt: string;
      receipt: Receipt & {
        refundId: string;
        createdAt: string;
        updatedAt: string;
      };
    })[];
  };
};
