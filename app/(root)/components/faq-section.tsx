"use client";

import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";
import { Disclosure } from "@headlessui/react";
import { IconPlus } from "@tabler/icons-react";

export function FAQSection() {
  return (
    <div className="mt-40 lg:flex lg:justify-between lg:gap-20">
      <div className="lg:max-w-lg">
        <TypographyH2 className="mb-8 text-center text-3xl lg:text-left">
          We are here to answer your questions
        </TypographyH2>
        <TypographyP className="hidden lg:block">
          Your Questions, Our Expertise: Get Personalized Responses and Expert
          Guidance for a Seamless Experience. We&apos;re Here to Help You Every
          Step of the Way!
        </TypographyP>
      </div>
      <div className="flex flex-col lg:max-w-2xl lg:grow">
        {faqs.map(({ question, answer }) => (
          <Disclosure key={question}>
            <div className="space-y-2 border-t border-black px-1 py-4 text-gray-600 last:border-b lg:py-6">
              <Disclosure.Button className="flex w-full items-center justify-between text-left font-semibold">
                <span>{question}</span>
                <IconPlus />
              </Disclosure.Button>
              <Disclosure.Panel className="mb-2 text-sm text-gray-600">
                {answer}
              </Disclosure.Panel>
            </div>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

const faqs = [
  {
    question: "1. What is the process of creating AI resume? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "2. How do add specific skills or experiences using AI? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "3. How can I get assistance if I face any issues? ",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
