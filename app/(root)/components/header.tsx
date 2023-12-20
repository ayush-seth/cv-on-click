import { MobileHeader, NavItem } from "@/components/mobile-header";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

const navigation: NavItem[] = [
  { name: "About", href: "/about", icon: null },
  { name: "Contact", href: "/contact", icon: null },
  { name: "Blog", href: "/blog", icon: null },
];

export function Header() {
  return (
    <div>
      <header className="hidden lg:container lg:flex lg:items-center lg:justify-between lg:py-6">
        <Logo />
        <nav className="flex items-center gap-20">
          {navigation.map(({ name, href }) => (
            <Link key={name} href={href}>
              {name}
            </Link>
          ))}

          <Link href="/login">
            <Button>Get Started</Button>
          </Link>
        </nav>
      </header>
      <MobileHeader nav={navigation} />
    </div>
  );
}
