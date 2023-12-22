import { FAQSection } from "@/app/(root)/components/faq-section";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { Banner } from "../(root)/components/banner";
import { Header } from "../(root)/components/header";

export default function ContactUs() {
  return (
    <>
      <Header />
      <TypographyH1 className="text-center">Contact Us</TypographyH1>
      <div className="mt-12 lg:container lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-24">
        <div className="space-y-6 bg-[#1a91f0] p-16 text-white lg:mx-0">
          <TypographyH2>Let&apos;s Connect</TypographyH2>
          <div>
            <Typography className="text-xl">Talk to our team</Typography>
            <Typography className="text-sm underline">
              <a href="mailto:support@yourcoc.com">support@yourcoc.com</a>
            </Typography>
          </div>
          <div>
            <Typography className="text-xl">Our contact details</Typography>
            <Typography className="text-sm underline">
              <a href="tel:support@yourcoc.com">+91 9129000537</a>
            </Typography>
          </div>
          <div>
            <Typography className="text-xl">Communication address</Typography>
            <Typography className="mt-2 text-sm">
              HD-171, WeWork Pavilion, 62/63 The Pavilion, Church Street,
              Bangalore, Karnataka 560001
            </Typography>
          </div>
        </div>
        <form className="mt-16 space-y-6 px-5 lg:m-0">
          <Input label="Name" type="text" required />
          <Input label="Email" type="email" required />
          <Input label="Company Name" type="text" />
          <Textarea label="Message" />
          <Button className="w-full">Get in touch</Button>
        </form>
      </div>
      <div className="container">
        <FAQSection />
      </div>
      <Banner />
      <Footer />
    </>
  );
}
