import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string; // This will be the HTML content
  markdownContent: string; // This will be the original markdown content
  pinned?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  link?: string;
  icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  content: string;
}
