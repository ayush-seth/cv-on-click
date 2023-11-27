import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

type TypographyPProps = {} & HTMLAttributes<HTMLParagraphElement>;

export const TypographyP: FC<TypographyPProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p className={cn("text-base text-muted lg:text-lg", className)} {...rest}>
      {children}
    </p>
  );
};
