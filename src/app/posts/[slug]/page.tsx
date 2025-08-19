import { notFound } from 'next/navigation';
import { posts } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

function getPostData(slug: string) {
  const postIndex = posts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    return {
      post: null,
      prevPost: null,
      nextPost: null,
    };
  }

  const post = posts[postIndex];
  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

  return { post, prevPost, nextPost };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { post } = getPostData(params.slug)

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
  const { post, prevPost, nextPost } = getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <Button asChild variant="outline">
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

      <footer className="mt-16 pt-8 border-t">
        <div className="flex justify-between items-center">
          {prevPost ? (
            <Button asChild variant="outline">
              <Link href={`/posts/${prevPost.slug}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Bài trước
              </Link>
            </Button>
          ) : <div />}
          {nextPost ? (
            <Button asChild variant="outline">
              <Link href={`/posts/${nextPost.slug}`}>
                Bài tiếp theo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ) : <div />}
        </div>
      </footer>
    </div>
  );
}
