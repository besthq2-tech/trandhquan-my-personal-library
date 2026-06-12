const html = `
<section class="page active" id="page-dcds-2024" data-route="/minds/dcds-2024" data-title="The AI Boom & FDI Shift">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2024
    </div>
    <h1 style="margin-bottom: 8px;">The AI Boom & FDI Shift</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2024. Cơn bão Trí tuệ nhân tạo (AI) quét qua toàn cầu. DCDS thắng lớn khi đặt cược trọn vẹn vào FPT và làn sóng FDI "China + 1".</p>

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

let dcdsPagesRaw = [
  `<img src="/images/dcds1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thế giới năm 2024 chỉ nhắc đến hai chữ: AI (Trí tuệ nhân tạo). Sự ra đời của ChatGPT và cú bứt tốc lịch sử của Nvidia đã định hình lại toàn bộ chuỗi giá trị công nghệ toàn cầu. Tại Việt Nam, nhiều người nghĩ rằng AI là câu chuyện ở thung lũng Silicon xa xôi. Nhưng với Dragon Capital, chúng tôi thấy nó hiện diện ngay trong danh mục của mình.</p>
  <p>Và cái tên đó là <strong>FPT</strong>. Chúng tôi đã giữ FPT từ những ngày IPO 2006, trải qua những giai đoạn công ty bế tắc. Nhưng năm 2024, FPT thực sự lột xác, trở thành một doanh nghiệp đạt tỷ đô doanh thu phần mềm nước ngoài, hợp tác sâu rộng với các gã khổng lồ AI và Bán dẫn toàn cầu.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Luận điểm của quỹ rất dứt khoát: Khi thế giới đổ xô đi đào vàng (AI), người bán cuốc xẻng (dịch vụ IT, chip, hạ tầng Cloud) sẽ là người kiếm nhiều tiền nhất. FPT là doanh nghiệp duy nhất trên sàn niêm yết có khả năng tham gia vào chuỗi giá trị khổng lồ này.</p>
  <p>Trong năm 2024, giá cổ phiếu FPT phá vỡ mọi kháng cự kỹ thuật, liên tục lập đỉnh lịch sử mới và trở thành công ty có vốn hóa lớn nhất nhóm công nghệ trên sàn. Sự kiên định giữ chặt cổ phiếu này, mặc cho nhiều lần thị trường chốt lời sớm, đã mang lại cho DCDS một khoản lợi nhuận kỷ lục chưa từng thấy.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Song song với cơn lốc AI là sự chuyển dịch mạnh mẽ của dòng vốn FDI. Sự căng thẳng địa chính trị Mỹ-Trung khiến các tập đoàn đa quốc gia tăng tốc chiến lược "China + 1". Họ cần một công xưởng mới, và Việt Nam là một trong những điểm đến hấp dẫn nhất.</p>
  <p>Thay vì đầu tư trực tiếp vào các doanh nghiệp sản xuất, DCDS chọn cách đầu tư an toàn và biên lợi nhuận cao hơn: Nhóm Bất động sản Khu công nghiệp. Những doanh nghiệp cho thuê đất nhà xưởng là những người đầu tiên hưởng lợi khi vốn FDI giải ngân.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi tập trung vào <strong>KBC (Kinh Bắc)</strong> và <strong>IDC (Idico)</strong>, những doanh nghiệp có quỹ đất sạch khổng lồ nằm ở các vị trí chiến lược gần cảng biển và cao tốc. Giá thuê đất khu công nghiệp tại phía Bắc và phía Nam liên tục tăng, giúp lợi nhuận nhóm này bùng nổ.</p>
  <p>Đây là bài học kinh điển về việc "Đầu tư theo dòng chảy vĩ mô". Khi vĩ mô chỉ hướng dòng tiền ngoại chảy vào đất khu công nghiệp, nhiệm vụ của người quản lý quỹ là phân bổ tài sản sao cho hứng trọn dòng chảy đó.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2024 cũng là năm mà câu chuyện "Nâng hạng thị trường" (Emerging Market Upgrade) trở nên nóng bỏng hơn bao giờ hết. Hệ thống giao dịch KRX - sau hơn chục năm chờ đợi - cuối cùng cũng có những bước chạy đà cuối cùng để vận hành chính thức.</p>
  <p>Chính phủ quyết tâm gỡ bỏ nút thắt "Prefunding" (yêu cầu ký quỹ 100% trước khi giao dịch đối với nhà đầu tư ngoại). Đây là điều kiện tiên quyết để FTSE Russell xem xét nâng hạng Việt Nam.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>DCDS hiểu rõ rằng, khi tin nâng hạng chính thức được công bố, các quỹ ETF khổng lồ trên thế giới buộc phải tự động mua vào các cổ phiếu vốn hóa lớn (Blue-chips) của Việt Nam. Để không bị "mua hớ", chúng tôi bắt đầu chiến dịch Front-running (chạy trước dòng tiền).</p>
  <p>Quỹ đẩy mạnh tỷ trọng nắm giữ tại <strong>MWG, MBB, TCB</strong>, đặc biệt là những cổ phiếu đã kín "Room" ngoại. Sự săn đón của khối ngoại khiến các cổ phiếu này được giao dịch thỏa thuận với mức Premium (phần bù giá) cực cao, làm tăng vọt giá trị danh mục nội tại của quỹ.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khép lại năm 2024, bức tranh thị trường chứng khoán Việt Nam đầy ánh sáng rực rỡ. VN-Index củng cố vững chắc quanh mốc 1.250 - 1.300 điểm. DCDS một lần nữa ghi nhận mức lợi suất ấn tượng <strong>trên +30%</strong>, dẫn dắt bởi siêu cổ phiếu FPT và nhóm Khu công nghiệp.</p>
  <p>Năm 2024 chứng minh rằng: Trong thời đại công nghệ phát triển như vũ bão, một quỹ đầu tư không thể chỉ mãi nhìn vào P/E truyền thống của các công ty sản xuất gạch ngói hay xi măng, mà phải biết định giá tương lai.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi đã sẵn sàng cho năm 2025 - một năm được dự báo sẽ mang tính bước ngoặt lịch sử khi sự kiện nâng hạng có thể chính thức được bấm nút. Dòng vốn khổng lồ đang chực chờ ngoài cửa ngõ, và những quỹ đầu tư nội địa có bề dày lịch sử như DCDS sẽ là những người gác cổng, đón trọn cơn sóng thần đó.</p>
  <p>Niềm tin của chúng tôi chưa bao giờ lớn đến thế. Kỷ nguyên của Việt Nam không còn là "thị trường cận biên" nữa, chúng tôi đang bước chân vào sân chơi của những con rồng châu Á.</p>`
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

export const dcds2024Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
