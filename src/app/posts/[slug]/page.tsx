import { notFound } from 'next/navigation';
import { posts } from '@/lib/data';
import type { Metadata } from 'next';

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
    <article className="max-w-3xl mx-auto py-8">
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
  );
}