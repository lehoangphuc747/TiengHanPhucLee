import Link from 'next/link';
import { posts } from '@/lib/data';
import type { Post } from '@/lib/types';
import type { Metadata } from 'next';
import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Tất cả bài viết | TiengHanPhucLee',
  description: 'Tuyển tập tất cả các bài viết và ghi chú về việc học tiếng Hàn.',
};

export default function AllPostsPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
          Tất cả bài viết
        </h1>
        <p className="text-lg text-muted-foreground">
          Tuyển tập đầy đủ tất cả các bài viết và ghi chú của tôi.
        </p>
      </section>

      <section>
        <div className="flex flex-col">
          {posts.map((post: Post, index: number) => (
            <Fragment key={post.slug}>
              <Link 
                href={`/posts/${post.slug}`} 
                className="block py-6 -mx-4 px-4 rounded-lg hover:bg-accent transition-colors duration-200 group"
              >
                <h2 className="text-2xl font-semibold font-heading text-primary group-hover:text-accent-foreground">
                  {post.title}
                </h2>
              </Link>
              {index < posts.length - 1 && <Separator />}
            </Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}
