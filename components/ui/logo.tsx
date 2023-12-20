import whiteLogo from "@/app/(root)/assets/logo-white.svg";
import blackLogo from "@/app/(root)/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "black" | "white";
};

export function Logo({ variant }: LogoProps) {
  return (
    <Link href="/">
      <Image
        src={variant === "white" ? whiteLogo : blackLogo}
        alt=""
        width={100}
      />
    </Link>
  );
}
