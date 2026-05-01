import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import Skeleton from "./skeleton";

export const fieldLabelClassName =
  "relative text-gray-200 focus-within:text-green-100 focus-within:font-bold text-2xs transition-all uppercase flex flex-col gap-2";

export const fieldControlClassName =
  "rounded-lg text-gray-100 transition-all placeholder:text-gray-200 border font-normal outline-none border-gray-300 h-12 focus-within:border-green-100 caret-green-100 py-4 pl-4 text-sm";

type FieldErrorProps = {
  error?: string;
};

export function FieldError({ error }: FieldErrorProps) {
  if (!error) return null;

  return (
    <span className="absolute normal-case bottom-0 left-0 translate-y-full text-sm font-medium text-green-100">
      {error}
    </span>
  );
}

type FieldSkeletonProps = {
  labelText?: string;
  className?: string;
  containerProps?: ComponentProps<"div">;
};

export function FieldSkeleton({
  labelText,
  className,
  containerProps,
}: FieldSkeletonProps) {
  const { className: containerClassName, ...props } = containerProps ?? {};

  return (
    <div
      className={twMerge(fieldLabelClassName, "w-full", containerClassName)}
      {...props}
    >
      {labelText}
      <div className="rounded-lg border h-12 border-gray-300 py-4 pl-4 text-sm flex items-center">
        <Skeleton className={twMerge("w-20", className)}>-</Skeleton>
      </div>
    </div>
  );
}
