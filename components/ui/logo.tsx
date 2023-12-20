import blackLogo from "@/app/(root)/assets/logo-black.png";
import whiteLogo from "@/app/(root)/assets/logo-white.svg";
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
        width={150}
      />
    </Link>
  );
}
