import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms governing your use of the Highstack Inc. website and services, including user responsibilities, intellectual property, and limitations of liability.',
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

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        intro={`Date last updated: ${LAST_UPDATED}`}
      />
      <section className="bg-white py-16 md:py-20">
        <article className="mx-auto max-w-3xl px-6">
          <P>
            These Terms of Use govern your use of the Highstack Inc. website
            and services. By accessing or using our website, you agree to
            comply with and be bound by these terms.
          </P>

          <H2>1. Acceptance of Terms</H2>
          <P>
            By using this website, you agree to be bound by these Terms of
            Use, as well as any additional terms, conditions, or disclaimers
            found on our website. If you do not agree with these terms, please
            discontinue your use of our services.
          </P>

          <H2>2. Services Provided</H2>
          <P>
            Highstack provides web-based services. We reserve the right to
            modify, update, or discontinue any services at any time without
            prior notice.
          </P>

          <H2>3. User Responsibilities</H2>
          <UL>
            <li>
              You agree to use our services in compliance with all applicable
              laws, including but not limited to Canadian privacy laws and
              intellectual property regulations.
            </li>
            <li>
              You are responsible for providing accurate and truthful
              information when interacting with our website and services.
            </li>
            <li>
              You agree not to upload, post, or transmit any content that is
              unlawful, harmful, or violates any third-party rights.
            </li>
          </UL>

          <H2>4. User Content</H2>
          <P>
            Any content you upload or share through our services remains your
            property. However, by submitting content, you grant Highstack Inc.
            a non-exclusive, royalty-free, worldwide license to use,
            reproduce, modify, adapt, publish, translate, and display such
            content solely for the purpose of providing and improving our
            services.
          </P>

          <H2>5. Intellectual Property</H2>
          <P>
            All content on the Highstack Inc. website, including text,
            graphics, logos, and software, is the property of Highstack Inc.
            or its licensors and is protected by Canadian copyright and
            intellectual property laws. Unauthorized use of any material
            found on this website may violate copyright, trademark, or other
            laws.
          </P>

          <H2>6. Privacy Policy</H2>
          <P>
            Please refer to our{' '}
            <A href="/privacy-policy">Privacy Policy</A> for information on
            how we collect, use, and disclose personal information in
            accordance with the Personal Information Protection and Electronic
            Documents Act (PIPEDA).
          </P>

          <H2>7. Disclaimers</H2>
          <UL>
            <li>
              The information provided on our website is for general
              informational purposes only and may not be accurate, complete,
              or current.
            </li>
            <li>
              Our website may contain links to third-party websites that are
              not controlled or operated by Highstack Inc. We are not
              responsible for the content or practices of these websites.
            </li>
          </UL>

          <H2>8. Limitation of Liability</H2>
          <P>
            Highstack Inc. will not be liable for any direct, indirect,
            incidental, special, or consequential damages that result from
            the use or inability to use our website or services, including but
            not limited to reliance on information obtained from our website.
          </P>

          <H2>9. Indemnification</H2>
          <P>
            You agree to indemnify and hold Highstack Inc., its affiliates,
            officers, agents, and employees harmless from any claims, damages,
            obligations, losses, liabilities, costs, or debt, and expenses
            arising from:
          </P>
          <UL>
            <li>Your use of and access to the website and services.</li>
            <li>Your violation of any term of these Terms of Use.</li>
            <li>
              Your violation of any third-party rights, including without
              limitation any copyright, property, or privacy right.
            </li>
          </UL>

          <H2>10. Modification Notifications</H2>
          <P>
            We reserve the right to update or modify these Terms of Use at
            any time. Changes will be effective immediately upon posting the
            updated terms on our website. If we make significant changes, we
            will notify you by posting the revised terms on our website and
            updating the “Last Updated” date at the top of this page. Your
            continued use of the website or services after such changes
            constitutes your acceptance of the new Terms of Use.
          </P>

          <H2>11. Governing Language</H2>
          <P>
            In the event of any inconsistency between the English version of
            these Terms of Use and any translation into another language, the
            English version shall prevail.
          </P>

          <H2>12. Force Majeure</H2>
          <P>
            Highstack Inc. shall not be liable for any failure to perform its
            obligations under these Terms of Use if such failure results from
            circumstances beyond our reasonable control, including but not
            limited to acts of God, war, natural disasters, or any other force
            majeure event.
          </P>

          <H2>13. Severability</H2>
          <P>
            If any provision of these Terms of Use is found to be
            unenforceable or invalid by a court of competent jurisdiction,
            that provision shall be limited or eliminated to the minimum
            extent necessary so that the remaining provisions remain in full
            force and effect.
          </P>

          <H2>14. Termination</H2>
          <P>
            We reserve the right to terminate or suspend your access to our
            website and services immediately, without prior notice or
            liability, for any reason whatsoever, including without
            limitation if you breach these Terms of Use.
          </P>

          <H2>15. Governing Law</H2>
          <P>
            These Terms of Use are governed by and construed in accordance
            with the laws of the Province of Ontario, Canada, without regard
            to its conflict of law provisions. Any disputes arising from your
            use of the website will be subject to the exclusive jurisdiction
            of the courts in Ontario.
          </P>

          <H2>16. Contact Information</H2>
          <P>
            If you have any questions or concerns about these Terms of Use,
            please contact us at:
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
