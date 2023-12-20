import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

type TypographyProps = {} & HTMLAttributes<HTMLSpanElement>;

export const Typography: FC<TypographyProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p
      className={cn(
        "font-manrope",

        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};
