import { PaymentHistoryCard } from "@/components/payment-history-card";
import { TypographyH2 } from "@/components/ui/typography-h2";

export default function PaymentPage() {
  return (
    <div className="p-6 lg:p-16">
      <TypographyH2 className="mb-6">Payment History</TypographyH2>
      <div className="space-y-8">
        <PaymentHistoryCard />
        <PaymentHistoryCard />
        <PaymentHistoryCard />
        <PaymentHistoryCard />
        <PaymentHistoryCard />
      </div>
    </div>
  );
}
