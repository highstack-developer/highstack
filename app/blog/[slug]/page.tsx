import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Reveal } from '@/components/ui/Reveal';
import { mdxComponents } from '@/components/blog/MdxComponents';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { PostCard, formatDate } from '@/components/blog/PostCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `/blog/${post.slug}`,
      authors: [post.author],
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default function BlogPost({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  return (
    <>
      <section className="bg-brand-ink text-brand-offwhite -mt-16 pt-16">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-brand-offwhite/70 hover:text-brand-yellow transition-colors"
          >
            <span aria-hidden>←</span> Back to Blog
          </Link>
        </div>
      </section>

      <section
        aria-hidden
        className="h-[260px] md:h-[380px] w-full"
        style={{ backgroundColor: post.coverColor }}
      />

      <section className="bg-white pt-12 md:pt-16">
        <article className="mx-auto max-w-3xl px-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-label uppercase text-brand-ink/70"
              >
                {t}
              </span>
            ))}
          </div>

          <Reveal>
            <h1 className="text-display text-brand-ink leading-[1.1]">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 text-body text-brand-ink/75 italic">
              {post.excerpt}
            </p>
          </Reveal>

          <div className="mt-8 flex items-center justify-between border-y border-brand-ink/10 py-5">
            <div className="flex items-center gap-3">
              <div
                aria-hidden
                className="w-10 h-10 rounded-full bg-brand-ink text-brand-yellow flex items-center justify-center text-sm font-bold"
              >
                {post.authorInitials}
              </div>
              <div className="text-sm">
                <div className="font-semibold text-brand-ink">
                  {post.author}
                </div>
                <div className="text-brand-ink/70 text-xs">
                  {formatDate(post.date)} · {post.readingMinutes} min read
                </div>
              </div>
            </div>
            <ShareButtons title={post.title} slug={post.slug} />
          </div>

          <div className="mt-2">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          <div className="mt-12 pt-8 border-t border-brand-ink/10 flex items-center justify-between">
            <Link
              href="/blog"
              className="text-sm font-semibold text-brand-ink hover:text-brand-yellow transition-colors inline-flex items-center gap-2"
            >
              <span aria-hidden>←</span> All posts
            </Link>
            <ShareButtons title={post.title} slug={post.slug} />
          </div>
        </article>
      </section>

      {related.length > 0 && (
        <section className="bg-brand-offwhite py-20 mt-16">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-h1 text-brand-ink">Keep reading</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((r, idx) => (
                <Reveal key={r.slug} delay={idx * 0.08}>
                  <PostCard post={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
