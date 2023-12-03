"use client";

import logo from "@/app/logo.png";
import {
  DashboardHeader,
  navigationItems,
} from "@/components/dashboard-header";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      {/* Sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:block lg:w-60 lg:overflow-y-auto lg:bg-sidebar">
        <div className="h-16 p-6">
          <Image className="h-8 w-auto" src={logo} alt="" />
        </div>
        <nav className="mt-6 flex flex-1 flex-col">
          {navigationItems.map((nav) => (
            <Link
              key={nav.name}
              className={cn(
                "flex items-center gap-4 px-4 py-3",
                pathname === nav.href
                  ? "bg-primary-200"
                  : "hover:bg-primary-100",
              )}
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
      <main className="grow lg:pl-60">{children}</main>
    </div>
  );
}
