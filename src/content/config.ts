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
    // Tags: chỉ cho phép các tag nằm trong danh sách chuẩn và tối đa 4 tag/bài
    tags: z.array(z.string())
      .max(4, { message: 'Tối đa 4 tags cho mỗi bài viết.' })
      .refine((arr) => arr.every((t) => approvedTags.includes(t)), {
        message: 'Tag không hợp lệ. Hãy khai báo tag trong src/content/tags.json trước khi sử dụng.',
      }),
    readingTime: z.number(),
    featured: z.boolean().optional().default(false),
    author: z.string().optional().default('Phúc Lee'),
    source: z.string().optional(),
    sourceTitle: z.string().optional(),
    videoUrl: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
