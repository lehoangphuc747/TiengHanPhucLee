import Link from 'next/link';
import { posts } from '@/lib/data';
import type { Post } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

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
        <div className="space-y-4">
          {posts.map((post: Post) => (
             <Card key={post.slug} className="bg-card hover:border-primary/50 transition-all duration-300">
                <Link href={`/posts/${post.slug}`} className="block group p-4">
                    <div className="flex justify-between items-center">
                        <div>
                            <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                            <CardDescription className="text-muted-foreground mt-2">{post.description}</CardDescription>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform transform-gpu group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                </Link>
             </Card>
          ))}
        </div>
      </section>
    </div>
  );
}