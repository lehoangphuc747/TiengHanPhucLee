// Cấu hình content collections cho blog
import { defineCollection, z } from 'astro:content';
import approvedTags from './tags.json';
import approvedSeries from './series.json';
import approvedSubTags from './subtags.json';

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
    readingTime: z.number(),
    featured: z.boolean().optional().default(false),
    author: z.string().optional().default('Phúc Lee'),
    source: z.string().optional(),
    sourceTitle: z.string().optional(),
    videoUrl: z.string().optional(),
    // Series: tùy chọn, không ép theo danh sách để tránh loại bài
    series: z.string().optional(),
    // Sub-tags: tùy chọn, không ép theo danh sách để tránh loại bài
    subTags: z.array(z.string()).optional().max(20).default([]),
  }),
});

export const collections = {
  blog,
};
