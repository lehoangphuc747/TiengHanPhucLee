"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header
      className={cn(
        "bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <nav>
            <div className="flex items-baseline space-x-2 font-heading">
              <Button variant="ghost" asChild>
                <Link href="/">Trang chủ</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/posts">Bài viết</Link>
              </Button>
               <Button variant="ghost" asChild>
                <Link href="/khoa-hoc">Khoá học</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/search">Tìm kiếm</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
