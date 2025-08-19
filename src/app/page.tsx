import Link from 'next/link';
import { posts, projects } from '@/lib/data';
import type { Post, Project } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function Home() {
  const pinnedPosts = posts.filter(post => post.pinned);

  return (
    <div className="space-y-24">
      {/* Introduction Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary mb-4">
          안녕하세요! Welcome to my Corner.
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80">
          I'm Phuc Lee, a language enthusiast documenting my journey of learning Korean. This is my digital garden where I share notes, discoveries, and resources.
        </p>
      </section>

      {/* Pinned Posts Section */}
      <section>
        <h2 className="text-3xl font-bold font-headline mb-8 text-center md:text-left">Pinned Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {pinnedPosts.map((post: Post) => (
            <Card key={post.slug} className="bg-card/50 hover:shadow-xl transition-shadow duration-300 border-transparent">
              <CardHeader>
                <CardTitle className="font-headline">{post.title}</CardTitle>
                <CardDescription className="text-card-foreground/80 pt-2">{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0 text-primary font-semibold hover:text-accent-foreground">
                  <Link href={`/posts/${post.slug}`} className="group inline-flex items-center">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold font-headline mb-8 text-center md:text-left">Projects</h2>
        <div className="space-y-6">
          {projects.map((project: Project) => (
            <Card key={project.title} className="bg-card/50 flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 hover:shadow-xl transition-shadow duration-300 border-transparent">
              <div className="flex items-start gap-4 mb-4 sm:mb-0">
                {project.icon && <div className="p-2 bg-primary/10 rounded-lg"><project.icon className="h-6 w-6 text-primary" /></div>}
                <div>
                  <h3 className="text-xl font-bold font-headline">{project.title}</h3>
                  <p className="text-card-foreground/80">{project.description}</p>
                </div>
              </div>
              {project.link && (
                <Button asChild variant="ghost" size="sm" className="text-accent-foreground hover:bg-accent/50 shrink-0">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
