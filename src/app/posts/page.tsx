"use client";

import { useState, useMemo, Fragment } from 'react';
import Link from 'next/link';
import type { Post } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface SearchPostsProps {
  posts: Post[];
}

export function SearchPosts({ posts }: SearchPostsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    if (!searchQuery) {
      return []; 
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercasedQuery) || 
      post.description.toLowerCase().includes(lowercasedQuery)
    );
  }, [searchQuery, posts]);

  return (
    <section>
      <div className="mb-8">
        <Input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Nhập từ khóa tìm kiếm..."
          className="w-full text-lg"
        />
      </div>

      <div className="flex flex-col">
        {searchQuery && filteredPosts.length === 0 && (
          <p className="text-center text-muted-foreground">Không tìm thấy bài viết nào phù hợp.</p>
        )}
        {filteredPosts.map((post: Post, index: number) => (
          <Fragment key={post.slug}>
            <Link 
              href={`/bai-viet/${post.slug}`} 
              className="block py-6 -mx-4 px-4 rounded-lg hover:bg-accent transition-colors duration-200 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-2xl font-medium font-heading text-primary group-hover:text-accent-foreground leading-relaxed">
                {post.title}
              </h2>
              <p className="text-muted-foreground mt-2">{post.description}</p>
            </Link>
            {index < filteredPosts.length - 1 && <Separator />}
          </Fragment>
        ))}
      </div>
    </section>
  );
}