"use client";

import { navigation } from "@/app/dashboard/layout";
import logo from "@/app/logo.png";
import { Dialog, Transition } from "@headlessui/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FC, Fragment, useState } from "react";

export const DashboardHeader: FC = () => {
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
                  <Image className="h-8 w-auto" src={logo} alt="" />
                  <button type="button" onClick={() => setSidebarOpen(false)}>
                    <IconX />
                  </button>
                </div>
                <nav className="flex flex-col">
                  <ul role="list">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          key={item.name}
                          className="flex items-center gap-4 px-6 py-3 hover:bg-primary-100"
                          href={item.href}
                        >
                          <item.icon />
                          {item.name}
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

      <div className="sticky top-0 z-40 flex items-center justify-between p-6 lg:hidden">
        <Image className="h-8 w-auto" src={logo} alt="" />

        <button type="button" onClick={() => setSidebarOpen(true)}>
          <IconMenu2 />
        </button>
      </div>
    </>
  );
};
