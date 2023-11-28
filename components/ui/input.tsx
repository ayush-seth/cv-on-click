import { FC, InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  label,
  className,
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
      <input
        type="text"
        id={label}
        className="mt-2.5 block w-full rounded-md p-3 ring-[0.5px] ring-inset ring-label focus:ring-1 focus:ring-primary-600 disabled:opacity-40"
        required={required}
        {...rest}
      />
    </div>
  );
};
