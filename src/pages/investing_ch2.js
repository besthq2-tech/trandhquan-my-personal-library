const investingCh2Pages = [
`
<div class="insight-box anim-trigger fade-left">
  <p><strong>📖 Các Lớp Tài sản và Công cụ Tài chính (Asset Classes and Financial Instruments):</strong> Trong chương này, chúng ta sẽ đi sâu vào "menu" của thị trường tài chính, bao gồm Thị trường Tiền tệ (Money Market), Thị trường Trái phiếu (Bond Market), Thị trường Cổ phiếu (Equity Market) và các công cụ Phái sinh (Derivatives). 📋</p>
</div>

<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">2.1 Thị trường Tiền tệ (The Money Market) 💵</h3>
<p class="anim-trigger fade-up">Thị trường tiền tệ bao gồm các chứng khoán nợ ngắn hạn, tính thanh khoản cực cao, rủi ro cực thấp. Thường được gọi là các khoản tương đương tiền (Cash Equivalents).</p>

<div class="anim-trigger fade-up" style="display: grid; gap: 16px; margin-top: 20px;">
  <div style="background: var(--paper-2); padding: 16px; border-left: 4px solid #4ECDC4; border-radius: 4px;">
    <h4 style="margin: 0 0 8px 0;">1. Tín phiếu Kho bạc (Treasury Bills - T-bills) 🏛️</h4>
    <p style="margin: 0; font-size: 0.95em;">Công cụ nợ ngắn hạn do Chính phủ Mỹ phát hành. Tính thanh khoản cao nhất, rủi ro vỡ nợ gần như bằng 0. Lợi suất của nó thường được coi là <strong>Risk-free Rate (lãi suất phi rủi ro)</strong>.</p>
  </div>
  
  <div style="background: var(--paper-2); padding: 16px; border-left: 4px solid #4ECDC4; border-radius: 4px;">
    <h4 style="margin: 0 0 8px 0;">2. Chứng chỉ Tiền gửi (Certificates of Deposit - CDs) 🏦</h4>
    <p style="margin: 0; font-size: 0.95em;">Khoản tiền gửi tiết kiệm có kỳ hạn tại ngân hàng. Ngân hàng trả lãi và gốc khi đáo hạn. Lãi suất cao hơn T-bills một chút do có (dù rất nhỏ) rủi ro thanh khoản từ ngân hàng.</p>
  </div>
  
  <div style="background: var(--paper-2); padding: 16px; border-left: 4px solid #4ECDC4; border-radius: 4px;">
    <h4 style="margin: 0 0 8px 0;">3. Thương phiếu (Commercial Paper - CP) 🏢</h4>
    <p style="margin: 0; font-size: 0.95em;">Giấy nhận nợ ngắn hạn, không có tài sản đảm bảo do các tập đoàn lớn, uy tín phát hành. Thường để tài trợ vốn lưu động.</p>
  </div>
  
  <div style="background: var(--paper-2); padding: 16px; border-left: 4px solid #4ECDC4; border-radius: 4px;">
    <h4 style="margin: 0 0 8px 0;">4. Hợp đồng Mua lại (Repurchase Agreements - Repos) 🔄</h4>
    <p style="margin: 0; font-size: 0.95em;">Hợp đồng vay ngắn hạn (thường qua đêm) với tài sản cầm cố là trái phiếu chính phủ. Người đi vay bán trái phiếu và cam kết mua lại vào ngày hôm sau với giá cao hơn một chút.</p>
  </div>
</div>
`,
`
<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">2.2 Thị trường Trái phiếu (The Bond Market / Capital Market) 📄</h3>
<p class="anim-trigger fade-up">Khác với Money Market, Capital Market bao gồm các công cụ nợ <strong>dài hạn hơn (trên 1 năm)</strong>.</p>

<table class="anim-trigger fade-up" style="width: 100%; border-collapse: collapse; margin-top: 20px;">
  <tr style="background: var(--paper-2); border-bottom: 2px solid var(--line);">
    <th style="padding: 12px; text-align: left;">Loại Trái Phiếu</th>
    <th style="padding: 12px; text-align: left;">Đặc Điểm Chính</th>
  </tr>
  <tr style="border-bottom: 1px solid var(--line-2);">
    <td style="padding: 12px;"><strong>Treasury Notes & Bonds</strong><br/><span style="font-size:0.85em; opacity:0.8;">(Trái phiếu Chính phủ)</span></td>
    <td style="padding: 12px;">Notes: kỳ hạn từ 1-10 năm. Bonds: từ 10-30 năm. Trả lãi coupon bán niên. Không có rủi ro vỡ nợ, nhưng có rủi ro lãi suất (Interest Rate Risk).</td>
  </tr>
  <tr style="border-bottom: 1px solid var(--line-2);">
    <td style="padding: 12px;"><strong>MBS (Mortgage-Backed Securities)</strong><br/><span style="font-size:0.85em; opacity:0.8;">(Chứng khoán bảo đảm bằng thế chấp)</span></td>
    <td style="padding: 12px;">Chứng khoán được gộp từ nhiều khoản vay thế chấp mua nhà. Từng là nguyên nhân chính của khủng hoảng 2008 khi rủi ro (Subprime) bị định giá sai. 🏠🔥</td>
  </tr>
  <tr style="border-bottom: 1px solid var(--line-2);">
    <td style="padding: 12px;"><strong>Municipal Bonds</strong><br/><span style="font-size:0.85em; opacity:0.8;">(Trái phiếu địa phương)</span></td>
    <td style="padding: 12px;">Phát hành bởi chính quyền tiểu bang, thành phố. Điểm hấp dẫn lớn nhất: Lợi tức được <strong>miễn thuế</strong> liên bang và thuế tiểu bang. Tốt cho NĐT có khung thuế thu nhập cao. 🏛️</td>
  </tr>
  <tr>
    <td style="padding: 12px;"><strong>Corporate Bonds</strong><br/><span style="font-size:0.85em; opacity:0.8;">(Trái phiếu doanh nghiệp)</span></td>
    <td style="padding: 12px;">Doanh nghiệp phát hành để vay dài hạn. Có rủi ro vỡ nợ (Default Risk). Chia làm 2 nhóm: <em>Investment Grade</em> (An toàn, lãi thấp) và <em>Speculative/Junk Bonds</em> (Rủi ro cao, lãi cao). 💼</td>
  </tr>
</table>
`,
`
<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">2.3 Thị trường Cổ phiếu (Equity Securities) 📈</h3>

<div class="anim-trigger fade-up" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
  <div style="border: 1px solid var(--line-2); border-radius: 12px; padding: 20px; background: var(--paper-2);">
    <h4 style="color: #FF9F43; margin-top: 0;">Cổ phiếu phổ thông<br/>(Common Stock) 👑</h4>
    <ul>
      <li>Đại diện quyền sở hữu, có quyền biểu quyết (Voting rights).</li>
      <li>Nhận cổ tức (Dividends) tùy theo quyết định của HĐQT.</li>
      <li><strong>Residual Claim:</strong> Lợi ích còn sót lại. Cổ đông phổ thông là người nhận được tiền cuối cùng nếu công ty phá sản, sau chủ nợ và cổ đông ưu đãi.</li>
      <li><strong>Limited Liability:</strong> Cổ đông chỉ mất tối đa số tiền đã đầu tư, không bị siết nợ cá nhân.</li>
    </ul>
  </div>
  
  <div style="border: 1px solid var(--line-2); border-radius: 12px; padding: 20px; background: var(--paper-2);">
    <h4 style="color: #EE5A24; margin-top: 0;">Cổ phiếu ưu đãi<br/>(Preferred Stock) 🎀</h4>
    <ul>
      <li>Lai giữa Cổ phiếu và Trái phiếu.</li>
      <li>Trả cổ tức <strong>cố định</strong> (giống trái phiếu).</li>
      <li>Không có quyền biểu quyết.</li>
      <li>Ưu tiên nhận cổ tức và tài sản khi phá sản <strong>trước</strong> Cổ phiếu phổ thông.</li>
      <li>Công ty không bị coi là phá sản nếu quên/chưa trả cổ tức ưu đãi (nhưng phải cộng dồn trả sau).</li>
    </ul>
  </div>
</div>

<h4 class="anim-trigger fade-up">Các Chỉ số Chứng khoán (Stock and Bond Market Indexes) 📊</h4>
<p class="anim-trigger fade-up">Chỉ số giúp đo lường hiệu suất chung của thị trường. Cách tính chỉ số (Weighting schemes) quyết định tác động của từng cổ phiếu lên chỉ số:</p>
<ul class="anim-trigger fade-up">
  <li><strong>Price-weighted (Tính theo trọng số Giá):</strong> Ví dụ: Dow Jones (DJIA). Mua 1 cổ phiếu của mỗi công ty. Công ty có giá cổ phiếu cao ($500) sẽ ảnh hưởng nhiều hơn công ty giá thấp ($20). Nhược điểm: Phân tách cổ phiếu (Stock split) sẽ làm sai lệch chỉ số.</li>
  <li><strong>Market-value-weighted (Tính theo Vốn hóa):</strong> Ví dụ: S&P 500. Trọng số = (Giá x Số lượng cổ phiếu lưu hành). Đây là cách tính chuẩn và phổ biến nhất, phản ánh tỷ trọng thực tế của công ty trên thị trường (ví dụ: Apple ảnh hưởng lớn nhất).</li>
  <li><strong>Equally-weighted (Trọng số bằng nhau):</strong> Bỏ cùng một số tiền ($1000) vào mỗi cổ phiếu bất kể vốn hóa hay giá cả. Phải liên tục tái cân bằng (rebalance).</li>
</ul>
`,
`
<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">2.4 Chứng khoán Phái sinh (Derivative Markets) 🔮</h3>
<p class="anim-trigger fade-up">Phái sinh (Derivatives) là công cụ có giá trị phụ thuộc (phái sinh) từ giá của các tài sản cơ sở (như cổ phiếu, trái phiếu, hàng hóa, tỷ giá). Có 2 công cụ chính:</p>

<div class="anim-trigger fade-up" style="background: var(--paper-2); border: 1px solid var(--line); border-radius: 12px; padding: 24px; margin: 20px 0;">
  <h4 style="color: #6c5ce7; margin-top: 0;">1. Quyền chọn (Options) 🎟️</h4>
  <p>Cho bạn <strong>quyền (Right)</strong>, chứ không phải <strong>nghĩa vụ (Obligation)</strong>, được mua hoặc bán tài sản cơ sở ở mức giá định trước (Strike price) vào hoặc trước ngày đáo hạn (Expiration date).</p>
  <ul>
    <li><strong>Call Option (Quyền chọn Mua):</strong> Bạn kỳ vọng giá sẽ TĂNG 📈. Mua Call option để có quyền mua với giá rẻ trong tương lai.</li>
    <li><strong>Put Option (Quyền chọn Bán):</strong> Bạn kỳ vọng giá sẽ GIẢM 📉. Mua Put option để có quyền bán với giá cao (ví dụ: bảo hiểm rủi ro rớt giá cổ phiếu).</li>
  </ul>
  <p><em>Bạn phải trả phí (Premium) để mua Quyền chọn.</em></p>
  
  <hr style="border-color: var(--line-2); margin: 16px 0;" />
  
  <h4 style="color: #e84393; margin-top: 0;">2. Hợp đồng Tương lai (Futures Contracts) 🤝</h4>
  <p>Là một <strong>nghĩa vụ (Obligation)</strong> bắt buộc phải mua hoặc bán một tài sản ở một giá thỏa thuận ngay từ hôm nay (Futures price) cho việc giao nhận vào một ngày trong tương lai (Delivery date).</p>
  <ul>
    <li><strong>Long position (Vị thế Mua):</strong> Cam kết mua. Thắng lợi nếu giá thực tế trên thị trường lúc đáo hạn <strong>TĂNG</strong> cao hơn giá hợp đồng.</li>
    <li><strong>Short position (Vị thế Bán):</strong> Cam kết bán. Thắng lợi nếu giá thực tế trên thị trường <strong>GIẢM</strong>.</li>
  </ul>
  <p><em>Tham gia hợp đồng Futures không tốn phí khởi tạo (chỉ cần ký quỹ - margin), nhưng bạn <strong>bắt buộc</strong> phải thực hiện bất kể lỗ lãi.</em></p>
</div>

<div class="insight-box anim-trigger fade-up">
  <p><strong>🚨 Trade-off (Đánh đổi): Options vs Futures:</strong> Options giống như bảo hiểm (tốn phí mua, rủi ro thua lỗ giới hạn ở mức phí), trong khi Futures giống như cá cược đối kháng (không tốn phí lúc đầu, nhưng nếu sai hướng, lỗ có thể là vô hạn và bắt buộc phải thực thi).</p>
</div>
`
];

const investingCh2HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb"><a href="#/home">Home</a> / <a href="#/investing">Investing</a> / <span>Chapter 2: Asset Classes & Financial Instruments</span></div>
  <div class="article" id="bookContent"></div>
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="display:flex; align-items:center; gap:4px;">Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center;"> <span id="pageTotal"></span></div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;

export default investingCh2HTML;
export { investingCh2Pages };
