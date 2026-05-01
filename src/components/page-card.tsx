import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"div"> & {
  title: string;
  description?: string;
};

export function PageCard({
  title,
  description,
  className,
  children,
  ...props
}: Props) {
  return (
    <div
      className={twMerge(
        "rounded-2xl bg-gray-500 max-w-lg mx-auto p-10 flex flex-col gap-10",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-xl text-gray-100">{title}</h1>
        {description && (
          <span className="text-sm text-gray-200">{description}</span>
        )}
      </div>

      {children}
    </div>
  );
}
