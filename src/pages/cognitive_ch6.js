export const cognitiveCh6Pages = [
  // PAGE 1: Encoding & Transfer
  `
  <div class="article-head anim-trigger fade-up">
    <h1><span class="pulse"></span> Quá Trình Trí Nhớ: Ghi Nhã, Lưu Trữ & Truy Xuất 🧠</h1>
    <p class="lede">Trí nhớ không phải là một chiếc máy quay video 📹 thu lại mọi thứ một cách hoàn hảo 💯. Đó là một hệ thống mang tính xây dựng 🏗️, có lỗi ❌, và liên tục thay đổi 🔄 mỗi khi bạn lấy nó ra 🎣.</p>
  </div>
  
  <div class="article-body">
    <div class="insight-box anim-trigger fade-left">
      <p><strong>📖 Mở đầu:</strong> Quá trình trí nhớ (Memory Processes) gồm 3 bước 🪜: <strong>Mã hóa (Encoding) ✍️</strong> -> <strong>Lưu trữ (Storage) 💾</strong> -> <strong>Truy xuất (Retrieval) 🎣</strong>. Nếu bạn không nhớ tên một người vừa gặp 🤷‍♂️, lỗi thường không nằm ở "truy xuất" (bạn quên 🗑️), mà là lỗi ở "mã hóa" (bạn chưa bao giờ thực sự đưa nó vào não ngay từ đầu 🚫).</p>
    </div>

    <h3 class="anim-trigger fade-up">✍️ Mã Hóa & Chuyển Đổi (Encoding & Transfer)</h3>
    <div class="mermaid anim-trigger fade-up">
    graph LR;
      A[Mã Hóa ✍️] --> B(Hình Ảnh 🖼️ - Visual);
      A --> C(Âm Thanh 🎵 - Acoustic);
      A --> D(Ngữ Nghĩa 📖 - Semantic);
      
      B -. Kém nhất 👎 .-> X((Trí nhớ ngắn ⏱️));
      C -. Tạm ổn 👌 .-> X;
      D -. Tốt nhất 👍 .-> Y((Trí nhớ Lâu dài 🏛️));
    </div>

    <p class="anim-trigger fade-up">Trong trí nhớ ngắn hạn ⏱️, chúng ta mã hóa chủ yếu bằng <em>âm thanh</em> (Acoustic 🎵). Đó là lý do khi nhớ số điện thoại "V M T" 🔢, bạn hay nhầm với "B P T" (nhầm âm 👂). Còn trong trí nhớ dài hạn 🏛️, chúng ta mã hóa bằng <em>ngữ nghĩa</em> (Semantic 📖). Đó là lý do bạn nhớ được ý chính của cuốn sách 📚 nhưng không nhớ được câu chữ chính xác 📝.</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>📅 Spaced Practice (Học giãn cách)</h4>
        <p>Học 1 tiếng/ngày trong 5 ngày 🗓️. Khi học giãn cách, giấc ngủ 😴 (REM và Slow-wave) giúp não củng cố (Consolidate 🧱) các nơ-ron 🕸️ và biến ký ức tạm thời thành vĩnh viễn 🏛️.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>📚 Massed Practice (Học nhồi nhét)</h4>
        <p>Học 5 tiếng liên tục ngay trước ngày thi 🥵. Cực kỳ hiệu quả để làm bài thi ngày hôm sau 📝, nhưng bạn sẽ quên sạch 🗑️ ngay sau khi ra khỏi phòng thi vì não không có thời gian củng cố 🧱❌.</p>
      </div>
    </div>
  </div>
  `,

  // PAGE 2: Retrieval
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🎣 Truy Xuất Thông Tin (Retrieval)</h3>
    <p class="anim-trigger fade-up">Làm thế nào não bộ tìm kiếm thông tin 🔍? Nhà tâm lý học Saul Sternberg đã làm một thí nghiệm kinh điển 🔬 để tìm hiểu cách Trí Nhớ Ngắn Hạn quét thông tin ⏱️.</p>

    <div class="ss-card anim-trigger scale-in">
      <div class="ss-card-head">
        <h4>🔬 Thí nghiệm Quét Trí Nhớ của Sternberg</h4>
      </div>
      <div class="ss-card-body">
        <p class="ss-caption">Bạn được xem một dãy số: <strong>[3, 9, 7, 4] 🔢</strong>. Sau đó tôi hỏi: "Số 9 có trong dãy không? 🤔". Bộ não bạn sẽ làm gì 🧠?</p>
        <ul class="curve-bullets">
          <li><strong>Parallel Processing (Song song) 🔀:</strong> Não nhìn vào cả 4 số cùng 1 lúc 👁️. Nếu vậy, thời gian trả lời phải như nhau ⏱️ bất kể dãy số dài bao nhiêu. (Sternberg chứng minh điều này <em>sai ❌</em>).</li>
          <li><strong>Serial Processing (Tuần tự) ➡️:</strong> Não quét lần lượt 3 -> 9 -> 7 -> 4 🔍. Dãy số càng dài 📏, thời gian phản hồi càng lâu 🐢. (Đúng! ✅). Hơn nữa, não quét <em>tới tận cùng (Exhaustive) 🏁</em> dãy số rồi mới đưa ra câu trả lời 🗣️, chứ không dừng lại ngay khi tìm thấy số 9 (Self-terminating 🛑).</li>
        </ul>
      </div>
    </div>

    <h4 class="anim-trigger fade-up" style="margin-top: 30px;">🏛️ Truy Xuất Từ Trí Nhớ Dài Hạn</h4>
    <p class="anim-trigger fade-up">LTM là một cái kho quá lớn 🏢 nên không thể quét tuần tự ➡️. Nó hoạt động dựa trên <strong>Availability (Tính sẵn có) 📦</strong> và <strong>Accessibility (Khả năng truy cập) 🔓</strong>. "Đầu lưỡi" 👅 (Tip of the tongue phenomenon) là khi thông tin có <em>sẵn</em> trong kho 📦, nhưng tạm thời mất khả năng <em>truy cập</em> 🔒 vì thiếu manh mối (cues 🔑).</p>
  </div>
  `,

  // PAGE 3: Forgetting
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🗑️ Tại Sao Chúng Ta Quên? (Forgetting)</h3>
    <p class="anim-trigger fade-up">Quên không phải là một lỗi của hệ thống ❌, mà là một tính năng dọn dẹp cần thiết 🧹. Có 2 lý thuyết chính về lý do quên 🤔:</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🌫️ Decay Theory (Thuyết Phai Mờ)</h4>
        <p>Nếu bạn không sử dụng một dấu vết thần kinh 🕸️ (engram), nó sẽ phai mờ dần theo thời gian ⏳. (Giống như đường mòn trong rừng 🌲 không ai đi sẽ bị cỏ mọc lấp mất 🌿).</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>💥 Interference Theory (Thuyết Nhiễu)</h4>
        <p>Thời gian không làm bạn quên ⏳❌, mà chính là <em>những thông tin khác 📚</em> chen vào làm bạn quên 🗑️.</p>
      </div>
    </div>

    <div class="ss-grid">
      <div class="ss-card anim-trigger fade-left" style="border-top: 4px solid #ff5f57;">
        <div class="ss-card-head">
          <h4>⬅️ Retroactive Interference (Nhiễu ngược - Cái Mới đá Cái Cũ)</h4>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption">Bạn học bài Tâm lý 🧠, sau đó học bài Lịch sử 📜. Khi thi Tâm lý, những kiến thức Lịch sử mới học lại "bay" vào đầu 🌪️ làm nhiễu kiến thức Tâm lý cũ 💥.</p>
        </div>
      </div>
      
      <div class="ss-card anim-trigger fade-right" style="border-top: 4px solid #febc2e;">
        <div class="ss-card-head">
          <h4>➡️ Proactive Interference (Nhiễu xuôi - Cái Cũ đá Cái Mới)</h4>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption">Bạn đổi mật khẩu điện thoại mới 📱. Nhưng mỗi lần mở máy, não bạn vẫn bắt ngón tay bấm mật khẩu cũ 👆. Cái cũ "tiến về phía trước" ➡️ để phá hoại cái mới 💥.</p>
        </div>
      </div>
    </div>
  </div>
  `,

  // PAGE 4: Constructive Nature
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🏗️ Bản Chất "Xây Dựng" Của Trí Nhớ (Constructive Memory)</h3>
    <p class="anim-trigger fade-up">Mỗi khi bạn nhớ lại một câu chuyện 📖, bạn không hề "phát lại" (replay) nó ▶️. Bạn đang <strong>tái tạo (reconstruct) 🏗️</strong> nó từ những mảnh ghép rời rạc 🧩, và trám vào những lỗ hổng bằng kinh nghiệm 📚, cảm xúc ❤️, và kỳ vọng hiện tại 🔮.</p>

    <div class="insight-box anim-trigger fade-left">
      <p><strong>💡 Thí nghiệm của Elizabeth Loftus:</strong> Cho mọi người xem một video hai chiếc xe va quệt 🚗💥🚗. Nếu hỏi "Chiếc xe chạy nhanh bao nhiêu khi chúng <em>đâm sầm (smashed) 💥</em> vào nhau?", người ta báo cáo tốc độ cao hơn 📈 và nói có nhìn thấy kính vỡ 🔍 (dù thực tế không có ❌). Nhưng nếu đổi từ "smashed" thành <em>"chạm (hit) 🤏"</em>, trí nhớ của họ lập tức thay đổi 🔄. Ngôn ngữ 🗣️ có thể cấy ghép ký ức giả 👽!</p>
    </div>

    <div class="ss-card anim-trigger scale-in" style="margin-top: 20px;">
      <div class="ss-card-head">
        <h4>📸 Trí Nhớ Đèn Chớp (Flashbulb Memory)</h4>
      </div>
      <div class="ss-card-body">
        <p class="ss-caption">Bạn có nhớ mình đang làm gì khi nghe tin máy bay đâm vào tháp đôi 11/9 🏢✈️ (hoặc tin Covid bùng phát 🦠)? Những sự kiện gây sốc về cảm xúc 😱 thường được não ghi lại rực rỡ như một bức ảnh flash 📸. <br><strong>Nhưng sự thật là:</strong> Các nghiên cứu cho thấy, dù chúng ta cảm thấy CỰC KỲ tự tin 💪 về các ký ức này, độ chính xác của chúng vẫn suy giảm 📉 theo thời gian y hệt như những ký ức bình thường 🤷‍♂️.</p>
      </div>
    </div>
  </div>
  `,

  // PAGE 5: Context Effects
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🌍 Tác Động Của Bối Cảnh (Context Effects)</h3>
    <p class="anim-trigger fade-up">Não bộ của chúng ta giống như một cỗ máy liên kết 🔗. Khi bạn mã hóa một từ vựng ✍️, bạn không chỉ ghi nhớ từ đó 📝, bạn ghi nhớ luôn cả mùi hương 👃, cảm xúc ❤️ và căn phòng 🚪 lúc bạn học nó.</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🌍 Context-Dependent Memory (Bối cảnh môi trường)</h4>
        <p>Thí nghiệm của Baddeley 🔬: Cho các thợ lặn học một danh sách từ trên bờ 🏖️ và dưới nước 🌊. Kết quả? Những người học dưới nước sẽ nhớ tốt hơn nếu bài kiểm tra diễn ra dưới nước 📝🌊. Sự phù hợp về không gian giúp gợi nhớ 🔑.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>❤️ State-Dependent Memory (Trạng thái nội tâm)</h4>
        <p>Nếu bạn học bài khi đang uống nhiều cà phê ☕ (hưng phấn ⚡), bạn sẽ làm bài thi tốt nhất nếu bạn cũng uống lượng cà phê tương tự 📝☕. Nếu bạn học khi buồn 😢, bạn dễ nhớ lại kiến thức đó hơn khi bạn buồn.</p>
      </div>
    </div>

    <div class="insight-box anim-trigger fade-up" style="margin-top: 20px;">
      <p><strong>🧠 Encoding Specificity Principle (Nguyên lý Đặc thù Mã hóa):</strong> Tóm lại, những gì được gọi lại (retrieval 🎣) phụ thuộc chặt chẽ 🔗 vào những gì diễn ra ở bước mã hóa (encoding ✍️). Muốn thi tốt ở giảng đường lớn 🏛️, hãy mô phỏng việc học trong một môi trường tương tự 🏫.</p>
    </div>

    <div style="margin-top: 40px; text-align: center;">
      <a class="button primary" href="#/cognitive">Hoàn thành Chương 6 & Trở về Index 🏠</a>
    </div>
  </div>
  `
];

const cognitiveCh6HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb">
    <a href="#/home">Home</a> / 
    <a href="#/cognitive">Cognitive Psychology</a> / 
    <span>Ch 6: Memory Processes</span>
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

export default cognitiveCh6HTML;
