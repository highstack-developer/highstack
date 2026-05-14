import Link from 'next/link';
import type { BlogPost } from '@/lib/blog';

type Props = {
  post: BlogPost;
};

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function PostCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full bg-white rounded-xl overflow-hidden transition-shadow hover:shadow-xl"
    >
      <div
        aria-hidden
        className="aspect-[16/9] w-full"
        style={{ backgroundColor: post.coverColor }}
      />
      <div className="p-7">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-label uppercase text-brand-ink/60"
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="text-h2 text-brand-ink group-hover:text-brand-ink/80 transition-colors">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-brand-ink/75 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-5 flex items-center gap-3 text-xs text-brand-ink/60">
          <span className="font-semibold text-brand-ink">{post.author}</span>
          <span aria-hidden>·</span>
          <span>{formatDate(post.date)}</span>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
      </div>
    </Link>
  );
}
