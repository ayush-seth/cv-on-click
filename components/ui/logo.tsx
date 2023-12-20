import blackLogo from "@/app/(root)/assets/logo-black.png";
import whiteLogo from "@/app/(root)/assets/logo-white.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "black" | "white";
};

export function Logo({ variant, className }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src={variant === "white" ? whiteLogo : blackLogo}
        alt=""
        className={cn("w-40", className)}
      />
    </Link>
  );
}
