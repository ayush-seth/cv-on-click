import { TypographyH1 } from "@/components/ui/typography-h1";
import { TypographyH2 } from "@/components/ui/typography-h2";
import { TypographyP } from "@/components/ui/typography-p";

export default function PrivacyPolicy() {
  return (
    <>
      <TypographyH1 className="mb-6 border-b-2 border-black pb-4 lg:pb-8">
        Privacy Policy
      </TypographyH1>
      <TypographyP>Effective Date: 20-12-2023</TypographyP>
      <TypographyP className="mt-8">
        Thank you for choosing CVONCALL Career Services Private Limited
        (&quot;COC&quot;), hereinafter referred to as &quot;the Company.&quot;
        This Privacy Policy outlines how we collect, use, disclose, and protect
        the personal information provided by users of our CV generation and
        other career services.
      </TypographyP>

      <section className="mt-10 space-y-16">
        <div className="space-y-6">
          <TypographyH2>1. Information We Collect:</TypographyH2>
          <TypographyP>
            <strong>a. Personal Information:</strong> We collect personal
            information, including but not limited to your name, contact
            details, professional history, and educational background.
          </TypographyP>
          <TypographyP>
            <strong>b. Payment Information:</strong> To process payments, we
            collect relevant financial information. However, we do not store
            payment details after the transaction is complete.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>2. How We Use Your Information:</TypographyH2>
          <TypographyP>
            <strong>a. CV Generation:</strong> Your personal and professional
            information is used solely for the purpose of creating a
            professionally crafted Curriculum Vitae (CV).
          </TypographyP>
          <TypographyP>
            <strong>b. Service Enhancement:</strong> Aggregated and anonymized
            data may be used for improving our services and understanding user
            preferences.
          </TypographyP>
          <TypographyP>
            <strong>c. Communication:</strong> We may use your contact
            information to communicate with you regarding your CV, updates, and
            additional career services.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>3. Data Security:</TypographyH2>
          <TypographyP>
            <strong>a.</strong> We employ industry-standard security measures to
            protect your personal information from unauthorized access,
            disclosure, alteration, or destruction.
          </TypographyP>
          <TypographyP>
            <strong>b.</strong> While we strive to protect your data, no method
            of transmission over the internet or electronic storage is entirely
            secure. Therefore, we cannot guarantee absolute security.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>4. Third-Party Disclosures:</TypographyH2>
          <TypographyP>
            <strong>a.</strong> We do not sell, trade, or transfer your personal
            information to third parties without your explicit consent.
          </TypographyP>
          <TypographyP>
            <strong>b.</strong> Exceptions may include trusted third parties who
            assist us in operating our website, conducting business, or
            servicing you, as long as those parties agree to keep this
            information confidential.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>5. Cookies and Tracking Technologies:</TypographyH2>
          <TypographyP>
            <strong>a.</strong> We use cookies and similar technologies to
            enhance your experience on our website.
          </TypographyP>
          <TypographyP>
            <strong>b.</strong> You can control cookies through your browser
            settings; however, disabling cookies may impact the functionality of
            certain features.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>6. Your Choices:</TypographyH2>
          <TypographyP>
            <strong>a.</strong> You have the right to review and update your
            personal information at any time, for any changes - please write to
            us at{" "}
            <a href="mailto:support@yourcoc.com" className="underline">
              support@yourcoc.com
            </a>
            .
          </TypographyP>
          <TypographyP>
            <strong>b.</strong> You may choose to opt-out of receiving
            promotional communications from us.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>7. Changes to the Privacy Policy:</TypographyH2>
          <TypographyP>
            <strong>a.</strong> The Company reserves the right to update this
            Privacy Policy at any time. Users will be notified of any
            significant changes.
          </TypographyP>
        </div>
        <div className="space-y-6">
          <TypographyH2>8. Contact Information:</TypographyH2>
          <TypographyP>
            If you have any questions or concerns regarding this Privacy Policy,
            please contact us at{" "}
            <a href="mailto:support@yourcoc.com" className="underline">
              support@yourcoc.com
            </a>
            .
          </TypographyP>
          <TypographyP>
            By using the services of CVONCALL Career Services Private Limited
            (&quot;COC&quot;), you consent to the terms outlined in this Privacy
            Policy. It is advisable to review this policy periodically for any
            updates.
          </TypographyP>
        </div>
      </section>
    </>
  );
}
