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
      title: 'Post Not Found'
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
        <h1 className="text-3xl md:text-5xl font-bold font-headline text-primary mb-4">{post.title}</h1>
        <p className="text-lg text-muted-foreground">{post.description}</p>
      </header>
      
      <div 
        className="space-y-6 text-lg leading-relaxed text-foreground/90
                  [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:font-headline [&_h3]:text-primary [&_h3]:mt-10 [&_h3]:mb-4
                  [&_p]:mb-4
                  [&_strong]:font-semibold [&_strong]:text-foreground
                  [&_a]:text-primary [&_a]:underline hover:[&_a]:text-accent-foreground
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
                  [&_li]:mb-1
                  "
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
  );
}
