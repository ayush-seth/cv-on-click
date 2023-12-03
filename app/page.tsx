import { FeatureSection } from "@/components/landing-page/feature-section/feature-section";
import { HeroSection } from "@/components/landing-page/hero-section/hero-section";
import { ReviewSection } from "@/components/landing-page/review-section/review-section";
import { StatsSection } from "@/components/landing-page/stats-section/stats-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <ReviewSection />
      {/* <div>
        <Heading className="mb-10 mt-20 text-center text-3xl md:my-20">
          Our users who built resume with us got hired
        </Heading>

        <div className="flex flex-col items-center gap-10 md:flex-row">
          <Rating />
          <Rating />
          <Rating />
        </div>
      </div>

      <div className="mt-40 md:flex md:gap-20">
        <div className="max-w-lg shrink-0">
          <Heading className="mb-8 text-center text-3xl md:text-left">
            We are here to answer your questions
          </Heading>
          <p className="hidden text-gray-600 md:block">
            Your Questions, Our Expertise: Get Personalized Responses and Expert
            Guidance for a Seamless Experience. We&apos;re Here to Help You
            Every Step of the Way!
          </p>
        </div>
        <div className="flex grow flex-col">
          <MyDisclosure
            ques="1. What is the process of creating AI resume? "
            ans="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <MyDisclosure
            ques="2. How do add specific skills or experiences using AI? "
            ans="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <MyDisclosure
            ques="3. How can I get assistance if I face any issues? "
            ans="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
      </div> */}
    </>
  );
}
