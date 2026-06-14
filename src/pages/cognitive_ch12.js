export const cognitiveCh12Pages = [
  // PAGE 1: Decision Making & Heuristics
  `
  <div class="article-head anim-trigger fade-up">
    <h1><span class="pulse"></span> Ra Quyết Định & Suy Luận ⚖️🤔</h1>
    <p class="lede">Hàng ngày bạn phải đưa ra hàng ngàn quyết định 🗓️. Nhưng bộ não 🧠 của chúng ta không phải là cỗ máy tính toán xác suất hoàn hảo 🧮❌. Nó dùng những lối tắt ⚡, và đôi khi, những lối tắt đó dẫn chúng ta vào bẫy 🪤.</p>
  </div>
  
  <div class="article-body">
    <div class="insight-box anim-trigger fade-left">
      <p><strong>📖 Mở đầu:</strong> Lý thuyết Quyết định Cổ điển (Classical Decision Theory 🏛️) từng cho rằng con người là những sinh vật cực kỳ lý trí 🧮. Chúng ta luôn tính toán mọi rủi ro ⚠️ và tối đa hóa lợi ích 💰 (Expected Utility). Nhưng Tversky và Kahneman 👤👤 đã chứng minh điều ngược lại: Con người hành động dựa trên <strong>Heuristics (Lối tắt tư duy ⚡)</strong> và rất dễ bị dắt mũi 🐂.</p>
    </div>

    <h3 class="anim-trigger fade-up">⚡ Các Lối Tắt (Heuristics) và Lỗi Lệch (Biases) 🪤</h3>
    
    <div class="ss-grid">
      <div class="ss-card anim-trigger fade-left" style="border-top: 4px solid #F59E0B;">
        <div class="ss-card-head">
          <h4>🧠 Availability Heuristic (Lối tắt Tính sẵn có)</h4>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption">Chúng ta đánh giá xác suất của một sự việc dựa trên việc <em>nó dễ dàng hiện lên trong đầu đến mức nào 💭</em>. Mọi người sợ đi máy bay ✈️ hơn đi ô tô 🚗 vì tai nạn máy bay lên trang nhất mặt báo 📰 và in đậm vào trí nhớ 🧠. Dù thực tế xác suất chết vì ô tô cao hơn hàng ngàn lần 📈.</p>
        </div>
      </div>
      
      <div class="ss-card anim-trigger fade-right" style="border-top: 4px solid #3B82F6;">
        <div class="ss-card-head">
          <h4>🎭 Representativeness (Lối tắt Tính đại diện)</h4>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption">Đánh giá xác suất dựa trên việc sự vật đó trông <em>giống khuôn mẫu 🖼️</em> đến mức nào. (Ví dụ: Thấy một người trầm tính 🤫, đeo kính 👓, thích đọc sách 📚. Bạn đoán người đó là thủ thư 🧑‍🏫 hay nông dân 🧑‍🌾? Đa số đoán thủ thư. Nhưng thực tế số lượng nông dân đông gấp trăm lần thủ thư 👥👥👥, nên xác suất là nông dân cao hơn rất nhiều 📈. Lỗi này gọi là bỏ qua Base Rate - Tỷ lệ nền 📊).</p>
        </div>
      </div>
    </div>

    <div class="tradeoff-box anim-trigger scale-in" style="margin-top: 20px;">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🖼️ Framing Effect (Hiệu ứng Đóng khung)</h4>
        <p>Quyết định của bạn thay đổi tùy thuộc vào <em>cách 🗣️</em> người ta trình bày vấn đề. Bác sĩ bảo "Thuốc này có tỷ lệ sống sót 90% ✅" -> Bạn chọn mua 💊. Bác sĩ bảo "Thuốc này có 10% cơ hội chết ☠️" -> Bạn từ chối ❌. Bản chất 2 câu là một, nhưng não ghét từ "chết" (Loss Aversion - Sợ mất mát 📉).</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>⚓ Sunk-Cost Fallacy (Ngụy biện Chi phí chìm)</h4>
        <p>Bạn đã mua vé xem phim 500k 🎟️💰. Phim cực kỳ dở 🤮, bạn rất muốn về ngủ 😴. Nhưng bạn cố ngồi xem hết vì "Tiếc tiền" 💸. Sự thật là: Dù bạn ở lại hay về, 500k đó cũng mất rồi (Chi phí chìm ⚓). Việc ở lại chỉ khiến bạn mất thêm THỜI GIAN ⏳ và rước thêm bực bội 😡.</p>
      </div>
    </div>
  </div>
  `,

  // PAGE 2: Deductive Reasoning
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🔍 Suy Luận Diễn Dịch (Deductive Reasoning)</h3>
    <p class="anim-trigger fade-up">Đi từ tiền đề chung 🌍 đến kết luận cụ thể 🎯. Nếu các tiền đề đúng ✅, và logic đúng 🧮, thì kết luận <strong>chắc chắn 100% đúng 💯</strong>.</p>

    <div class="mermaid anim-trigger fade-up">
    graph TD;
      A[Mọi con chó đều có 4 chân 🐕<br>Tiền đề 1] --> C(Suy Luận Diễn Dịch 🔍);
      B[Milu là một con chó 🐶<br>Tiền đề 2] --> C;
      C --> D[Kết luận: Milu có 4 chân 🐾<br>Chắc chắn đúng 💯];
    </div>

    <h4 class="anim-trigger fade-up" style="margin-top: 30px;">🚦 Conditional Reasoning (Suy Luận Điều Kiện IF-THEN)</h4>
    <div class="ss-card anim-trigger scale-in">
      <div class="ss-card-head">
        <h4>⚖️ Modus Ponens & Modus Tollens</h4>
      </div>
      <div class="ss-card-body">
        <p class="ss-caption"><strong>Quy tắc 1 (Modus Ponens): Khẳng định điều kiện (Hợp lệ ✅)</strong><br>
        Nếu trời mưa 🌧️ (P), thì đường ướt 💦 (Q).<br>
        Hôm nay trời mưa 🌧️ (P). -> Kết luận: Đường ướt 💦 (Q).</p>
        <hr style="border: 0; border-bottom: 1px dashed var(--line-2); margin: 10px 0;">
        <p class="ss-caption"><strong>Quy tắc 2 (Modus Tollens): Phủ định hệ quả (Hợp lệ ✅)</strong><br>
        Nếu trời mưa 🌧️ (P), thì đường ướt 💦 (Q).<br>
        Đường KHÔNG ướt 🏜️ (~Q). -> Kết luận: Trời không mưa ☀️ (~P).</p>
      </div>
    </div>

    <div class="insight-box anim-trigger fade-up" style="margin-top: 20px;">
      <p><strong>⚠️ Cạm bẫy Logic - Khẳng định hệ quả (Ngụy biện ❌):</strong><br>
      Nếu trời mưa 🌧️, thì đường ướt 💦.<br>
      Đường ướt 💦. -> Kết luận: Trời mưa 🌧️. (SAI ❌! Đường ướt có thể do xe phun nước 🚒. Khẳng định Q không suy ra được P).</p>
    </div>
  </div>
  `,

  // PAGE 3: Inductive Reasoning
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">📈 Suy Luận Quy Nạp (Inductive Reasoning)</h3>
    <p class="anim-trigger fade-up">Trái ngược với Diễn dịch 🔍, Quy nạp đi từ các quan sát cụ thể 🔬 để rút ra quy luật chung 🌍. Kết luận của Suy luận Quy nạp <strong>không bao giờ chắc chắn 100% ❌💯</strong>, nó chỉ có <em>xác suất cao 📈</em> là đúng. Khoa học 🧪 phát triển chủ yếu dựa trên phép quy nạp này.</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🦢 Ví dụ về Quy Nạp</h4>
        <p>Quan sát 1: Con thiên nga này màu trắng 🦢.<br>
        Quan sát 2: Con thiên nga kia màu trắng 🦢.<br>
        ... Quan sát 1000: Con thiên nga màu trắng 🦢.<br>
        <strong>Kết luận:</strong> Tất cả thiên nga đều màu trắng 🦢🦢🦢. (Đúng cho đến khi bạn đi du lịch sang Úc 🇦🇺 và thấy một con thiên nga đen 🖤!).</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🔗 Suy luận Nhân Quả (Causal Inferences)</h4>
        <p>Một dạng quy nạp phổ biến. Khi thấy Hiện tượng A xảy ra cùng Hiện tượng B 🤝, ta quy nạp rằng A gây ra B ➡️. <strong>Lỗi ngụy biện ❌:</strong> Tương quan không phải là Nhân quả (Correlation does not equal Causation 🔗≠➡️). Doanh số bán kem 🍦 tăng cùng lúc với số vụ chết đuối 🏊‍♂️ tăng. Không phải ăn kem gây chết đuối ❌, mà do "Mùa hè nóng ☀️" là nguyên nhân chung của cả hai.</p>
      </div>
    </div>

    <div class="ss-card anim-trigger scale-in" style="margin-top: 20px;">
      <div class="ss-card-head">
        <h4>🙈 Confirmation Bias (Thiên Kiến Xác Nhận)</h4>
        <span class="mini">Kẻ thù lớn nhất của Suy luận ⚔️</span>
      </div>
      <div class="ss-card-body">
        <p class="ss-caption">Chúng ta có xu hướng chỉ tìm kiếm những bằng chứng <em>ủng hộ ✅</em> niềm tin sẵn có của mình 🧠, và phớt lờ/bác bỏ ❌ những bằng chứng chống lại nó. Trong bài toán Wason Selection Task nổi tiếng 🃏, thay vì lật lá bài để <em>bác bỏ (falsify ❌)</em> giả thuyết, hầu hết mọi người lật lá bài để <em>xác nhận ✅</em> giả thuyết của họ.</p>
      </div>
    </div>

    <div style="margin-top: 40px; text-align: center;">
      <a class="button primary" href="#/cognitive">Hoàn thành Khóa Học Cognitive Psychology & Trở về Index 🎓</a>
    </div>
  </div>
  `
];

const cognitiveCh12HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb">
    <a href="#/home">Home</a> / 
    <a href="#/cognitive">Cognitive Psychology</a> / 
    <span>Ch 12: Decision Making</span>
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

export default cognitiveCh12HTML;
