import { MobileHeader, NavItem } from "@/components/mobile-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";

const navigation: NavItem[] = [
  { name: "About", href: "/about", icon: null },
  { name: "Contact", href: "/contact", icon: null },
  { name: "Blog", href: "/blog", icon: null },
];

export function Header() {
  return (
    <div>
      <header className="hidden lg:container lg:flex lg:items-center lg:justify-between lg:py-6">
        <Image src={logo} className="h-8 w-auto" alt="" />
        <nav className="flex items-center gap-20">
          {navigation.map(({ name, href }) => (
            <Link key={name} href={href}>
              {name}
            </Link>
          ))}

          <Button>Get Started</Button>
        </nav>
      </header>
      <MobileHeader nav={navigation} />
    </div>
  );
}
