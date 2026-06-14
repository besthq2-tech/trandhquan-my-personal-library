const investingCh1Pages = [
`
<div class="insight-box anim-trigger fade-left">
  <p><strong>📖 Môi trường Đầu tư (The Investment Environment):</strong> Chương này giới thiệu bức tranh tổng quan về thế giới tài chính. Phân biệt tài sản thực và tài sản tài chính, quá trình đầu tư, vai trò của thị trường tài chính, và các chủ thể chính trong nền kinh tế. 🌍</p>
</div>

<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">1.1 Tài sản Thực (Real Assets) vs. Tài sản Tài chính (Financial Assets) 🏭 📜</h3>
<p class="anim-trigger fade-up">Nền kinh tế được xây dựng trên sự phân biệt giữa hai loại tài sản này. Sự giàu có của xã hội phụ thuộc vào tài sản thực, trong khi tài sản tài chính là phương tiện phân bổ tài sản thực.</p>

<div class="anim-trigger fade-up" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
  <div style="border: 1px solid var(--line-2); border-radius: 12px; padding: 20px; background: var(--paper-2);">
    <h4 style="color: #4ECDC4; margin-top: 0; display: flex; align-items: center; gap: 8px;">🏭 Real Assets</h4>
    <p>Là những tài sản tạo ra hàng hóa và dịch vụ. Chúng đại diện cho năng lực sản xuất của nền kinh tế.</p>
    <ul style="margin-bottom: 0;">
      <li><strong>Đất đai (Land)</strong> 🏞️</li>
      <li><strong>Nhà xưởng, máy móc (Buildings & Machines)</strong> 🏗️</li>
      <li><strong>Tri thức, bằng sáng chế (Knowledge)</strong> 🧠</li>
    </ul>
  </div>
  
  <div style="border: 1px solid var(--line-2); border-radius: 12px; padding: 20px; background: var(--paper-2);">
    <h4 style="color: #FF6B6B; margin-top: 0; display: flex; align-items: center; gap: 8px;">📜 Financial Assets</h4>
    <p>Là những giấy tờ có giá trị (claims) đòi hỏi thu nhập được tạo ra từ tài sản thực. Chúng xác định sự phân bổ sự giàu có.</p>
    <ul style="margin-bottom: 0;">
      <li><strong>Cổ phiếu (Stocks/Equity)</strong> 📈</li>
      <li><strong>Trái phiếu (Bonds/Fixed Income)</strong> 📄</li>
      <li><strong>Chứng khoán phái sinh (Derivatives)</strong> 🔮</li>
    </ul>
  </div>
</div>

<div class="anim-trigger fade-up" style="margin-top: 30px; background: var(--paper); padding: 20px; border-radius: 12px; border-left: 4px solid var(--accent);">
  <p><strong>💡 Tư duy:</strong> Nếu toàn bộ thế giới gộp lại làm một, tất cả tài sản tài chính sẽ triệt tiêu lẫn nhau (bởi vì tài sản của người này là khoản nợ của người khác). Cuối cùng, sự thịnh vượng thực sự chỉ còn lại các <strong>Real Assets</strong>.</p>
</div>
`,
`
<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">1.2 Phân loại Tài sản Tài chính (Taxonomy of Financial Assets) 🗂️</h3>
<p class="anim-trigger fade-up">Tài sản tài chính thường được phân thành ba danh mục chính:</p>

<div class="mermaid anim-trigger fade-up" style="margin: 20px 0;">
graph TD
    A[Financial Assets] --> B(Fixed Income <br/> Trái phiếu)
    A --> C(Equity <br/> Cổ phiếu)
    A --> D(Derivatives <br/> Phái sinh)
    
    B --> B1[Money Market <br/> Ngắn hạn, rủi ro thấp]
    B --> B2[Capital Market <br/> Dài hạn, rủi ro cao hơn]
    
    style A fill:#2d3436,stroke:#b2bec3,stroke-width:2px,color:#dfe6e9
    style B fill:#0984e3,stroke:#74b9ff,stroke-width:2px,color:#fff
    style C fill:#00b894,stroke:#55efc4,stroke-width:2px,color:#fff
    style D fill:#e17055,stroke:#fab1a0,stroke-width:2px,color:#fff
</div>

<ul class="anim-trigger fade-up">
  <li><strong>Fixed-Income (Debt) Securities 💵:</strong> Hứa hẹn các dòng tiền cố định hoặc theo một công thức nhất định (ví dụ: Trái phiếu chính phủ, trái phiếu doanh nghiệp). Phù hợp với những người không thích rủi ro (risk-averse).</li>
  <li><strong>Equity (Cổ phần/Cổ phiếu) 📈:</strong> Đại diện cho quyền sở hữu trong công ty. Lợi nhuận không được cam kết, thay đổi theo sự thành công của công ty. Có rủi ro cao nhưng tiềm năng sinh lời lớn.</li>
  <li><strong>Derivative Securities (Phái sinh) 🔮:</strong> Giá trị được "phái sinh" từ giá của tài sản khác (như giá cổ phiếu, trái phiếu, hoặc tỷ giá). Ví dụ: Quyền chọn (Options), Hợp đồng tương lai (Futures). Chủ yếu dùng để quản trị rủi ro (Hedging) hoặc đầu cơ (Speculation).</li>
</ul>
`,
`
<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">1.3 Vai trò của Thị trường Tài chính (Financial Markets & the Economy) 🌐</h3>

<div class="anim-trigger fade-up" style="border-left: 3px solid #6c5ce7; padding-left: 16px; margin: 20px 0;">
  <p><strong>1. Vai trò Thông tin (Informational Role):</strong> Giá cổ phiếu phản ánh đánh giá của thị trường về triển vọng của doanh nghiệp. Nó điều hướng vốn đến các công ty có tiềm năng tốt nhất. 🧭</p>
  <p><strong>2. Tiêu thụ trơn tru (Consumption Timing):</strong> Thị trường tài chính cho phép cá nhân tách biệt thời điểm kiếm tiền và thời điểm tiêu tiền (tiết kiệm khi trẻ, chi tiêu khi già). ⏳</p>
  <p><strong>3. Phân bổ Rủi ro (Allocation of Risk):</strong> Cho phép những nhà đầu tư có khẩu vị rủi ro khác nhau gánh vác các mức rủi ro tương ứng (ví dụ: mua trái phiếu nếu an toàn, mua cổ phiếu nếu thích rủi ro). ⚖️</p>
  <p><strong>4. Sự phân tách Quyền sở hữu và Quản lý (Separation of Ownership & Management):</strong> Công ty cổ phần cho phép nhà đầu tư đóng góp vốn nhưng không cần trực tiếp điều hành, giúp tạo ra các tập đoàn khổng lồ. 🏢</p>
</div>

<h4 class="anim-trigger fade-up">⚠️ Vấn đề Người đại diện (Agency Problem)</h4>
<p class="anim-trigger fade-up">Khi người sở hữu (cổ đông) và người quản lý (Ban điều hành) là khác nhau, sẽ phát sinh mâu thuẫn lợi ích. Các giám đốc có thể tư lợi thay vì tối đa hóa giá trị công ty.</p>
<p class="anim-trigger fade-up"><strong>Cách giải quyết:</strong> Gắn lương thưởng với cổ phiếu (Stock Options), bị thâu tóm (Takeover threat) nếu làm ăn kém cỏi, hoặc áp lực từ Hội đồng quản trị. 👔</p>

<div class="insight-box anim-trigger fade-up" style="margin-top: 20px;">
  <p><strong>Tranh luận:</strong> Cuộc khủng hoảng 2008 cho thấy hệ thống tài chính không phải lúc nào cũng hoàn hảo (Corporate Governance Failures). Sự phức tạp của các công cụ phái sinh đôi khi che mờ mức độ rủi ro thực tế.</p>
</div>
`,
`
<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">1.4 Quy trình Đầu tư (The Investment Process) 🗺️</h3>
<p class="anim-trigger fade-up">Một danh mục đầu tư (Portfolio) là tập hợp các tài sản tài chính. Quá trình thiết lập danh mục gồm 2 quyết định cốt lõi:</p>

<div class="anim-trigger fade-up" style="background: var(--paper-2); border: 1px solid var(--line); border-radius: 12px; padding: 24px; margin: 20px 0;">
  <h4 style="color: #fdcb6e; margin-top: 0;">1. Asset Allocation (Phân bổ Tài sản) 🥧</h4>
  <p>Lựa chọn các loại tài sản lớn (Asset classes) như Cổ phiếu, Trái phiếu, Bất động sản, Tiền mặt. <strong>Đây là quyết định quan trọng nhất</strong> định hình rủi ro và lợi nhuận của toàn bộ danh mục.</p>
  <p style="font-size: 0.9em; opacity: 0.8;">Ví dụ: 60% Cổ phiếu, 40% Trái phiếu.</p>
  
  <hr style="border-color: var(--line-2); margin: 16px 0;" />
  
  <h4 style="color: #00cec9; margin-top: 0;">2. Security Selection (Lựa chọn Chứng khoán) 🎯</h4>
  <p>Lựa chọn cụ thể mã cổ phiếu hay trái phiếu nào trong một loại tài sản (Ví dụ: trong 60% Cổ phiếu thì mua AAPL, MSFT, hay VNM?).</p>
  <p style="font-size: 0.9em; opacity: 0.8;">Gắn liền với <em>Security Analysis (Phân tích chứng khoán)</em> để định giá tài sản.</p>
</div>

<h4 class="anim-trigger fade-up">Quản lý Chủ động (Active) vs. Thụ động (Passive) ⚔️</h4>
<table class="anim-trigger fade-up" style="width: 100%; border-collapse: collapse; margin-top: 16px;">
  <tr style="border-bottom: 2px solid var(--line);">
    <th style="padding: 10px; text-align: left;">Active Management 🏃</th>
    <th style="padding: 10px; text-align: left;">Passive Management 🧘‍♂️</th>
  </tr>
  <tr style="border-bottom: 1px solid var(--line-2);">
    <td style="padding: 10px;">Tin rằng thị trường <strong>không hiệu quả (inefficient)</strong></td>
    <td style="padding: 10px;">Tin rằng thị trường <strong>rất hiệu quả (efficient)</strong></td>
  </tr>
  <tr style="border-bottom: 1px solid var(--line-2);">
    <td style="padding: 10px;">Cố gắng tìm kiếm cổ phiếu bị định giá sai (Mispriced securities)</td>
    <td style="padding: 10px;">Không cố gắng "đánh bại" thị trường (định giá sai rất hiếm)</td>
  </tr>
  <tr>
    <td style="padding: 10px;">Market Timing: Cố đoán thời điểm mua rẻ bán đắt</td>
    <td style="padding: 10px;">Mua và nắm giữ một danh mục đa dạng hóa cao (ví dụ: S&P 500 Index Fund)</td>
  </tr>
</table>
`,
`
<h3 class="anim-trigger fade-up" style="color: var(--accent); margin-top: 24px;">1.5 Các chủ thể trong thị trường (The Players) 🧑‍🤝‍🧑</h3>
<p class="anim-trigger fade-up">Thị trường tài chính kết nối 3 nhóm chính:</p>

<ol class="anim-trigger fade-up">
  <li><strong>Hộ gia đình (Households/Business):</strong> Người cung cấp ròng vốn (Net suppliers of capital). Họ tiết kiệm tiền. 💰</li>
  <li><strong>Doanh nghiệp (Firms):</strong> Người có nhu cầu vốn ròng (Net demanders of capital) để đầu tư vào nhà xưởng, sản xuất. 🏭</li>
  <li><strong>Chính phủ (Governments):</strong> Có thể là đi vay ròng (phát hành trái phiếu chính phủ) hoặc cho vay ròng (tùy vào thặng dư hay thâm hụt ngân sách). 🏛️</li>
</ol>

<p class="anim-trigger fade-up"><strong>Trung gian tài chính (Financial Intermediaries):</strong> Đóng vai trò cầu nối, gom tiền từ các nhà đầu tư nhỏ lẻ và phân bổ cho các doanh nghiệp.</p>

<div class="anim-trigger fade-up" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 20px;">
  <div style="background: var(--paper-2); padding: 16px; border-radius: 8px; border: 1px solid var(--line-2);">
    <h4 style="margin:0 0 10px 0; color:var(--text-1);">Ngân hàng 🏦</h4>
    <p style="font-size: 0.9em; margin:0; opacity: 0.8;">Nhận tiền gửi và cho vay, thu lời từ chênh lệch lãi suất.</p>
  </div>
  <div style="background: var(--paper-2); padding: 16px; border-radius: 8px; border: 1px solid var(--line-2);">
    <h4 style="margin:0 0 10px 0; color:var(--text-1);">Quỹ đầu tư 📈</h4>
    <p style="font-size: 0.9em; margin:0; opacity: 0.8;">(Mutual Funds, Hedge Funds) Tập hợp tiền từ nhiều nhà đầu tư để quản lý danh mục quy mô lớn.</p>
  </div>
  <div style="background: var(--paper-2); padding: 16px; border-radius: 8px; border: 1px solid var(--line-2);">
    <h4 style="margin:0 0 10px 0; color:var(--text-1);">Ngân hàng đầu tư 👔</h4>
    <p style="font-size: 0.9em; margin:0; opacity: 0.8;">(Investment Banks) Tư vấn phát hành chứng khoán (IPO, Trái phiếu), trung gian trên thị trường sơ cấp.</p>
  </div>
</div>
`
];

const investingCh1HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb"><a href="#/home">Home</a> / <a href="#/investing">Investing</a> / <span>Chapter 1: The Investment Environment</span></div>
  <div class="article" id="bookContent"></div>
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="display:flex; align-items:center; gap:4px;">Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center;"> <span id="pageTotal"></span></div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;

export default investingCh1HTML;
export { investingCh1Pages };
