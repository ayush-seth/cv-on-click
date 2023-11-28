import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypographyH2 } from "@/components/ui/typography-h2";

export default function AccountPage() {
  return (
    <div className="p-6 lg:p-16">
      <TypographyH2>Account</TypographyH2>
      <div className="mt-8 space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0">
        <Input label={"Full Name"} />
        <Input label={"Date Of Birth"} />
        <Input label={"Gender"} />
        <Input label={"Email"} disabled />
        <Button className="w-full lg:col-start-2 lg:ml-auto lg:w-40">
          Save
        </Button>
      </div>
    </div>
  );
}
