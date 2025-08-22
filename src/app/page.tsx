
import Link from 'next/link';
import { projects } from '@/lib/data';
import { getAllPosts } from '@/lib/posts';
import type { Post, Project } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Facebook, Mail, Twitter } from 'lucide-react';
import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import { Education } from '@/components/sections/education';
import { Experience } from '@/components/sections/experience';
import Image from 'next/image';

export default async function Home() {
  const posts = await getAllPosts();
  const pinnedPosts = posts.filter(post => post.pinned);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-primary leading-tight text-balance">
              Phúc Lee
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-primary/80">
              Korean Learner & Content Creator
            </p>
            <p className="max-w-xl mt-4 text-base sm:text-lg text-foreground/80 mx-auto md:mx-0">
              Mình là Phúc Lee, một người đam mê ngôn ngữ, ghi lại hành trình học tiếng Hàn của mình. Đây là khu vườn kỹ thuật số của mình, nơi mình chia sẻ ghi chú, khám phá và tài nguyên.
            </p>
            <div className="mt-6 flex justify-center md:justify-start items-center gap-2">
              <Button asChild variant="outline" size="icon">
                <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="mailto:your-email@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
             <div className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 rounded-full overflow-hidden shadow-lg border-4 border-card">
                 <Image
                    src="https://placehold.co/400x400.png"
                    alt="Phuc Lee"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint="portrait man"
                />
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Pinned Posts Section */}
      <section>
        <h2 className="text-3xl font-bold font-heading mb-8 text-center">Bài viết nổi bật</h2>
        <div className="flex flex-col items-center space-y-4">
          {pinnedPosts.map((post: Post) => (
            <Link 
              key={post.slug}
              href={`/bai-viet/${post.slug}`} 
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
            <Link href="/bai-viet">
              Tất cả bài viết <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Projects Section */}
      <section>
        <h2 className="text-3xl font-bold font-heading mb-8 text-center">Dự án</h2>
        <div className="max-w-xl mx-auto space-y-6">
          {projects.map((project: Project) => (
            <a 
              key={project.slug} 
              href={project.link || `/projects/${project.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-4 -mx-4 px-4 rounded-lg hover:bg-accent transition-colors duration-200 group"
            >
              <div className="flex items-center gap-4">
                {project.icon && <project.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />}
                <span className="text-lg font-medium text-primary group-hover:text-accent-foreground">{project.title}</span>
              </div>
              <span className="text-muted-foreground group-hover:text-accent-foreground">{project.description}</span>
            </a>
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
