import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

      <section>
        <div className="flex flex-col gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="transition-shadow duration-300 hover:shadow-md">
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{course.description}</CardDescription>
                </CardContent>
                <CardFooter>
                   <Button asChild variant="link" className="p-0 h-auto text-primary">
                      <Link href={course.link}>
                        Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
