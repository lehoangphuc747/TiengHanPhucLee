
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header
      className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex justify-center">
            <nav>
              <div className="flex items-baseline space-x-2 font-heading">
                <Button variant="ghost" asChild>
                  <Link href="/">Trang chủ</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/posts">Bài viết</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/search">Tìm kiếm</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
