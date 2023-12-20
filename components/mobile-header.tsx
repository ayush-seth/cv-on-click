"use client";

import { Dialog, Transition } from "@headlessui/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { Fragment, ReactNode, useState } from "react";
import { Logo } from "./ui/logo";

export type NavItem = {
  name: string;
  href: string;
  icon: ReactNode;
};

type MobileHeaderProps = {
  nav: NavItem[];
};

export function MobileHeader({ nav }: MobileHeaderProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Transition.Root show={sidebarOpen}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition-all ease-in-out duration-300"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition-all ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="w-full overflow-y-auto bg-sidebar">
                <div className="flex justify-between p-6">
                  <Logo className="w-32" />
                  <button type="button" onClick={() => setSidebarOpen(false)}>
                    <IconX />
                  </button>
                </div>
                <nav className="flex flex-col">
                  <ul role="list">
                    {nav.map(({ name, href, icon }) => (
                      <li key={name}>
                        <Link
                          key={name}
                          className="flex items-center gap-4 px-6 py-3 hover:bg-primary-100"
                          href={href}
                          onClick={() => setSidebarOpen(false)}
                        >
                          {icon}
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="top-0 z-40 flex items-center justify-between bg-white p-6 lg:hidden">
        <Logo className="w-32" />
        <button type="button" onClick={() => setSidebarOpen(true)}>
          <IconMenu2 />
        </button>
      </div>
    </>
  );
}
