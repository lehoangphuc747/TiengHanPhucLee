// Type definitions cho dự án blog tiếng Hàn
// Tuân thủ quy tắc TypeScript với types rõ ràng

// Blog post types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  category: PostCategory;
  readingTime: number; // phút
  featured?: boolean;
}

export interface PostCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: any;
}

export interface FeatureProps extends BaseComponentProps {
  title: string;
  description: string;
  icon?: string;
}

export interface HeroProps extends BaseComponentProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface LayoutProps extends BaseComponentProps {
  title: string;
  description?: string;
  keywords?: string[];
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

// SEO types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// TODO: Thêm types cho CMS integration
export interface CMSConfig {
  provider: 'contentful' | 'strapi' | 'markdown';
  apiKey?: string;
  spaceId?: string;
}
