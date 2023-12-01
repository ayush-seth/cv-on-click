"use client";

import logo from "@/app/logo.png";
import { Dialog, Transition } from "@headlessui/react";
import {
  IconBook2,
  IconCreditCard,
  IconFileText,
  IconMenu2,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FC, Fragment, useState } from "react";

export const navigationItems = [
  {
    name: "My Resume",
    href: "/dashboard/resume",
    icon: IconFileText,
  },
  {
    name: "Career",
    href: "/dashboard/career",
    icon: IconBook2,
  },
  {
    name: "Payment",
    href: "/dashboard/payments",
    icon: IconCreditCard,
  },
  {
    name: "Account",
    href: "/dashboard/account",
    icon: IconUser,
  },
];

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
                    {navigationItems.map((item) => (
                      <li key={item.name}>
                        <Link
                          key={item.name}
                          className="flex items-center gap-4 px-6 py-3 hover:bg-primary-100"
                          href={item.href}
                          onClick={() => setSidebarOpen(false)}
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

      <div className="top-0 z-40 flex items-center justify-between bg-white p-6 lg:hidden">
        <Image className="h-8 w-auto" src={logo} alt="" />

        <button type="button" onClick={() => setSidebarOpen(true)}>
          <IconMenu2 />
        </button>
      </div>
    </>
  );
};
