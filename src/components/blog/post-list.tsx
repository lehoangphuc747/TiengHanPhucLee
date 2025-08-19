
"use client";

import { useState, useMemo, Fragment } from 'react';
import Link from 'next/link';
import type { Post } from '@/lib/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

interface PostListProps {
  posts: Post[];
}

type SortOption = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc';

export function PostList({ posts }: PostListProps) {
  const [sortOption, setSortOption] = useState<SortOption>('date-desc');

  const sortedPosts = useMemo(() => {
    const sorted = [...posts];
    switch (sortOption) {
      case 'date-asc':
        return sorted.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      case 'title-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'title-desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case 'date-desc':
      default:
        return sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }
  }, [posts, sortOption]);

  return (
    <section>
      <div className="flex justify-end mb-6">
        <Select value={sortOption} onValueChange={(value: SortOption) => setSortOption(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sắp xếp theo..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date-desc">Mới nhất</SelectItem>
            <SelectItem value="date-asc">Cũ nhất</SelectItem>
            <SelectItem value="title-asc">Tiêu đề (A-Z)</SelectItem>
            <SelectItem value="title-desc">Tiêu đề (Z-A)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col">
        {sortedPosts.map((post: Post, index: number) => (
          <Fragment key={post.slug}>
            <Link 
              href={`/posts/${post.slug}`} 
              className="block py-6 -mx-4 px-4 rounded-lg hover:bg-accent transition-colors duration-200 group"
            >
              <h2 className="text-2xl font-medium font-heading text-primary group-hover:text-accent-foreground leading-relaxed">
                {post.title}
              </h2>
            </Link>
            {index < sortedPosts.length - 1 && <Separator />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
