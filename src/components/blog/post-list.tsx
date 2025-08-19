
"use client";

import { useState, useMemo, Fragment } from 'react';
import Link from 'next/link';
import type { Post } from '@/lib/types';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp, Pin } from 'lucide-react';

interface PostListProps {
  posts: Post[];
}

type SortKey = 'date' | 'title';
type SortDirection = 'asc' | 'desc';

export function PostList({ posts }: PostListProps) {
  const [activeSortKey, setActiveSortKey] = useState<SortKey>('date');
  const [sortConfig, setSortConfig] = useState({
    date: 'desc' as SortDirection,
    title: 'asc' as SortDirection,
  });

  const sortedPosts = useMemo(() => {
    const sorted = [...posts];
    const direction = sortConfig[activeSortKey];
    
    sorted.sort((a, b) => {
      // Prioritize pinned posts
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;

      // Then sort by the active key
      if (activeSortKey === 'date') {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return direction === 'desc' ? dateB - dateA : dateA - dateB;
      }
      if (activeSortKey === 'title') {
        const comparison = a.title.localeCompare(b.title);
        return direction === 'asc' ? comparison : -comparison;
      }
      return 0;
    });

    return sorted;
  }, [posts, activeSortKey, sortConfig]);

  const handleSort = (key: SortKey) => {
    if (key === activeSortKey) {
      // Toggle direction if it's the active key
      setSortConfig(prev => ({
        ...prev,
        [key]: prev[key] === 'asc' ? 'desc' : 'asc',
      }));
    } else {
      // Switch to the new key
      setActiveSortKey(key);
    }
  };

  const getButtonLabel = (key: SortKey) => {
    const direction = sortConfig[key];
    if (key === 'date') {
      return direction === 'desc' ? 'Mới nhất' : 'Cũ nhất';
    }
    // key === 'title'
    return direction === 'asc' ? 'Tiêu đề (A-Z)' : 'Tiêu đề (Z-A)';
  };

  const SortIcon = ({ for_key }: {for_key: SortKey}) => {
    if (activeSortKey !== for_key) return null;
    return sortConfig[for_key] === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  }

  return (
    <section>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <div className="flex flex-wrap justify-center gap-2">
           <Button 
            variant={activeSortKey === 'date' ? 'secondary' : 'ghost'}
            onClick={() => handleSort('date')}
            className="text-xs md:text-sm"
          >
            {getButtonLabel('date')}
            <SortIcon for_key='date' />
          </Button>
          <Button 
            variant={activeSortKey === 'title' ? 'secondary' : 'ghost'}
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
              <h2 className="flex items-center gap-3 text-2xl font-medium font-heading text-primary group-hover:text-accent-foreground leading-relaxed">
                {post.pinned && <Pin className="h-5 w-5 text-muted-foreground group-hover:text-accent-foreground" />}
                <span>{post.title}</span>
              </h2>
            </Link>
            {index < sortedPosts.length - 1 && <Separator />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
