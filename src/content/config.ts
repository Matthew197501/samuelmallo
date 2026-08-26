import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
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
  }),
});

const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string().default("Samuel Mallo"),
    publishDate: z.date(),
    modifiedDate: z.date().optional(),
    description: z.string(),
    category: z.string(),
    featured: z.boolean().default(false),
    canonicalURL: z.string().url().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const accomplishments = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date().optional(),
    issuer: z.string(),
    category: z.enum([
      "Recognition",
      "Award",
      "Competition",
      "Certification",
      "National Certificate",
      "Professional Recognition",
    ]),
    featured: z.boolean().default(false),
    credentialUrl: z.string().url().optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  articles,
  accomplishments,
};