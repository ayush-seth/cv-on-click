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
    question: "1. How does COC create a CV in just 2 minutes?",
    answer:
      "COC utilizes an algorithm and innovative technology to extract key information from your profile swiftly. By minimizing the input required from users, we generate a comprehensive and professionally crafted CV in just 2 minutes.",
  },
  {
    question: "2. What information do I need to provide COC to generate my CV?",
    answer:
      "You'll need to provide essential details such as your name, contact information, professional experience, education, and key skills. Our user-friendly platform ensures a quick and straightforward process.",
  },
  {
    question: "3. Does COC offer additional Career Services?",
    answer:
      "Absolutely! COC is expanding its services to offer a range of career development features, including interview preparation, confidence-building resources, mentorship programs, and opportunities to showcase your skills for potential employers.",
  },
];
