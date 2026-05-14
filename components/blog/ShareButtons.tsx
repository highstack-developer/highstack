'use client';

type Props = {
  title: string;
  slug: string;
};

export function ShareButtons({ title, slug }: Props) {
  const url = `https://highstack.ca/blog/${slug}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const targets = [
    {
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.06c.53-1 1.83-2.05 3.77-2.05 4.04 0 4.78 2.66 4.78 6.12V21h-4v-5.3c0-1.27-.03-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-3.96V9z" />
        </svg>
      ),
    },
    {
      label: 'Share on X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2H21l-6.51 7.44L22 22h-6.828l-4.78-6.252L4.8 22H2.04l6.96-7.96L2 2h6.914l4.328 5.72L18.244 2zm-1.196 18h1.61L7.04 4H5.32l11.728 16z" />
        </svg>
      ),
    },
  ];

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      /* no-op */
    }
  };

  return (
    <div className="flex items-center gap-2">
      {targets.map((t) => (
        <a
          key={t.label}
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.label}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-ink/5 text-brand-ink hover:bg-brand-ink hover:text-brand-yellow transition-colors"
        >
          {t.icon}
        </a>
      ))}
      <button
        type="button"
        onClick={onCopy}
        aria-label="Copy link"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-ink/5 text-brand-ink hover:bg-brand-ink hover:text-brand-yellow transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M10 14 a4 4 0 0 0 5.66 0 l3.84 -3.84 a4 4 0 0 0 -5.66 -5.66 l-1.42 1.42" />
          <path d="M14 10 a4 4 0 0 0 -5.66 0 l-3.84 3.84 a4 4 0 0 0 5.66 5.66 l1.42 -1.42" />
        </svg>
      </button>
    </div>
  );
}
