'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PostCard } from './PostCard';
import type { BlogPost } from '@/lib/blog';

const ALL = 'All' as const;

type Props = {
  posts: BlogPost[];
  tags: string[];
};

export function BlogIndex({ posts, tags }: Props) {
  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(
    () => (active === ALL ? posts : posts.filter((p) => p.tags.includes(active))),
    [active, posts],
  );

  const filters = useMemo(() => [ALL, ...tags], [tags]);

  return (
    <section className="bg-brand-offwhite py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          role="tablist"
          aria-label="Filter posts by tag"
          className="flex flex-wrap gap-2"
        >
          {filters.map((tag) => {
            const selected = tag === active;
            return (
              <button
                key={tag}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(tag)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                  selected
                    ? 'bg-brand-ink text-brand-offwhite'
                    : 'bg-white text-brand-ink/80 hover:text-brand-ink'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((post, idx) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.05 } }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-brand-ink/70">
            No posts under this tag yet.
          </p>
        )}
      </div>
    </section>
  );
}
