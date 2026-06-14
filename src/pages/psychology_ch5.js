const psychCh5Pages = [
  `
    <div class="insight-box anim-trigger fade-left">
      <h3>🤝 Khởi Đầu Của Sự Tương Tác Xã Hội</h3>
      <div class="mermaid anim-trigger fade-up">
        graph TD;
          A[Phát Triển Tâm Lý Xã Hội 🧠] --> B(Lớn Lên Về Thể Chất 💪);
          A --> C(Kiến Tạo Nhận Thức Bản Ngã 👤);
          A --> D(Hiểu Biết Thế Giới Xung Quanh 🌍);
          B -. Mối liên hệ tuần hoàn 🔄 .-> C;
          C -. Tương tác xã hội 🤝 .-> D;
      </div>
      <p>Sự phát triển tâm lý xã hội trong những năm đầu đời 👶 không chỉ là sự lớn lên về thể chất 💪, mà là quá trình phức tạp kiến tạo nên nền tảng nhận thức về bản ngã 👤 và thế giới xung quanh 🌍.</p>
    </div>
    <h3 class="anim-trigger fade-up">🌀 1. Thuyết Phát Triển Tâm Lý Xã Hội của Erik Erikson</h3>
    <div class="mermaid anim-trigger fade-up">
      flowchart LR;
        A[Sơ Sinh 👶<br/>0-18 tháng] --> B{Khủng hoảng 1 💥};
        B -->|Đáp ứng ổn định| C[Niềm Tin 🌟];
        B -->|Không đáp ứng| D[Sự Nghi Ngờ 🤔];
        E[Ấu Nhi 👧<br/>18th-3 tuổi] --> F{Khủng hoảng 2 💥};
        F -->|Được độc lập| G[Sự Tự Chủ 🚀];
        F -->|Kiểm soát thái quá| H[Hoài Nghi & Xấu Hổ 🫣];
        I[Mẫu Giáo 🎒<br/>3-5 tuổi] --> J{Khủng hoảng 3 💥};
        J -->|Chơi đùa tự do| K[Sáng Kiến 💡];
        J -->|Phản ứng tiêu cực| L[Cảm Giác Tội Lỗi 😔];
        C -.-> E;
        G -.-> I;
    </div>
    <p class="anim-trigger fade-up">Erikson cho rằng sự phát triển nhân cách 👤 diễn ra theo các giai đoạn liên tiếp trong suốt cuộc đời ⏳. Trong giai đoạn sơ sinh và ấu nhi, có ba cuộc khủng hoảng cốt lõi 💥 cần được giải quyết:</p>
    <ul class="anim-trigger fade-right">
      <li><strong>Niềm tin vs. Sự nghi ngờ 🌟 (Sơ sinh - 18 tháng):</strong> Trẻ hoàn toàn phụ thuộc vào người chăm sóc 🍼. Nếu nhu cầu được đáp ứng ổn định, trẻ hình thành niềm tin vào thế giới 🌍.</li>
      <li><strong>Sự tự chủ vs. Sự xấu hổ và hoài nghi 🚀 (18 tháng - 3 tuổi):</strong> Trẻ bắt đầu khám phá sự độc lập (ví dụ: tự chọn quần áo 👕, đi vệ sinh 🚽). Sự kiểm soát thái quá từ cha mẹ có thể dẫn đến sự tự ti 🫣.</li>
      <li><strong>Sáng kiến vs. Cảm giác tội lỗi 💡 (3 - 5 tuổi):</strong> Trẻ muốn kiểm soát môi trường thông qua vui chơi 🎨. Phản ứng tiêu cực từ người lớn đối với sáng kiến của trẻ có thể tạo ra cảm giác tội lỗi 😔.</li>
    </ul>
  `,
  `
    <h3 class="anim-trigger fade-up">🫂 2. Thuyết Gắn Bó (Attachment Theory)</h3>
    <div class="mermaid anim-trigger fade-up">
      mindmap
        root((Thuyết Gắn Bó 💞<br>Mary Ainsworth))
          anToan[An Toàn ✅]
            at1(Tin tưởng người chăm sóc 🍼)
            at2(Dễ an ủi khi đoàn tụ 🤗)
            at3(Nền tảng quan hệ lành mạnh 🤝)
          neTranh[Né Tránh 🚫]
            nt1(Thờ ơ khi chia xa 🤷)
            nt2(Thiếu phản hồi cảm xúc 😐)
            nt3(Khó thiết lập thân mật 🧱)
          loAu[Lo Âu / Chống Đối 😟]
            la1(Thiếu nhất quán 🔄)
            la2(Căng thẳng tột độ ⚡)
          roiLoan[Rối Loạn 🌪️]
            rl1(Môi trường giáo dưỡng chấn thương 💔)
            rl2(Hành vi sợ hãi 😨)
    </div>
    <p class="anim-trigger fade-up">Tiếp nối John Bowlby về bản năng tiến hóa của sự gắn bó 💞, Mary Ainsworth đã sử dụng "Tình huống xa lạ" (Strange Situation 🚪) để phân loại 4 kiểu gắn bó chính:</p>
    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>✅ Gắn bó an toàn (Secure Attachment)</h4>
        <p>Trẻ tin tưởng người chăm sóc 🍼. Buồn bã khi bị chia xa nhưng dễ dàng được an ủi khi đoàn tụ 🤗. Tạo nền tảng cho sự tự tin và các mối quan hệ lành mạnh sau này 🤝.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🚫 Gắn bó né tránh (Avoidant Attachment)</h4>
        <p>Trẻ tỏ ra thờ ơ, không bận tâm khi người chăm sóc rời đi hay quay lại 🤷. Thường là kết quả của việc người chăm sóc không phản hồi cảm xúc của trẻ 😐, dẫn đến khó khăn trong việc thiết lập sự thân mật trong tương lai 🧱.</p>
      </div>
    </div>
    <p class="anim-trigger fade-up">Bên cạnh đó, còn có kiểu <strong>Gắn bó lo âu/chống đối 😟 (Ambivalent)</strong> và <strong>Gắn bó rối loạn 🌪️ (Disorganized)</strong>, phản ánh sự thiếu nhất quán hoặc chấn thương từ môi trường giáo dưỡng 💔.</p>
  `,
  `
    <h3 class="anim-trigger fade-up">🧬 3. Sự Tiến Hóa của Cảm Xúc</h3>
    <div class="mermaid anim-trigger fade-up">
      graph TD;
        A[Tiến Trình Phát Triển Cảm Xúc ❤️] --> B[Giai đoạn Sinh Tồn 🛡️<br/>Từ khi sinh ra];
        A --> C[Giai đoạn Nhận Thức Bản Ngã 🪞<br/>18 - 24 tháng];
        B --> D(Cảm Xúc Cơ Bản 🎭);
        D -->|Vui 😄, buồn 😢, sợ hãi 😨, ngạc nhiên 😲| E(Phản xạ tiến hóa phổ quát 🌍);
        C --> F(Cảm Xúc Phức Tạp 🧩);
        F -->|Tự hào 🏆, xấu hổ 🫣, tội lỗi 😔| G(Yêu cầu chức năng nhận thức bậc cao 🧠);
        E -. Sự trưởng thành não bộ 📈 .-> G;
    </div>
    <p class="anim-trigger fade-up">Cảm xúc phức tạp ở trẻ sơ sinh 👶 không xuất hiện ngay từ đầu mà phát triển theo định luật tiến hóa 🧬 và sự trưởng thành của não bộ 🧠. Theo Paul Ekman, có các cảm xúc cơ bản mang tính phổ quát 🌍 (vui 😄, buồn 😢, sợ hãi 😨, ngạc nhiên 😲), trong khi các cảm xúc phức tạp 🧩 (tự hào 🏆, xấu hổ 🫣, tội lỗi 😔) đòi hỏi sự nhận thức về bản ngã (self-awareness 🪞) xuất hiện sau 18-24 tháng.</p>
    <p class="anim-trigger fade-up">Biểu đồ minh họa sự trỗi dậy của các cảm xúc cơ bản từ rất sớm nhằm mục đích sinh tồn 🛡️, và sự xuất hiện muộn hơn của các cảm xúc phức tạp khi chức năng nhận thức bậc cao bắt đầu hoạt động 🧠.</p>
  `,
  `
    <h3 class="anim-trigger fade-up">🧸 4. Tâm Lý Học Về Vui Chơi (Psychology of Play)</h3>
    <div class="mermaid anim-trigger fade-up">
      flowchart TD;
        A(Các Cấp Độ Vui Chơi theo Piaget 🧩) --> B[Dưới 2 tuổi: Chơi Một Mình 👤];
        A --> C[2 tuổi: Chơi Quan Sát 👀];
        A --> D[Trên 2 tuổi: Chơi Song Song ⏸️];
        A --> E[3-4 tuổi: Chơi Liên Kết & Hợp Tác 🤝];
        B -->|Tập trung cơ thể, đồ vật 🧸| F[Phát triển vận động 🏃];
        C -->|Quan sát người khác 👁️| G[Học quy tắc xã hội ngầm 📜];
        D -->|Bắt chước, không tương tác 👯| H[Sự độc lập 🛡️];
        E -->|Hiểu suy nghĩ người khác 🧠| I[Thấu cảm & Theory of Mind ❤️];
        F -.-> G -.-> H -.-> I;
        J[Chơi Giả Vờ 🎭 - Make-believe] --> K((Phát triển tưởng tượng 🌈));
        J --> L((Công cụ đối phó chấn thương 🩹));
    </div>
    <p class="anim-trigger fade-up">Theo Piaget 🧑‍🔬, vui chơi không chỉ là giải trí mà là một cơ chế thiết yếu để phát triển nhận thức 🧠 và ngôn ngữ 🗣️. Nếu không được vui chơi, trẻ em có thể bị suy giảm chức năng nhận thức nghiêm trọng 📉.</p>
    <ul class="anim-trigger fade-right">
      <li><strong>👤 Chơi một mình (Solitary Play):</strong> Dưới 2 tuổi. Trẻ tập trung vào cơ thể và đồ vật 🧸, chưa nhận thức rõ về người khác.</li>
      <li><strong>👀 Chơi quan sát (Spectator Play):</strong> Khoảng 2 tuổi. Trẻ quan sát người khác chơi để học hỏi các quy tắc xã hội ngầm 📜.</li>
      <li><strong>⏸️ Chơi song song (Parallel Play):</strong> Hơn 2 tuổi. Trẻ chơi cạnh nhau nhưng chưa tương tác trực tiếp 👯.</li>
      <li><strong>🤝 Chơi liên kết và hợp tác (Associative & Cooperative Play):</strong> 3-4 tuổi. Đòi hỏi khả năng hiểu rằng người khác có suy nghĩ và mong muốn khác biệt (Theory of Mind ❤️).</li>
    </ul>
    <p class="anim-trigger fade-up">Đặc biệt, "Chơi giả vờ" (Make-believe play 🎭) là công cụ vô giá giúp trẻ phát triển trí tưởng tượng 🌈, kỹ năng xã hội 🤝 và khả năng đối phó với những chấn thương tâm lý bằng cách tái hiện lại trong môi trường an toàn 🩹.</p>
  `,
  `
    <h3 class="anim-trigger fade-up">⚖️ 5. Sự Đánh Đổi Trong Giáo Dục Sớm</h3>
    <div class="mermaid anim-trigger fade-up">
      flowchart LR;
        A{Giáo Dục Sớm 🏫} --> B(Bảo Vệ & Cấu Trúc 🛡️);
        A --> C(Tự Do Trải Nghiệm 🕊️);
        B --> D[An toàn tuyệt đối ✅<br/>Lịch trình nghiêm ngặt 📅];
        C --> E[Cho phép mắc sai lầm ❌<br/>Chấp nhận rủi ro ⚠️];
        D -->|Hạn chế| F[Kìm hãm tính tự chủ 🔒<br/>Giảm năng lực giải quyết vấn đề 📉];
        E -->|Lợi ích| G[Phát triển ý thức năng lực 🌟<br/>Self-Efficacy];
        E -.->|Nhược điểm| H(Mớ hỗn độn 🌪️ & lo lắng từ cha mẹ 😰);
    </div>
    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🛡️ Bảo Vệ & Cấu Trúc (Protection & Structure)</h4>
        <p>Cung cấp một môi trường an toàn tuyệt đối ✅ và lịch trình nghiêm ngặt 📅 giúp trẻ tránh được rủi ro thể chất. Tuy nhiên, nếu quá mức, nó kìm hãm sự phát triển của tính tự chủ 🔒 và năng lực giải quyết vấn đề tự nhiên của trẻ 📉.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🕊️ Tự Do Trải Nghiệm (Freedom to Fail)</h4>
        <p>Cho phép trẻ mắc sai lầm ❌ (ví dụ: tự mặc quần áo ngược 👕, làm vỡ đồ 🏺) giúp phát triển ý thức về năng lực bản thân (self-efficacy 🌟). Sự đánh đổi là cha mẹ phải đối mặt với mớ hỗn độn 🌪️ và sự lo lắng nhất thời 😰.</p>
      </div>
    </div>
    <p class="anim-trigger fade-up">Sự phát triển tâm lý xã hội trong giai đoạn ấu nhi là một vũ điệu tinh tế 💃 giữa sự gắn bó 💞 và sự độc lập 🚀. Việc hiểu rõ những nền tảng này cho phép cha mẹ 👨‍👩‍👧‍👦 và các nhà giáo dục 🧑‍🏫 xây dựng những can thiệp tâm lý phù hợp, tạo ra một bệ phóng vững chắc cho sức khỏe tâm thần trong tương lai của trẻ 🌟.</p>
  `
];

const psychCh5HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb"><a href="#/home">Home</a> / <a href="#/psychology">Psychology</a> / <span>Chapter 5: Socioemotional Development in Infancy</span></div>
  <div class="article" id="bookContent"></div>
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="display:flex; align-items:center; gap:4px;">Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center;"> <span id="pageTotal"></span></div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;

export default psychCh5HTML;
export { psychCh5Pages };