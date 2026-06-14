const investingCh3Pages = [
`
<div class="insight-box anim-trigger fade-left">
  <p><strong>📖 Chứng khoán được giao dịch như thế nào? (How Securities Are Traded):</strong> Chương này giải thích cơ sở hạ tầng của thị trường: từ lúc một công ty phát hành cổ phiếu lần đầu (IPO) cho đến khi nó được mua bán liên tục giữa các nhà đầu tư. Chúng ta cũng tìm hiểu cách sử dụng Đòn bẩy (Margin) và Bán khống (Short Sales). 🏛️</p>
</div>

<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">3.1 Thị trường Sơ cấp (Primary) vs. Thứ cấp (Secondary) 🔄</h3>

<div class="anim-trigger fade-up" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
  <div style="border: 1px solid var(--line-2); border-radius: 12px; padding: 20px; background: var(--paper-2);">
    <h4 style="color: #4ECDC4; margin-top: 0;">🆕 Thị trường Sơ cấp (Primary Market)</h4>
    <p>Là nơi chứng khoán được <strong>phát hành lần đầu tiên</strong> để huy động vốn cho doanh nghiệp hoặc chính phủ.</p>
    <ul>
      <li><strong>IPO (Initial Public Offering):</strong> Lần đầu tiên công ty bán cổ phiếu ra công chúng.</li>
      <li>Dòng tiền chảy trực tiếp từ Nhà đầu tư 👉 Doanh nghiệp.</li>
      <li>Do các <em>Ngân hàng Đầu tư (Investment Banks - Underwriters)</em> bảo lãnh phát hành.</li>
    </ul>
  </div>
  
  <div style="border: 1px solid var(--line-2); border-radius: 12px; padding: 20px; background: var(--paper-2);">
    <h4 style="color: #FF6B6B; margin-top: 0;">🔁 Thị trường Thứ cấp (Secondary Market)</h4>
    <p>Là nơi chứng khoán đã phát hành được <strong>mua đi bán lại</strong> giữa các nhà đầu tư với nhau.</p>
    <ul>
      <li>Ví dụ: Mua cổ phiếu Apple trên sàn NASDAQ.</li>
      <li>Dòng tiền chảy từ Nhà đầu tư này 👉 Nhà đầu tư khác. Doanh nghiệp <strong>không</strong> nhận được thêm tiền ở đây.</li>
      <li>Cung cấp <strong>tính thanh khoản (Liquidity)</strong>, giúp NĐT yên tâm rót vốn ở thị trường sơ cấp vì biết có thể bán lại bất cứ lúc nào.</li>
    </ul>
  </div>
</div>
`,
`
<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">3.2 Các cấu trúc giao dịch thị trường (Market Structures) 🏛️</h3>
<p class="anim-trigger fade-up">Làm thế nào để người mua và người bán tìm thấy nhau?</p>

<ul class="anim-trigger fade-up">
  <li><strong>Direct Search Markets:</strong> Mua bán trực tiếp. Người mua/bán tự tìm nhau (Ví dụ: mua bán đồ cũ trên Craigslist). Thanh khoản thấp nhất.</li>
  <li><strong>Brokered Markets:</strong> Thị trường qua môi giới (Brokers). Môi giới tìm kiếm người mua/bán để hưởng hoa hồng (Ví dụ: Môi giới bất động sản, thị trường cổ phiếu sơ cấp).</li>
  <li><strong>Dealer Markets (OTC - Over the counter):</strong> Thị trường phi tập trung. "Dealers" (nhà tạo lập) mua vào tài sản vào tài khoản của mình và đứng ra bán lại. Lợi nhuận của họ là chênh lệch giá mua/bán (Bid-Ask spread). Hầu hết trái phiếu giao dịch ở đây.</li>
  <li><strong>Auction Markets (Thị trường Đấu giá/Sàn giao dịch):</strong> Tất cả nhà đầu tư tập trung về một "nơi" (Sàn NYSE) hoặc hệ thống điện tử (Limit Order Book) để đấu giá. Đây là hình thức hiệu quả nhất. 📊</li>
</ul>

<h4 class="anim-trigger fade-up">Các loại Lệnh giao dịch (Types of Orders) 📝</h4>
<div class="anim-trigger fade-up" style="background: var(--paper-2); padding: 16px; border-radius: 8px; margin-top: 10px;">
  <p><strong>1. Market Orders (Lệnh Thị trường):</strong> Khớp ngay lập tức với mức giá tốt nhất hiện có. Ưu tiên <em>Tốc độ</em>, chấp nhận giá có thể không như mong muốn (Price uncertainty).</p>
  <p><strong>2. Limit Orders (Lệnh Giới hạn):</strong> Chỉ mua/bán ở mức giá cụ thể hoặc tốt hơn (Ví dụ: Mua AAPL ở $150). Nếu giá không chạm mức đó, lệnh không khớp. Ưu tiên <em>Giá cả</em>, chấp nhận không khớp được lệnh (Execution uncertainty).</p>
  <p><strong>3. Stop Orders (Lệnh Dừng):</strong> Thường dùng để cắt lỗ (Stop-loss). Nếu giá rớt xuống dưới một mức (ví dụ $140), nó tự biến thành Lệnh Thị trường để bán tống bán tháo nhằm ngăn lỗ thêm.</p>
</div>
`,
`
<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">3.3 Giao dịch Ký quỹ (Buying on Margin) ⚖️</h3>
<p class="anim-trigger fade-up">Margin là sử dụng đòn bẩy tài chính: bạn vay tiền từ công ty chứng khoán để mua thêm cổ phiếu. Cổ phiếu bạn mua sẽ được dùng làm tài sản thế chấp (Collateral) cho khoản vay đó.</p>

<div class="insight-box anim-trigger fade-up" style="margin: 20px 0;">
  <p><strong>Công thức cơ bản:</strong> Margin % = Giá trị Tài sản ròng (Equity) / Tổng giá trị cổ phiếu</p>
  <p>Equity = Tổng giá trị cổ phiếu - Số tiền nợ (Loan)</p>
</div>

<h4 class="anim-trigger fade-up">Margin Call 🚨</h4>
<p class="anim-trigger fade-up">Nếu giá cổ phiếu <strong>GIẢM</strong>, tỷ lệ Margin % sẽ giảm theo. Nếu Margin % rớt xuống dưới mức duy trì quy định (Maintenance Margin, ví dụ 30%), công ty chứng khoán sẽ gọi điện (Margin Call) yêu cầu bạn nộp thêm tiền. Nếu bạn không nộp, họ sẽ <strong>tự động bán tháo</strong> cổ phiếu của bạn để thu hồi nợ.</p>

<p class="anim-trigger fade-up" style="border-left: 3px solid #ff9f43; padding-left: 16px; font-style: italic;">
  Đòn bẩy (Leverage) là con dao hai lưỡi: Nó khuếch đại Lợi nhuận khi cổ phiếu tăng, và khuếch đại cả Thua lỗ khi cổ phiếu giảm. 🔪
</p>

<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">3.4 Bán khống (Short Sales) 📉</h3>
<p class="anim-trigger fade-up">Làm thế nào để kiếm tiền khi tin rằng một cổ phiếu sắp "sập"? Câu trả lời là Bán Khống (Shorting).</p>

<div class="mermaid anim-trigger fade-up" style="margin: 20px 0;">
sequenceDiagram
    participant NĐT as Bạn (Short Seller)
    participant CTCK as Công ty CK
    participant TT as Thị trường

    NĐT->>CTCK: 1. Vay cổ phiếu
    CTCK-->>NĐT: Giao cổ phiếu
    NĐT->>TT: 2. Bán ngay lấy tiền (Giá cao: $100)
    Note over NĐT, TT: Chờ đợi cổ phiếu rớt giá...
    TT-->>NĐT: 3. Mua lại cổ phiếu (Giá thấp: $70)
    NĐT->>CTCK: 4. Trả lại cổ phiếu đã vay
    Note over NĐT: Lời $30 (Chưa tính phí vay)
</div>

<p class="anim-trigger fade-up"><strong>Rủi ro vô hạn (Infinite Risk):</strong> Khi bạn MUA (Long), bạn lỗ tối đa 100% (cổ phiếu về 0). Nhưng khi BÁN KHỐNG (Short), cổ phiếu có thể tăng giá lên vô cực ($100 ➔ $1,000), nghĩa là khoản lỗ của bạn là <strong>không có giới hạn trần</strong>. ☠️</p>
`
];

const investingCh3HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb"><a href="#/home">Home</a> / <a href="#/investing">Investing</a> / <span>Chapter 3: How Securities Are Traded</span></div>
  <div class="article" id="bookContent"></div>
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="display:flex; align-items:center; gap:4px;">Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center;"> <span id="pageTotal"></span></div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;

export default investingCh3HTML;
export { investingCh3Pages };
