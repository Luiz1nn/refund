import { CloudArrowUpIcon } from "@phosphor-icons/react";
import { type ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FieldError } from "./form-field";

type Props = ComponentProps<"input"> & {
  labelText?: string;
  error?: string;
};

export function FileInput({
  className,
  placeholder,
  labelText,
  error,
  ...props
}: Props) {
  const [isEmpty, setIsEmpty] = useState(true);

  function checkEmpty(event: React.ChangeEvent<HTMLInputElement>) {
    setIsEmpty(event.target.files?.length === 0);
  }

  return (
    <label
      className={twMerge(
        "relative group uppercase text-2xs flex text-gray-200 flex-col gap-2 w-fit",
        className,
      )}
    >
      {labelText}
      <div className="relative pl-3 flex items-center rounded-lg justify-between border border-gray-300">
        <input
          type="file"
          className="file:hidden text-sm text-gray-200 peer"
          onChange={checkEmpty}
          {...props}
        />

        {isEmpty && (
          <span className="text-sm flex items-center justify-center text-gray-200 normal-case absolute left-3 pointer-events-none bg-gray-500 min-w-30 min-h-8">
            {placeholder}
          </span>
        )}

        <div className="p-3 bg-green-100 group-hover:peer-enabled:group-enabled/fieldset:bg-green-200 transition-colors rounded-lg">
          <CloudArrowUpIcon className="shrink-0 size-6 rounded-lg text-white" />
        </div>
      </div>

      <FieldError error={error} />
    </label>
  );
}
