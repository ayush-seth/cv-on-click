import Image from "next/image";
import { Button } from "../../ui/button";
import { TypographyH1 } from "../../ui/typography-h1";
import { TypographyP } from "../../ui/typography-p";
import heroImg from "./hero.png";

export function HeroSection() {
  return (
    <div className="lg:flex lg:items-center lg:gap-8">
      <div className="space-y-6">
        <TypographyH1 className="text-center lg:text-left">
          Craft an easy, affordable resume effortlessly in just 60 seconds.
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
