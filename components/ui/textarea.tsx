import { cn } from "@/lib/utils";
import { FC, TextareaHTMLAttributes } from "react";

type TextareaProps = {
  label: string;
  textareaClassname?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: FC<TextareaProps> = ({
  label,
  className,
  textareaClassname,
  required,

  ...rest
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={label}
        className="block font-manrope font-medium text-label"
      >
        {label}
        {required && <span className="text-danger">*</span>}
      </label>
      <textarea
        id={label}
        className={cn(
          "mt-2.5 block w-full rounded-md p-3 ring-[0.5px] ring-inset ring-label focus:ring-1 focus:ring-primary-600 disabled:opacity-40",
          textareaClassname,
        )}
        required={required}
        {...rest}
      />
    </div>
  );
};
