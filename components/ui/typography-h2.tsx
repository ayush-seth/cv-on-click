import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

type TypographyH2Props = {} & HTMLAttributes<HTMLHeadingElement>;

export const TypographyH2: FC<TypographyH2Props> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <h2
      className={cn(
        "font-manrope text-2xl font-semibold leading-8 lg:text-4xl lg:font-bold lg:leading-[60px]",

        className,
      )}
      {...rest}
    >
      {children}
    </h2>
  );
};
