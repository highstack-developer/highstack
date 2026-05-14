import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Reach out to Highstack. Tell us what you’re trying to do — we’ll tell you, honestly, whether we can help.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a conversation."
        intro="Whether you have a brief or just a question, the fastest way to start is to write to us. We answer every message — and we answer it ourselves."
      />
      <section className="bg-brand-offwhite py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
