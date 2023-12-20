import { Button } from "@/components/ui/button";
import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyP } from "@/components/ui/typography-p";
import Image from "next/image";
import heroImg from "../assets/hero.png";

export function HeroSection() {
  return (
    <div className="lg:flex lg:items-center lg:gap-8">
      <div className="space-y-6">
        <TypographyH1 className="text-center lg:text-left">
          Craft an effective, affordable CV effortlessly in just 2 minutes!
        </TypographyH1>
        <TypographyP className="text-center lg:text-left">
          Transform your career seamlessly with our best practices—secure your
          professional CV with ease, minimal cost, and zero confusion!
        </TypographyP>
        <Button className="mx-auto w-52 lg:mx-0">Get Started</Button>
      </div>
      <div className="mt-8 lg:mt-0">
        <Image src={heroImg} alt="" className="" />
      </div>
    </div>
  );
}
