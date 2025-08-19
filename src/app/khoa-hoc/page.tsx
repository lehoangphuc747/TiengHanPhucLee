import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Khoá học | TiengHanPhucLee',
  description: 'Khám phá các khoá học được thiết kế để giúp bạn đạt được mục tiêu học tập.',
};

const courses = [
  {
    title: 'Khoá học Anki Toàn Diện',
    description: 'Nắm vững Anki từ cơ bản đến nâng cao để tối ưu hóa việc học từ vựng và kiến thức.',
    link: '#', 
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
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
          Khoá học
        </h1>
        <p className="text-lg text-muted-foreground">
          Các khoá học được thiết kế để giúp bạn học tập hiệu quả và đạt được mục tiêu.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className="w-full">
                  <Link href={course.link}>Xem chi tiết</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
