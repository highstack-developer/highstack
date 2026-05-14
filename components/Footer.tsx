import Link from 'next/link';
import { NeedleIcon } from './ui/NeedleIcon';

const COMPANY_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
];

const SERVICE_LINKS = [
  { href: '/services#strategy', label: 'Technology Strategy' },
  { href: '/services#software', label: 'Software Development' },
  { href: '/services#cloud', label: 'Cloud Solutions' },
  { href: '/services#data', label: 'Data & Analytics' },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-ink text-brand-offwhite mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2">
            <NeedleIcon orientation="vertical" size={32} inkColor="#F5F4F0" />
            <span className="font-bold tracking-tight text-lg">HIGHSTACK</span>
          </Link>
          <p className="mt-4 text-sm text-brand-offwhite/70 max-w-xs">
            Technology consulting that accelerates client goals through innovation,
            simplicity, and deep collaboration.
          </p>
        </div>

        <div>
          <h4 className="text-label uppercase text-brand-yellow mb-4">Company</h4>
          <ul className="space-y-2">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-offwhite/80 hover:text-brand-yellow transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-label uppercase text-brand-yellow mb-4">Services</h4>
          <ul className="space-y-2">
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-brand-offwhite/80 hover:text-brand-yellow transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-label uppercase text-brand-yellow mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-brand-offwhite/80">
            <li>
              <a
                href="mailto:info@highstack.ca"
                className="hover:text-brand-yellow transition-colors"
              >
                info@highstack.ca
              </a>
            </li>
            <li>Canada</li>
            <li>
              <Link
                href="/contact"
                className="inline-block mt-2 text-brand-yellow font-semibold hover:underline"
              >
                Start a conversation →
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-offwhite/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-brand-offwhite/75">
          <p>Copyright © {year} Highstack Inc. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-brand-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-brand-yellow transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
