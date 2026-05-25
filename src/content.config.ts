import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/portfolio" }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    sector: z.string(),
    oneLine: z.string(),
    summary: z.string().optional(),
    url: z.string().url().optional(),
    status: z.enum(["live", "coming-soon", "wip"]).default("wip"),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default("Highstack"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { portfolio, notes };
