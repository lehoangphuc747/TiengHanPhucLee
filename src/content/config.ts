// Cấu hình content collections cho blog
import { defineCollection, z } from 'astro:content';

// Định nghĩa schema cho blog posts
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    readingTime: z.number(),
    featured: z.boolean().optional().default(false),
    author: z.string().optional().default('Phúc Lee'),
  }),
});

export const collections = {
  blog,
};
