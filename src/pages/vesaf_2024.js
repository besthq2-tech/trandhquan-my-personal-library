const html = `
<section class="page active" id="page-vesaf-2024" data-route="/minds/vesaf-2024" data-title="The Moat & The AI">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2024
    </div>
    <h1 style="margin-bottom: 8px;">The Moat & The AI</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2024. Kỷ nguyên của Trí tuệ Nhân tạo (AI) và dịch chuyển FDI. VESAF nắm chặt những doanh nghiệp sở hữu "Hào hào kinh tế" rộng nhất.</p>

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
  <p>2024. Thế giới quay cuồng trong cơn sốt mang tên Trí tuệ Nhân tạo (AI) do OpenAI và Nvidia tạo ra. Tại Việt Nam, nhiều nhà đầu tư cảm thấy đứng ngoài cuộc chơi vì sàn HOSE không có những "Big Tech" (Công ty công nghệ khổng lồ) theo tiêu chuẩn Mỹ. Nhưng đối với quỹ VESAF, cơ hội luôn tồn tại nếu bạn biết nhìn đúng chỗ.</p>
  <p>Đại diện duy nhất và xuất sắc nhất của Việt Nam trong chuỗi giá trị bán dẫn và phần mềm toàn cầu chính là <strong>FPT</strong>. Là một cổ phiếu vốn đã đồng hành cùng VESAF từ nhiều năm trước, năm 2024, chúng tôi quyết định biến FPT thành trụ cột lớn nhất (Largest Holding).</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Luận điểm của chúng tôi không chỉ là sự tăng trưởng lợi nhuận 20% mỗi năm của FPT. Thứ mà VinaCapital nhìn thấy là một "Hào hào kinh tế" (Economic Moat) không thể bị phá vỡ. FPT sở hữu nguồn nhân lực kỹ sư phần mềm khổng lồ và rẻ so với quốc tế, giúp họ liên tục trúng thầu các dự án tỷ đô từ Nhật và Mỹ.</p>
  <p>Khi cơn sốt AI lan rộng, mọi tập đoàn trên thế giới đều cần nâng cấp hệ thống dữ liệu, và FPT chính là những người thợ xây được thuê để làm việc đó. Cổ phiếu FPT tăng giá ngoạn mục, liên tục phá đỉnh mọi thời đại, kéo theo đà tăng của cả quỹ VESAF.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Song hành cùng AI là dòng vốn FDI khổng lồ. Việc Việt Nam nâng cấp quan hệ đối tác chiến lược toàn diện với Mỹ và Nhật Bản vào cuối năm 2023 đã mở ra một kỷ nguyên mới của dòng vốn đầu tư. Làn sóng dịch chuyển chuỗi cung ứng (China + 1) chưa bao giờ mạnh mẽ đến thế.</p>
  <p>Nhưng thay vì đầu tư vào các nhà máy sản xuất, VESAF tiếp tục mua những "kẻ thu rào": Các doanh nghiệp hạ tầng Logistics và Khu công nghiệp. <strong>Gemadept (GMD)</strong> là một lựa chọn hoàn hảo.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>GMD sở hữu cảng nước sâu Gemalink lớn nhất miền Nam, nơi duy nhất có thể đón các siêu tàu mẹ đi thẳng sang Mỹ và châu Âu. Đây là một lợi thế độc quyền tự nhiên (Natural Monopoly). Bạn không thể khơi thông thêm một dòng sông hay xây thêm một cảng nước sâu sát bên cạnh Gemalink.</p>
  <p>Giá cước xếp dỡ liên tục được điều chỉnh tăng. GMD tạo ra dòng tiền khủng khiếp mỗi năm. VESAF thu lợi nhuận lớn từ việc kiên trì nắm giữ GMD vượt qua những giai đoạn rung lắc của thị trường.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bên cạnh đó, năm 2024 cũng đánh dấu sự phục hồi của ngành Ngân hàng sau khi giải quyết xong bài toán trái phiếu. VESAF tập trung vào những ngân hàng có bộ đệm vốn dày và chất lượng tài sản tốt nhất như <strong>MBB</strong> và <strong>TCB</strong>.</p>
  <p>Chúng tôi mua TCB khi định giá P/B của ngân hàng này rớt xuống mức 0.8x - mức định giá rẻ đến mức phi lý đối với một ngân hàng tư nhân hàng đầu có hệ sinh thái khách hàng VIP khổng lồ. Khi thị trường nhận ra sai lầm, TCB đã bật tăng mạnh mẽ, đóng góp lớn vào hiệu suất của quỹ.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Một câu hỏi thường trực của các nhà đầu tư cá nhân là: "Tại sao tôi phải mua chứng chỉ quỹ VESAF trong khi tôi có thể tự mua FPT hay GMD?".</p>
  <p>Câu trả lời nằm ở quản trị rủi ro và tâm lý. Sẽ có những phiên thị trường chung sập 30 điểm vì những tin đồn vĩ mô. Nhà đầu tư cá nhân sẽ hoảng loạn bán tháo FPT ở đáy, và sợ hãi không dám mua lại. Nhưng với quỹ VESAF, tính kỷ luật của hội đồng đầu tư giúp chúng tôi cầm chặt những "Viên kim cương" này qua mọi giông bão.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2024, bức tranh vĩ mô ổn định hơn bao giờ hết. VN-Index dao động quanh biên độ 1.250 - 1.300 điểm. Quỹ VESAF tiếp tục chuỗi thành tích đánh bại thị trường, ghi nhận mức lợi nhuận <strong>trên +25%</strong>.</p>
  <p>Thành công của VESAF năm 2024 không đến từ việc lướt sóng các mã đầu cơ, mà đến từ việc nhận diện đúng những doanh nghiệp có "Hào hào kinh tế" rộng nhất, và ôm chặt chúng trong xu hướng siêu chu kỳ công nghệ.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2024 qua đi, để lại một nền tảng vững chắc cho nền kinh tế Việt Nam. Các dự án hạ tầng giao thông kết nối các vùng miền đang thành hình. Sân bay Long Thành đang đẩy nhanh tiến độ.</p>
  <p>Nhưng câu chuyện lớn nhất, thứ sẽ hút mọi nguồn lực của giới tài chính trong năm tới, chính là Sự kiện Nâng hạng Thị trường Mới nổi (Emerging Market Upgrade). Một trò chơi lớn của những tay chơi tỷ đô đang chuẩn bị bắt đầu vào năm 2025.</p>`
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

export const vesaf2024Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
