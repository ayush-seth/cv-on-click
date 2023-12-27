import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, required, error, ...rest }, ref) => {
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
          ref={ref}
          {...rest}
        />
        {error && <p className="text-danger">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
