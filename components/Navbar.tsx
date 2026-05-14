'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NeedleIcon } from './ui/NeedleIcon';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/blog', label: 'Blog' },
  { href: '/team', label: 'Team' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-brand-offwhite/85 backdrop-blur-md border-b border-brand-ink/10'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between"
      >
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Highstack — Home"
        >
          <NeedleIcon orientation="vertical" size={32} />
          <span className="font-bold tracking-tight text-brand-ink text-lg">
            HIGHSTACK
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(link.href)
                    ? 'text-brand-ink font-semibold'
                    : 'text-brand-ink/70 hover:text-brand-ink'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-4 py-2 bg-brand-ink text-brand-offwhite text-sm font-semibold rounded-none hover:bg-brand-ink/90 transition-colors"
        >
          Get in Touch
        </Link>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-brand-ink"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="md:hidden bg-brand-offwhite border-b border-brand-ink/10"
          >
            <ul className="px-6 py-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 text-base ${
                      isActive(link.href)
                        ? 'text-brand-ink font-semibold'
                        : 'text-brand-ink/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 bg-brand-ink text-brand-offwhite text-sm font-semibold rounded-none"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
