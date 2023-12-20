"use client";

import { TypographyH1 } from "@/components/ui/typography-h1";
import { Disclosure } from "@headlessui/react";
import { IconPlus } from "@tabler/icons-react";

export default function FAQ() {
  return (
    <div className="mt-12 px-4 md:flex md:gap-20">
      <div className="mb-10 max-w-lg shrink-0">
        <TypographyH1 className="mb-8 text-center text-3xl md:text-left">
          We are here to answer your questions
        </TypographyH1>
        <p className="text-gray-600">
          Your Questions, Our Expertise: Get Personalized Responses and Expert
          Guidance for a Seamless Experience. We&apos;re Here to Help You Every
          Step of the Way!
        </p>
      </div>
      <div className="flex grow flex-col">
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
    question: "1. What is COC? ",
    answer:
      "COC is a cutting-edge career services company that specializes in creating professional Curriculum Vitae (CV) for candidates in just 60 seconds. Our unique platform leverages advanced technology to streamline the CV creation process, making it quick, easy, and efficient.",
  },
  {
    question: "2. How does COC create a CV in just 0 to 5 minutes? ",
    answer:
      "COC utilizes an algorithm and innovative technology to extract key information from your profile swiftly. By minimizing the input required from users, we generate a comprehensive and professionally crafted CV in just 0 to 5 minutes. ",
  },
  {
    question:
      "3. What information do I need to provide COC to generate my CV? ",
    answer:
      "You'll need to provide essential details such as your name, contact information, professional experience, education, and key skills. Our user-friendly platform ensures a quick and straightforward process.",
  },
  {
    question: "4. Is my information secure with COC? ",
    answer:
      "Yes, absolutely. We prioritize the security and privacy of your information. COC adheres to strict data protection measures, and your personal details are handled with the utmost confidentiality. For more details, please refer to our Privacy Policy.",
  },
  {
    question: "5. Can I download my CV after it's generated? ",
    answer:
      "Yes, once your CV is generated, you'll get an email carrying the option to download the same.. The download option is also available on your dashboard as well after the CV creation process is complete.",
  },
  {
    question: "6. Does COC offer additional career services? ",
    answer:
      "Absolutely! COC is expanding its services to offer a range of career development features, including interview preparation, confidence-building resources, mentorship programs, and opportunities to showcase your skills for potential employers.",
  },
  {
    question: "7. How can I get in touch with COC for support or inquiries? ",
    answer:
      "For any assistance or inquiries, feel free to contact our support team at COC Contact Information . We're here to help and ensure you have a seamless experience with COC Career Services.",
  },
  {
    question: "8. Is COC available only in certain regions? ",
    answer:
      "No, COC's services are available to professionals across India. Our platform is designed to cater to individuals seeking to enhance their career prospects, regardless of their location.",
  },
];
