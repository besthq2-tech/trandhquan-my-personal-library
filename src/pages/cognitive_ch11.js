export const cognitiveCh11Pages = [
  // PAGE 1: Problem Solving Cycle & Types
  `
  <div class="article-head anim-trigger fade-up">
    <h1><span class="pulse"></span> Giải Quyết Vấn Đề & Sáng Tạo 🧩✨</h1>
    <p class="lede">Làm thế nào để di chuyển từ trạng thái hiện tại (Bạn đang đói 😫) đến mục tiêu (Có đồ ăn 🍔) khi bạn không biết phải làm gì 🤷? Đó là toàn bộ bản chất của việc Giải Quyết Vấn Đề 🧩.</p>
  </div>
  
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🔄 Chu Trình Giải Quyết Vấn Đề (Problem-Solving Cycle)</h3>
    <div class="mermaid anim-trigger fade-up">
    graph TD;
      A[1. Nhận diện vấn đề 🔍] --> B[2. Định nghĩa vấn đề 📝];
      B --> C[3. Lập chiến lược ♟️];
      C --> D[4. Tổ chức thông tin 🗂️];
      D --> E[5. Phân bổ nguồn lực 💰];
      E --> F[6. Giám sát quá trình 👁️];
      F --> G[7. Đánh giá kết quả 📊];
      G -. Nếu thất bại ❌ .-> A;
    </div>
    <p class="anim-trigger fade-up">Đây không phải là một đường thẳng ➖. Những người giải quyết vấn đề xuất sắc 🏆 thường dành cực kỳ nhiều thời gian ⏱️ (Phân bổ nguồn lực 💰) cho bước <em>Định nghĩa vấn đề (Planning 📝)</em> thay vì lao ngay vào giải quyết (Execution 🏃).</p>

    <h4 class="anim-trigger fade-up" style="margin-top: 30px;">⚖️ Hai Loại Vấn Đề (Types of Problems)</h4>
    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>📐 Vấn đề có cấu trúc rõ ràng (Well-structured)</h4>
        <p>Có trạng thái khởi đầu 🏁, mục tiêu 🎯 và các quy tắc rõ ràng 📜. (Ví dụ: Chơi cờ vua ♟️, giải toán Toán học 🧮). Chúng ta thường dùng thuật toán (Algorithms ⚙️) hoặc các lối tắt (Heuristics ⚡) như <em>Means-ends analysis</em> (Phân tích phương tiện-mục đích: Liên tục tìm cách thu hẹp khoảng cách 📏 giữa hiện tại và mục tiêu).</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🌫️ Vấn đề cấu trúc mờ (Ill-structured) & Sự Bừng Tỉnh (Insight 💡)</h4>
        <p>Không có đường dẫn rõ ràng đến mục tiêu 🛣️❌. (Ví dụ: Làm sao để có người yêu 💞? Viết một cuốn tiểu thuyết thế nào ✍️?). Với loại này, việc suy nghĩ phân tích từng bước 👣 thường thất bại ❌. Bạn cần một <strong>Insight (Sự bừng tỉnh - Khoảnh khắc Aha! 💡)</strong>: Đột nhiên nhìn thấy vấn đề ở một cấu trúc hoàn toàn mới ✨.</p>
      </div>
    </div>
  </div>
  `,

  // PAGE 2: Obstacles & Aids
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🚧 Rào Cản Và Trợ Thủ Giải Quyết Vấn Đề 🤝</h3>

    <div class="ss-grid">
      <div class="ss-card anim-trigger fade-left" style="border-top: 4px solid #ff5f57;">
        <div class="ss-card-head">
          <h4>🚧 Rào Cản: Mental Set & Fixation</h4>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption"><strong>Mental Set (Lối mòn tư duy 🛤️):</strong> Bạn cứ dùng mãi một cách giải cũ 👴 vì nó từng hiệu quả trong quá khứ 🕰️, dù bây giờ có cách khác nhanh hơn ⚡.</p>
          <p class="ss-caption"><strong>Functional Fixedness (Sự cố định chức năng 🔒):</strong> Không thể thấy các công dụng khác của một vật 👁️❌. (Ví dụ: Bạn cần đóng đinh 🔨 nhưng không có búa. Cạnh bạn có cái kềm 🗜️ nhưng bạn không nghĩ ra việc dùng kềm để gõ đinh vì nghĩ kềm chỉ để kẹp 🔒).</p>
        </div>
      </div>
      
      <div class="ss-card anim-trigger fade-right" style="border-top: 4px solid #28c840;">
        <div class="ss-card-head">
          <h4>🤝 Trợ Thủ: Sự ấp ủ (Incubation 🥚)</h4>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption">Khi bị bế tắc (Fixated 🚧), giải pháp tốt nhất là... bỏ đi làm việc khác 🚶. Đi ngủ 😴, đi tắm 🛁, hoặc đi dạo 🌳. Trong lúc đó, <em>Sự ấp ủ (Incubation 🥚)</em> diễn ra: Bề mặt ý thức nghỉ ngơi 🏖️, nhưng tiềm thức 🌊 vẫn tiếp tục rà soát mạng lưới ngữ nghĩa 🕸️ để tìm kiếm sự kết nối mới 🔗. Đây là lúc các khoảnh khắc "Aha! 💡" thường xuất hiện nhất.</p>
        </div>
      </div>
    </div>

    <div class="insight-box anim-trigger fade-up" style="margin-top: 20px;">
      <p><strong>🔄 Chuyển giao kiến thức (Transfer 🚚):</strong> Có hai loại. <em>Negative Transfer (Chuyển giao tiêu cực ❌)</em> xảy ra khi kiến thức cũ 👴 cản trở việc học mới 👶 (Biết lái xe số sàn làm bạn hay đạp nhầm côn khi lái số tự động 🚗). <em>Positive Transfer (Chuyển giao tích cực ✅)</em> là khi kiến thức cũ giúp giải quyết vấn đề mới (Biết tiếng Latin 🏛️ giúp học tiếng Pháp dễ hơn 🇫🇷). Một loại Positive Transfer mạnh nhất là dùng <strong>Phép Loại Suy (Analogies ⚖️)</strong>: Chuyển cấu trúc từ một lĩnh vực đã biết sang lĩnh vực chưa biết 🌉.</p>
    </div>
  </div>
  `,

  // PAGE 3: Expertise & Creativity
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🎓 Chuyên Gia và Sự Sáng Tạo (Expertise & Creativity) ✨</h3>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>👶 Người mới (Novices)</h4>
        <p>Tổ chức kiến thức theo bề mặt 🌊. Khi nhìn các bài tập vật lý 🧲, họ nhóm các bài có chung "Mặt phẳng nghiêng" 📐 hoặc "Ròng rọc" ⚙️ lại với nhau. Họ dùng tư duy ngược ⏪ (Từ mục tiêu lùi về dữ kiện hiện tại) để giải.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🧙‍♂️ Chuyên gia (Experts)</h4>
        <p>Tổ chức kiến thức theo nguyên lý sâu xa (Deep structure 🕳️). Họ nhóm các bài theo "Định luật bảo toàn năng lượng" ⚡ dù hình vẽ có là ròng rọc hay mặt phẳng nghiêng 📐. Họ dùng tư duy xuôi ⏩ (Từ dữ kiện suy thẳng ra kết quả 🎯).</p>
      </div>
    </div>

    <h4 class="anim-trigger fade-up" style="margin-top: 30px;">✨ Sự Sáng Tạo (Creativity)</h4>
    <p class="anim-trigger fade-up">Sáng tạo không chỉ là "mới mẻ" 🆕, nó phải "hữu ích" 🛠️. Một phát minh điên rồ 🤪 nhưng không giải quyết được gì thì không được gọi là sáng tạo ❌.</p>

    <div class="ss-card anim-trigger scale-in" style="margin-top: 20px;">
      <div class="ss-card-head">
        <h4>🌟 Đặc Điểm Của Người Sáng Tạo (Sternberg)</h4>
      </div>
      <div class="ss-card-body">
        <ul class="curve-bullets">
          <li><strong>📈 Mua rẻ, Bán đắt (Investment Theory):</strong> Họ dám theo đuổi những ý tưởng mà đám đông đang chê cười 📉 (mua rẻ), phát triển nó 🪴, rồi thuyết phục mọi người tin theo 📈 (bán đắt).</li>
          <li><strong>🔥 Động lực nội tại (Intrinsic motivation):</strong> Làm vì đam mê ❤️‍🔥 chứ không phải vì tiền thưởng 💰 (Tiền thưởng thực chất có thể giết chết sự sáng tạo 🔪).</li>
          <li><strong>🎇 Tư duy phân kỳ (Divergent thinking):</strong> Khả năng tạo ra vô số câu trả lời khác nhau 🎆 cho 1 câu hỏi mở ❓ (Thay vì tư duy hội tụ - Convergent thinking 🎯: Đi tìm 1 đáp án đúng duy nhất 1️⃣).</li>
        </ul>
      </div>
    </div>

    <div style="margin-top: 40px; text-align: center;">
      <a class="button primary" href="#/cognitive">Hoàn thành Chương 11 & Trở về Index 🏠</a>
    </div>
  </div>
  `
];

const cognitiveCh11HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb">
    <a href="#/home">Home</a> / 
    <a href="#/cognitive">Cognitive Psychology</a> / 
    <span>Ch 11: Problem Solving</span>
  </div>
  
  <div class="article" id="bookContent">
    <!-- Pages will be injected here by initBookPagination -->
  </div>
  
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="font-family: var(--font-mono); font-size: 12px; color: var(--muted); display: flex; align-items: center; gap: 4px;">
      Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center; border: 1px solid var(--line); border-radius: 4px; padding: 2px; background: var(--paper);"> <span id="pageTotal"></span>
    </div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;

export default cognitiveCh11HTML;
