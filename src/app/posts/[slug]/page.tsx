import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ShareButtons } from '@/components/blog/share-buttons';
import { YoutubePlayer } from '@/components/blog/youtube-player';

// Helper function to extract YouTube video ID from URL
function getYoutubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPostData(slug: string) {
  const posts = await getAllPosts();
  const postIndex = posts.findIndex((p) => p.slug === slug);

  if (postIndex === -1) {
    return {
      post: null,
      prevPost: null,
      nextPost: null,
    };
  }

  const post = await getPostBySlug(slug);
  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

  return { post, prevPost, nextPost };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { post } = await getPostData(params.slug);

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

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { post, prevPost, nextPost } = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  // Regex to find standalone YouTube links in the content
  const youtubeLinkRegex = /(?:<p>)?(https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+)(?:<\/p>)?/g;
  const videoIds: string[] = [];
  
  // Replace youtube links with placeholders
  const contentWithPlaceholders = post.content.replace(youtubeLinkRegex, (match, url) => {
    const videoId = getYoutubeVideoId(url);
    if (videoId) {
        videoIds.push(videoId);
        return `<div id="youtube-player-${videoId}"></div>`;
    }
    return match;
  });

  // Split content by placeholders
  const contentParts = contentWithPlaceholders.split(/<div id="youtube-player-[\w-]+"><\/div>/);

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
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4 leading-relaxed md:leading-snug text-balance">{post.title}</h1>
          <p className="text-lg text-muted-foreground">{post.description}</p>
        </header>
        
        <div 
          className="prose prose-lg dark:prose-invert max-w-none mx-auto
                    prose-headings:font-heading prose-headings:text-primary
                    prose-a:text-primary hover:prose-a:text-accent-foreground
                    prose-strong:font-semibold text-justify"
        >
          {contentParts.map((part, index) => (
            <div key={index}>
              <div dangerouslySetInnerHTML={{ __html: part }} />
              {index < videoIds.length && (
                <div className="not-prose my-6">
                  <YoutubePlayer videoId={videoIds[index]} />
                </div>
              )}
            </div>
          ))}
        </div>
      </article>

      <ShareButtons post={post} />

      <footer className="mt-8 pt-8">
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
