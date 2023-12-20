import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography-h2";
import Link from "next/link";
import banner from "../assets/banner.png";

export function Banner() {
  return (
    <div
      className="my-32 grid place-items-center gap-10 p-20"
      style={{
        backgroundImage: `url(${banner.src})`,
        backgroundSize: "100% 100%",
      }}
    >
      <TypographyH2 className="text-center">
        Start building your resume to land your dream job
      </TypographyH2>
      <Link href="/login">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}
