export const cognitiveCh9Pages = [
  // PAGE 1: What is Language
  `
  <div class="article-head anim-trigger fade-up">
    <h1><span class="pulse"></span> Ngôn Ngữ (Language) 🗣️</h1>
    <p class="lede">Ngôn ngữ là phát minh vĩ đại nhất của loài người 🌟, là công cụ cho phép bộ não 🧠 của tôi truyền đạt một ý nghĩ phức tạp 🤔 thẳng vào bộ não của bạn, chỉ bằng cách dao động các phân tử không khí 🌬️.</p>
  </div>
  
  <div class="article-body">
    <div class="insight-box anim-trigger fade-left">
      <p><strong>📖 Mở đầu:</strong> Không phải hệ thống giao tiếp nào cũng là ngôn ngữ 🗣️❌ (ví dụ: tiếng sủa của chó 🐕). Để được gọi là Ngôn ngữ, nó phải có 5 đặc tính ⭐: Mang tính giao tiếp (Communicative 🤝), Tùy ý (Arbitrarily symbolic 🎲 - âm thanh "Chó" không hề giống con chó), Cấu trúc thường xuyên (Regularly structured 🏗️), Có cấu trúc ở nhiều cấp độ 🏢, và Quan trọng nhất: <strong>Sáng tạo (Generative) ✨</strong> - bạn có thể tạo ra vô hạn ♾️ các câu mới từ một lượng từ vựng hữu hạn 📚.</p>
    </div>

    <h3 class="anim-trigger fade-up">🧱 Các Thành Phần Cơ Bản Của Ngôn Ngữ</h3>
    <div class="mermaid anim-trigger fade-up">
    graph TD;
      A[Ngôn Ngữ 🗣️] --> B[Phoneme 🎵<br>Âm Vị];
      A --> C[Morpheme 🧩<br>Hình Vị];
      A --> D[Syntax 🏗️<br>Cú Pháp];
      A --> E[Semantics 📖<br>Ngữ Nghĩa];
      
      B --> B1(Đơn vị âm thanh nhỏ nhất 🎵<br>VD: âm /c/, /a/);
      C --> C1(Đơn vị nhỏ nhất có ý nghĩa 🧩<br>VD: từ 'dog', hậu tố '-s');
      D --> D1(Quy tắc sắp xếp câu 📏);
      E --> E1(Ý nghĩa của từ và câu 💡);
    </div>
  </div>
  `,

  // PAGE 2: Comprehension & Reading
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">📖 Đọc: Quá Trình Từ Dưới Lên & Từ Trên Xuống</h3>
    <p class="anim-trigger fade-up">Đọc 📖 không phải là một quá trình tự nhiên như nói 🗣️ (trẻ em tự biết nói 👶, nhưng phải đi học mới biết đọc 🏫). Nó đòi hỏi sự phân bổ chú ý cực kỳ tinh vi 🎯.</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>⬆️ Bottom-up (Từ dưới lên)</h4>
        <p>Bắt đầu từ việc nhìn đường nét ➖ -> Nhận diện chữ cái 🅰️ -> Ráp thành từ (Morpheme) 🧩 -> Ráp thành câu (Syntax) 🏗️ -> Hiểu nghĩa (Semantics) 💡.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>⬇️ Top-down (Từ trên xuống)</h4>
        <p>Sử dụng kiến thức nền 📚 và ngữ cảnh 🖼️ để đoán từ 🤔. Đây là lý do bạn có thể đọc hiểu một đoạn văn bị viết sai chính tả ❌ hoặc thiếu chữ: <em>"B4n c0 th3 d0c du0c d04n n4y kh0ng?"</em> 🤯. (Hiệu ứng ưu thế từ - Word superiority effect 🏆).</p>
      </div>
    </div>

    <div class="ss-card anim-trigger scale-in" style="margin-top: 20px;">
      <div class="ss-card-head">
        <h4>👀 Chuyển Động Mắt Khi Đọc (Saccades & Fixations)</h4>
      </div>
      <div class="ss-card-body">
        <p class="ss-caption">Bạn nghĩ mắt mình lướt trơn tru 🌊 trên trang giấy? Không ❌. Mắt bạn nhảy cóc (<strong>Saccades 🐸</strong>) rất nhanh ⚡, và sau đó dừng lại (<strong>Fixations 🛑</strong>) để chụp ảnh các từ 📸. Bạn chỉ thực sự thu nhận thông tin khi mắt dừng lại (chiếm 90% thời gian đọc ⏱️). Nếu đoạn văn quá khó 😓, mắt bạn sẽ nhảy ngược lại (Regressions ⏪) để đọc lại.</p>
      </div>
    </div>
  </div>
  `,

  // PAGE 3: Comprehension & Syntax
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">💡 Hiểu Ngữ Nghĩa & Cú Pháp (Semantics and Syntax) 🏗️</h3>
    <p class="anim-trigger fade-up">Sự kỳ diệu ✨ của não bộ 🧠 là nó xử lý Ngữ pháp (Syntax 🏗️) và Ngữ nghĩa (Semantics 💡) một cách độc lập nhưng đồng thời ⏳.</p>

    <div class="insight-box anim-trigger fade-left">
      <p><strong>🗣️ Câu nói nổi tiếng của Chomsky:</strong> <em>"Colorless green ideas sleep furiously" 🟢💤 (Những ý tưởng màu xanh không màu ngủ một cách giận dữ 😡).</em><br>
      Về mặt Cú pháp (Syntax 🏗️), câu này hoàn hảo ✅. Về mặt Ngữ nghĩa (Semantics 💡), nó hoàn toàn vô nghĩa ❌. Điều này chứng minh Cú pháp và Ngữ nghĩa là hai hệ thống riêng biệt 🔀 trong tâm trí.</p>
    </div>

    <h4 class="anim-trigger fade-up" style="margin-top: 30px;">🔍 Phân Tích Cú Pháp (Parsing)</h4>
    <p class="anim-trigger fade-up">Khi nghe một câu 👂, não bạn lập tức phân tích nó thành Cụm danh từ (Noun Phrase) và Cụm động từ (Verb Phrase) 🧩. Tuy nhiên, có những <strong>Câu đánh lừa (Garden Path Sentences 🛣️)</strong> khiến hệ thống phân tích của não bị sập bẫy 🪤.</p>
    
    <div class="ss-card anim-trigger scale-in" style="margin-top: 10px;">
      <div class="ss-card-body" style="text-align: center; font-style: italic; font-size: 1.1rem; padding: 20px;">
        "The old man the boat." 👴⛵
      </div>
      <p class="ss-caption" style="margin-top: 10px;">Lúc đầu 1️⃣, não bạn tưởng "The old man" (Ông già 👴) là Chủ ngữ (Noun Phrase). Nhưng khi đọc đến cuối, câu bị thiếu động từ ❌! Bạn phải quay lại ⏪ phân tích lại 2️⃣: "The old" (Những người già 🧓👴) là Chủ ngữ, "man" (vận hành ⚙️) là Động từ, "the boat" (chiếc thuyền ⛵) là Tân ngữ. Dịch: "Những người già vận hành chiếc thuyền."</p>
    </div>

    <div style="margin-top: 40px; text-align: center;">
      <a class="button primary" href="#/cognitive">Hoàn thành Chương 9 & Trở về Index 🏠</a>
    </div>
  </div>
  `
];

const cognitiveCh9HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb">
    <a href="#/home">Home</a> / 
    <a href="#/cognitive">Cognitive Psychology</a> / 
    <span>Ch 9: Language</span>
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

export default cognitiveCh9HTML;
