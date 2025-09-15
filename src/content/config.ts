// Cấu hình content collections cho blog
import { defineCollection, z } from 'astro:content';
import approvedTags from './tags.json';

// Định nghĩa schema cho blog posts
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    category: z.string(),
    // Tags: nới lỏng để không loại bài viết; quản lý hiển thị bằng TagFilter
    tags: z.array(z.string())
      .max(8, { message: 'Tối đa 8 tags cho mỗi bài viết.' })
      .optional()
      .default([]),
    readingTime: z.number().optional().default(5),
    featured: z.boolean().optional().default(false),
    author: z.string().optional().default('Phúc Lee'),
    source: z.string().optional(),
    sourceTitle: z.string().optional(),
    videoUrl: z.string().optional(),
    // Sub-tags: đã loại bỏ cơ chế sub-tag
  }),
});

export const collections = {
  blog,
};
