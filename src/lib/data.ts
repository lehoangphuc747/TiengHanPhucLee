import type { Project } from './types';
import { BookOpen, Code, Wind } from 'lucide-react';

// This file is now primarily for project data. Post data is managed in /src/lib/posts.ts

export const projects: Project[] = [
  {
    slug: 'trang-anki-viet-nam',
    title: 'Trang Anki Việt Nam',
    description: 'ankivn.com',
    link: 'https://ankivn.com',
    icon: Code,
    content: '<p>Nội dung chi tiết về trang Anki Việt Nam sẽ được cập nhật ở đây.</p>'
  },
  {
    slug: 'trang-hoc-anki',
    title: 'Trang Học Anki',
    description: 'hocanki.com',
    link: 'https://hocanki.com',
    icon: BookOpen,
    content: '<p>Nội dung chi tiết về trang Học Anki sẽ được cập nhật ở đây.</p>'
  },
  {
    slug: 'trang-tieng-han-mien-phi',
    title: 'Trang Tiếng Hàn Miễn Phí',
    description: 'TheFreeKorean.com',
    link: 'https://thefreekorean.com',
    icon: BookOpen,
    content: '<p>Nội dung chi tiết về trang Tiếng Hàn Miễn Phí sẽ được cập nhật ở đây.</p>'
  },
  {
    slug: 'trang-tu-tap-phat-giao',
    title: 'Trang Tu Tập Phật Giáo',
    description: 'TheoChanDucPhat.com',
    link: 'https://theochanducphat.com',
    icon: Wind,
    content: '<p>Nội dung chi tiết về trang tu tập Phật giáo sẽ được cập nhật ở đây.</p>'
  },
];
