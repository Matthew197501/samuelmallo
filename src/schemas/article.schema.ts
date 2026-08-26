import { z } from "zod";

export const ArticleSchema = z.object({
  title: z.string(),
  slug: z.string(),
  author: z.string().default("Samuel Mallo"),
  publishDate: z.date(),
  modifiedDate: z.date().optional(),
  description: z.string(),
  category: z.string(),
  canonicalURL: z.string().url().optional(),
  coverImage: z.string().optional(),
  draft: z.boolean().default(false),
});

export type Article = z.infer<typeof ArticleSchema>;