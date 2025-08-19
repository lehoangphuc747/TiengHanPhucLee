import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';
import { PostList } from '@/components/blog/post-list';

export const metadata: Metadata = {
  title: 'Tất cả bài viết | TiengHanPhucLee',
  description: 'Tuyển tập tất cả các bài viết và ghi chú về việc học tiếng Hàn.',
};

export default async function AllPostsPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
          Tất cả bài viết
        </h1>
        <p className="text-lg text-muted-foreground">
          Tuyển tập đầy đủ tất cả các bài viết và ghi chú của tớ.
        </p>
      </section>

      <PostList posts={posts} />
    </div>
  );
}
