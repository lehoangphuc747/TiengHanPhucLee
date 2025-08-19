import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Không tìm thấy dự án'
    }
  }

  return {
    title: `${project.title} | TiengHanPhucLee`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0 text-muted-foreground hover:text-primary">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Trở về trang chủ
          </Link>
        </Button>
      </div>
      <article>
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-heading text-primary mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </header>
        
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mx-auto
                    prose-headings:font-heading prose-headings:text-primary
                    prose-a:text-primary hover:prose-a:text-accent-foreground
                    prose-strong:font-semibold"
          dangerouslySetInnerHTML={{ __html: project.content }} 
        />
      </article>
    </div>
  );
}
