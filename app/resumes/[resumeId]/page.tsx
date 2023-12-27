"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TypographyH2 } from "@/components/ui/typography-h2";
import ProgressBar from "@ramonak/react-progress-bar";
import { IconArrowLeft } from "@tabler/icons-react";
import { useState } from "react";

type FormStep =
  | "basic"
  | "position"
  | "education"
  | "employment"
  | "skills"
  | "hobbies";

export default function NewResume() {
  const [completed, setCompleted] = useState(1);
  const [formStep, setFormStep] = useState<FormStep>("basic");

  return (
    <div>
      <button
        onClick={() => {
          setCompleted((c) => c - 1);
        }}
      >
        <IconArrowLeft />
      </button>
      <ProgressBar
        className="my-8"
        completed={(completed * 100) / 6}
        bgColor="#4450f2"
        isLabelVisible={false}
        height="10px"
      />
      <form>
        {formStep === "basic" && (
          <>
            <TypographyH2 className="mb-4">Basic Details</TypographyH2>
            <div className="space-y-6 xl:grid xl:grid-cols-2 xl:gap-12 xl:space-y-0">
              <Input label="Full Name" type="text" required />
              <Input label="Date of Birth (Optional)" type="date" />
              <Input label="Email ID" type="email" required />
              <Input label="Number" type="tel" required />
              <Textarea
                label="Address (Optional)"
                className="col-span-2"
                textareaClassname="resize-none"
                rows={3}
              />
              <Button
                type="button"
                onClick={() => {
                  setCompleted((c) => c + 1);
                }}
                className="col-start-2 w-full xl:ml-auto xl:w-fit xl:px-16"
              >
                Next
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
