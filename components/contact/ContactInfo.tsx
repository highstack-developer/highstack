import { Eyebrow } from '@/components/ui/Eyebrow';

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7 L12 13 L21 7" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22 s-7 -7 -7 -12 a7 7 0 1 1 14 0 c0 5 -7 12 -7 12 z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.06c.53-1 1.83-2.05 3.77-2.05 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.3c0-1.27-.03-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-3.96V9z" />
    </svg>
  );
}

export function ContactInfo() {
  return (
    <div>
      <Eyebrow>Let’s talk</Eyebrow>
      <h2 className="mt-3 text-h1 text-brand-ink">
        Tell us about the problem.
      </h2>
      <p className="mt-5 text-body text-brand-ink/75 leading-relaxed">
        The faster we can have a real conversation about what you’re trying to
        do, the faster we can tell you — honestly — whether we’re a fit. There
        is no wrong way to start.
      </p>

      <ul className="mt-10 space-y-4">
        <li className="flex items-start gap-4">
          <span className="shrink-0 w-10 h-10 flex items-center justify-center bg-brand-yellow/15 rounded-md text-brand-ink">
            <MailIcon />
          </span>
          <div>
            <div className="text-label uppercase text-brand-ink/60">Email</div>
            <a
              href="mailto:info@highstack.ca"
              className="text-sm font-semibold text-brand-ink hover:text-brand-yellow transition-colors"
            >
              info@highstack.ca
            </a>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className="shrink-0 w-10 h-10 flex items-center justify-center bg-brand-yellow/15 rounded-md text-brand-ink">
            <LocationIcon />
          </span>
          <div>
            <div className="text-label uppercase text-brand-ink/60">Location</div>
            <div className="text-sm font-semibold text-brand-ink">
              Canada · serving North America
            </div>
          </div>
        </li>
      </ul>

      <div className="mt-10 pt-6 border-t border-brand-ink/10">
        <div className="text-label uppercase text-brand-ink/60 mb-3">
          Follow along
        </div>
        <a
          href="https://linkedin.com/company/highstack"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Highstack on LinkedIn"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-ink/5 text-brand-ink hover:bg-brand-ink hover:text-brand-yellow transition-colors"
        >
          <LinkedInIcon />
        </a>
      </div>

      <p className="mt-10 text-xs text-brand-ink/60">
        We typically respond within one business day.
      </p>
    </div>
  );
}
