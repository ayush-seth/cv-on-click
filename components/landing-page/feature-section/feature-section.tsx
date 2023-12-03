"use client";

import { IconArrowRight } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import { TypographyH2 } from "../../ui/typography-h2";
import { TypographyP } from "../../ui/typography-p";
import feature1 from "./feature-1.png";
import feature2 from "./feature-2.png";
import feature3 from "./feature-3.png";

type Feature = {
  heading: string;
  description: string;
  image: StaticImageData;
};

const features: Feature[] = [
  {
    heading: "Save time by filling minimum details",
    description:
      "Speed up your resume building with just the basics, for a quick and polished professional document in no time.",
    image: feature1,
  },
  {
    heading: "Assured top ATS score for your resume",
    description:
      "Boost your resume's ATS score for heightened visibility and improved chances with employers.",
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
            className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-around lg:gap-12 lg:odd:flex-row-reverse"
          >
            <div className="max-w-xl space-y-4">
              <TypographyH2>{heading}</TypographyH2>
              <TypographyP>{description}</TypographyP>
              <button className="hidden lg:flex lg:gap-1 lg:font-medium lg:text-primary-600 lg:hover:text-primary-800">
                Get started <IconArrowRight />
              </button>
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
