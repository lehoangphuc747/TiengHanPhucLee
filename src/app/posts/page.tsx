import Link from 'next/link';
import { posts } from '@/lib/data';
import type { Post } from '@/lib/types';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts | TiengHanPhucLee',
  description: 'A collection of all articles and notes on learning Korean.',
};

export default function AllPostsPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-left">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
          All Posts
        </h1>
        <p className="text-lg text-foreground/80">
          A full collection of all my articles and notes.
        </p>
      </section>

      <section>
        <div className="space-y-4">
          {posts.map((post: Post) => (
             <Card key={post.slug} className="bg-card/50 hover:shadow-lg transition-shadow duration-300 border-transparent">
                <Link href={`/posts/${post.slug}`} className="block group p-2">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                            <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                        </div>
                    </CardHeader>
                </Link>
             </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
