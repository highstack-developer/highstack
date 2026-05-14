import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Highstack Inc. collects, uses, discloses, and protects personal information in accordance with PIPEDA and applicable Canadian privacy laws.',
};

const LAST_UPDATED = 'October 15, 2024';

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 text-h1 text-brand-ink scroll-mt-24">
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-body text-brand-ink/80 leading-relaxed my-5">
      {children}
    </p>
  );
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-6 my-5 space-y-2 text-brand-ink/80">
      {children}
    </ul>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-brand-ink underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-yellow transition-colors"
    >
      {children}
    </a>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro={`Date last updated: ${LAST_UPDATED}`}
      />
      <section className="bg-white py-16 md:py-20">
        <article className="mx-auto max-w-3xl px-6">
          <H2>1. Introduction</H2>
          <P>
            At Highstack, we are committed to protecting the privacy and
            security of our users’ personal information. This Privacy Policy
            describes our practices regarding how we collect, use, disclose,
            and protect personal information in accordance with the Personal
            Information Protection and Electronic Documents Act (PIPEDA) and
            other applicable Canadian privacy laws when you use our website
            and services. By accessing or using our website, you agree to the
            terms of this Privacy Policy.
          </P>

          <H2>2. Collection of Personal Information</H2>
          <P>
            We collect personal information that you voluntarily provide to us
            when interacting with our website or services. This information
            may include:
          </P>
          <UL>
            <li>
              <strong>Contact Information:</strong> Name, email address, phone
              number, and mailing address.
            </li>
            <li>
              <strong>Account Information:</strong> Username, password, and
              other registration details.
            </li>
            <li>
              <strong>Communication Content:</strong> Messages, feedback, or
              inquiries you send to us.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you use our
              website, including IP address, browser type, and pages visited.
            </li>
          </UL>

          <H2>3. Use of Cookies and Tracking Technologies</H2>
          <P>
            Our website uses cookies and similar tracking technologies to
            enhance user experience and gather analytical data. Cookies are
            small data files stored on your device that help us understand
            user preferences and improve our services. You can manage or
            disable cookies through your browser settings; however, this may
            affect the functionality of our website.
          </P>

          <H2>4. Purpose of Collection</H2>
          <P>We collect personal information for the following purposes:</P>
          <UL>
            <li>
              <strong>Service Delivery:</strong> To respond to your inquiries,
              provide customer support, and process transactions.
            </li>
            <li>
              <strong>Personalization:</strong> To tailor content and services
              according to your preferences.
            </li>
            <li>
              <strong>Communication:</strong> To send newsletters, updates, and
              promotional materials (with your consent).
            </li>
            <li>
              <strong>Analytics:</strong> To monitor usage patterns and improve
              website functionality.
            </li>
            <li>
              <strong>Legal Compliance:</strong> To fulfill legal obligations
              and protect our rights.
            </li>
          </UL>

          <H2>5. Consent</H2>
          <P>
            By providing your personal information, you consent to its
            collection, use, and disclosure as outlined in this Privacy
            Policy. You may withdraw your consent at any time by contacting us
            at <A href="mailto:info@highstack.ca">info@highstack.ca</A>.
            Please note that withdrawing consent may limit our ability to
            provide certain services to you.
          </P>

          <H2>6. Disclosure of Personal Information</H2>
          <P>
            We do not sell or rent your personal information to third parties.
            We may disclose your information under the following circumstances:
          </P>
          <UL>
            <li>
              <strong>Service Providers:</strong> To third-party vendors who
              assist in operating our website and services, subject to
              confidentiality agreements.
            </li>
            <li>
              <strong>Legal Obligations:</strong> To comply with laws,
              regulations, or legal requests.
            </li>
            <li>
              <strong>Business Transactions:</strong> In the event of a
              merger, acquisition, or asset sale, your information may be
              transferred, provided the receiving party agrees to protect your
              information in a manner consistent with this Privacy Policy.
            </li>
          </UL>

          <H2>7. International Data Transfers</H2>
          <P>
            Your personal information may be stored or processed outside of
            Canada, including in jurisdictions that may have different data
            protection laws. We take appropriate measures to ensure that your
            information is protected in accordance with this Privacy Policy
            and applicable laws, such as using contractual clauses approved by
            relevant regulatory authorities.
          </P>

          <H2>8. Children’s Privacy</H2>
          <P>
            Our services are not intended for individuals under the age of 13.
            We do not knowingly collect personal information from children
            under 13. If you believe we have inadvertently collected such
            information, please contact us at{' '}
            <A href="mailto:info@highstack.ca">info@highstack.ca</A>, and we
            will promptly delete it.
          </P>

          <H2>9. Data Retention</H2>
          <P>
            We retain your personal information only as long as necessary to
            fulfill the purposes for which it was collected or as required by
            law. Once no longer needed, we securely delete or anonymize your
            information.
          </P>

          <H2>10. Your Rights and Choices</H2>
          <P>Under Canadian privacy law, you have the right to:</P>
          <UL>
            <li>
              <strong>Access:</strong> Request access to the personal
              information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> Request corrections to inaccurate
              or incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> Request the deletion of your personal
              information, subject to legal limitations.
            </li>
            <li>
              <strong>Withdrawal of Consent:</strong> Withdraw consent for
              specific uses of your information.
            </li>
          </UL>
          <P>
            To exercise these rights, contact us at{' '}
            <A href="mailto:info@highstack.ca">info@highstack.ca</A>. We will
            respond within 30 days.
          </P>

          <H2>11. Opt-Out Options</H2>
          <UL>
            <li>
              <strong>Marketing Communications:</strong> You may opt out of
              receiving promotional emails by following the unsubscribe link
              in the email or by contacting us directly.
            </li>
            <li>
              <strong>Cookies:</strong> Adjust your browser settings to refuse
              cookies or alert you when cookies are being sent.
            </li>
          </UL>

          <H2>12. Third-Party Services</H2>
          <P>
            We may use third-party services, such as analytics providers, that
            collect, monitor, and analyze website usage to help us improve our
            services. These third parties have access to your personal
            information only to perform tasks on our behalf and are obligated
            not to disclose or use it for other purposes.
          </P>

          <H2>13. Changes to This Privacy Policy</H2>
          <P>
            We may update this Privacy Policy to reflect changes in our
            practices or legal obligations. Significant changes will be posted
            on our website with an updated “Last Updated” date. We encourage
            you to review this policy periodically.
          </P>

          <H2>14. Contact Us</H2>
          <P>
            If you have any questions, concerns, or complaints regarding this
            Privacy Policy or our handling of your personal information,
            please contact us:
          </P>
          <P>
            Email:{' '}
            <A href="mailto:info@highstack.ca">info@highstack.ca</A>
          </P>
        </article>
      </section>
    </>
  );
}
