
"use client";

import { useState, useMemo, Fragment } from 'react';
import Link from 'next/link';
import type { Post } from '@/lib/types';
import { Separator } from '@/components/ui/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface PostListProps {
  posts: Post[];
}

type SortOption = 'date-desc' | 'date-asc' | 'title-asc' | 'title-desc';

const sortOptions: { label: string; value: SortOption }[] = [
  { label: 'Mới nhất', value: 'date-desc' },
  { label: 'Cũ nhất', value: 'date-asc' },
  { label: 'Tiêu đề (A-Z)', value: 'title-asc' },
  { label: 'Tiêu đề (Z-A)', value: 'title-desc' },
];

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

  const handleSortChange = (value: SortOption) => {
    if (value) { // ToggleGroup allows deselecting all, this prevents that
      setSortOption(value);
    }
  };

  return (
    <section>
      <div className="flex flex-wrap items-center justify-start gap-2 mb-6">
        <span className="text-sm text-muted-foreground mr-2">Sắp xếp theo:</span>
        <ToggleGroup
          type="single"
          value={sortOption}
          onValueChange={handleSortChange}
          aria-label="Sắp xếp bài viết"
          className="flex-wrap justify-start"
        >
          {sortOptions.map(option => (
            <ToggleGroupItem 
              key={option.value} 
              value={option.value} 
              aria-label={option.label}
              className="text-xs md:text-sm"
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
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
