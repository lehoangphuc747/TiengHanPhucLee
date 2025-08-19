import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Khoá học | TiengHanPhucLee',
  description: 'Khám phá các khoá học được thiết kế để giúp bạn đạt được mục tiêu học tập.',
};

const courses = [
  {
    title: 'Khoá học Anki Toàn Diện',
    description: 'Nắm vững Anki từ cơ bản đến nâng cao để tối ưu hóa việc học từ vựng và kiến thức.',
    link: '/khoa-hoc/anki-toan-dien',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'flashcards learning'
  },
  {
    title: 'Tiếng Hàn Giao Tiếp Cho Người Mới Bắt Đầu',
    description: 'Xây dựng nền tảng vững chắc và tự tin giao tiếp trong các tình huống hàng ngày.',
    link: '#',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'korean communication'
  },
  {
    title: 'Luyện Thi TOPIK Hiệu Quả',
    description: 'Chiến lược và kiến thức cần thiết để bạn đạt điểm cao trong kỳ thi TOPIK.',
    link: '#',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'korean exam test'
  }
];

export default function KhoaHocPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
          Khoá học
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Các khoá học được thiết kế để giúp bạn học tập hiệu quả và đạt được mục tiêu.
        </p>
      </section>

      <section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
               <Image 
                src={course.imageUrl} 
                alt={`Hình ảnh khoá học ${course.title}`} 
                width={600} 
                height={400}
                data-ai-hint={course.imageHint}
                className="w-full h-48 object-cover"
              />
              <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle>{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <CardDescription>{course.description}</CardDescription>
                </CardContent>
                <div className="mt-6">
                  <Button asChild variant="secondary" className="w-full">
                    <Link href={course.link}>Xem chi tiết</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
