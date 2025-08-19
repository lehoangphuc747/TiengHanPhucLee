import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, BookOpen, Target, Users, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Khoá học Anki Toàn Diện | TiengHanPhucLee',
  description: 'Nắm vững Anki từ cơ bản đến nâng cao để cách mạng hoá việc học của bạn.',
};

const curriculum = [
  {
    module: 'Module 1: Giới thiệu & Cài đặt',
    topics: ['Anki là gì và tại sao nó hiệu quả?', 'Cài đặt Anki trên máy tính và điện thoại', 'Đồng bộ hoá dữ liệu giữa các thiết bị'],
  },
  {
    module: 'Module 2: Những khái niệm cốt lõi',
    topics: ['Thẻ (Cards), Ghi chú (Notes), và Bộ bài (Decks)', 'Hiểu về thuật toán lặp lại ngắt quãng (SRS)', 'Các loại thẻ cơ bản và cách sử dụng'],
  },
  {
    module: 'Module 3: Tạo thẻ hiệu quả',
    topics: ['Nguyên tắc tạo thẻ nhớ tốt', 'Thực hành tạo thẻ cho từ vựng, ngữ pháp, và khái niệm', 'Sử dụng hình ảnh và âm thanh để tăng hiệu quả'],
  },
  {
    module: 'Module 4: Tối ưu hoá việc học',
    topics: ['Tuỳ chỉnh các lựa chọn của bộ bài', 'Sử dụng Tags và Bộ bài lọc (Filtered Decks)', 'Các Add-on hữu ích để nâng cao trải nghiệm'],
  },
  {
    module: 'Module 5: Ứng dụng nâng cao',
    topics: ['Học nhiều ngôn ngữ cùng lúc với Anki', 'Sử dụng Anki cho các môn học khác ngoài ngôn ngữ', 'Xây dựng thói quen học tập bền vững với Anki'],
  }
];

const benefits = [
  'Ghi nhớ kiến thức lâu dài, không còn tình trạng học trước quên sau.',
  'Tiết kiệm thời gian học tập bằng phương pháp hiệu quả nhất.',
  'Xây dựng thói quen học tập chủ động và bền vững mỗi ngày.',
  'Áp dụng được cho mọi lĩnh vực, từ ngôn ngữ đến chuyên ngành.',
];

export default function AnkiCoursePage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <p className="text-primary font-semibold tracking-wide uppercase">KHOÁ HỌC CHUYÊN SÂU</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold font-heading text-primary leading-tight">
          Anki Toàn Diện
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Từ người mới bắt đầu đến chuyên gia, khoá học này sẽ giúp bạn làm chủ Anki và biến nó thành công cụ học tập mạnh mẽ nhất.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="#">Đăng ký ngay</Link>
        </Button>
      </header>

      <div className="space-y-16">
        {/* Benefits Section */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6" />
                <span>Bạn sẽ nhận được gì?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="flex-shrink-0 h-6 w-6 text-green-500 mr-3 mt-1" />
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Curriculum Section */}
        <section>
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                <span>Nội dung khoá học</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {curriculum.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-medium">{item.module}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        {item.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>{topic}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>
        
        {/* Target Audience Section */}
        <section>
           <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6" />
                <span>Khoá học này dành cho ai?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4 text-lg text-muted-foreground">
                    <p>Học sinh, sinh viên muốn tối ưu hoá việc học ở trường.</p>
                    <p>Người học ngôn ngữ muốn xây dựng vốn từ vựng khổng lồ.</p>
                    <p>Người đi làm cần học và ghi nhớ kiến thức chuyên ngành.</p>
                    <p>Bất cứ ai muốn có một hệ thống học tập hiệu quả trọn đời.</p>
                </div>
            </CardContent>
          </Card>
        </section>

        {/* Final CTA */}
        <section className="text-center py-12">
            <h2 className="text-3xl font-bold font-heading mb-4">Sẵn sàng cách mạng hoá việc học của bạn?</h2>
            <p className="text-xl text-muted-foreground mb-8">Đừng để kiến thức trôi đi. Hãy bắt đầu xây dựng một bộ não thứ hai ngay hôm nay.</p>
            <Button asChild size="lg">
                <Link href="#">Tham gia khoá học</Link>
            </Button>
        </section>
      </div>
    </div>
  );
}
