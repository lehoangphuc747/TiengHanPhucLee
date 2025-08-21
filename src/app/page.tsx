import Link from 'next/link';
import { projects } from '@/lib/data';
import { getAllPosts } from '@/lib/posts';
import type { Post, Project } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Facebook } from 'lucide-react';
import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import { Education } from '@/components/sections/education';
import { Experience } from '@/components/sections/experience';

export default async function Home() {
  const posts = await getAllPosts();
  const pinnedPosts = posts.filter(post => post.pinned);

  return (
    <div className="space-y-12">
      {/* Introduction Section */}
      <section className="text-center pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
          Annyeong~~
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-8">
          Tớ là Phúc Lee, một người đam mê ngôn ngữ, ghi lại hành trình học tiếng Hàn của mình. Đây là khu vườn kỹ thuật số của tớ, nơi tớ chia sẻ ghi chú, khám phá và tài nguyên.
        </p>
        <Button asChild variant="outline">
          <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <Facebook className="mr-2 h-4 w-4" /> Facebook
          </a>
        </Button>
      </section>

      <Separator className="my-12" />

      {/* Pinned Posts Section */}
      <section>
        <h2 className="text-3xl font-bold font-heading mb-8 text-center">Bài viết nổi bật</h2>
        <div className="flex flex-col items-center space-y-4">
          {pinnedPosts.map((post: Post) => (
            <Link 
              key={post.slug}
              href={`/posts/${post.slug}`} 
              className="block py-4 w-full max-w-2xl rounded-lg hover:bg-accent transition-colors duration-200 group text-center"
            >
              <h3 className="text-2xl font-normal font-heading text-primary group-hover:text-accent-foreground">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" className="bg-white text-black border-black hover:bg-gray-200">
            <Link href="/posts">
              Tất cả bài viết <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold font-heading mb-8 text-center">Dự án</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project: Project) => (
            <Card key={project.slug} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  {project.icon && <project.icon className="h-6 w-6 text-muted-foreground" />}
                  <span>{project.title}</span>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Future content can go here */}
              </CardContent>
              <CardFooter>
                 <Button asChild variant="link" className="p-0 h-auto">
                   <Link href={project.link || `/projects/${project.slug}`} target="_blank" rel="noopener noreferrer">
                    Xem dự án <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                 </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Education Section */}
      <Education />

      <Separator className="my-12" />

      {/* Work Experience Section */}
      <Experience />
    </div>
  );
}
