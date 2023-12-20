import { FeatureSection } from "@/app/(root)/components/feature-section";
import { HeroSection } from "@/app/(root)/components/hero-section";
import { ReviewSection } from "@/app/(root)/components/review-section";
import { StatsSection } from "@/app/(root)/components/stats-section";
import { Banner } from "./components/banner";
import { FAQSection } from "./components/faq-section";
import { Header } from "./components/header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mt-6 lg:mt-20">
        <HeroSection />
        <StatsSection />
        <FeatureSection />
        <ReviewSection />
        <FAQSection />
      </div>
      <Banner />
    </>
  );
}
