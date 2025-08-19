import { notFound } from 'next/navigation';
import { posts } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Không tìm thấy bài viết'
    }
  }

  return {
    title: `${post.title} | TiengHanPhucLee`,
    description: post.description,
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0 text-muted-foreground hover:text-primary">
          <Link href="/posts">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Tất cả bài viết
          </Link>
        </Button>
      </div>
      <article>
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4">{post.title}</h1>
          <p className="text-lg text-muted-foreground">{post.description}</p>
        </header>
        
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mx-auto
                    prose-headings:font-heading prose-headings:text-primary
                    prose-a:text-primary hover:prose-a:text-accent-foreground
                    prose-strong:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>
    </div>
  );
}
