const html = `
<section class="page active" id="page-vesaf-2017" data-route="/minds/vesaf-2017" data-title="Khởi đầu từ những ngách hẹp">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2017
    </div>
    <h1 style="margin-bottom: 8px;">Khởi đầu từ những ngách hẹp</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Thành lập vào tháng 4/2017. Sứ mệnh của VESAF không phải là đấu tay đôi với các ETF Blue-chips, mà là khai phá những khoảng trống định giá ở phân khúc SMID-Cap.</p>

    <div class="book-reader" style="max-width: 680px; margin: 0 auto; background: var(--paper); border: 1px solid var(--line); border-radius: 4px; padding: 56px 64px; position: relative; min-height: 65vh; display: flex; flex-direction: column; box-shadow: 0 10px 30px rgba(0,0,0,0.02), inset 0 0 120px rgba(255,249,240,0.5);">
      
      <div id="bookContent" class="book-content" style="flex-grow: 1; font-family: 'Times New Roman', Times, serif; font-size: 19px; line-height: 1.8; color: #2c2a28;">
      </div>

      <div class="book-controls" style="display: flex; justify-content: space-between; align-items: center; margin-top: 48px; padding-top: 24px; position: relative;">
        <div style="position: absolute; top: 0; left: 30%; right: 30%; height: 1px; background: linear-gradient(90deg, transparent, var(--line-2), transparent);"></div>
        <button id="prevPageBtn" class="pill" disabled style="min-width: 120px; justify-content: center; font-family: 'Georgia', serif; font-style: italic; border: none; background: transparent; color: var(--soft); cursor: pointer;">← Trang trước</button>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--muted); text-transform: uppercase;">Trang</span>
          <input type="number" id="pageInput" min="1" max="8" value="1" style="width: 48px; text-align: center; border: 1px solid var(--line); border-radius: 4px; padding: 4px; font-family: var(--font-mono); font-size: 12px; background: transparent; color: var(--ink);">
          <span id="pageTotal" style="font-family: var(--font-mono); font-size: 11px; color: var(--muted);">/ 8</span>
        </div>
        <button id="nextPageBtn" class="pill" style="min-width: 120px; justify-content: center; font-family: 'Georgia', serif; font-style: italic; border: none; background: transparent; color: var(--ink); cursor: pointer;">Trang sau →</button>
      </div>

    </div>
  </div>
</section>
`;

let pagesRaw = [
  `<img src="/images/dcds1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ngày 18/04/2017, Quỹ Đầu tư Cổ phiếu Tiếp cận Thị trường Việt Nam (VESAF) chính thức được VinaCapital ra mắt. Đứng trước một thị trường đang bị thống trị bởi các quỹ ngoại khổng lồ bám theo rổ chỉ số VN30, đội ngũ điều hành của chúng tôi phải trả lời một câu hỏi sinh tử: Lý do tồn tại của VESAF là gì?</p>
  <p>Câu trả lời nằm ở khái niệm "Khoảng trống thông tin" (Information Gap). Trong khi hàng tá báo cáo phân tích mổ xẻ từng động thái nhỏ nhất của Vietcombank hay Vinamilk, thì có hàng trăm doanh nghiệp quy mô vừa và nhỏ (SMID-Cap) đang làm ăn cực tốt nhưng lại bị giới tài chính bỏ ngỏ.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Mục tiêu ban đầu của VESAF là đi săn những "viên ngọc trong đá" này. Đó là những doanh nghiệp có lợi thế cạnh tranh riêng biệt, bộ máy quản trị sạch sẽ, tạo ra tiền mặt đều đặn, nhưng thanh khoản cổ phiếu quá thấp để các tay chơi tỷ đô dòm ngó tới.</p>
  <p>Bên cạnh đó, VESAF sở hữu một vũ khí bí mật tuyệt đối: Thể chế Quỹ Nội Địa. Nó cho phép quỹ mua vào các cổ phiếu cực tốt nhưng đã hết Room Ngoại (Foreign Ownership Limit - FOL). Chúng tôi đóng vai trò là chiếc phễu giúp nhà đầu tư tiếp cận những tài sản "vô giá" này.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bối cảnh ra mắt của quỹ là một năm 2017 thăng hoa rực rỡ của VN-Index. Điểm số băng băng hướng tới mốc 1.000, lòng tham tràn ngập trên các diễn đàn chứng khoán. Tiền rẻ bơm vào nền kinh tế khiến việc mua gì cũng thắng.</p>
  <p>Thách thức lớn nhất đối với một quỹ mới thành lập không phải là tìm cách kiếm tiền nhanh, mà là không để bị cuốn vào vòng xoáy đầu cơ. Chúng tôi kiên định giải ngân vào những công ty có câu chuyện tăng trưởng thực chất, điển hình là <strong>Thế Giới Di Động (MWG)</strong>.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>MWG lúc bấy giờ đang trong giai đoạn bành trướng mạnh mẽ chuỗi Điện Máy Xanh và bắt đầu thử nghiệm Bách Hóa Xanh. Quan trọng hơn, MWG luôn ở trong tình trạng "Kín Room Ngoại". Khối ngoại phải thỏa thuận mua ngoài sàn với mức chênh lệch (Premium) rất cao, trong khi VESAF có thể từ tốn gom hàng trên sàn khớp lệnh.</p>
  <p>Sự chênh lệch này là một khoản lợi nhuận rủi ro thấp (Arbitrage) tuyệt vời mà cấu trúc quỹ nội địa mang lại.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tương tự như MWG, <strong>Vàng bạc Đá quý Phú Nhuận (PNJ)</strong> cũng lọt vào mắt xanh của quỹ. Ngành bán lẻ trang sức có thương hiệu tại Việt Nam phân mảnh trầm trọng, và PNJ đang dùng năng lực chế tác tinh xảo của mình để nuốt chửng thị phần của các tiệm vàng truyền thống.</p>
  <p>Một cổ phiếu khác là <strong>FPT</strong>. Dù thời điểm đó, FPT vẫn mang hình bóng của một tập đoàn công nghệ có tính "nhà nước" nặng nề, nhưng dòng tiền từ mảng xuất khẩu phần mềm đang âm thầm phình to. VESAF mua FPT đơn giản vì định giá P/E của nó quá rẻ cho một cỗ máy tạo tiền.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhờ quy mô NAV ban đầu chưa quá lớn, quỹ thể hiện sự linh hoạt (Agility) đáng kinh ngạc. Chúng tôi luân chuyển vốn nhanh gọn giữa các mã Mid-Cap khi chúng đạt tới định giá hợp lý, mà không gây ra tác động trượt giá lớn trên biểu đồ giao dịch.</p>
  <p>Chính lợi thế về quy mô này đã giúp tạo ra mức "Alpha" (Lợi suất vượt trội) mạnh mẽ trong những năm đầu đời của quỹ.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2017 (tính từ giữa tháng 4), VESAF ghi nhận mức tăng trưởng <strong>+23,5%</strong>. Một khởi đầu đẹp như mơ đối với đội ngũ quản lý của VinaCapital.</p>
  <p>Sự ra mắt thành công này đã xây dựng được "Track-record" vững chắc, chứng minh với giới đầu tư rằng chiến lược đi săn từ đáy lên (Bottom-up) ở phân khúc vốn hóa vừa và nhỏ là hoàn toàn khả thi và đem lại hiệu quả cao.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2017 khép lại trong rượu champagne. Rất nhiều nhà đầu tư trên thị trường đắc thắng với đòn bẩy Margin cao chót vót. Nhưng tại phòng phân tích của VinaCapital, mọi người trở nên tĩnh lặng.</p>
  <p>Mức định giá P/E của VN-Index đang bị đẩy lên ngưỡng cực kỳ nguy hiểm. Ở nước Mỹ xa xôi, Fed bắt đầu bắn tín hiệu thu hẹp nới lỏng tiền tệ. Chúng tôi hiểu rằng, phép thử thực sự của VESAF không nằm ở những ngày nắng ráo. Bài kiểm tra về năng lực quản lý rủi ro sắp sửa diễn ra vào năm 2018.</p>`
];

const nfdMap = {
  'à': 'à', 'á': 'á', 'ả': 'ả', 'ã': 'ã', 'ạ': 'ạ',
  'ằ': 'ằ', 'ắ': 'ắ', 'ẳ': 'ẳ', 'ẵ': 'ẵ', 'ặ': 'ặ',
  'ầ': 'ầ', 'ấ': 'ấ', 'ẩ': 'ẩ', 'ẫ': 'ẫ', 'ậ': 'ậ',
  'è': 'è', 'é': 'é', 'ẻ': 'ẻ', 'ẽ': 'ẽ', 'ẹ': 'ẹ',
  'ề': 'ề', 'ế': 'ế', 'ể': 'ể', 'ễ': 'ễ', 'ệ': 'ệ',
  'ì': 'ì', 'í': 'í', 'ỉ': 'ỉ', 'ĩ': 'ĩ', 'ị': 'ị',
  'ò': 'ò', 'ó': 'ó', 'ỏ': 'ỏ', 'õ': 'õ', 'ọ': 'ọ',
  'ồ': 'ồ', 'ố': 'ố', 'ổ': 'ổ', 'ỗ': 'ỗ', 'ộ': 'ộ',
  'ờ': 'ờ', 'ớ': 'ớ', 'ở': 'ở', 'ỡ': 'ỡ', 'ợ': 'ợ',
  'ù': 'ù', 'ú': 'ú', 'ủ': 'ủ', 'ũ': 'ũ', 'ụ': 'ụ',
  'ừ': 'ừ', 'ứ': 'ứ', 'ử': 'ử', 'ữ': 'ữ', 'ự': 'ự',
  'ỳ': 'ỳ', 'ý': 'ý', 'ỷ': 'ỷ', 'ỹ': 'ỹ', 'ỵ': 'ỵ'
};

export const vesaf2017Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
