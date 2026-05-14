import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type BlogFrontmatter = {
  title: string;
  date: string;
  author: string;
  authorInitials: string;
  excerpt: string;
  tags: string[];
  coverColor: string;
  readingMinutes: number;
};

export type BlogPost = BlogFrontmatter & {
  slug: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function listSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

function readPost(slug: string): BlogPost {
  const filepath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filepath, 'utf8');
  const { data, content } = matter(raw);
  return {
    slug,
    content,
    ...(data as BlogFrontmatter),
  };
}

export function getAllPosts(): BlogPost[] {
  return listSlugs()
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const slugs = listSlugs();
  if (!slugs.includes(slug)) return undefined;
  return readPost(slug);
}

export function getAllTags(): string[] {
  const set = new Set<string>();
  getAllPosts().forEach((p) => p.tags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}
