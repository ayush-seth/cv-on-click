import logo from "@/app/(root)/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image src={logo} alt="" width={100} />
    </Link>
  );
}
