import { ResumeEmptyState } from "@/components/resume-empty-state";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography-h2";
import {
  IconDotsVertical,
  IconDownload,
  IconEdit,
  IconPlus,
} from "@tabler/icons-react";

const resumes = [{ name: "Resume 1" }, { name: "Resume 2" }];

export default function ResumePage() {
  return resumes.length > 0 ? (
    <div className="p-6">
      <TypographyH2 className="mb-6">My CV/Resume</TypographyH2>
      <div className="space-y-9 lg:flex lg:flex-wrap lg:gap-16 lg:space-y-0">
        {resumes.map((resume) => (
          <div
            key={resume.name}
            className="flex gap-6 lg:w-fit lg:flex-col lg:gap-4"
          >
            <div className="h-60 w-44 rounded-sm border-[0.2px] border-black bg-yellow-100"></div>
            <div className="space-y-4 lg:flex lg:items-center lg:justify-between lg:space-y-0">
              <span className="font-semibold text-muted">{resume.name}</span>
              <button className="hidden lg:block" type="button">
                <IconDotsVertical size={20} />
              </button>
              <button
                className="flex items-center gap-4 text-sm lg:hidden"
                type="button"
              >
                <IconEdit />
                Edit
              </button>
              <button
                className="flex items-center gap-4 text-sm text-primary-500 lg:hidden"
                type="button"
              >
                <IconDownload />
                Download
              </button>
            </div>
          </div>
        ))}
        <div className="hidden space-y-4 lg:block">
          <div className="grid h-60 w-44 cursor-pointer place-items-center rounded-sm border-[0.2px] border-black bg-white">
            <div className="relative h-20 w-20 rounded-full bg-[#C8C6FB]">
              <IconPlus
                size={28}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <span className="block text-center font-semibold text-muted">
            Create New Resume
          </span>
        </div>
        <Button className="w-full lg:hidden">Create Now</Button>
      </div>
    </div>
  ) : (
    <ResumeEmptyState />
  );
}
