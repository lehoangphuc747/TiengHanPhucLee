
"use client";

import { useState, useMemo, Fragment } from 'react';
import Link from 'next/link';
import type { Post } from '@/lib/types';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowUp, Pin, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator as DropdownMenuSeparatorUI,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


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
  
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [tempSelectedTags, setTempSelectedTags] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  const handleTempTagChange = (tag: string) => {
    setTempSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };
  
  const applyFilter = () => {
    setFilteredTags(tempSelectedTags);
    setIsDropdownOpen(false);
  };

  const resetFilter = () => {
    setTempSelectedTags([]);
    setFilteredTags([]);
    setIsDropdownOpen(false);
  }

  const handleDropdownOpenChange = (open: boolean) => {
    if (open) {
      // When opening, sync temp state with the active filter state
      setTempSelectedTags(filteredTags);
    }
    setIsDropdownOpen(open);
  };

  const filteredAndSortedPosts = useMemo(() => {
    let filteredPosts = posts;
    if (filteredTags.length > 0) {
      filteredPosts = posts.filter(post => 
        post.tags.some(tag => filteredTags.includes(tag))
      );
    }

    const sorted = [...filteredPosts];
    const direction = sortConfig[activeSortKey];
    
    sorted.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;

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
  }, [posts, filteredTags, activeSortKey, sortConfig]);

  const handleSort = (key: SortKey) => {
    if (key === activeSortKey) {
      setSortConfig(prev => ({
        ...prev,
        [key]: prev[key] === 'asc' ? 'desc' : 'asc',
      }));
    } else {
      setActiveSortKey(key);
    }
  };

  const getButtonLabel = (key: SortKey) => {
    const direction = sortConfig[key];
    if (key === 'date') {
      return direction === 'desc' ? 'Mới nhất' : 'Cũ nhất';
    }
    return direction === 'asc' ? 'Tiêu đề (A-Z)' : 'Tiêu đề (Z-A)';
  };

  const SortIcon = ({ for_key }: {for_key: SortKey}) => {
    if (activeSortKey !== for_key) return null;
    return sortConfig[for_key] === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  }

  return (
    <section>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
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
        <DropdownMenu open={isDropdownOpen} onOpenChange={handleDropdownOpenChange}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-xs md:text-sm relative">
              Lọc theo chủ đề
              {filteredTags.length > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                  {filteredTags.length}
                </span>
              )}
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60" onSelect={(e) => e.preventDefault()}>
            <DropdownMenuLabel>Chọn chủ đề</DropdownMenuLabel>
            <DropdownMenuSeparatorUI />
            <div className="max-h-60 overflow-y-auto px-1">
              {allTags.map(tag => (
                <DropdownMenuCheckboxItem
                  key={tag}
                  className="capitalize"
                  checked={tempSelectedTags.includes(tag)}
                  onCheckedChange={() => handleTempTagChange(tag)}
                >
                  {tag}
                </DropdownMenuCheckboxItem>
              ))}
            </div>
            <DropdownMenuSeparatorUI />
            <div className="p-2 flex justify-end gap-2">
              <Button variant="ghost" size="sm" onClick={resetFilter}>Đặt lại</Button>
              <Button size="sm" onClick={applyFilter}>Lọc</Button>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-col">
        {filteredAndSortedPosts.length > 0 ? (
          filteredAndSortedPosts.map((post: Post, index: number) => (
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
              {index < filteredAndSortedPosts.length - 1 && <Separator />}
            </Fragment>
          ))
        ) : (
          <p className="text-center text-muted-foreground mt-8">Không có bài viết nào phù hợp với chủ đề đã chọn.</p>
        )}
      </div>
    </section>
  );
}
