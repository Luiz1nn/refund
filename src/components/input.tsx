import type { ComponentProps } from "react";
import { tv } from "tailwind-variants";
import {
  FieldError,
  fieldControlClassName,
  fieldLabelClassName,
} from "./form-field";

const inputLabelVariants = tv({
  base: fieldLabelClassName,
});

const inputVariants = tv({
  base: fieldControlClassName,
});

type Props = ComponentProps<"input"> & {
  labelText?: string;
  error?: string;
};

export function Input({ labelText, error, className, ...props }: Props) {
  return (
    <label className={inputLabelVariants({ className })}>
      {labelText}
      <input type="text" className={inputVariants()} {...props} />
      <FieldError error={error} />
    </label>
  );
}
