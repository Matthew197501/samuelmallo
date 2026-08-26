import { z } from "zod";

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  problem: z.string().optional(),
  solution: z.string().optional(),
  role: z.string().optional(),
  technologies: z.array(z.string()),
  technicalImplementation: z.string().optional(),
  results: z.string().optional(),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  relatedArticles: z.array(z.string()).optional(),
  publishDate: z.date().optional(),
  coverImage: z.string().optional(),
  draft: z.boolean().default(false),
});

export type Project = z.infer<typeof ProjectSchema>;