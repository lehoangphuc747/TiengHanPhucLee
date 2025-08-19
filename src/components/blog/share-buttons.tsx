
"use client";

import { useState, useEffect } from 'react';
import { Facebook, Link as LinkIcon, Check, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Post } from '@/lib/types';

// Simple Messenger Icon as SVG component
const MessengerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.09-1.38L20.59 22l-1.09-3.26A9.92 9.92 0 0 0 22 12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    <path d="M7.5 11.5l3.5 3.5 5-5-3.5-3.5-5 5z" />
  </svg>
);


interface ShareButtonsProps {
  post: Post;
}

export function ShareButtons({ post }: ShareButtonsProps) {
  const [url, setUrl] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // This ensures window is defined, preventing hydration errors
    setUrl(window.location.href);
  }, []);

  if (!url) {
    return null; // Or a loading skeleton
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(post.title);

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    // Note: Messenger link will prompt user to log in if not already. It's one of the few ways without an app_id
    messenger: `https://www.facebook.com/dialog/send?link=${encodedUrl}&app_id=123456789&redirect_uri=${encodedUrl}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      toast({
        title: "Đã sao chép!",
        description: "Liên kết bài viết đã được sao chép vào bộ nhớ tạm.",
        duration: 3000,
      });
      setTimeout(() => setIsCopied(false), 3000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Không thể sao chép liên kết.",
      });
    });
  };

  const downloadMarkdown = () => {
    const blob = new Blob([post.markdownContent], { type: 'text/markdown;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${post.slug}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-12 py-6 border-t border-b">
      <h3 className="text-lg font-medium text-center mb-4">Chia sẻ</h3>
      <div className="flex justify-center items-center gap-2 flex-wrap">
        <Button variant="outline" asChild className="gap-2">
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
            <Facebook className="h-4 w-4" /> Facebook
          </a>
        </Button>
        <Button variant="outline" asChild className="gap-2">
          <a href={socialLinks.messenger} target="_blank" rel="noopener noreferrer" aria-label="Share on Messenger">
            <MessengerIcon /> Messenger
          </a>
        </Button>
        <Button variant="outline" onClick={copyToClipboard} aria-label="Copy link" className="gap-2">
            {isCopied ? <Check className="text-green-500 h-4 w-4" /> : <LinkIcon className="h-4 w-4" />}
            {isCopied ? 'Đã chép' : 'Copy link'}
        </Button>
        <Button variant="outline" onClick={downloadMarkdown} aria-label="Download Markdown" className="gap-2">
            <Download className="h-4 w-4" />
            Markdown
        </Button>
      </div>
    </div>
  );
}
