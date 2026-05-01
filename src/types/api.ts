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

export type ReceiptWithTimestamps = Receipt & {
  createdAt: string;
  updatedAt: string;
};

export type RefundReceipt = ReceiptWithTimestamps & {
  refundId: string;
};

export type RefundWithReceipt = Refund & {
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  receipt: RefundReceipt;
};

export type RefundIndex = {
  refunds: {
    meta: PaginationMeta;
    data: RefundWithReceipt[];
  };
};

export type RefundShow = {
  refund: RefundWithReceipt;
};

export type RefundCreate = {
  refund: RefundWithReceipt;
};

export type RefundReceiptShow = {
  url: string;
};

export type RefundDelete = {
  message: string;
};

export type ReceiptCreate = {
  receipt: ReceiptWithTimestamps;
};
