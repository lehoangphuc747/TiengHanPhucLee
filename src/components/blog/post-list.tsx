
"use client";

import { useState, useMemo, Fragment } from 'react';
import Link from 'next/link';
import type { Post } from '@/lib/types';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp } from 'lucide-react';

interface PostListProps {
  posts: Post[];
}

type SortKey = 'date' | 'title';
type SortDirection = 'asc' | 'desc';

export function PostList({ posts }: PostListProps) {
  const [sortKey, setSortKey] = useState<SortKey>('date');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

  const sortedPosts = useMemo(() => {
    const sorted = [...posts];
    sorted.sort((a, b) => {
      if (sortKey === 'date') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      }
      if (sortKey === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });

    if (sortDirection === 'desc') {
      sorted.reverse();
    }

    return sorted;
  }, [posts, sortKey, sortDirection]);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection(key === 'date' ? 'desc' : 'asc');
    }
  };

  const getButtonLabel = (key: SortKey) => {
    if (key === 'date') {
      return sortDirection === 'desc' ? 'Mới nhất' : 'Cũ nhất';
    }
    if (key === 'title') {
      return sortDirection === 'asc' ? 'Tiêu đề (A-Z)' : 'Tiêu đề (Z-A)';
    }
    return '';
  };

  const SortIcon = ({ for_key }: {for_key: SortKey}) => {
    if (sortKey !== for_key) return null;
    return sortDirection === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
  }

  return (
    <section>
      <div className="flex flex-wrap items-center justify-start gap-2 mb-6">
        <div className="flex flex-wrap justify-start gap-2">
           <Button 
            variant={sortKey === 'date' ? 'default' : 'outline'}
            onClick={() => handleSort('date')}
            className="text-xs md:text-sm"
          >
            {getButtonLabel('date')}
            <SortIcon for_key='date' />
          </Button>
          <Button 
            variant={sortKey === 'title' ? 'default' : 'outline'}
            onClick={() => handleSort('title')}
            className="text-xs md:text-sm"
          >
            {getButtonLabel('title')}
            <SortIcon for_key='title' />
          </Button>
        </div>
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
