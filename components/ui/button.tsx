import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = {
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  className,
  loading,
  ...rest
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-3.5 py-2.5 font-manrope font-semibold text-white transition-shadow duration-300 hover:shadow-button active:bg-primary-700",
        "lg:py-3.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
        "disabled:cursor-not-allowed disabled:bg-primary-400",
        className,
      )}
      disabled={loading}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
