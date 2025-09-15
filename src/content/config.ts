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
    // Series: chuỗi/series chính (ví dụ tên sách)
    series: z.string().optional().refine((val) => !val || approvedSeries.includes(val), {
      message: 'Series không hợp lệ. Hãy khai báo series trong src/content/series.json trước khi sử dụng.',
    }),
    // Sub-tags: các phần nhỏ trong series (ví dụ Chương 1, Chương 2)
    subTags: z.array(z.string()).optional()
      .max(10, { message: 'Tối đa 10 sub-tags cho mỗi bài viết.' })
      .refine((arr) => !arr || arr.every((t) => approvedSubTags.includes(t)), {
        message: 'Sub-tag không hợp lệ. Hãy khai báo trong src/content/subtags.json trước khi sử dụng.',
      }),
  }),
});

export const collections = {
  blog,
};
