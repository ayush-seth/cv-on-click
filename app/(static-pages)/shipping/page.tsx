import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";
import Link from "next/link";

export default function Shipping() {
  return (
    <>
      <TypographyH1 className="mb-6 border-b-2 border-black pb-4 lg:pb-8">
        Shipping & Cancellation Policy
      </TypographyH1>

      <TypographyP>Last Updated: 20-12-2023</TypographyP>

      <section className="mt-10 space-y-16">
        <div className="space-y-6">
          <TypographyH2>1. Service Delivery:</TypographyH2>
          <TypographyP>
            CVONCALL Career Services Private Limited (&quot;COC&quot;) provides
            career services primarily in the form of digital content, online
            consultations, and other virtual offerings. As such, traditional
            shipping methods for physical goods do not apply. The delivery of
            services will be facilitated through electronic means.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>2. Service Delivery Timeframes:</TypographyH2>
          <TypographyP>
            <strong>2.1. Digital Content:</strong> Access to digital content,
            including but not limited to documents, guides, and templates, will
            be available within 15 days of successful payment and confirmation.
          </TypographyP>
          <TypographyP>
            <strong>2.2. Consultation Services:</strong> For services involving
            consultations or personalized sessions, clients will receive
            communication regarding scheduling within 15 business days from the
            date of purchase.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>3. Client Responsibilities:</TypographyH2>
          <TypographyP>
            <strong>3.1. Accurate Information:</strong> Clients are responsible
            for providing accurate and complete information during the ordering
            process to ensure the timely and effective delivery of services.
          </TypographyP>
          <TypographyP>
            <strong>3.2. Communication:</strong> Clients should monitor the
            provided contact information for updates and communications related
            to service delivery.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>4. Technical Requirements:</TypographyH2>
          <TypographyP>
            <strong>4.1. Internet Connection:</strong> Clients must have a
            stable internet connection to access digital content and participate
            in online consultations.
          </TypographyP>
          <TypographyP>
            <strong>4.2. Compatible Devices:</strong> Services are accessible on
            devices that meet the minimum technical requirements specified by
            COC.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>5. Customer Support:</TypographyH2>
          <TypographyP>
            If clients encounter any issues with service delivery or have
            questions about the process, they can contact our customer support
            team at:
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
          <TypographyH2>6. Refunds:</TypographyH2>
          <TypographyP>
            Please refer to our{" "}
            <Link href="/refund" className="underline">
              Refund Policy
            </Link>{" "}
            for information on refunds related to service delivery.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>7. Cancellation Policy:</TypographyH2>
          <TypographyP>
            If you wish to cancel your order, please reach out to us at{" "}
            <a href="mailto:support@yourcoc.com" className="underline">
              support@yourcoc.com
            </a>
            . However, please note that cancellations do not automatically
            qualify for refunds. Refunds are strictly governed by the conditions
            mentioned in the refund policy.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>8. Amendments to the Shipping Policy:</TypographyH2>
          <TypographyP>
            COC reserves the right to update or modify this shipping policy at
            any time. Any changes will be effective immediately upon posting on
            the COC website. By using our services, you agree to the terms
            outlined in this shipping policy.
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
