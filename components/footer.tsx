import {
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutubeFilled,
  IconCopyright,
} from "@tabler/icons-react";
import Link from "next/link";
import { Logo } from "./ui/logo";
import { TypographyH2 } from "./ui/typography-h2";

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center md:mx-auto md:my-24 md:w-fit md:flex-row md:justify-center md:gap-12 md:px-10 md:shadow-[0px_0px_11px_0px_rgba(0,0,0,0.25)]">
        <TypographyH2 className="text-center md:text-4xl">
          Stay Connected to get Tips, and updates
        </TypographyH2>
        <div className="my-12 flex gap-8">
          <IconBrandInstagram size={44} className="text-pink-600" />
          <IconBrandYoutubeFilled size={44} className="text-red-700" />
          <IconBrandX size={44} />
        </div>
      </div>
      <div className="flex flex-col gap-14 bg-blue-600 pl-6 pt-8 text-white md:grid md:grid-cols-3 md:justify-between">
        <Logo variant="white" />
        <div className="flex flex-col gap-8 md:flex-row md:justify-center">
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/faq">FAQ&apos;s</Link>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:justify-end md:pr-10">
          <Link href="/terms">Terms of Use</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <div className="mb-14 flex flex-row gap-2">
          <IconCopyright />
          <p>COC. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
