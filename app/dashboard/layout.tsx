import logo from "@/app/logo.png";
import { DashboardHeader } from "@/components/dashboard-header";
import {
  IconBook2,
  IconCreditCard,
  IconFileText,
  IconUser,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export const navigation = [
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

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* Sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:block lg:w-60 lg:overflow-y-auto lg:bg-sidebar">
        <div className="h-16 p-6">
          <Image className="h-8 w-auto" src={logo} alt="" />
        </div>
        <nav className="mt-6 flex flex-1 flex-col">
          {navigation.map((nav) => (
            <Link
              key={nav.name}
              className="flex items-center gap-4 px-4 py-3 first:bg-primary-200 hover:bg-primary-100"
              href={nav.href}
            >
              <nav.icon />
              {nav.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* Header and side menu for mobile*/}
      <DashboardHeader />
      <main className="lg:ml-60">{children}</main>
    </div>
  );
}
