import type { MDXComponents } from 'mdx/types';
import type { HTMLAttributes, AnchorHTMLAttributes } from 'react';

export const mdxComponents: MDXComponents = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-12 mb-4 text-h1 text-brand-ink scroll-mt-24"
      {...props}
    />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 mb-3 text-h2 text-brand-ink scroll-mt-24"
      {...props}
    />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-body text-brand-ink/80 leading-relaxed my-5" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 my-5 space-y-2 text-brand-ink/80" {...props} />
  ),
  ol: (props: HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 my-5 space-y-2 text-brand-ink/80" {...props} />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="my-6 border-l-4 border-brand-yellow pl-6 italic text-brand-ink/85"
      {...props}
    />
  ),
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-brand-ink underline decoration-brand-yellow decoration-2 underline-offset-4 hover:text-brand-yellow transition-colors"
      {...props}
    />
  ),
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-brand-offwhite text-brand-ink rounded px-1.5 py-0.5 text-[0.92em] font-mono"
      {...props}
    />
  ),
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-6 bg-brand-ink text-brand-offwhite rounded-xl p-5 overflow-x-auto text-sm leading-relaxed font-mono"
      {...props}
    />
  ),
  hr: () => <hr className="my-10 border-t border-brand-ink/10" />,
  strong: (props: HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-brand-ink" {...props} />
  ),
};
