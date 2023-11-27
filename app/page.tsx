import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";

export default function Home() {
  return (
    <div className="m-40 space-y-10">
      <TypographyH1 className="max-w-xl">
        Craft an easy, affordable resume effortlessly in just 60 seconds.
      </TypographyH1>
      <TypographyP className="max-w-xl">
        Transform your career seamlessly with our best practices—secure your
        professional CV with ease, minimal cost, and zero confusion!
      </TypographyP>
      <TypographyH2>A quick and easy process</TypographyH2>
      <Button>Get started</Button>
      <Input label="Enter mobile number" className="max-w-xl" required />
    </div>
  );
}
