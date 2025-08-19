import Link from 'next/link';
import { posts, projects } from '@/lib/data';
import type { Post, Project } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Facebook } from 'lucide-react';
import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const pinnedPosts = posts.filter(post => post.pinned);

  return (
    <div className="space-y-24">
      {/* Introduction Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
          Xin chào! Chào mừng đến với góc nhỏ của tôi.
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-8">
          Tôi là Phúc Lee, một người đam mê ngôn ngữ, ghi lại hành trình học tiếng Hàn của mình. Đây là khu vườn kỹ thuật số của tôi, nơi tôi chia sẻ ghi chú, khám phá và tài nguyên.
        </p>
        <Button asChild variant="outline">
          <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <Facebook className="mr-2 h-4 w-4" /> Liên hệ qua Facebook
          </a>
        </Button>
      </section>

      {/* Pinned Posts Section */}
      <section>
        <h2 className="text-3xl font-bold font-heading mb-8 text-center md:text-left">Bài viết</h2>
        <div className="flex flex-col">
          {pinnedPosts.map((post: Post, index: number) => (
            <Fragment key={post.slug}>
              <Link 
                href={`/posts/${post.slug}`} 
                className="block py-6 -mx-4 px-4 rounded-lg hover:bg-accent transition-colors duration-200 group"
              >
                <h3 className="text-2xl font-semibold font-heading text-primary group-hover:text-accent-foreground">
                  {post.title}
                </h3>
              </Link>
              {index < pinnedPosts.length - 1 && <Separator />}
            </Fragment>
          ))}
        </div>
        <div className="mt-8 text-center">
            <Button asChild>
                <Link href="/posts">
                    Xem toàn bộ bài viết <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold font-heading mb-8 text-center md:text-left">Dự án</h2>
        <div className="space-y-6">
          {projects.map((project: Project) => (
            <Card key={project.title} className="bg-card hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6">
                <div className="flex items-start gap-4 mb-4 sm:mb-0">
                  {project.icon && <div className="p-3 bg-primary/10 rounded-lg"><project.icon className="h-6 w-6 text-primary" /></div>}
                  <div>
                    <h3 className="text-xl font-bold font-heading">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
                {project.link && (
                  <Button asChild variant="ghost" size="sm" className="text-accent-foreground hover:bg-accent/50 shrink-0 ml-auto sm:ml-0">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Xem dự án <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
