const html = `
<section class="page active" id="page-vesaf-2023" data-route="/minds/vesaf-2023" data-title="Vươn lên từ tro tàn">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2023
    </div>
    <h1 style="margin-bottom: 8px;">Vươn lên từ tro tàn</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Lợi dụng động thái hạ lãi suất quyết liệt của Ngân hàng Nhà nước, VESAF tái cấu trúc danh mục và đón đầu cú "V-Shape Rebound" ngoạn mục nhất lịch sử.</p>

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
  <p>Tháng 3/2023. Trong khi nền kinh tế toàn cầu vẫn đang thắt lưng buộc bụng vì nỗi sợ hãi lạm phát, Ngân hàng Nhà nước Việt Nam (NHNN) đã có một quyết định đi ngược chiều thế giới: Chủ động hạ lãi suất điều hành.</p>
  <p>Đây là một động thái "quay xe" (Pivot) chính sách tiền tệ cực kỳ quan trọng. Đối với thị trường chứng khoán, tiền rẻ luôn là "oxygen" giúp phục hồi định giá tài sản sau một cơn bạo bệnh. Tại VESAF, chúng tôi nhận thấy cơ hội để tạo ra một cú phục hồi hình chữ V (V-Shape Rebound) đã đến.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhóm ngành nhạy cảm nhất với lãi suất chính là Chứng khoán. Sự sụt giảm của lãi suất tiết kiệm sẽ tất yếu đẩy dòng tiền nhàn rỗi quay lại sàn giao dịch. Thanh khoản thị trường phục hồi đồng nghĩa với lợi nhuận mảng môi giới và cho vay Margin sẽ bùng nổ trở lại.</p>
  <p>VESAF lập tức gia tăng tỷ trọng tại các công ty chứng khoán hàng đầu như <strong>SSI</strong> và <strong>VCI (Vietcap)</strong>. Chúng tôi tận dụng việc định giá P/B (Price-to-Book) của nhóm này đang ở mức thấp nhất trong nhiều năm để xây dựng một vị thế cốt lõi lớn.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Câu chuyện lớn thứ hai của năm 2023 là làn sóng Dịch chuyển Chuỗi cung ứng Toàn cầu. Chiến lược "Trung Quốc + 1" của các tập đoàn đa quốc gia và việc nâng cấp quan hệ Đối tác Chiến lược Toàn diện giữa Việt Nam và Mỹ đã phả hơi nóng vào nhóm Bất động sản Khu công nghiệp.</p>
  <p>Khác với bất động sản dân cư vẫn đang tê liệt vì nợ trái phiếu, bất động sản khu công nghiệp là nhóm tạo ra tiền thật (Real cash flow). VESAF nhắm đến <strong>IDC (Idico)</strong> và <strong>SZC (Sonadezi Châu Đức)</strong> với quỹ đất thương phẩm sẵn sàng cho thuê khổng lồ.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tất nhiên, danh mục không thể thiếu <strong>FPT</strong>. Năm 2023, doanh thu từ thị trường nước ngoài của FPT lần đầu tiên vượt mốc 1 tỷ USD. Mảng kinh doanh AI và Cloud tiếp tục tăng trưởng bằng lần.</p>
  <p>Chúng tôi coi FPT như một "Trái phiếu lợi suất cao" (High-yield bond) trong danh mục. Sự lỳ lợm của FPT trong năm 2022 đã được đền đáp bằng việc cổ phiếu này liên tục phá vỡ mọi đỉnh lịch sử trong năm 2023, mang lại sự ổn định tuyệt đối cho NAV của quỹ.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Việc mạnh dạn thay đổi chiến lược phòng thủ của năm ngoái sang tấn công có chọn lọc đòi hỏi sự quyết đoán. Đội ngũ đầu tư của VinaCapital phải liên tục theo dõi tốc độ giải ngân vốn FDI, chỉ số PMI sản xuất, và dữ liệu tăng trưởng tín dụng.</p>
  <p>Thị trường chứng khoán phục hồi đi kèm với sự hoài nghi của đám đông. Phần lớn nhà đầu tư cá nhân vẫn đang "liếm láp vết thương" từ năm 2022 và không dám giải ngân. Nhưng chính "bức tường lo âu" (Wall of Worry) này lại là môi trường hoàn hảo để một chu kỳ tăng giá mới bắt đầu.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Từ đáy sâu của sự tuyệt vọng cuối 2022, những cổ phiếu bị bán tháo quá đà trong danh mục của VESAF chứng kiến đà phục hồi 50%, 70%, thậm chí 100% giá trị. Đây là minh chứng rõ ràng nhất cho nguyên lý CMean Reversion (Sự trở về mức trung bình) trong tài chính: Giá cả có thể dao động điên loạn, nhưng cuối cùng nó sẽ quay về với trục Giá trị Nội tại.</p>
  <p>Những khoản "Lỗ trên giấy" (Unrealized Loss) năm ngoái nhanh chóng chuyển thành màu xanh. Lòng tin của nhà đầu tư vào phương pháp luận của VinaCapital bắt đầu được hàn gắn.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2023, VN-Index hồi phục +12,2%. Tuy nhiên, một lần nữa, VESAF lại làm nên chuyện.</p>
  <p>Quỹ chốt năm với mức tăng trưởng <strong>+30,9%</strong>, Outperform (Đánh bại) Index tới 18,7 điểm phần trăm. Sự phục hồi từ tro tàn (Rising from Ashes) này khẳng định năng lực quản lý chủ động vượt trội. Nó chứng minh rằng VESAF không chỉ biết ôm hàng phòng thủ, mà còn biết tung ra những cú đấm knock-out khi thị trường mở ra cơ hội.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bước sang năm mới, bức tranh vĩ mô dường như đang dần sáng tỏ hơn. Dòng vốn FDI vẫn chảy mạnh, và câu chuyện Nâng hạng thị trường (Market Upgrade) bắt đầu được nhắc đến sôi nổi.</p>
  <p>Nhưng thay vì ngủ quên trên chiến thắng, đội ngũ VESAF lại bắt đầu tập trung vào một khái niệm mới: Kinh tế Hào rãnh (Economic Moats). Trong một thế giới hậu đại dịch đang thay đổi chóng mặt, chỉ những doanh nghiệp có rào cản xâm nhập vô hình mới có thể bảo vệ được biên lợi nhuận của mình trong năm 2024 sắp tới.</p>`
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

export const vesaf2023Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
