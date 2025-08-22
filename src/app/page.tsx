
import Link from 'next/link';
import { projects } from '@/lib/data';
import { getAllPosts } from '@/lib/posts';
import type { Post, Project } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Facebook, Mail } from 'lucide-react';
import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';
import { Education } from '@/components/sections/education';
import { Experience } from '@/components/sections/experience';
import Image from 'next/image';

// Simple Messenger Icon as SVG component
const MessengerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.09-1.38L20.59 22l-1.09-3.26A9.92 9.92 0 0 0 22 12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    <path d="M7.5 11.5l3.5 3.5 5-5-3.5-3.5-5 5z" />
  </svg>
);

// Simple Zalo Icon as SVG component
const ZaloIcon = () => (
    <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        className="h-5 w-5"
    >
        <path d="M16.229 15.242c-.347.05-.732.14-1.15.27-.419.13-.804.229-1.15.289-.92.14-1.69.21-2.31.21-.69 0-1.38-.07-2.07-.21-.69-.14-1.28-.32-1.78-.54-.5-.22-.88-.45-1.15-.7-.27-.25-.4-.51-.4-.79 0-.21.08-.42.23-.64.15-.22.38-.45.68-.7.3-.25.7-.54 1.18-.87.49-.33.98-.63 1.48-.9.5-.27 1.01-.58 1.52-.94.51-.36.9-.76 1.15-1.2.25-.44.38-.9.38-1.37 0-.36-.06-.7-.18-1.02-.12-.32-.29-.6-.51-.82-.22-.22-.48-.4-.79-.51-.3-.12-.64-.18-.99-.18-.55 0-1.07.12-1.54.38-.47.25-.88.59-1.22.99-.34.4-.6.85-.79 1.35s-.28 1.01-.28 1.54h-2.22c0-.8.15-1.54.45-2.22.3-.69.7-1.3 1.22-1.83.51-.53 1.12-.95 1.83-1.27.7-.32 1.48-.48 2.32-.48.84 0 1.6.16 2.29.48.69.32 1.28.74 1.78 1.27.5.53.88 1.14 1.14 1.83.27.68.4 1.43.4 2.22 0 .58-.12 1.14-.35 1.68-.23.54-.56 1.02-.99 1.44s-.93.76-1.51 1.02c-.58.27-1.11.48-1.59.64h.01c.03 0 .06.01.09.01.21 0 .46-.03.75-.08.29-.06.54-.12.75-.19.4-.14.7-.28.9-.44.2-.16.3-.3.3-.41 0-.22-.16-.45-.48-.69-.32-.24-.7-.45-1.15-.63-.45-.18-.8-.3-1.05-.38-.25-.07-.42-.11-.51-.11-.12 0-.24.03-.35.08s-.21.12-.29.2c-.08.08-.12.18-.12.29s.03.2.08.29c.06.08.15.16.29.23.14.07.32.14.54.2.22.06.49.12.8.19.31.07.56.12.75.16.19.04.35.08.48.11.13.03.23.06.29.08.2.06.39.15.54.28.15.13.22.28.22.44 0 .3-.15.56-.44.79-.3.22-.69.4-1.15.51z" />
    </svg>
)

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
                {/* Update the href to your Messenger link */}
                <a href="https://m.me/your-username" target="_blank" rel="noopener noreferrer" aria-label="Messenger">
                  <MessengerIcon />
                </a>
              </Button>
               <Button asChild variant="outline" size="icon">
                {/* Update the href to your Zalo link */}
                <a href="https://zalo.me/your-phone-number" target="_blank" rel="noopener noreferrer" aria-label="Zalo">
                  <ZaloIcon />
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
