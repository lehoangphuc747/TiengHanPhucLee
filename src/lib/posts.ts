import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Post } from './types';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'posts');

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    const slug = matterResult.data.slug || fileName.replace(/\.md$/, '');


    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      tags: matterResult.data.tags || [],
      pinned: matterResult.data.pinned || false,
      content: contentHtml,
      markdownContent: matterResult.content,
    } as Post;
  }));

  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const allPosts = await getAllPosts();
        const post = allPosts.find(p => p.slug === slug);
    
        if (post) {
          return post;
        }

        // Fallback for old slugs from file names if needed
        const fullPath = path.join(postsDirectory, `${slug}.md`);
        if (fs.existsSync(fullPath)) {
            const fileContents = fs.readFileSync(fullPath, 'utf8');
        
            const matterResult = matter(fileContents);
        
            const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
            const contentHtml = processedContent.toString();
        
            return {
                slug,
                title: matterResult.data.title,
                description: matterResult.data.description,
                date: matterResult.data.date,
                tags: matterResult.data.tags || [],
                pinned: matterResult.data.pinned || false,
                content: contentHtml,
                markdownContent: matterResult.content,
            };
        }
        
        return null;
    } catch (error) {
        console.error(`Error reading post with slug ${slug}:`, error);
        return null;
    }
}
