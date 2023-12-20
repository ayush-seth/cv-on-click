import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";

export default function Refund() {
  return (
    <>
      <TypographyH1 className="mb-6 border-b-2 border-black pb-4 lg:pb-8">
        Refund Policy
      </TypographyH1>

      <TypographyP>Last Updated: 20-12-2023</TypographyP>

      <section className="mt-10 space-y-16">
        <div className="space-y-6">
          <TypographyH2>1. Refund Eligibility:</TypographyH2>
          <TypographyP>
            CVONCALL Career Services Private Limited (&quot;COC&quot;) is
            committed to ensuring customer satisfaction with its services.
            Refund eligibility is subject to the following conditions:
          </TypographyP>
          <TypographyP>
            <strong>1.1 Service Non-Delivery</strong>
            <br />
            In the event that COC fails to deliver the agreed-upon services, a
            refund may be processed. Please note that the refunds will not be
            granted once the CV generation process has been initiated.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>2. Refund Request Process:</TypographyH2>
          <TypographyP>
            <strong>2.1. Contact COC:</strong> To initiate a refund request,
            please contact our customer support team within 30 days of service
            delivery or non-delivery.
          </TypographyP>
          <TypographyP>
            <strong>2.2. Provide Details:</strong> Clearly state the reasons for
            your dissatisfaction or non-receipt of services and provide relevant
            details such as your order number, date of purchase, and any
            supporting documentation.
          </TypographyP>
          <TypographyP>
            <strong>2.3. Verification:</strong>COC reserves the right to verify
            the details provided before processing a refund. This may involve
            communication with you to gather additional information.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>3. Refund Determination:</TypographyH2>
          <TypographyP>
            <strong>3.1. Service Evaluation:</strong> Refunds will be considered
            based on the nature of the service provided and the validity of the
            reasons stated for dissatisfaction or non-delivery.
          </TypographyP>
          <TypographyP>
            <strong>3.2. Processing Time:</strong> Refund requests are typically
            processed within 30 business days after the completion of the
            verification process.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>4. Refund Methods:</TypographyH2>
          <TypographyP>
            <strong>4.1. Original Payment Method:</strong> Refunds will be
            issued using the original payment method used for the purchase.
          </TypographyP>
          <TypographyP>
            <strong>4.2. Exceptions:</strong> In certain cases, COC may offer
            refunds through alternative methods, such as check or bank transfer.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>5. Non-Refundable Items:</TypographyH2>
          <TypographyP>
            <strong>5.1. Personalized Services:</strong> Services that involve
            personalized consultations, assessments, or other customized
            offerings may not be eligible for a refund.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>6. Contact Information:</TypographyH2>
          <TypographyP>
            If you have any questions or concerns about our refund policy,
            please contact us at:
            <br />
            <br />
            CVONCALL Career Services Private Limited
            <br />
            <strong>Communication Address:</strong> HD-171, WeWork Pavilion,
            62/63 The Pavilion, Church Street, Bangalore, Karnataka 560001
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:support@yourcoc.com" className="underline">
              support@yourcoc.com
            </a>
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>7. Amendments to the Refund Policy:</TypographyH2>
          <TypographyP>
            CVONCALL Career Services Private Limited reserves the right to
            update or modify this refund policy at any time. Any changes will be
            effective immediately upon posting on the COC website. By using our
            services, you agree to the terms outlined in this refund policy.
            <br />
            <br />
            <br />
            <i>Thank you for choosing COC!</i>
          </TypographyP>
        </div>
      </section>
    </>
  );
}
