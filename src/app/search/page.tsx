import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';
import { SearchPosts } from '@/components/blog/SearchPosts';

export const metadata: Metadata = {
  title: 'Tìm kiếm bài viết | TiengHanPhucLee',
  description: 'Tìm kiếm trong tất cả các bài viết và ghi chú về việc học tiếng Hàn.',
};

export default async function SearchPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
          Tìm kiếm bài viết
        </h1>
        <p className="text-lg text-muted-foreground">
          Gõ vào ô dưới đây để tìm kiếm bài viết theo tiêu đề hoặc mô tả.
        </p>
      </section>

      <SearchPosts posts={posts} />
    </div>
  );
}
