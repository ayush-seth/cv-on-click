import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";
import Image from "next/image";
import cvUnderlineSvg from "./assets/cv-underline.svg";
import rightSolutionImg from "./assets/right-solution.png";
import whoWeAreImg from "./assets/who-are-we.png";

export default function About() {
  return (
    <>
      <TypographyH1 className="mb-6 border-b-2 border-black pb-4 lg:pb-8">
        About us
      </TypographyH1>
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-xl space-y-4">
          <TypographyH2 className="font-medium lg:font-medium">
            Who we <span className="font-bold">are?</span>
          </TypographyH2>
          <TypographyP>
            Welcome to COC, where expertise meets efficiency in crafting
            standout resumes for professionals across India. With a cumulative
            experience of over 20 years in HR, Business, and Finance, our team
            of seasoned professionals understands the pivotal role a CV plays in
            your career journey.
          </TypographyP>
          <TypographyP className="font-semibold">
            COC Stands for CV/Coach/Career on Click!
          </TypographyP>
        </div>
        <Image
          src={whoWeAreImg}
          className="w-full max-w-xl"
          alt=""
          height={800}
        />
      </div>

      <div className="mt-20 lg:mt-40 lg:flex lg:justify-between lg:gap-10">
        <div className="w-fit space-y-2">
          <TypographyH1>Revolutionizing CV Creation</TypographyH1>
          <Image src={cvUnderlineSvg} className="w-full" alt="" />
        </div>
        <div className="mt-8 max-w-xl space-y-8 lg:mt-0 ">
          <TypographyP>
            Having navigated through numerous interviews and recruitment
            processes ourselves, we recognize the significance of a well-crafted
            CV.
          </TypographyP>
          <TypographyP>
            It serves as the first impression, defining your professional
            identity even before you step into the recruiter&apos;s office. We
            understand the challenges faced in the competitive job market, and
            that&apos;s why we founded -{" "}
            <span className="font-semibold">
              COC : India&apos;s very first platform that gives a CV in 0 to 5
              minutes!
            </span>
          </TypographyP>
          <TypographyP>
            At COC, we have streamlined the CV creation process to be quick,
            effortless, and devoid of confusion. We leverage our extensive
            experience to provide a service that not only saves you time but
            also boosts your confidence when applying for your dream job.
          </TypographyP>
        </div>
      </div>

      <div className="mt-10 lg:mt-40 lg:flex lg:justify-between">
        <Image src={rightSolutionImg} alt="" className="order-1 max-w-xl" />
        <div className="mt-10 max-w-xl space-y-8">
          <TypographyH2 className="font-normal lg:font-normal">
            Delivering the <span className="font-bold">right solution?</span>
          </TypographyH2>
          <TypographyP>
            What sets us apart from the competition is our commitment to
            simplicity and effectiveness. Unlike platforms that inundate you
            with template choices, requiring you to paste or select content and
            then demand a hefty fee for downloading your CV, we take a different
            approach. We believe in a straightforward process - you provide your
            details, and we harness the power of cutting-edge technology to
            create the best possible CV for you.
          </TypographyP>
          <TypographyP>
            Our mission is to empower professionals across India by delivering
            CVs that reflect their skills, experience, and potential in the most
            compelling way. With COC, you can trust that your CV will not only
            meet industry standards but exceed them.
          </TypographyP>
          <TypographyP>
            Join us on a journey where your career aspirations meet our
            expertise, and let us help you stand out in a competitive job
            market. Your success story begins with a powerful CV from CV.
          </TypographyP>
        </div>
      </div>
    </>
  );
}
