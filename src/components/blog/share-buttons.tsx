"use client";

import { useState, useEffect } from 'react';
import { Facebook, Twitter, Linkedin, Link as LinkIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface ShareButtonsProps {
  title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
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
  const encodedTitle = encodeURIComponent(title);

  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      toast({
        title: "Đã sao chép!",
        description: "Liên kết bài viết đã được sao chép vào bộ nhớ tạm.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
      toast({
        variant: "destructive",
        title: "Lỗi",
        description: "Không thể sao chép liên kết.",
      });
    });
  };

  return (
    <div className="mt-12 py-6 border-t border-b">
      <h3 className="text-lg font-medium text-center mb-4">Chia sẻ bài viết này</h3>
      <div className="flex justify-center items-center gap-2 flex-wrap">
        <Button variant="outline" size="icon" asChild>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
            <Facebook />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
            <Twitter />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
            <Linkedin />
          </a>
        </Button>
        <Button variant="outline" size="icon" onClick={copyToClipboard} aria-label="Copy link">
            {isCopied ? <Check className="text-green-500" /> : <LinkIcon />}
        </Button>
      </div>
    </div>
  );
}
