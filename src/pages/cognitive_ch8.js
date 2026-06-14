export const cognitiveCh8Pages = [
  // PAGE 1: Declarative vs Procedural & Concepts
  `
  <div class="article-head anim-trigger fade-up">
    <h1><span class="pulse"></span> Tổ Chức Kiến Thức Trong Tâm Trí 🗂️🧠</h1>
    <p class="lede">Làm thế nào bạn biết một con chim cánh cụt 🐧 vẫn là chim 🐦 dù nó không biết bay ❌✈️? Kiến thức trong đầu bạn không bị ném lộn xộn vào một góc 🗑️, nó được tổ chức một cách tinh vi 🕸️ và phân cấp cực kỳ hiệu quả 📊.</p>
  </div>
  
  <div class="article-body">
    <div class="insight-box anim-trigger fade-left">
      <p><strong>📖 Mở đầu:</strong> Có hai kho chứa kiến thức chính trong não bộ 🧠: <strong>Declarative Knowledge</strong> (Kiến thức Tường minh 💡 - Bạn biết RẰNG chiếc xe đạp có 2 bánh 🚲) và <strong>Procedural Knowledge</strong> (Kiến thức Kỹ năng 🛠️ - Bạn biết CÁCH để đạp chiếc xe đó 🚴).</p>
    </div>

    <h3 class="anim-trigger fade-up">💡 Tổ Chức Kiến Thức Tường Minh (Declarative)</h3>
    <p class="anim-trigger fade-up">Khái niệm cơ bản nhất của tổ chức kiến thức là <em>Concept</em> (Khái niệm 💡) và <em>Category</em> (Phân loại 🗂️).</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🎯 1. Lý thuyết Đặc điểm cốt lõi (Defining Features)</h4>
        <p>Để là một con chim 🐦, nó PHẢI có lông vũ 🪶, có mỏ 👄, đẻ trứng 🥚. Rất logic 🧮 nhưng thực tế lại gặp rắc rối: Con đà điểu không biết bay ❌✈️ có phải là chim không 🤔? Có ✅. Vậy "biết bay" không phải đặc điểm cốt lõi. Lý thuyết này quá cứng nhắc 🧱.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🌟 2. Lý thuyết Nguyên mẫu (Prototype Theory)</h4>
        <p>Eleanor Rosch đề xuất não chúng ta lưu một <em>Nguyên mẫu (Prototype) 🌟</em> - đại diện hoàn hảo nhất cho một nhóm 🏆. (Ví dụ: Nhắc đến chim 🐦, bạn nghĩ ngay đến chim sẻ/chim bồ câu 🕊️, chứ không phải đà điểu hay cánh cụt 🐧). Cái gì càng giống Nguyên mẫu thì bạn càng nhận diện nó nhanh hơn ⚡.</p>
      </div>
    </div>
  </div>
  `,

  // PAGE 2: Semantic Networks & Schemas
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🕸️ Mô Hình Mạng Lưới Ngữ Nghĩa (Semantic Networks)</h3>
    <p class="anim-trigger fade-up">Thay vì những cái hộp cô lập 📦, kiến thức là một mạng nhện khổng lồ 🕸️ các Khái niệm (Nodes 🔴) nối với nhau bằng các Mối quan hệ (Links 🔗).</p>

    <div class="mermaid anim-trigger fade-up">
    graph TD;
      A((Động Vật 🦁)) -- Có --> B(Da 🖐️);
      A -- Có thể --> C(Thở 🌬️);
      A -- Là loại --> D((Chim 🐦));
      D -- Có --> E(Lông vũ 🪶);
      D -- Là loại --> F((Chim mào vàng 🐥));
      
      style D fill:#f97316,color:#fff;
      style F fill:#28c840,color:#fff;
    </div>

    <p class="anim-trigger fade-up">Theo mô hình phân cấp của Collins & Quillian 📊, kiến thức được lưu ở mức cao nhất có thể để tiết kiệm dung lượng (Cognitive Economy 💾). Não ghi "Có Da" 🖐️ ở mức "Động vật" 🦁, nên nó không cần phải ghi "Có da" vào thẻ của "Chim mào vàng" 🐥 nữa. Mất bao lâu để trả lời "Chim mào vàng có da không? 🤔" -> Lâu hơn ⏱️ trả lời "Chim mào vàng có lông vũ không? 🤔", vì não phải leo lên nhiều bậc hơn trên mạng lưới 🧗.</p>

    <div class="ss-card anim-trigger scale-in" style="margin-top: 20px;">
      <div class="ss-card-head">
        <h4>📋 Lược đồ (Schemas) & Kịch bản (Scripts)</h4>
      </div>
      <div class="ss-card-body">
        <ul class="curve-bullets">
          <li><strong>Schema (Khuôn mẫu) 🖼️:</strong> Khuôn mẫu tư duy về một vật. (Schema về "Bếp" 🍳 chứa tủ lạnh 🧊, lò vi sóng ☢️, bồn rửa 🚰). Nếu tôi kể về cái bếp mà thiếu tủ lạnh, não bạn sẽ tự động "điền" nó vào ✏️, dẫn đến <em>ký ức sai ❌</em>.</li>
          <li><strong>Script (Kịch bản) 🎬:</strong> Schema về một sự kiện theo thời gian ⏱️. (Script "Đi ăn nhà hàng" 🍽️ = Bước vào 🚶 -> Lấy menu 📜 -> Gọi món 🗣️ -> Ăn 😋 -> Tính tiền 💰). Nhờ script, bạn biết cách hành xử trong nhà hàng mà không cần ai dạy lại mỗi lần 🧠.</li>
        </ul>
      </div>
    </div>
  </div>
  `,

  // PAGE 3: Procedural Knowledge
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🛠️ Tổ Chức Kiến Thức Kỹ Năng (Procedural Knowledge)</h3>
    <p class="anim-trigger fade-up">Bạn không thể giải thích rõ ràng cách thắt dây giày 👟 cho một người khác bằng lời nói 🗣️❌. Đó là kiến thức Kỹ năng (Procedural 🛠️), được thực thi thông qua các <strong>Sự sản xuất (Productions) ⚙️</strong>.</p>

    <div class="insight-box anim-trigger fade-left">
      <p><strong>🚦 IF-THEN Rules (Quy tắc Nếu-Thì):</strong> Kiến thức kỹ năng thường được não lưu trữ dưới dạng các quy tắc sản xuất ⚙️.<br>
      <em>IF</em> (Đèn đỏ 🔴) AND (Đang lái xe 🚗) -> <em>THEN</em> (Đạp phanh 🛑).<br>
      Các quy tắc này được liên kết thành các chuỗi hành động dài (Production Systems ⛓️).</p>
    </div>

    <div class="ss-card anim-trigger scale-in" style="margin-top: 20px;">
      <div class="ss-card-head">
        <h4>🪝 Sự Lặp Lại Khởi Động (Priming)</h4>
      </div>
      <div class="ss-card-body">
        <p class="ss-caption">Đây là một dạng kiến thức ẩn (Nondeclarative 👻). Việc bạn tiếp xúc với một từ trước đó (Mồi 🪝) khiến các Nodes 🔴 liên quan trong mạng lưới ngữ nghĩa sáng lên 💡, giúp bạn phản ứng nhanh hơn ⚡ vào lần sau. <br>Ví dụ: Vừa nghe từ "BÁNH" 🥖, bạn sẽ hoàn thành từ "M _ _" thành "MỲ" 🍜 nhanh hơn rất nhiều so với "MÈO" 🐈.</p>
      </div>
    </div>
  </div>
  `,

  // PAGE 4: Integrative Models
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🤝 Mô Hình Tích Hợp: ACT-R & Connectionism</h3>
    <p class="anim-trigger fade-up">Làm thế nào để hợp nhất cả Declarative 💡 và Procedural 🛠️ knowledge vào một siêu mô hình máy tính 💻🤖?</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🧠 ACT-R (Adaptive Control of Thought - Rational)</h4>
        <p>Của John Anderson 👤. Mô hình này tích hợp cả mạng lưới ngữ nghĩa (Declarative 💡) và các quy tắc If-Then (Procedural 🛠️). Khi bạn thực hành một kỹ năng (Ví dụ: lái xe 🚗), kiến thức Declarative (nhớ luật giao thông 📖) dần dần bị "biên dịch" thành Procedural (Tự động đạp phanh 🛑), một quá trình gọi là <strong>Proceduralization (Quy trình hóa) 🔄</strong>.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>⚡ Connectionist Model (Mô hình PDP)</h4>
        <p>Mô hình Xử lý phân tán song song 🕸️. Não không chứa các Node "Chim" 🐦 hay "Bay" ✈️. Nó chỉ chứa các nơ-ron đơn giản 🧬. Khái niệm "Chim" là sự sáng lên <em>cùng lúc (pattern of activation) 💡</em> của hàng ngàn nơ-ron rải rác. Mô hình này giải thích được tính dẻo dai của não 🌱: Hỏng vài nơ-ron 💥 thì mô hình tổng thể vẫn không sụp đổ 🏰.</p>
      </div>
    </div>

    <div style="margin-top: 40px; text-align: center;">
      <a class="button primary" href="#/cognitive">Hoàn thành Chương 8 & Trở về Index 🏠</a>
    </div>
  </div>
  `
];

const cognitiveCh8HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb">
    <a href="#/home">Home</a> / 
    <a href="#/cognitive">Cognitive Psychology</a> / 
    <span>Ch 8: Organization of Knowledge</span>
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

export default cognitiveCh8HTML;
