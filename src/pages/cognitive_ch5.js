export const cognitiveCh5Pages = [
  // PAGE 1: Measuring Memory
  `
  <div class="article-head anim-trigger fade-up">
    <h1><span class="pulse"></span> Trí Nhớ: Các Mô Hình & Phương Pháp Nghiên Cứu 💾🔬</h1>
    <p class="lede">Làm thế nào bạn biết mình "nhớ" một thứ gì đó 🤔? Trí nhớ không phải là một ngăn kéo chứa đầy những bức ảnh cũ 🗄️, nó là một quá trình phức tạp ⚙️ và chia thành nhiều loại khác nhau 🗂️.</p>
  </div>
  
  <div class="article-body">
    <div class="insight-box anim-trigger fade-left">
      <p><strong>📖 Câu chuyện mở đầu:</strong> Bạn có thể lái xe về nhà trong vô thức 🚗 (Implicit memory 👻), nhưng bạn lại phải vắt óc để nhớ thủ đô của Canada là gì 🇨🇦 (Explicit memory 💡). Trí nhớ không chỉ có một loại, và vì vậy, các nhà tâm lý học phải dùng những "chiếc thước đo" 📏 khác nhau để đo lường chúng 📊.</p>
    </div>

    <h3 class="anim-trigger fade-up">📏 Các Nhiệm Vụ Đo Lường Trí Nhớ</h3>
    
    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>💡 1. Trí nhớ Tường minh (Explicit Memory)</h4>
        <p>Việc nhớ lại có chủ ý và có ý thức 🧘. Bất kỳ lúc nào bạn "cố gắng" để nhớ điều gì đó 🤔, bạn đang dùng trí nhớ tường minh. Có hai bài test chính 📝:<br>
        - <strong>Recall (Gợi nhớ) 🗣️:</strong> Tạo ra câu trả lời từ não bộ (ví dụ: Thi tự luận ✍️). Rất khó 😓.<br>
        - <strong>Recognition (Nhận diện) 👀:</strong> Chọn câu trả lời đúng từ các lựa chọn có sẵn (ví dụ: Thi trắc nghiệm MCQ 🔠). Dễ hơn vì có manh mối 🔎.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>👻 2. Trí nhớ Ẩn (Implicit Memory)</h4>
        <p>Việc sử dụng thông tin trong quá khứ 🕰️ để tác động đến hành vi hiện tại 🏃 mà không có nhận thức ý thức 🙈. Ví dụ: Bạn học đánh máy ⌨️. Bạn không thể vẽ lại bàn phím (Explicit kém ❌), nhưng tay bạn tự động gõ đúng phím khi cần (Implicit tốt ✅). Thường đo bằng <em>Word-completion task</em> (Hoàn thành từ 📝).</p>
      </div>
    </div>
  </div>
  `,

  // PAGE 2: Traditional Models
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🏛️ Mô Hình Trí Nhớ Truyền Thống (Atkinson & Shiffrin, 1968)</h3>
    <p class="anim-trigger fade-up">Đây là mô hình kinh điển nhất 📜, ví trí nhớ như một nhà kho có 3 phòng 🏢 (Three-Store Model).</p>

    <div class="mermaid anim-trigger fade-up">
    graph LR;
      A[Môi trường 🌍] --> B[Sensory Memory 👁️<br>Trí nhớ giác quan];
      B -->|Chú ý 🎯| C[Short-Term Memory ⏱️<br>Trí nhớ ngắn hạn];
      C -->|Ôn tập / Lặp lại 🔄| D[Long-Term Memory 🏛️<br>Trí nhớ dài hạn];
      D -.->|Truy xuất 🎣| C;
      
      B -. Không chú ý ❌ .-> X((Quên 🗑️));
      C -. Không lặp lại ❌ .-> Y((Quên 🗑️));
    </div>

    <div class="ss-grid">
      <div class="ss-card anim-trigger fade-up">
        <div class="ss-card-head">
          <h4>👁️ 1. Trí Nhớ Giác Quan (Sensory Register)</h4>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption">Chứa một lượng thông tin khổng lồ 🌊 nhưng chỉ tồn tại trong chớp mắt ⚡. <em>Iconic memory</em> (Hình ảnh 🖼️) biến mất sau 1/4 giây. <em>Echoic memory</em> (Âm thanh 🎵) tồn tại khoảng 2-3 giây. Chức năng chính là giữ lại hình ảnh đủ lâu ⏱️ để bộ não quyết định có nên chú ý vào nó không 🎯.</p>
        </div>
      </div>
      
      <div class="ss-card anim-trigger fade-up">
        <div class="ss-card-head">
          <h4>⏱️ 2. Trí Nhớ Ngắn Hạn (Short-Term Store)</h4>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption">Chứa những gì bạn đang nghĩ ngay lúc này 💭. <br><strong>Sức chứa 📦:</strong> Số ma thuật của George Miller là 7 ± 2 phần tử (chunks). <br><strong>Thời gian ⏳:</strong> Khoảng 15-30 giây nếu không được lặp lại (rehearsal 🔄).</p>
        </div>
      </div>

      <div class="ss-card anim-trigger fade-up" style="grid-column: span 2;">
        <div class="ss-card-head">
          <h4>🏛️ 3. Trí Nhớ Dài Hạn (Long-Term Store)</h4>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption">Kho lưu trữ khổng lồ 📚 chứa mọi thứ từ tên bạn 📛, thủ đô của Pháp 🇫🇷, đến cách đi xe đạp 🚲. <strong>Sức chứa và Thời gian</strong> của LTM được cho là <em>Vô hạn ♾️</em>. Nếu bạn không nhớ được, thường không phải do thông tin bị xóa 🗑️, mà do bạn mất "đường dẫn" (retrieval cue 🔗) để tìm ra nó 🔍.</p>
        </div>
      </div>
    </div>
  </div>
  `,

  // PAGE 3: Working Memory
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🗜️ Mô Hình Trí Nhớ Làm Việc (Working Memory - Baddeley)</h3>
    <p class="anim-trigger fade-up">Mô hình cổ điển quá thụ động 😴. Baddeley (1974) lập luận rằng trí nhớ ngắn hạn không chỉ là "kho chứa" 📦 tạm thời chờ được đưa vào trí nhớ dài hạn. Nó là một <strong>Bàn làm việc (Workspace 🛠️)</strong> nơi não bộ thao tác tích cực thông tin 🧮 để giải quyết vấn đề 🧩.</p>

    <div class="mermaid anim-trigger fade-up">
    graph TD;
      A[Central Executive 👔<br>Hệ Điều Hành Trung Tâm] --> B[Phonological Loop 🎧<br>Vòng lặp ngữ âm];
      A --> C[Visuospatial Sketchpad 🎨<br>Bảng phác thảo thị giác];
      A --> D[Episodic Buffer 🎬<br>Bộ đệm giai thoại];
    </div>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>👔 1. Hệ Điều Hành Trung Tâm (Central Executive)</h4>
        <p>Như một vị giám đốc 🧑‍💼. Không tự lưu trữ thông tin ❌ mà điều phối sự chú ý 🎯, ra quyết định ⚖️, và phân chia công việc 📋 cho các bộ phận khác.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🤖 2. Các Hệ Thống Phụ (Slaves)</h4>
        <p><strong>- Phonological Loop 🎧:</strong> Vòng lặp nhẩm lại âm thanh (Ví dụ: nhẩm số điện thoại trong đầu 🔢).<br>
        <strong>- Visuospatial Sketchpad 🎨:</strong> Giữ hình ảnh và không gian (Ví dụ: Tưởng tượng đường đi đến siêu thị 🗺️).<br>
        <strong>- Episodic Buffer 🎬:</strong> Kết nối thông tin hình ảnh, âm thanh với trí nhớ dài hạn thành một "câu chuyện" 📖.</p>
      </div>
    </div>

    <div class="insight-box anim-trigger fade-up" style="margin-top: 20px;">
      <p><strong>🎯 Sự Nhiễu Loại Tính Toán (Dual-Task Interference) 💥:</strong> Bạn có thể dễ dàng vừa lái xe 🚗 (Visuospatial 🎨) vừa nghe nhạc có lời 🎵 (Phonological 🎧). Nhưng bạn sẽ đâm xe 💥 nếu vừa lái xe 🚗 vừa nhìn bản đồ trên điện thoại 📱 (Cả hai đều dùng Visuospatial Sketchpad 🎨 nên gây quá tải hệ thống phụ này 🚨).</p>
    </div>
  </div>
  `,

  // PAGE 4: Multiple Memory Systems
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">📚 Hệ Thống Trí Nhớ Dài Hạn (Multiple Memory Systems)</h3>
    <p class="anim-trigger fade-up">Trí nhớ dài hạn của Endel Tulving được chia nhỏ thành các hệ thống chuyên biệt 🗂️.</p>

    <div class="mermaid anim-trigger fade-up">
    graph TD;
      A[Trí Nhớ Dài Hạn 🏛️<br>LTM] --> B[Tường Minh - Explicit 💡<br>Declarative - Biết Rằng];
      A --> C[Ẩn - Implicit 👻<br>Nondeclarative - Biết Cách];
      
      B --> B1[Semantic Memory 📖<br>Trí nhớ Ngữ nghĩa];
      B --> B2[Episodic Memory 🎬<br>Trí nhớ Giai thoại];
      
      C --> C1[Procedural Memory 🚲<br>Kỹ năng vận động];
      C --> C2[Priming & Conditioning 🔔<br>Mồi & Phản xạ có điều kiện];
    </div>

    <div class="ss-grid">
      <div class="ss-card anim-trigger fade-left" style="border-top: 4px solid #3B82F6;">
        <div class="ss-card-head">
          <h4>📖 Semantic Memory (Ngữ Nghĩa)</h4>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption">Kiến thức chung về thế giới 🌍, sự kiện 🗞️, khái niệm 💡. Bạn biết "Bầu trời màu xanh" 🌌 hoặc "Chó có 4 chân" 🐕 nhưng bạn không nhớ chính xác bạn học được điều đó khi nào 🕰️.</p>
        </div>
      </div>
      
      <div class="ss-card anim-trigger fade-right" style="border-top: 4px solid #F59E0B;">
        <div class="ss-card-head">
          <h4>🎬 Episodic Memory (Giai Thoại)</h4>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption">Trí nhớ gắn với không gian 🗺️ và thời gian ⏱️ của bạn (Du hành thời gian tâm lý 🚀). Ví dụ: Nhớ lại nụ hôn đầu tiên 💋 hay bữa sáng bạn ăn lúc nãy 🍳.</p>
        </div>
      </div>
    </div>

    <h4 class="anim-trigger fade-up" style="margin-top: 30px;">🕸️ Mô hình Mạng lưới Kết nối (Connectionist Perspective / PDP)</h4>
    <p class="anim-trigger fade-up">Trí nhớ không nằm ở một vùng não duy nhất như một cuốn sách trong thư viện 📚. Theo mô hình <em>Parallel Distributed Processing (PDP) ⚡</em>, trí nhớ là <strong>sự kích hoạt đồng thời của một mạng lưới các nơ-ron 🕸️</strong> trải rộng khắp não bộ 🧠. Một mùi hương 👃 có thể kích hoạt lại cả một bức tranh tuổi thơ 🖼️.</p>
  </div>
  `,

  // PAGE 5: Exceptional Memory & Amnesia
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🦸‍♂️ Khi Trí Nhớ Quá Tốt... Và Khi Nó Biến Mất 🥀</h3>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🧠 Trí Nhớ Siêu Phàm (Mnemonists)</h4>
        <p>Bệnh nhân S (Shereshevsky) do nhà tâm lý Luria nghiên cứu, có thể nhớ những ma trận số dài hàng chục dòng 🔢 sau nhiều năm 🗓️. Ông ta có khả năng <strong>Synesthesia (Hòa cảm) 🌈</strong> - ông nếm được từ ngữ 👅 và nhìn thấy màu sắc của âm thanh 👁️🎵. Nhưng việc nhớ quá nhiều là một lời nguyền ⛓️: Ông không thể trừu tượng hóa 🤔 hay đọc hiểu truyện cười 😂 vì bị mắc kẹt trong hàng triệu chi tiết dư thừa 🗑️.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🥀 Hội chứng Quên (Amnesia)</h4>
        <p><strong>- Retrograde Amnesia (Quên ngược chiều) ⏪:</strong> Quên quá khứ 🕰️. Mất các ký ức trước khi tai nạn xảy ra 💥 (Rất hay thấy trong phim truyền hình 📺).<br>
        <strong>- Anterograde Amnesia (Quên xuôi chiều) ⏩:</strong> Không thể tạo ký ức mới kể từ sau tai nạn 💥 (Như bệnh nhân H.M 👨). Ký ức ngắn hạn tốt ⏱️ (nhớ được vài giây), LTM cũ còn nguyên 🏛️, nhưng không thể chuyển cái mới vào LTM ❌.</p>
      </div>
    </div>

    <div class="insight-box anim-trigger fade-up" style="margin-top: 20px;">
      <p><strong>🎯 Bài học từ H.M 👨:</strong> Bệnh nhân H.M bị cắt Hippocampus 🧠 và bị chứng Anterograde Amnesia ⏩. Khi bác sĩ yêu cầu ông tập vẽ một ngôi sao qua gương ⭐🪞 (Một bài test khó), ngày nào ông cũng nói "Tôi chưa từng làm cái này bao giờ" 🤷‍♂️. Nhưng kỳ diệu thay ✨, mỗi ngày nét vẽ của ông lại mượt mà hơn ✍️. Điều này chứng minh: Dù Trí nhớ Tường minh (Declarative 💡) bị hỏng ❌, <strong>Trí nhớ Kỹ năng (Procedural 🚲)</strong> vẫn hoạt động hoàn toàn độc lập ở một vùng não khác ✅ (Basal Ganglia/Cerebellum).</p>
    </div>

    <div style="margin-top: 40px; text-align: center;">
      <a class="button primary" href="#/cognitive">Hoàn thành Chương 5 & Trở về Index 🏠</a>
    </div>
  </div>
  `
];

const cognitiveCh5HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb">
    <a href="#/home">Home</a> / 
    <a href="#/cognitive">Cognitive Psychology</a> / 
    <span>Ch 5: Memory Models</span>
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

export default cognitiveCh5HTML;
