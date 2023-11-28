import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";

import Image from "next/image";
import emptyState from "./career-empty-state.svg";

export default function CareerPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
      <Image src={emptyState} alt="" className="mb-8 w-96" />
      <TypographyH2 className="text-center">
        5 Questions explored: Time to craft your CV!
      </TypographyH2>
      <TypographyP className="text-center">
        Craft your CV now to unlock deeper insights and to ask more questions
        related to your career.
      </TypographyP>
      <Button className="mt-8 px-8">Create Now</Button>
    </div>
  );
}
