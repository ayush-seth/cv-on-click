import emptyState from "@/app/dashboard/resume/resume-empty-state.svg";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";
import { TypographyH2 } from "./ui/typography-h2";
import { TypographyP } from "./ui/typography-p";

export const ResumeEmptyState: FC = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
      <Image src={emptyState} alt="" className="mb-8 w-80" />
      <TypographyH2 className="text-center">
        Create your shining professional image
      </TypographyH2>
      <TypographyP className="text-center">
        Increase your chance of getting noticed by potential employers.
      </TypographyP>
      <Button className="mt-8 px-8">Create Now</Button>
    </div>
  );
};
