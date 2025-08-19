import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary font-headline hover:opacity-80 transition-opacity">
              TiengHanPhucLee
            </Link>
          </div>
          <nav>
            <div className="flex items-baseline space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/posts">Posts</Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
