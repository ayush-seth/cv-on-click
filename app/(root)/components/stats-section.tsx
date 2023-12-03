import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";
import Image from "next/image";
import blob1 from "../assets/blob-1.svg";
import blob2 from "../assets/blob-2.svg";
import blob3 from "../assets/blob-3.svg";

export function StatsSection() {
  return (
    <div className="mt-10 flex justify-evenly lg:mt-28">
      <div className="relative space-y-1 text-center">
        <Image
          src={blob1}
          className="absolute left-[60%] -z-10 h-6 w-6 lg:h-10 lg:w-10"
          alt=""
        />
        <TypographyH2>+65%</TypographyH2>
        <TypographyP className="text-xs lg:text-base">
          Better chance of getting hired
        </TypographyP>
      </div>
      <div className="relative space-y-1 text-center">
        <Image
          src={blob2}
          className="absolute left-[60%] -z-10 h-6 w-6 lg:h-10 lg:w-10"
          alt=""
        />
        <TypographyH2>60%</TypographyH2>
        <TypographyP className="text-xs lg:text-base">
          Reduces thinking by 60%
        </TypographyP>
      </div>
      <div className="relative space-y-1 text-center">
        <Image
          src={blob3}
          className="absolute left-[60%] -z-10 h-6 w-6 lg:h-10 lg:w-10"
          alt=""
        />
        <TypographyH2>60 sec</TypographyH2>
        <TypographyP className="text-xs lg:text-base">
          Average time to create a resume
        </TypographyP>
      </div>
    </div>
  );
}
