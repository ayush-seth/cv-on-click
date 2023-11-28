import { TypographyH2 } from "@/components/ui/typography-h2";

const x = (
  <div className="rounded-lg border-[0.2px] border-black p-5">
    <div className="grid grid-cols-2 text-muted">
      <div className="flex flex-col gap-2">
        <span>Invoice No</span>
        <span>Issue Date</span>
        <span className="font-medium text-black">Status</span>
        <span className="font-medium text-black">Subtotal</span>
        <span className="text-sm">Discount</span>
        <span className="font-medium text-primary-600">Total</span>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span>1234567899808</span>
        <span>12-04-2023</span>
        <span className="font-medium text-black">Completed</span>
        <span className="font-medium text-black">Rs 300</span>
        <span className="text-sm">- Rs 30 (10%)</span>
        <span className="font-medium text-primary-600">Rs 270</span>
      </div>
    </div>
  </div>
);

export default function PaymentPage() {
  return (
    <div className="p-6 lg:p-16">
      <TypographyH2 className="mb-6">Payment History</TypographyH2>
      {x}
      {x}
      {x}
      {x}
      {x}
      {x}
    </div>
  );
}
