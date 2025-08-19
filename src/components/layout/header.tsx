
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/use-auth';
import { signInWithGoogle, signOut } from '@/lib/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogIn, LogOut } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';

export function Header() {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleSignIn = async () => {
    await signInWithGoogle();
    router.refresh();
  };

  const handleSignOut = async () => {
    await signOut();
    router.refresh();
  };

  const showAuthButton = pathname.startsWith('/khoa-hoc');

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
                  <Link href="/khoa-hoc">Khoá học</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/search">Tìm kiếm</Link>
                </Button>
              </div>
            </nav>
          </div>
          
          <div className="absolute right-4">
            {showAuthButton && (
              <>
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
                          <AvatarFallback>{user.displayName?.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                      <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                          <p className="text-sm font-medium leading-none">{user.displayName}</p>
                          <p className="text-xs leading-none text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Đăng xuất</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button variant="outline" onClick={handleSignIn}>
                    <LogIn className="mr-2 h-4 w-4" />
                    Đăng nhập
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
