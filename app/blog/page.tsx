import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { BlogIndex } from '@/components/blog/BlogIndex';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { getAllPosts, getAllTags } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Notes from the Highstack team on strategy, modernization, cloud, and the operating models behind the technology.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <PageHero
        eyebrow="Notes from the team"
        title="Things worth writing down."
        intro="Short, opinionated pieces from the engineers and strategists who do the work. No vendor recaps. No content marketing. Just what we’ve learned."
      />
      <BlogIndex posts={posts} tags={tags} />
      <FinalCTA />
    </>
  );
}
