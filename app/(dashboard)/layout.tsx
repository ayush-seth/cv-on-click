"use client";

import logo from "@/app/(root)/assets/logo.png";
import { MobileHeader, NavItem } from "@/components/mobile-header";
import { cn } from "@/lib/utils";
import {
  IconBook2,
  IconCreditCard,
  IconFileText,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:block lg:w-60 lg:bg-sidebar">
        <div className="h-16 p-6">
          <Image className="h-8 w-auto" src={logo} alt="" />
        </div>
        <nav className="mt-6 flex flex-1 flex-col">
          {navigationItems.map(({ name, href, icon }) => (
            <Link
              key={name}
              className={cn(
                "flex items-center gap-4 px-4 py-3",
                pathname === href ? "bg-primary-200" : "hover:bg-primary-100",
              )}
              href={href}
            >
              {icon}
              {name}
            </Link>
          ))}
        </nav>
      </div>
      <MobileHeader nav={navigationItems} />
      <main className="grow lg:pl-60">{children}</main>
    </div>
  );
}

const navigationItems: NavItem[] = [
  {
    name: "My Resume",
    href: "/resume",
    icon: <IconFileText />,
  },
  {
    name: "Career",
    href: "/career",
    icon: <IconBook2 />,
  },
  {
    name: "Payment",
    href: "/payments",
    icon: <IconCreditCard />,
  },
  {
    name: "Account",
    href: "/account",
    icon: <IconUser />,
  },
];
