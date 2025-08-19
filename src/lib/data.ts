import type { Post, Project } from './types';
import { BookOpen, Code, Mic } from 'lucide-react';

export const posts: Post[] = [
  {
    slug: 'my-first-post',
    title: 'Chào mừng đến với blog mới của tôi!',
    description: 'Giới thiệu về hành trình học tiếng Hàn của tôi và những gì bạn có thể mong đợi từ blog này.',
    content: `
      <p>Xin chào và chào mừng! Tôi là Phúc Lee, và đây là không gian mới của tôi trên internet dành riêng cho hành trình học tiếng Hàn của tôi. Tôi luôn bị cuốn hút bởi văn hóa Hàn Quốc, từ điện ảnh đến ẩm thực, và cuối cùng tôi đã quyết định đi sâu vào việc học ngôn ngữ này.</p>
      <p>Blog này sẽ là nhật ký cá nhân của tôi, một nơi để chia sẻ tiến trình, những tài nguyên hữu ích, những thách thức tôi đối mặt và những chiến thắng nhỏ mà tôi ăn mừng trên đường đi. Tôi không phải là chuyên gia, chỉ là một người học đầy nhiệt huyết. Hy vọng của tôi là bằng cách chia sẻ kinh nghiệm của mình, tôi có thể kết nối với những người học khác và có lẽ còn truyền cảm hứng cho ai đó bắt đầu cuộc phiêu lưu học ngôn ngữ của riêng họ.</p>
      <h3>Bạn có thể mong đợi điều gì?</h3>
      <p>Hãy mong đợi những bài viết về các điểm ngữ pháp khiến tôi phải vò đầu bứt tai, các kỹ thuật học từ vựng, đánh giá sách giáo khoa và ứng dụng, và những suy ngẫm về văn hóa Hàn Quốc khi tôi hiểu rõ hơn về nó qua ngôn ngữ. Tôi rất vui khi có bạn ở đây. Chúng ta hãy cùng nhau học hỏi!</p>
    `,
    pinned: true,
  },
  {
    slug: 'understanding-korean-particles',
    title: 'Hướng dẫn cho người mới bắt đầu về các tiểu từ tiếng Hàn (은/는, 이/가)',
    description: 'Phân tích các tiểu từ chủ đề và tiểu từ chủ ngữ phổ biến và thường gây nhầm lẫn nhất trong tiếng Hàn.',
    content: `
      <p>Một trong những trở ngại lớn đầu tiên đối với bất kỳ người mới bắt đầu học tiếng Hàn nào là hiểu hệ thống tiểu từ. Không giống như tiếng Anh, tiếng Hàn sử dụng các tiểu từ được gắn vào danh từ để chỉ ra chức năng ngữ pháp của chúng trong câu. Cơ bản nhất trong số này là các tiểu từ chủ đề <strong>은/는 (eun/neun)</strong> và các tiểu từ chủ ngữ <strong>이/가 (i/ga)</strong>.</p>
      <p>Thoạt nhìn, chúng có vẻ có thể thay thế cho nhau, nhưng chúng mang những khác biệt tinh tế và quan trọng về sắc thái. Trong bài viết này, chúng ta sẽ phân tích các chức năng cốt lõi của mỗi cặp và xem xét các ví dụ để giúp bạn phân biệt khi nào nên sử dụng cái nào.</p>
      <h3>Tiểu từ chủ đề: 은 (eun) / 는 (neun)</h3>
      <p>Được sử dụng để giới thiệu một chủ đề của cuộc trò chuyện. Nó giống như nói "Về phần..." hoặc "Nói về...". Bạn sử dụng <strong>은</strong> sau một danh từ kết thúc bằng một phụ âm và <strong>는</strong> sau một danh từ kết thúc bằng một nguyên âm.</p>
      <p>Ví dụ: <strong>저는</strong> 학생입니다. (<strong>Jeo-neun</strong> haksaeng-imnida.) - "Về phần tôi, tôi là một học sinh." Ở đây, "tôi" là chủ đề.</p>
      <h3>Tiểu từ chủ ngữ: 이 (i) / 가 (ga)</h3>
      <p>Được sử dụng để xác định chủ ngữ của một động từ, người thực hiện hành động. Bạn sử dụng <strong>이</strong> sau một phụ âm và <strong>가</strong> sau một nguyên âm.</p>
      <p>Ví dụ: 날씨<strong>가</strong> 좋습니다. (Nalssi-<strong>ga</strong> josseumnida.) - "Thời tiết đẹp." Ở đây, "thời tiết" là chủ ngữ được mô tả.</p>
      <p>Sự khác biệt là tinh tế nhưng rất quan trọng để nghe tự nhiên. Chúng ta sẽ khám phá các tình huống phức tạp hơn và cảm giác chúng truyền tải trong một bài viết trong tương lai!</p>
    `,
    pinned: true,
  },
  {
    slug: 'my-favorite-learning-resources',
    title: 'Các tài nguyên học tiếng Hàn yêu thích của tôi',
    description: 'Một danh sách tuyển chọn các ứng dụng, trang web và sách đã giúp tôi trên hành trình học ngôn ngữ của mình.',
    content: `
      <p>Khi bạn tự học một ngôn ngữ, việc có các tài nguyên phù hợp có thể tạo ra sự khác biệt lớn. Trong vài tháng qua, tôi đã thử hàng chục công cụ khác nhau. Đây là danh sách những công cụ thực sự gắn bó với tôi và trở thành một phần trong thói quen hàng ngày của tôi.</p>
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
        <li><strong>Bộ sách "Korean Grammar in Use":</strong> Một tài liệu tham khảo sâu sắc tuyệt vời khi bạn cần nhiều chi tiết hơn các tài nguyên trực tuyến cung cấp.</li>
      </ul>
      <p>Tài nguyên yêu thích của bạn là gì? Hãy cho tôi biết!</p>
    `,
  },
];

export const projects: Project[] = [
  {
    title: 'Ứng dụng trắc nghiệm từ vựng tiếng Hàn',
    description: 'Một ứng dụng web đơn giản tôi đã xây dựng để kiểm tra từ vựng tiếng Hàn của mình bằng phương pháp lặp lại ngắt quãng.',
    link: '#',
    icon: Code,
  },
  {
    title: 'Ghi chú học TOPIK',
    description: 'Một kho lưu trữ công khai các ghi chú học tập của tôi khi tôi chuẩn bị cho Kỳ thi Năng lực tiếng Hàn.',
    link: '#',
    icon: BookOpen,
  },
  {
    title: 'Bản ghi thực hành phát âm',
    description: 'Một bộ sưu tập các đoạn âm thanh nơi tôi thực hành và nhận phản hồi về phát âm tiếng Hàn của mình.',
    icon: Mic,
  },
];