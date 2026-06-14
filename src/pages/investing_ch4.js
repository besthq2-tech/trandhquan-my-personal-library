const investingCh4Pages = [
`
<div class="insight-box anim-trigger fade-left">
  <p><strong>📖 Quỹ Tương hỗ và Các Công ty Đầu tư (Mutual Funds and Other Investment Companies):</strong> Chương này bàn về việc "Góp vốn đầu tư". Tại sao lại tự mình đi nhặt từng cổ phiếu khi bạn có thể đưa tiền cho các chuyên gia gom chung với hàng vạn người khác? Chúng ta sẽ xem xét lợi ích, các loại quỹ (Mutual funds vs ETFs) và chi phí ẩn của chúng. 🏦</p>
</div>

<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">4.1 Công ty Đầu tư là gì? (Investment Companies) 🤝</h3>
<p class="anim-trigger fade-up">Công ty đầu tư đóng vai trò trung gian tài chính. Họ thu thập tiền từ nhiều nhà đầu tư nhỏ lẻ và gộp lại (pool) để đầu tư vào một danh mục chứng khoán lớn.</p>

<h4 class="anim-trigger fade-up">Tại sao lại dùng Quỹ đầu tư? (Lợi ích) 🌟</h4>
<ul class="anim-trigger fade-up">
  <li><strong>Lưu trữ và Quản trị (Record keeping and administration):</strong> Họ làm mọi giấy tờ, báo cáo thuế, theo dõi cổ tức thay bạn. 📝</li>
  <li><strong>Đa dạng hóa và Khả năng chia nhỏ (Diversification & Divisibility):</strong> Với $100, bạn khó lòng mua đủ cổ phiếu để đa dạng hóa. Nhưng gửi $100 vào quỹ, bạn sở hữu một phần tư của hàng trăm cổ phiếu. 🧩</li>
  <li><strong>Quản lý Chuyên nghiệp (Professional management):</strong> Được quản lý bởi các chuyên gia tài chính phân tích full-time. 👔</li>
  <li><strong>Giảm chi phí giao dịch (Lower transaction costs):</strong> Quỹ giao dịch khối lượng lớn nên phí môi giới rẻ hơn nhiều so với nhà đầu tư cá nhân. 💸</li>
</ul>

<h4 class="anim-trigger fade-up">Net Asset Value (NAV) - Giá trị tài sản ròng 🧮</h4>
<p class="anim-trigger fade-up">Đây là "giá" của một chứng chỉ quỹ.</p>
<div class="insight-box anim-trigger fade-up" style="margin: 20px 0;">
  <p><strong>Công thức:</strong> NAV = (Giá trị thị trường của toàn bộ tài sản - Nợ phải trả) / Tổng số lượng chứng chỉ quỹ đang lưu hành</p>
</div>
`,
`
<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">4.2 Các loại hình Quỹ Đầu tư (Types of Investment Companies) 🗂️</h3>

<div class="anim-trigger fade-up" style="display: grid; gap: 16px; margin-top: 20px;">
  <div style="background: var(--paper-2); padding: 16px; border-left: 4px solid #4ECDC4; border-radius: 4px;">
    <h4 style="margin: 0 0 8px 0;">1. Quỹ Mở (Open-End Funds / Mutual Funds) 🚪</h4>
    <p style="margin: 0; font-size: 0.95em;">Nhà đầu tư mua và bán chứng chỉ quỹ <strong>trực tiếp với quỹ</strong> ở mức giá NAV. Quỹ sẵn sàng phát hành thêm chứng chỉ mới nếu có người nộp tiền, và mua lại (chuộc lại/redeem) nếu có người rút tiền. Giá chứng chỉ luôn bằng đúng NAV.</p>
  </div>
  
  <div style="background: var(--paper-2); padding: 16px; border-left: 4px solid #FF6B6B; border-radius: 4px;">
    <h4 style="margin: 0 0 8px 0;">2. Quỹ Đóng (Closed-End Funds) 🔒</h4>
    <p style="margin: 0; font-size: 0.95em;">Quỹ chỉ phát hành chứng chỉ quỹ một lần duy nhất lúc IPO. Sau đó, muốn mua/bán, bạn phải giao dịch với nhà đầu tư khác trên sàn chứng khoán. Do cung cầu trên sàn, giá quỹ đóng có thể cao hơn (Premium) hoặc thấp hơn (Discount) so với NAV thực tế.</p>
  </div>
</div>

<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">4.3 Chi phí Đầu tư (Costs of Investing in Mutual Funds) 📉</h3>
<p class="anim-trigger fade-up">Không có bữa trưa nào miễn phí. Quản lý danh mục cần trả tiền, và cấu trúc phí ảnh hưởng RẤT ĐÁNG KỂ đến lợi nhuận dài hạn của bạn.</p>

<ul class="anim-trigger fade-up">
  <li><strong>Operating expenses (Chi phí hoạt động - Expense Ratio):</strong> Trừ thẳng vào NAV (thường 0.1% - 2%/năm). Trả cho ban quản lý, phí hành chính.</li>
  <li><strong>Front-end load (Phí mua):</strong> Phí trả ngay khi mua chứng chỉ quỹ (giống phí hoa hồng môi giới).</li>
  <li><strong>Back-end load (Phí bán/rút):</strong> Phí phạt nếu bạn rút tiền sớm (thường giảm dần theo số năm nắm giữ).</li>
  <li><strong>12b-1 charges:</strong> Phí dùng để... làm marketing và quảng cáo cho quỹ (bạn trả tiền để quỹ đi thu hút thêm người khác). Phí này cũng trừ vào NAV.</li>
</ul>

<div class="anim-trigger fade-up" style="border-left: 3px solid #ff9f43; padding-left: 16px; font-style: italic; margin: 20px 0;">
  Bài học cay đắng: Một khác biệt nhỏ về Expense Ratio (ví dụ 1% so với 0.1%) trông có vẻ ít, nhưng qua 20-30 năm nhờ lãi kép, nó có thể "ăn mất" hàng trăm ngàn đô la lợi nhuận của bạn! 💸
</div>
`,
`
<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">4.4 Exchange-Traded Funds (ETFs) - Quỹ Giao dịch Trên Sàn 🚀</h3>
<p class="anim-trigger fade-up">ETFs là phát minh mang tính cách mạng của tài chính hiện đại. Nó lai giữa Quỹ mở (Mutual Funds) và Cổ phiếu (Stocks).</p>

<h4 class="anim-trigger fade-up">ETFs khác Mutual Funds chỗ nào?</h4>
<table class="anim-trigger fade-up" style="width: 100%; border-collapse: collapse; margin-top: 16px;">
  <tr style="border-bottom: 2px solid var(--line);">
    <th style="padding: 10px; text-align: left;">Đặc điểm</th>
    <th style="padding: 10px; text-align: left;">Mutual Funds 🏦</th>
    <th style="padding: 10px; text-align: left;">ETFs 🚀</th>
  </tr>
  <tr style="border-bottom: 1px solid var(--line-2);">
    <td style="padding: 10px;"><strong>Giao dịch</strong></td>
    <td style="padding: 10px;">Chỉ 1 lần vào cuối ngày (chốt sổ theo NAV cuối ngày)</td>
    <td style="padding: 10px;">Giao dịch liên tục trong ngày (như cổ phiếu bình thường)</td>
  </tr>
  <tr style="border-bottom: 1px solid var(--line-2);">
    <td style="padding: 10px;"><strong>Chi phí (Expense Ratio)</strong></td>
    <td style="padding: 10px;">Thường cao hơn (Đặc biệt là quỹ Active)</td>
    <td style="padding: 10px;">Thường cực kỳ thấp (Đa số là quỹ Passive/Index)</td>
  </tr>
  <tr style="border-bottom: 1px solid var(--line-2);">
    <td style="padding: 10px;"><strong>Hiệu quả Thuế (Tax Efficiency)</strong></td>
    <td style="padding: 10px;">Kém. Khi có người rút vốn lớn, quỹ phải bán cổ phiếu, tạo ra "Lãi vốn" (Capital Gains Tax) đánh lên mọi nhà đầu tư còn lại.</td>
    <td style="padding: 10px;">Cao. Cơ chế "Creation/Redemption in-kind" giúp ETFs không bị hiện tượng đánh thuế chéo này.</td>
  </tr>
  <tr>
    <td style="padding: 10px;"><strong>Bán khống / Margin</strong></td>
    <td style="padding: 10px;">Không thể</td>
    <td style="padding: 10px;">Có thể (Giống hệt cổ phiếu)</td>
  </tr>
</table>

<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 30px;">4.5 Hiệu suất của Quỹ tương hỗ (Mutual Fund Performance) 🏆</h3>
<p class="anim-trigger fade-up">Liệu các "chuyên gia" của quỹ chủ động (Active) có đánh bại được chỉ số thụ động (Passive/Index) không?</p>
<p class="anim-trigger fade-up"><strong>Bằng chứng thực nghiệm (Empirical Evidence):</strong> Hầu hết các quỹ chủ động ĐỀU THUA quỹ thụ động bám theo chỉ số (như S&P 500) sau khi trừ đi chi phí (Expense Ratio). Thậm chí, một quỹ làm tốt năm nay không có nghĩa sẽ làm tốt năm sau (Lack of Consistency).</p>

<div class="insight-box anim-trigger fade-up">
  <p><strong>Kết luận Part I:</strong> Đối với nhà đầu tư cá nhân bình thường, việc mua và nắm giữ một quỹ ETF theo dõi toàn bộ thị trường (Index Fund) với chi phí thấp là chiến lược đầu tư khôn ngoan và hiệu quả nhất. 🧘‍♂️📈</p>
</div>
`
];

const investingCh4HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb"><a href="#/home">Home</a> / <a href="#/investing">Investing</a> / <span>Chapter 4: Mutual Funds & Investment Companies</span></div>
  <div class="article" id="bookContent"></div>
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="display:flex; align-items:center; gap:4px;">Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center;"> <span id="pageTotal"></span></div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;

export default investingCh4HTML;
export { investingCh4Pages };
