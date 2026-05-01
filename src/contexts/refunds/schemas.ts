import { z } from "zod";

export const refundCategoryValues = [
  "food",
  "hosting",
  "transport",
  "services",
  "other",
] as const;

export const refundCategorySchema = z.enum(refundCategoryValues, {
  error: "Informe uma categoria.",
});

export const refundNewFormSchema = z.object({
  title: z.string().min(1, { message: "Informe um nome." }).max(255),
  category: refundCategorySchema,
  value: z.number().positive({ message: "Informe um valor positivo." }),
  receipt: z.uuid(),
});

export const refundStepOneSchema = refundNewFormSchema.pick({
  title: true,
  category: true,
  value: true,
});

export type RefundNewFormSchema = z.infer<typeof refundNewFormSchema>;
export type RefundCategory = z.infer<typeof refundCategorySchema>;
