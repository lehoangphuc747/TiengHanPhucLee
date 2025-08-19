import type { LucideProps } from 'lucide-react';
import type { ForwardRefExoticComponent, RefAttributes } from 'react';

export interface Post {
  slug: string;
  title: string;
  description: string;
  content: string;
  pinned?: boolean;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}
