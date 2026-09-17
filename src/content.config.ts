import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    category: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    year: z.string().optional(),
    technologies: z.array(z.string()),
    metrics: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
  }),
});

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/articles",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  projects,
  articles,
};