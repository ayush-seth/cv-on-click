"use client";

import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";
import { IconArrowRight } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import feature1 from "../assets/feature-1.png";
import feature2 from "../assets/feature-2.png";
import feature3 from "../assets/feature-3.png";

type Feature = {
  heading: string;
  description: string;
  image: StaticImageData;
};

const features: Feature[] = [
  {
    heading: "Save time by filling minimum details",
    description:
      "Speed up your CV building with just the basics, for a quick and polished professional document in no time.",
    image: feature1,
  },
  {
    heading: "Assured top ATS score for your CV",
    description:
      "Secure a top ATS score on your CV, significantly enhancing your chances of getting noticed by potential employers.",
    image: feature2,
  },
  {
    heading: "Elevate your career journey- Ask, Achieve, Excel!",
    description:
      "Ask any question without hesitation and receive instant solutions to overcome challenges, driving your professional growth forward.",
    image: feature3,
  },
];

export function FeatureSection() {
  return (
    <div className="mt-24 lg:mt-32">
      <TypographyH2 className="text-center">
        A quick and easy process
      </TypographyH2>

      <div className="mt-14 space-y-32 lg:mt-24">
        {features.map(({ heading, description, image }) => (
          <div
            key={heading}
            className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:odd:flex-row-reverse"
          >
            <div className="max-w-xl space-y-4">
              <TypographyH2>{heading}</TypographyH2>
              <TypographyP>{description}</TypographyP>
              <Link
                href="/login"
                className="hidden lg:flex lg:gap-1 lg:font-medium lg:text-primary-600 lg:hover:text-primary-800"
              >
                Get started <IconArrowRight />
              </Link>
            </div>
            <Image
              src={image}
              width={800}
              height={200}
              alt=""
              className="mt-4 w-full max-w-sm lg:max-w-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
