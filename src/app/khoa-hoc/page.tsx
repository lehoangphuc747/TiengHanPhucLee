import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Khoá học | TiengHanPhucLee',
  description: 'Khám phá các khoá học được thiết kế để giúp bạn đạt được mục tiêu học tập.',
};

const courses = [
  {
    title: 'Khoá học Anki Toàn Diện',
    description: 'Nắm vững Anki từ cơ bản đến nâng cao để tối ưu hóa việc học từ vựng và kiến thức.',
    link: '/khoa-hoc/anki-toan-dien',
  },
  {
    title: 'Tiếng Hàn Giao Tiếp Cho Người Mới Bắt Đầu',
    description: 'Xây dựng nền tảng vững chắc và tự tin giao tiếp trong các tình huống hàng ngày.',
    link: '#',
  },
  {
    title: 'Luyện Thi TOPIK Hiệu Quả',
    description: 'Chiến lược và kiến thức cần thiết để bạn đạt điểm cao trong kỳ thi TOPIK.',
    link: '#',
  }
];

export default function KhoaHocPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
          Khoá học
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Các khoá học được thiết kế để giúp bạn học tập hiệu quả và đạt được mục tiêu.
        </p>
      </header>

      <section className="flex flex-col">
          {courses.map((course, index) => (
            <Fragment key={index}>
              <Link 
                href={course.link} 
                className="block py-6 -mx-4 px-4 rounded-lg hover:bg-accent transition-colors duration-200 group"
              >
                <h2 className="text-2xl font-medium font-heading text-primary group-hover:text-accent-foreground leading-relaxed">
                  {course.title}
                </h2>
                <p className="text-muted-foreground mt-2">{course.description}</p>
              </Link>
              {index < courses.length - 1 && <Separator />}
            </Fragment>
          ))}
      </section>
    </div>
  );
}
