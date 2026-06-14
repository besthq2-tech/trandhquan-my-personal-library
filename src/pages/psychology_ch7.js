const psychCh7Pages = [
  `
<div class="insight-box anim-trigger fade-left">
  <h3>📖 Góc Nhìn Chuyên Sâu: Sự Phát Triển Cảm Xúc Xã Hội Ở Trẻ Em</h3>
<div class="mermaid anim-trigger fade-up">
graph TD
    A[Môi Trường Xã Hội 🌍] --> B[Gia Đình 👨‍👩‍👧‍👦: Phong cách nuôi dạy]
    A --> C[Đồng Trang Lứa 👯: Áp lực & Tình bạn]
    B --> D[Sự Kiên Cường Bản Ngã 🛡️<br/>Ego Resilience]
    C --> D
    A --> E[Truyền Thông 📺: Định kiến & Khuôn mẫu]
    E --> D
    D --> F((Sự Phát Triển Cảm Xúc ❤️<br/>Toàn Diện))
    classDef main fill:#f9f9f9,stroke:#333,stroke-width:2px;
    class A,F main;
</div>
  <p>Chương này đi sâu vào các cơ chế tâm lý định hình sự phát triển xã hội của trẻ: từ các mô hình nuôi dạy con cái (parenting styles 👨‍👩‍👧‍👦) phức tạp, vai trò của sự kiên cường bản ngã (ego resilience 🛡️), cho đến các động lực học nhóm đồng trang lứa 👯 và sự hình thành định kiến xã hội 🚧. Việc hiểu rõ những yếu tố này đòi hỏi cái nhìn đa chiều về các thuyết tâm lý học phát triển.</p>
</div>

<h3 class="anim-trigger fade-up">🧭 1. Các Chiều Hướng và Phong Cách Nuôi Dạy Con (Parenting Dimensions)</h3>
<div class="mermaid anim-trigger fade-up">
graph TD
    Root[Các Chiều Hướng Nuôi Dạy Con 👨‍👩‍👧‍👦] --> W[Sự Ấm Áp / Tham Gia ☀️]
    Root --> C[Sự Kiểm Soát / Kỷ Luật 📏]
    
    W -- Cao --> H_W[Ấm áp Cao ☀️+]
    W -- Thấp --> L_W[Ấm áp Thấp ☀️-]
    
    C -- Cao --> H_C[Kiểm soát Cao 📏+]
    C -- Thấp --> L_C[Kiểm soát Thấp 📏-]
    
    H_W & H_C -.-> A[Có Uy Quyền 👑<br/>Hiệu quả nhất ✅]
    L_W & H_C -.-> B[Độc Đoán 😠<br/>Tuân thủ mù quáng ❌]
    H_W & L_C -.-> C1[Dễ Dãi 🧸<br/>Thiếu ranh giới ⚠️]
    L_W & L_C -.-> D[Bỏ Mặc 👻<br/>Thiếu hỗ trợ 💔]
    
    classDef style1 fill:#d1f2eb,stroke:#117a65,stroke-width:2px;
    classDef style2 fill:#fadbd8,stroke:#943126,stroke-width:2px;
    class A style1;
    class B,C1,D style2;
</div>
<p class="anim-trigger fade-up">Trong tâm lý học phát triển, nuôi dạy con cái được phân tích qua hai chiều hướng cốt lõi: <strong>Sự Ấm Áp/Tham Gia (Warmth/Involvement ☀️)</strong> và <strong>Sự Kiểm Soát (Control 📏)</strong>. Sự giao thoa của hai trục này tạo ra bốn phong cách cơ bản: Độc đoán (Authoritarian 😠), Có uy quyền (Authoritative 👑), Dễ dãi (Permissive 🧸) và Bỏ mặc (Uninvolved 👻).</p>

<p class="anim-trigger fade-up">Phong cách <em>Có uy quyền 👑</em> thường được đánh giá là hiệu quả nhất ✅ vì nó cân bằng giữa việc thiết lập ranh giới rõ ràng 📏 và duy trì sự hỗ trợ cảm xúc ☀️. Việc sử dụng hướng dẫn trực tiếp kết hợp với giải thích lý do giúp trẻ phát triển kỹ năng suy luận nhận thức 🧠, trái ngược với sự tuân thủ mù quáng trong phong cách độc đoán 😠.</p>

<svg class="ss-local-swing-svg anim-trigger svg-draw" viewBox="0 0 400 300" style="width: 100%; max-width: 400px; display: block; margin: 20px auto; background: #f8f9fa; border-radius: 8px;">
  <line x1="50" y1="150" x2="350" y2="150" stroke="#333" stroke-width="2" />
  <line x1="200" y1="20" x2="200" y2="280" stroke="#333" stroke-width="2" />
  
  <text x="360" y="155" font-size="12" fill="#333">Ấm áp (Cao ☀️)</text>
  <text x="5" y="155" font-size="12" fill="#333">Ấm áp (Thấp ❄️)</text>
  <text x="175" y="15" font-size="12" fill="#333">Kiểm soát (Cao 📏)</text>
  <text x="175" y="295" font-size="12" fill="#333">Kiểm soát (Thấp 🕊️)</text>

  <text x="250" y="80" font-size="14" font-weight="bold" fill="#2c3e50">Có uy quyền 👑</text>
  <text x="80" y="80" font-size="14" font-weight="bold" fill="#e74c3c">Độc đoán 😠</text>
  <text x="250" y="220" font-size="14" font-weight="bold" fill="#f39c12">Dễ dãi 🧸</text>
  <text x="80" y="220" font-size="14" font-weight="bold" fill="#7f8c8d">Bỏ mặc 👻</text>
  
  <path class="curve" d="M 200,150 Q 280,70 320,50" fill="none" stroke="#3498db" stroke-width="3" stroke-dasharray="5,5" />
</svg>
  `,
  `
<h3 class="anim-trigger fade-up">⚖️ 2. Hình Phạt, Củng Cố và Mô Hình Hóa Hành Vi</h3>
<div class="mermaid anim-trigger fade-up">
graph LR
    A[Hành Vi Của Trẻ 🏃] -->|Phản hồi| B{Sự Can Thiệp<br/>Của Cha Mẹ 🧑‍⚖️}
    
    B -->|Củng cố tích cực/tiêu cực ➕➖| C[Tăng Hành Vi Tốt 🌟]
    B -->|Hình phạt kịp thời ⏱️| D[Giảm Hành Vi Xấu 📉]
    B -->|Bạo lực/Đánh đòn 💥| E[Mô Hình Hóa Hành Vi<br/>Behavioral Modeling 🪞]
    
    E --> F[Trẻ học được:<br/>Bạo lực = Giải quyết xung đột 🥊]
    F --> G((Gia Tăng<br/>Hành Vi Hung Hăng 😡))
    
    classDef negative fill:#f5b7b1,stroke:#e74c3c;
    class E,F,G negative;
</div>
<p class="anim-trigger fade-up">Trái với niềm tin phổ biến rằng tâm lý học chỉ ủng hộ củng cố tích cực (positive reinforcement ➕), việc thay đổi hành vi hiệu quả thực chất đòi hỏi sự kết hợp tinh tế giữa củng cố tích cực, củng cố tiêu cực ➖ và hình phạt ⚖️. Tuy nhiên, hình phạt phải mang tính nhất quán và kịp thời (prompt ⏱️) để có hiệu quả tối ưu.</p>

<p class="anim-trigger fade-up">Hình phạt thể xác (spanking 💥) thường phản tác dụng do cơ chế <em>Mô Hình Hóa Hành Vi (Behavioral Modeling 🪞)</em>. Trẻ em quan sát và nội tâm hóa cách cha mẹ giải quyết sự thất vọng. Khi cha mẹ dùng bạo lực để kiểm soát, trẻ học được rằng bạo lực là công cụ giải quyết xung đột hợp lệ 🥊, dẫn đến sự gia tăng hành vi hung hăng 😡 thay vì tuân thủ.</p>

<h3 class="anim-trigger fade-up">🛡️ 3. Lạm Dụng, Bỏ Mặc và Sự Kiên Cường Bản Ngã (Ego Resilience)</h3>
<div class="mermaid anim-trigger fade-up">
graph TD
    A[Biến Cố Tâm Lý 🌩️] --> B[Lạm Dụng 💥<br/>Luôn có chủ đích]
    A --> C[Bỏ Mặc 👻<br/>Vô ý hoặc cố ý]
    
    B --> D[Hậu Quả Tâm Lý<br/>Nghiêm trọng 💔]
    C --> D
    
    D --> E{Sự Kiên Cường Bản Ngã 🛡️<br/>Ego Resilience}
    
    E -->|Thấp 📉| F[Khó Khăn Tâm Lý Lâu Dài 🌧️]
    E -->|Cao 📈| G[Phục Hồi & Thích Ứng 🌱<br/>Điều hòa nhận thức]
    
    classDef critical fill:#fcf3cf,stroke:#f1c40f,stroke-width:2px;
    class E critical;
</div>
<p class="anim-trigger fade-up">Cần phân biệt rõ giữa lạm dụng (luôn có chủ đích 💥) và bỏ mặc (có thể vô ý hoặc cố ý 👻). Hậu quả tâm lý của cả hai đều nghiêm trọng 💔, nhưng khả năng phục hồi của trẻ phụ thuộc lớn vào <strong>Sự kiên cường bản ngã (Ego Resilience 🛡️)</strong> - năng lực thích ứng linh hoạt và phục hồi sau các biến cố tâm lý. Ego resilience liên quan chặt chẽ đến sự điều hòa tâm lý nhận thức và khả năng vượt qua nghịch cảnh 🌱.</p>
  `,
  `
<h3 class="anim-trigger fade-up">👯 4. Động Lực Học Tình Bạn và Áp Lực Đồng Trang Lứa</h3>
<div class="mermaid anim-trigger fade-up">
graph TD
    A(Phát triển Tình Bạn theo Piaget 🧑‍🔬) --> B[Mầm non: Lợi ích cụ thể 🧸]
    A --> C[8-11 tuổi: Trung thành, thân mật 🤝]
    
    D(Áp Lực Đồng Trang Lứa 👥<br>Peer Influence) --> E[Các điều kiện gia tăng áp lực 📈]
    E --> F[1. Lo âu xã hội / Nhỏ tuổi 😰]
    E --> G[2. Bạn bè có địa vị xã hội cao 👑]
    E --> H[3. Tiêu chuẩn hành vi mơ hồ 🌫️]
    
    H --> I[Giải pháp: Thiết lập ranh giới rõ ràng 📏]
    
    classDef solution fill:#d4efdf,stroke:#27ae60;
    class I solution;
</div>
<p class="anim-trigger fade-up">Khái niệm tình bạn tiến hóa theo sự phát triển nhận thức của Piaget 🧑‍🔬. Ở tuổi mầm non, tình bạn dựa trên lợi ích chung cụ thể 🧸. Khi bước vào giai đoạn thao tác cụ thể (concrete operational) và thao tác hình thức (formal operational) từ 8-11 tuổi, tư duy trừu tượng phát triển, dẫn đến sự chú trọng vào các yếu tố tâm lý cốt lõi như <em>lòng trung thành 🛡️, sự tin tưởng 🤝 và tính thân mật ❤️</em>.</p>

<p class="anim-trigger fade-up">Áp lực đồng trang lứa (Peer Influence 👥) trở nên mạnh mẽ nhất dưới ba điều kiện: (1) Trẻ trẻ tuổi hơn hoặc có lo âu xã hội 😰, (2) Bạn bè có địa vị xã hội cao hơn (higher status 👑), và (3) Các tiêu chuẩn hành vi không rõ ràng (ambiguous standards 🌫️). Cha mẹ có thể can thiệp bằng cách thiết lập cấu trúc hành vi rành mạch 📏 để giảm tính mơ hồ.</p>

<div class="tradeoff-box anim-trigger scale-in">
  <div class="tradeoff-side tradeoff-pro">
    <h4>✅ Áp lực đồng trang lứa tích cực</h4>
    <p>Thúc đẩy cá nhân vươn lên 📈 khi nhóm bạn có tiêu chuẩn học tập 📚 hoặc đạo đức cao ⚖️. Nhu cầu thuộc về nhóm trở thành động lực phấn đấu mạnh mẽ và phát triển năng lực bản thân 🌟.</p>
  </div>
  <div class="tradeoff-side tradeoff-con">
    <h4>❌ Áp lực đồng trang lứa tiêu cực</h4>
    <p>Khuyến khích hành vi rủi ro (sử dụng chất kích thích 🚬, bắt nạt 👊) khi quy phạm nhóm lệch chuẩn. Khát khao hòa nhập lấn át tư duy phản biện 🧠 và ranh giới cá nhân 🚧.</p>
  </div>
</div>
  `,
  `
<h3 class="anim-trigger fade-up">😡 5. Các Loại Hình Hưng Hăng (Aggression Typologies)</h3>
<div class="mermaid anim-trigger fade-up">
graph LR
    A[Hành Vi Hung Hăng 😡] --> B{Phân Loại 🗂️}
    
    B -->|Phương tiện đạt mục đích 🎯| C[Hung Hăng Công Cụ 🛠️<br/>Instrumental]
    C --> C1[Tính toán, hướng đích 📈]
    C1 -.-> C2[Ví dụ: Chiến thắng thể thao 🏆]
    
    B -->|Mục đích hạ thấp người khác ⏬| D[Hung Hăng Thù Địch 😈<br/>Hostile]
    D --> D1[Bộc phát, phi lý trí 💥]
    D1 -.-> D2[Rủi ro bạo lực trưởng thành cao 🚨]
    
    classDef hostile fill:#fadbd8,stroke:#c0392b;
    class D,D1,D2 hostile;
</div>
<p class="anim-trigger fade-up">Phân loại hành vi hung hăng là một bước tiến quan trọng trong tâm lý học. Chúng ta phân biệt hai dạng chính: Hung hăng công cụ (Instrumental Aggression 🛠️) và Hung hăng thù địch (Hostile Aggression 😈).</p>

<p class="anim-trigger fade-up"><strong>Hung hăng công cụ 🛠️</strong> là việc sử dụng sự hung hăng như một phương tiện để đạt được mục tiêu cụ thể 🎯 (ví dụ: giành chiến thắng trong thể thao 🏆). Tính chất của nó là có tính toán 🧮 và hướng đích.</p>

<p class="anim-trigger fade-up">Ngược lại, <strong>Hung hăng thù địch 😈</strong> thường bộc phát 💥 và không có mục tiêu thực tế nào ngoài việc hạ thấp người khác ⏬ để nâng cao vị thế và cảm giác vượt trội của bản thân 👑. Những trẻ bộc lộ sự hung hăng thù địch thường đối mặt với rủi ro cao 🚨 trở thành người trưởng thành có khuynh hướng bạo lực.</p>

<div class="tradeoff-box anim-trigger scale-in">
  <div class="tradeoff-side tradeoff-pro">
    <h4>🛠️ Hung hăng công cụ (Trong thể thao/Cạnh tranh)</h4>
    <p>Được khuyến khích và coi là "sự quyết đoán cần thiết" 💪. Giúp cá nhân vượt qua trở ngại 🚧, tối ưu hóa hiệu suất thi đấu 🏃‍♂️ và đạt được mục tiêu tham vọng 🏆.</p>
  </div>
  <div class="tradeoff-side tradeoff-con">
    <h4>⚠️ Hung hăng công cụ (Trong quan hệ xã hội)</h4>
    <p>Dẫn đến thao túng tâm lý 🎭 và ép buộc người khác. Tiêu chuẩn đạo đức bị bóp méo ❌ khi chủ thể hành động theo niềm tin rằng mục đích biện minh cho phương tiện.</p>
  </div>
</div>
  `,
  `
<h3 class="anim-trigger fade-up">📺 6. Truyền Thông, Định Kiến và Khuôn Mẫu (Stereotypes)</h3>
<div class="mermaid anim-trigger fade-up">
graph TD
    A[Truyền Thông Xã Hội 📺] -->|Khai thác nguyên mẫu Jungian 🎭| B[Khuôn Mẫu 📦<br/>Stereotypes]
    B -->|Tiến hóa tiêu cực / Nội tâm hóa 🧠| C[Định Kiến 🚧<br/>Prejudice]
    
    C -->|Gây hại 💔| D[Thái độ thù địch, phân biệt ❌]
    
    E[Thuyết Tiếp Xúc 🤝<br/>Contact Hypothesis] --> F{Giải pháp giảm thiểu 🛠️}
    F --> G[Tăng tương tác giữa các nhóm 👥]
    F --> H[Mô hình hóa sự tôn trọng từ người lớn 👨‍🏫]
    
    G & H --> I((Phá Vỡ Định Kiến 🔨))
    
    classDef positive fill:#aed6f1,stroke:#2874a6;
    class E,F,G,H,I positive;
</div>
<p class="anim-trigger fade-up">Sự bùng nổ của truyền thông xã hội 📺 định hình mạnh mẽ nhận thức của trẻ. Theo Carl Jung, con người sử dụng các nguyên mẫu (archetypes 🎭) như một lối tắt nhận thức. Truyền thông thường khai thác các nguyên mẫu này, tạo ra các <em>khuôn mẫu (stereotypes 📦)</em> có thể gây hại nếu bị trẻ nội tâm hóa sớm 🧠.</p>

<p class="anim-trigger fade-up">Định kiến (Prejudice 🚧) là sự tiến hóa tiêu cực của khuôn mẫu, khi thái độ thù địch ❌ được áp đặt lên một nhóm (dựa trên chủng tộc 🌍, khuyết tật ♿, v.v.). Ví dụ, sự vắng bóng của người khuyết tật trên các phương tiện truyền thông củng cố định kiến vô thức về sự bình thường (normalcy 📏).</p>

<p class="anim-trigger fade-up">Để giảm thiểu định kiến, <em>Thuyết Tiếp xúc (Contact Hypothesis 🤝)</em> đề xuất việc tăng cường tương tác giữa các nhóm 👥. Tuy nhiên, sự tiếp xúc này chỉ thực sự phá vỡ định kiến 🔨 khi có sự hỗ trợ của người lớn thông qua việc mô hình hóa sự tôn trọng sự khác biệt 👨‍🏫.</p>
  `
];

const psychCh7HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb"><a href="#/home">Home</a> / <a href="#/psychology">Psychology</a> / <span>Chapter 7: Socioemotional Development in Childhood</span></div>
  <div class="article" id="bookContent"></div>
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="display:flex; align-items:center; gap:4px;">Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center;"> <span id="pageTotal"></span></div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;
export default psychCh7HTML;
export { psychCh7Pages };
