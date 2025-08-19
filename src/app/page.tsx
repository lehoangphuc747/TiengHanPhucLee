import Link from 'next/link';
import { posts, projects } from '@/lib/data';
import type { Post, Project } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Facebook } from 'lucide-react';
import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import { Education } from '@/components/sections/education';
import { Experience } from '@/components/sections/experience';

export default function Home() {
  const pinnedPosts = posts.filter(post => post.pinned);

  return (
    <div className="space-y-12">
      {/* Introduction Section */}
      <section className="text-center pt-16 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
          Annyeong~~
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

      <Separator className="my-12" />

      {/* Pinned Posts Section */}
      <section>
        <h2 className="text-3xl font-bold font-heading mb-8 text-center">Bài viết</h2>
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
              Đọc thêm <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold font-heading mb-8 text-center">Dự án</h2>
        <div className="flex flex-col items-center space-y-4">
          {projects.map((project: Project) => (
            <Link
              key={project.slug}
              href={project.link || `/projects/${project.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-4 w-full max-w-2xl rounded-lg hover:bg-accent transition-colors duration-200 group text-center"
            >
              <div className="flex justify-center items-baseline gap-4">
                <h3 className="text-xl font-medium font-heading text-primary group-hover:text-accent-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </Link>
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
