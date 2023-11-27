import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

type TypographyH1Props = {} & HTMLAttributes<HTMLHeadingElement>;

export const TypographyH1: FC<TypographyH1Props> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h1
      className={cn(
        "font-manrope text-3xl font-bold leading-10 lg:text-5xl lg:leading-[60px]",
        className,
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};
