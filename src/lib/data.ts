import type { Post, Project } from './types';
import { BookOpen, Code, Wind } from 'lucide-react';

export const posts: Post[] = [
  {
    slug: 'my-first-post',
    title: 'Chào mừng đến với blog mới của tớ!',
    description: 'Giới thiệu về hành trình học tiếng Hàn của tớ và những gì cậu có thể mong đợi từ blog này.',
    content: `
      <p>Xin chào và chào mừng! Tớ là Phúc Lee, và đây là không gian mới của tớ trên internet dành riêng cho hành trình học tiếng Hàn của tớ. Tớ luôn bị cuốn hút bởi văn hóa Hàn Quốc, từ điện ảnh đến ẩm thực, và cuối cùng tớ đã quyết định đi sâu vào việc học ngôn ngữ này.</p>
      <p>Blog này sẽ là nhật ký cá nhân của tớ, một nơi để chia sẻ tiến trình, những tài nguyên hữu ích, những thách thức tớ đối mặt và những chiến thắng nhỏ mà tớ ăn mừng trên đường đi. Tớ không phải là chuyên gia, chỉ là một người học đầy nhiệt huyết. Hy vọng của tớ là bằng cách chia sẻ kinh nghiệm của mình, tớ có thể kết nối với những người học khác và có lẽ còn truyền cảm hứng cho ai đó bắt đầu cuộc phiêu lưu học ngôn ngữ của riêng họ.</p>
      <h3>Cậu có thể mong đợi điều gì?</h3>
      <p>Hãy mong đợi những bài viết về các điểm ngữ pháp khiến tớ phải vò đầu bứt tai, các kỹ thuật học từ vựng, đánh giá sách giáo khoa và ứng dụng, và những suy ngẫm về văn hóa Hàn Quốc khi tớ hiểu rõ hơn về nó qua ngôn ngữ. Tớ rất vui khi có cậu ở đây. Chúng ta hãy cùng nhau học hỏi!</p>
    `,
    pinned: true,
  },
  {
    slug: 'what-is-this-website-about',
    title: 'Trang Web này viết về cái quần gì?',
    description: 'Một lời giải thích ngắn gọn về mục đích và nội dung của trang web này.',
    content: `
      <p>Chào cậu, nếu cậu đang đọc những dòng này, có lẽ cậu đang tự hỏi trang web này thực sự nói về điều gì. Nói một cách đơn giản, đây là khu vườn kỹ thuật số của tớ.</p>
      <p>Đây là một không gian cá nhân nơi tớ ghi lại hành trình học tiếng Hàn của mình, chia sẻ những ghi chú, những phát hiện và bất kỳ tài nguyên nào tớ thấy hữu ích. Nó cũng là nơi tớ giới thiệu các dự án nhỏ mà tớ đang thực hiện.</p>
      <p>Về cơ bản, đây là một blog cá nhân và một danh mục đầu tư được kết hợp thành một. Cảm ơn cậu đã ghé qua!</p>
    `,
    pinned: true,
  },
  {
    slug: 'my-favorite-learning-resources',
    title: 'Các tài nguyên học tiếng Hàn yêu thích của tớ',
    description: 'Một danh sách tuyển chọn các ứng dụng, trang web và sách đã giúp tớ trên hành trình học ngôn ngữ của mình.',
    content: `
      <p>Khi cậu tự học một ngôn ngữ, việc có các tài nguyên phù hợp có thể tạo ra sự khác biệt lớn. Trong vài tháng qua, tớ đã thử hàng chục công cụ khác nhau. Đây là danh sách những công cụ thực sự gắn bó với tớ và trở thành một phần trong thói quen hàng ngày của tớ.</p>
      <h3>Ứng dụng</h3>
      <ul>
        <li><strong>Duolingo:</strong> Tuyệt vời để bắt đầu một cách vui vẻ, được game hóa và xây dựng từ vựng.</li>
        <li><strong>Memrise:</strong> Xuất sắc để ghi nhớ từ vựng với các mẹo ghi nhớ và các bộ bài do người dùng tạo.</li>
        <li><strong>HelloTalk:</strong> Vô giá để thực hành với người bản xứ.</li>
      </ul>
      <h3>Trang web</h3>
      <ul>
        <li><strong>Talk To Me In Korean (TTMIK):</strong> Chén thánh cho ngữ pháp. Các bài học của họ có cấu trúc, rõ ràng và đi kèm với các tệp PDF và âm thanh.</li>
        <li><strong>Từ điển Naver:</strong> Từ điển Hàn-Anh toàn diện nhất, hoàn chỉnh với các câu ví dụ và tích hợp V-Live.</li>
      </ul>
      <h3>Sách</h3>
      <ul>
        <li><strong>Bộ sách "Korean Grammar in Use":</strong> Một tài liệu tham khảo sâu sắc tuyệt vời khi cậu cần nhiều chi tiết hơn các tài nguyên trực tuyến cung cấp.</li>
      </ul>
      <p>Tài nguyên yêu thích của cậu là gì? Hãy cho tớ biết!</p>
    `,
  },
];

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
