import banner from "@/app/dashboard/career/banner.png";
import { Suggestion } from "@/components/suggestion";
import { SystemMessage } from "@/components/system-message";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";
import { UserMessage } from "@/components/user-message";
import { IconSend } from "@tabler/icons-react";
import Image from "next/image";
import emptyState from "./career-empty-state.svg";

let questionsRemaining = 5;

export default function CareerPage() {
  return questionsRemaining === 0 ? (
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
  ) : (
    <div className="flex h-full flex-col gap-6 bg-gray-100">
      <Image className="h-20 w-full lg:h-36" src={banner} alt="" />
      <div className="flex flex-col gap-14 p-4 lg:p-10">
        <div className="flex flex-col gap-6 ">
          <SystemMessage text="Hey, I am your career expert ask anything or from the suggested topics" />
          <div className="ml-16 flex flex-col gap-4 lg:flex-row lg:gap-6">
            <Suggestion text="Best skills for my position" />
            <Suggestion text="Interview tips" />
            <Suggestion text="How can you help me to prepare " />
            <Suggestion text="Interview tips" />
          </div>
        </div>
        <UserMessage text="Help me with best skills for my position" />
      </div>
      <div className="fixed bottom-4 w-full px-4 lg:w-[calc(100%-240px)] lg:px-10">
        <div className="flex items-center gap-5">
          <input
            type="text"
            placeholder="Enter your question here"
            className="grow rounded-2xl border px-6 py-3 text-base"
          />
          <IconSend strokeWidth={1.25} className="rotate-45" />
        </div>
        <p className="mx-2 mt-2 text-sm text-gray-500">
          You have 5 free questions left to ask.
        </p>
      </div>
    </div>
  );
}
