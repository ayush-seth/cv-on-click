"use client";

import { ResumeEmptyState } from "@/app/(with-sidebar)/resumes/components/resume-empty-state";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { Menu } from "@headlessui/react";
import {
  IconDotsVertical,
  IconDownload,
  IconEdit,
  IconPlus,
} from "@tabler/icons-react";
import Link from "next/link";

const resumes = [{ name: "Resume 1" }, { name: "Resume 2" }];

export default function ResumePage() {
  return resumes.length > 0 ? (
    <div className="p-6 lg:p-16">
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
              <Menu as="div" className="relative hidden lg:block">
                <Menu.Button className="hidden lg:block" type="button">
                  <IconDotsVertical size={20} />
                </Menu.Button>
                <Menu.Items className="absolute right-0 w-44 rounded-lg border bg-white shadow-xl">
                  <Menu.Item>
                    <button
                      className="flex w-full items-center gap-4 px-3 py-2 text-sm hover:bg-gray-100"
                      type="button"
                    >
                      <IconEdit />
                      Edit
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      className="flex w-full items-center gap-4 px-3 py-2 text-sm text-primary-500 hover:bg-gray-100"
                      type="button"
                    >
                      <IconDownload />
                      Download
                    </button>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
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
        <Link className="hidden space-y-4 lg:block" href="/resumes/new">
          <div className="grid h-60 w-44 place-items-center rounded-sm border-[0.2px] border-black bg-white">
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
        </Link>
        <Link href="/resumes/new">
          <Button className="w-full lg:hidden">Create Now</Button>
        </Link>
      </div>
    </div>
  ) : (
    <ResumeEmptyState />
  );
}
