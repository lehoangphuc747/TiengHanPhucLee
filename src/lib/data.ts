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
    markdownContent: `
Xin chào và chào mừng! Tớ là Phúc Lee, và đây là không gian mới của tớ trên internet dành riêng cho hành trình học tiếng Hàn của tớ. Tớ luôn bị cuốn hút bởi văn hóa Hàn Quốc, từ điện ảnh đến ẩm thực, và cuối cùng tớ đã quyết định đi sâu vào việc học ngôn ngữ này.

Blog này sẽ là nhật ký cá nhân của tớ, một nơi để chia sẻ tiến trình, những tài nguyên hữu ích, những thách thức tớ đối mặt và những chiến thắng nhỏ mà tớ ăn mừng trên đường đi. Tớ không phải là chuyên gia, chỉ là một người học đầy nhiệt huyết. Hy vọng của tớ là bằng cách chia sẻ kinh nghiệm của mình, tớ có thể kết nối với những người học khác và có lẽ còn truyền cảm hứng cho ai đó bắt đầu cuộc phiêu lưu học ngôn ngữ của riêng họ.

### Cậu có thể mong đợi điều gì?

Hãy mong đợi những bài viết về các điểm ngữ pháp khiến tớ phải vò đầu bứt tai, các kỹ thuật học từ vựng, đánh giá sách giáo khoa và ứng dụng, và những suy ngẫm về văn hóa Hàn Quốc khi tớ hiểu rõ hơn về nó qua ngôn ngữ. Tớ rất vui khi có cậu ở đây. Chúng ta hãy cùng nhau học hỏi!
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
    markdownContent: `
Chào cậu, nếu cậu đang đọc những dòng này, có lẽ cậu đang tự hỏi trang web này thực sự nói về điều gì. Nói một cách đơn giản, đây là khu vườn kỹ thuật số của tớ.

Đây là một không gian cá nhân nơi tớ ghi lại hành trình học tiếng Hàn của mình, chia sẻ những ghi chú, những phát hiện và bất kỳ tài nguyên nào tớ thấy hữu ích. Nó cũng là nơi tớ giới thiệu các dự án nhỏ mà tớ đang thực hiện.

Về cơ bản, đây là một blog cá nhân và một danh mục đầu tư được kết hợp thành một. Cảm ơn cậu đã ghé qua!
    `,
    pinned: true,
  },
  {
    slug: 'nao-ban-la-mot-thang-sep-toi-hay-sa-thai-no',
    title: 'Não Bạn Là Một Thằng Sếp Tồi. Hãy Sa Thải Nó',
    description: 'Nghe này, lý do bạn vẫn đang trì hoãn không phải vì bạn là một kẻ thất bại. Vấn đề đơn giản và cũng ngớ ngẩn hơn nhiều: Bộ não của bạn là một thằng lười biếng.',
    content: `
      <p>Nghe này, lý do bạn vẫn đang trì hoãn không phải vì bạn là một kẻ thất bại. Vấn đề đơn giản và cũng ngớ ngẩn hơn nhiều: <strong>Bộ não của bạn là một thằng lười biếng.</strong></p>
      <p>Nó không quan tâm đến ước mơ hoành tráng của bạn. Nó chỉ quan tâm đến việc giữ cho bạn sống sót. Và đối với nó, "sống sót" có nghĩa là làm những việc dễ dàng, thoải mái và quen thuộc. Bất cứ điều gì khó khăn hay không chắc chắn đều bị nó coi là mối đe dọa.</p>
      <p>Và bạn cứ để nó dắt mũi.</p>
      <h3><strong>Tại Sao Bộ Não Của Bạn Lại Muốn Bạn Thất Bại</strong></h3>
      <p>Bộ não của bạn được lập trình để tiết kiệm năng lượng. Nó sẽ luôn chọn con đường ít tốn sức nhất.</p>
      <ul>
        <li><strong>Nó là một kẻ nói dối chuyên nghiệp.</strong> Nó sẽ thì thầm những lời ngọt ngào như "Để mai làm" hay "Bạn xứng đáng được nghỉ ngơi".</li>
        <li><strong>Nó sợ sự khó chịu.</strong> Bất cứ điều gì gây ra cảm giác không thoải mái đều bị nó đẩy ra xa.</li>
        <li><strong>Nếu bạn nghe theo nó, bạn sẽ mãi mắc kẹt.</strong> Bạn sẽ trở thành nô lệ cho sự thoải mái tầm thường của chính mình.</li>
      </ul>
      <h3><strong>Học Cách Yêu Lấy Sự Tồi Tệ</strong></h3>
      <p>Giải pháp không phải là tìm kiếm động lực. Giải pháp là lao thẳng vào sự khó chịu.</p>
      <p>Thay vì chạy trốn khỏi nỗi đau, hãy xem nó như là học phí cho sự trưởng thành. Mọi thứ đáng giá trong cuộc đời đều nằm ở phía bên kia của sự khó chịu. Khi não bạn gào lên "Dừng lại!", bạn hãy trả lời: "<strong>Tốt, thế thì càng phải làm.</strong>"</p>
      <h3><strong>Quy Tắc 3 Giây: Cách Hack Não Để Hành Động</strong></h3>
      <p>Sự do dự là khoảnh khắc bộ não của bạn bắt đầu bịa ra những lý do để không làm. Mục tiêu của bạn là hành động trước khi nó kịp làm điều đó.</p>
      <p>Nó hoạt động như thế này: Khoảnh khắc bạn nghĩ đến việc mình <em>nên</em> làm (ví dụ: rửa đống bát đĩa), não bạn sẽ ngay lập tức tìm cách chống lại ("Mệt quá", "Để lát nữa"). Đừng cho nó cơ hội.</p>
      <p><strong>Ngay lập tức, hãy đếm ngược từ 3 và di chuyển cơ thể bạn.</strong></p>
      <ul>
        <li><strong>3...</strong> Đứng dậy khỏi ghế.</li>
        <li><strong>2...</strong> Bước về phía bồn rửa.</li>
        <li><strong>1...</strong> Bật vòi nước lên.</li>
      </ul>
      <p>Trước khi bộ não kịp nhận ra, bạn đã bắt đầu hành động. Quy tắc này không phải là để suy nghĩ, mà là để <strong>ngắt dòng suy nghĩ</strong> và buộc cơ thể bạn phải chuyển động.</p>
      <h3><strong>Xây Dựng "Cơ Bắp Chống Yếu Đuối"</strong></h3>
      <p>Ý chí cũng giống như cơ bắp. Bạn không thể nâng mức tạ 100kg ngay trong ngày đầu tiên. Bạn phải bắt đầu từ những việc nhỏ, những việc dễ đến nực cười, rồi tăng dần độ khó.</p>
      <h4>Cấp độ 1: Những Thử Thách 5 Phút (Dễ Đến Nực Cười)</h4>
      <p>Mục tiêu ở đây chỉ đơn giản là <strong>bắt đầu</strong>. Phá vỡ sự ì và chứng minh cho bộ não thấy rằng bạn mới là người nắm quyền.</p>
      <ul>
        <li><strong>Gấp chăn màn:</strong> Ngay khi bước ra khỏi giường. Không suy nghĩ.</li>
        <li><strong>Uống một ly nước đầy:</strong> Trước khi bạn chạm vào điện thoại hay máy pha cà phê.</li>
        <li><strong>Dọn dẹp một thứ:</strong> Chỉ một thứ thôi. Một cái bàn, một cái ghế, hoặc chỉ cần dọn đống quần áo bẩn vào giỏ. Hẹn giờ 5 phút và làm.</li>
        <li><strong>Đi bộ 5 phút:</strong> Đi vòng quanh nhà bạn. Không cần thay đồ tập, không cần mục tiêu. Chỉ cần đi.</li>
      </ul>
      <h4>Cấp độ 2: Vượt Qua Ngưỡng Khó Chịu</h4>
      <p>Bây giờ, chúng ta sẽ tập cho bộ não quen với cảm giác "không thoải mái" trong thời gian ngắn.</p>
      <ul>
        <li><strong>Tắm nước lạnh:</strong> Tắm như bình thường, nhưng dành 30 giây cuối cùng để vặn sang nước lạnh hoàn toàn. Nó rất tệ, và đó chính là mục đích.</li>
        <li><strong>Tập thể dục 10 phút:</strong> Không cần đến phòng gym. Tìm một video tập luyện cường độ cao (HIIT) 10 phút trên YouTube và làm theo. Bạn sẽ thở hổn hển, và đó là điều tốt.</li>
        <li><strong>Ngồi thiền 5 phút:</strong> Ngồi yên. Không làm gì cả. Chỉ tập trung vào hơi thở. Bộ não của bạn sẽ gào thét vì chán, hãy mặc kệ nó.</li>
        <li><strong>Viết 3 điều bạn biết ơn:</strong> Ngay cả khi ngày của bạn tồi tệ. Việc này buộc bộ não phải tìm kiếm những điều tích cực thay vì đắm chìm trong sự tiêu cực.</li>
      </ul>
      <h4>Cấp độ 3: Xây Dựng Thói Quen Bền Vững</h4>
      <p>Đây là lúc biến những hành động đơn lẻ thành một phần trong cuộc sống của bạn.</p>
      <ul>
        <li><strong>Dậy sớm hơn 30 phút:</strong> Không phải để làm việc, mà là để có thời gian cho riêng mình. Đọc sách, uống trà, hoặc chỉ đơn giản là ngồi yên. Làm điều này 3 lần một tuần.</li>
        <li><strong>Dành 20 phút mỗi ngày cho một kỹ năng:</strong> Học một ngôn ngữ, chơi một nhạc cụ, viết lách. Sự tiến bộ nhỏ mỗi ngày sẽ tạo ra kết quả lớn.</li>
        <li><strong>Vận động 3 lần một tuần:</strong> Chọn một hoạt động bạn không quá ghét (chạy bộ, đạp xe, bơi lội) và cam kết thực hiện nó, bất kể tâm trạng hay thời tiết.</li>
      </ul>
      <h3><strong>Đừng Chờ Đợi. Hãy Quyết Định.</strong></h3>
      <p>Động lực là một thứ vớ vẩn. Nó đến rồi đi.</p>
      <p>Đừng chờ đợi cảm giác muốn làm. Hãy <strong>quyết định bạn là ai</strong> và hành động như con người đó.</p>
      <p>Nói với bộ não của bạn: "Tao không lười biếng. Tao là người làm những việc cần làm, bất kể cảm xúc."</p>
      <p>Thôi đọc đi. Bài viết này hoàn toàn vô dụng nếu bạn không làm gì cả.</p>
      <p>Chọn một việc trong danh sách trên. Một việc nhỏ nhất cũng được.</p>
      <p>Và làm nó ngay bây giờ.</p>
    `,
    markdownContent: `Nghe này, lý do bạn vẫn đang trì hoãn không phải vì bạn là một kẻ thất bại. Vấn đề đơn giản và cũng ngớ ngẩn hơn nhiều: **Bộ não của bạn là một thằng lười biếng.**

Nó không quan tâm đến ước mơ hoành tráng của bạn. Nó chỉ quan tâm đến việc giữ cho bạn sống sót. Và đối với nó, "sống sót" có nghĩa là làm những việc dễ dàng, thoải mái và quen thuộc. Bất cứ điều gì khó khăn hay không chắc chắn đều bị nó coi là mối đe dọa.

Và bạn cứ để nó dắt mũi.

### **Tại Sao Bộ Não Của Bạn Lại Muốn Bạn Thất Bại**

Bộ não của bạn được lập trình để tiết kiệm năng lượng. Nó sẽ luôn chọn con đường ít tốn sức nhất.

- **Nó là một kẻ nói dối chuyên nghiệp.** Nó sẽ thì thầm những lời ngọt ngào như "Để mai làm" hay "Bạn xứng đáng được nghỉ ngơi".
- **Nó sợ sự khó chịu.** Bất cứ điều gì gây ra cảm giác không thoải mái đều bị nó đẩy ra xa.
- **Nếu bạn nghe theo nó, bạn sẽ mãi mắc kẹt.** Bạn sẽ trở thành nô lệ cho sự thoải mái tầm thường của chính mình.

### **Học Cách Yêu Lấy Sự Tồi Tệ**

Giải pháp không phải là tìm kiếm động lực. Giải pháp là lao thẳng vào sự khó chịu.

Thay vì chạy trốn khỏi nỗi đau, hãy xem nó như là học phí cho sự trưởng thành. Mọi thứ đáng giá trong cuộc đời đều nằm ở phía bên kia của sự khó chịu. Khi não bạn gào lên "Dừng lại!", bạn hãy trả lời: "**Tốt, thế thì càng phải làm.**"

### **Quy Tắc 3 Giây: Cách Hack Não Để Hành Động**

Sự do dự là khoảnh khắc bộ não của bạn bắt đầu bịa ra những lý do để không làm. Mục tiêu của bạn là hành động trước khi nó kịp làm điều đó.

Nó hoạt động như thế này: Khoảnh khắc bạn nghĩ đến việc mình _nên_ làm (ví dụ: rửa đống bát đĩa), não bạn sẽ ngay lập tức tìm cách chống lại ("Mệt quá", "Để lát nữa"). Đừng cho nó cơ hội.

**Ngay lập tức, hãy đếm ngược từ 3 và di chuyển cơ thể bạn.**

- **3...** Đứng dậy khỏi ghế.
- **2...** Bước về phía bồn rửa.
- **1...** Bật vòi nước lên.

Trước khi bộ não kịp nhận ra, bạn đã bắt đầu hành động. Quy tắc này không phải là để suy nghĩ, mà là để **ngắt dòng suy nghĩ** và buộc cơ thể bạn phải chuyển động.

### **Xây Dựng "Cơ Bắp Chống Yếu Đuối"**

Ý chí cũng giống như cơ bắp. Bạn không thể nâng mức tạ 100kg ngay trong ngày đầu tiên. Bạn phải bắt đầu từ những việc nhỏ, những việc dễ đến nực cười, rồi tăng dần độ khó.

#### Cấp độ 1: Những Thử Thách 5 Phút (Dễ Đến Nực Cười)

Mục tiêu ở đây chỉ đơn giản là **bắt đầu**. Phá vỡ sự ì và chứng minh cho bộ não thấy rằng bạn mới là người nắm quyền.

- **Gấp chăn màn:** Ngay khi bước ra khỏi giường. Không suy nghĩ.
- **Uống một ly nước đầy:** Trước khi bạn chạm vào điện thoại hay máy pha cà phê.
- **Dọn dẹp một thứ:** Chỉ một thứ thôi. Một cái bàn, một cái ghế, hoặc chỉ cần dọn đống quần áo bẩn vào giỏ. Hẹn giờ 5 phút và làm.
- **Đi bộ 5 phút:** Đi vòng quanh nhà bạn. Không cần thay đồ tập, không cần mục tiêu. Chỉ cần đi.

#### Cấp độ 2: Vượt Qua Ngưỡng Khó Chịu

Bây giờ, chúng ta sẽ tập cho bộ não quen với cảm giác "không thoải mái" trong thời gian ngắn.

- **Tắm nước lạnh:** Tắm như bình thường, nhưng dành 30 giây cuối cùng để vặn sang nước lạnh hoàn toàn. Nó rất tệ, và đó chính là mục đích.
- **Tập thể dục 10 phút:** Không cần đến phòng gym. Tìm một video tập luyện cường độ cao (HIIT) 10 phút trên YouTube và làm theo. Bạn sẽ thở hổn hển, và đó là điều tốt.
- **Ngồi thiền 5 phút:** Ngồi yên. Không làm gì cả. Chỉ tập trung vào hơi thở. Bộ não của bạn sẽ gào thét vì chán, hãy mặc kệ nó.
- **Viết 3 điều bạn biết ơn:** Ngay cả khi ngày của bạn tồi tệ. Việc này buộc bộ não phải tìm kiếm những điều tích cực thay vì đắm chìm trong sự tiêu cực.

#### Cấp độ 3: Xây Dựng Thói Quen Bền Vững

Đây là lúc biến những hành động đơn lẻ thành một phần trong cuộc sống của bạn.

- **Dậy sớm hơn 30 phút:** Không phải để làm việc, mà là để có thời gian cho riêng mình. Đọc sách, uống trà, hoặc chỉ đơn giản là ngồi yên. Làm điều này 3 lần một tuần.
- **Dành 20 phút mỗi ngày cho một kỹ năng:** Học một ngôn ngữ, chơi một nhạc cụ, viết lách. Sự tiến bộ nhỏ mỗi ngày sẽ tạo ra kết quả lớn.
- **Vận động 3 lần một tuần:** Chọn một hoạt động bạn không quá ghét (chạy bộ, đạp xe, bơi lội) và cam kết thực hiện nó, bất kể tâm trạng hay thời tiết.

### **Đừng Chờ Đợi. Hãy Quyết Định.**

Động lực là một thứ vớ vẩn. Nó đến rồi đi.

Đừng chờ đợi cảm giác muốn làm. Hãy **quyết định bạn là ai** và hành động như con người đó.

Nói với bộ não của bạn: "Tao không lười biếng. Tao là người làm những việc cần làm, bất kể cảm xúc."

Thôi đọc đi. Bài viết này hoàn toàn vô dụng nếu bạn không làm gì cả.

Chọn một việc trong danh sách trên. Một việc nhỏ nhất cũng được.

Và làm nó ngay bây giờ.`,
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
    markdownContent: `
Khi cậu tự học một ngôn ngữ, việc có các tài nguyên phù hợp có thể tạo ra sự khác biệt lớn. Trong vài tháng qua, tớ đã thử hàng chục công cụ khác nhau. Đây là danh sách những công cụ thực sự gắn bó với tớ và trở thành một phần trong thói quen hàng ngày của tớ.

### Ứng dụng
*   **Duolingo:** Tuyệt vời để bắt đầu một cách vui vẻ, được game hóa và xây dựng từ vựng.
*   **Memrise:** Xuất sắc để ghi nhớ từ vựng với các mẹo ghi nhớ và các bộ bài do người dùng tạo.
*   **HelloTalk:** Vô giá để thực hành với người bản xứ.

### Trang web
*   **Talk To Me In Korean (TTMIK):** Chén thánh cho ngữ pháp. Các bài học của họ có cấu trúc, rõ ràng và đi kèm với các tệp PDF và âm thanh.
*   **Từ điển Naver:** Từ điển Hàn-Anh toàn diện nhất, hoàn chỉnh với các câu ví dụ và tích hợp V-Live.

### Sách
*   **Bộ sách "Korean Grammar in Use":** Một tài liệu tham khảo sâu sắc tuyệt vời khi cậu cần nhiều chi tiết hơn các tài nguyên trực tuyến cung cấp.

Tài nguyên yêu thích của cậu là gì? Hãy cho tớ biết!
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
