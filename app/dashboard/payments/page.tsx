import { PaymentHistoryCard } from "@/components/payment-history-card";
import { TypographyH2 } from "@/components/ui/typography-h2";

export default function PaymentPage() {
  return (
    <div>
      <TypographyH2 className="mb-6">Payment History</TypographyH2>
      <div className="space-y-8">
        <PaymentHistoryCard />
        <PaymentHistoryCard />
      </div>
    </div>
  );
}
