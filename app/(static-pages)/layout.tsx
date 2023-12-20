import { Footer } from "@/components/footer";
import { ReactNode } from "react";
import { Banner } from "../(root)/components/banner";
import { Header } from "../(root)/components/header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <div className="container mt-6 lg:mt-20">{children}</div>
      <Banner />
      <Footer />
    </>
  );
}
