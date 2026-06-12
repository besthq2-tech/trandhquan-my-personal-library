const html = `
<section class="page active" id="page-dcds-2015" data-route="/minds/dcds-2015" data-title="The Golden Age">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2015-2017
    </div>
    <h1 style="margin-bottom: 8px;">The Golden Age</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2015 - 2017. Làn sóng thoái vốn nhà nước, mỏ vàng bán lẻ MWG, PNJ và trái ngọt trên đỉnh 1.200 điểm.</p>

    <div class="book-reader" style="max-width: 680px; margin: 0 auto; background: var(--paper); border: 1px solid var(--line); border-radius: 4px; padding: 56px 64px; position: relative; min-height: 65vh; display: flex; flex-direction: column; box-shadow: 0 10px 30px rgba(0,0,0,0.02), inset 0 0 120px rgba(255,249,240,0.5);">
      
      <div id="bookContent" class="book-content" style="flex-grow: 1; font-family: 'Times New Roman', Times, serif; font-size: 19px; line-height: 1.8; color: #2c2a28;">
        <!-- Content will be injected here -->
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
  // Page 1
  `<img src="/images/dcds2015_1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sau những cuộc đại phẫu thuật và thử thách sức bền, nền kinh tế Việt Nam bước vào năm 2015 với một thể trạng hoàn hảo. Giống như một võ sĩ vừa ép cân thành công, cơ bắp săn chắc và dẻo dai hơn bao giờ hết. Lạm phát được giữ ở mức thấp. Tầng lớp trung lưu bùng nổ, kéo theo sự bứt phá mạnh mẽ của chi tiêu tiêu dùng.</p>
  <p>Và đối với những nhà quản lý quỹ tại DCDS, đây là một "Kỷ nguyên Vàng" (The Golden Age) mà chúng tôi đã kiên nhẫn chờ đợi suốt nửa thập kỷ. Dòng vốn FDI cuồn cuộn đổ vào, kéo theo sau là một làn sóng thoái vốn nhà nước (divestment) khổng lồ tại các "Mega-cap" (những doanh nghiệp có vốn hóa siêu lớn).</p>`,

  // Page 2
  `<img src="/images/dcds2015_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>DCDS lúc này đã là một cỗ máy quỹ mở vận hành trơn tru. Khi thị trường bước vào chu kỳ tăng, lợi nhuận (NAV) tăng lên, kéo theo dòng tiền mới từ khách hàng không ngừng chảy vào quỹ. Chúng tôi có nguồn đạn dược dồi dào để săn bắn.</p>
  <p>Luận điểm đầu tư (Investment Thesis) chủ đạo của chúng tôi trong giai đoạn này là sự chuyển dịch cơ cấu tiêu dùng: Người dân Việt Nam đang chuyển từ mua sắm tại chợ truyền thống sang các chuỗi bán lẻ hiện đại (modern trade). Bất kỳ doanh nghiệp nào có khả năng mở rộng chuỗi và quản trị hàng tồn kho xuất sắc sẽ là kẻ chiến thắng.</p>`,

  // Page 3
  `<img src="/images/dcds2015_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thương vụ kinh điển mang lại lợi nhuận bùng nổ nhất cho danh mục chính là <strong>Thế Giới Di Động (MWG)</strong> và <strong>Vàng bạc Đá quý Phú Nhuận (PNJ)</strong>. Khi MWG mới lên sàn năm 2014, nhiều người hoài nghi về khả năng bão hòa của thị trường điện thoại. Nhưng chúng tôi nhìn thấy ở họ một năng lực thực thi (execution) vô song. DCDS đã nắm giữ MWG qua suốt giai đoạn mở rộng "thần tốc" Điện Máy Xanh, thu về mức lợi nhuận tính bằng nhiều lần (multi-bagger).</p>
  <p>Song song đó, nhóm ngân hàng cũng đóng góp cực lớn. Chúng tôi phân bổ tỷ trọng vào <strong>Vietcombank (VCB)</strong> và <strong>MBBank (MBB)</strong> - những ngân hàng có chất lượng tài sản tốt nhất, rũ bùn nợ xấu nhanh nhất để quay lại đà tăng trưởng lợi nhuận 30-40%/năm.</p>`,

  // Page 4
  `<img src="/images/dcds2015_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng điểm nhấn rực rỡ nhất của giai đoạn này lại đến từ làn sóng thoái vốn nhà nước. Chính phủ quyết định bán phần vốn tại <strong>Vinamilk (VNM)</strong> và <strong>Sabeco (SAB)</strong>. Hàng tỷ USD tiền mặt từ các tập đoàn Thái Lan, Singapore đổ vào Việt Nam để đấu giá.</p>
  <p>Việc các quỹ ngoại sẵn sàng trả mức giá P/E 30-40 lần để thâu tóm các công ty hàng tiêu dùng nội địa đã tạo ra một mặt bằng định giá hoàn toàn mới. Nút thắt quy mô thị trường (Market Cap) cuối cùng đã được cởi trói. Thị trường chứng khoán Việt Nam lột xác từ một "cái ao làng" thành một vùng biển lớn.</p>`,

  // Page 5
  `<img src="/images/dcds2015_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi VN-Index bứt phá qua mốc 1.000 điểm và hướng thẳng lên 1.200 điểm vào cuối năm 2017, sự hưng phấn đạt đến đỉnh điểm. Tuy nhiên, trong một thị trường đi lên, sai lầm lớn nhất thường là sự bảo thủ.</p>
  <p>Một sai lầm chiến lược của chúng tôi trong giai đoạn này là đã đánh giá quá thận trọng và <strong>bỏ lỡ một phần đà tăng nóng của nhóm cổ phiếu Bất động sản</strong> (đặc biệt là sự trỗi dậy của Vingroup - VIC). Nỗi ám ảnh từ cơn bão nợ xấu 2010 đã khiến chúng tôi giữ tỷ trọng bất động sản thấp hơn so với thị trường chung (underweight). Việc này đã khiến quỹ mất đi một cơ hội gia tăng thêm vài % lợi nhuận trong lúc nhóm này dẫn dắt chỉ số.</p>`,

  // Page 6
  `<img src="/images/dcds2015_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Dẫu vậy, kỷ luật vẫn là yếu tố sống còn. Trong bối cảnh hưng phấn cực độ năm 2017, hàng loạt cổ phiếu rác (penny stocks) và các doanh nghiệp thao túng báo cáo tài chính bắt đầu tăng giá gấp 3-5 lần mà không có nền tảng cơ bản.</p>
  <p>Bài học từ siêu bong bóng 2007 nhắc nhở chúng tôi phải giữ đôi chân trên mặt đất. Chúng tôi kiên quyết từ chối những cuộc chơi bơm thổi, tập trung tối đa tỷ trọng vào nhóm 30 doanh nghiệp đầu ngành (VN30). Quản lý một danh mục khi thị trường tăng nóng áp lực không kém gì khi thị trường giảm, bởi vì khách hàng luôn nhìn sang nhà hàng xóm để so sánh lợi nhuận.</p>`,

  // Page 7
  `<img src="/images/dcds2015_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Và phần thưởng cho sự kiên định đó là một bảng thành tích rực rỡ nhất trong lịch sử hoạt động của quỹ mở. Kết thúc năm 2017, Giá trị Tài sản Ròng (NAV) của DCDS ghi nhận mức tăng trưởng xuất sắc trên <strong>+35%</strong>. Các khoản đầu tư chiến lược vào MWG, PNJ, HPG và MBB đã gặt hái những quả ngọt khổng lồ.</p>
  <p>Tài sản quản lý (AUM) của quỹ phình to nhanh chóng nhờ đà tăng trưởng tự nhiên của danh mục và dòng tiền mới đổ vào mạnh mẽ. Không còn ai nhớ đến mức chiết khấu oan uổng của năm 2011. DCDS thực sự đã vươn lên trở thành một trong những quỹ cổ phiếu đại chúng xuất sắc nhất trên thị trường.</p>`,

  // Page 8
  `<img src="/images/dcds2015_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhìn lại chặng đường từ lúc khẩn hoang đập đá năm 2004, vượt qua vực thẳm 2008, và giờ đây đứng trên đỉnh cao 1.200 điểm của Kỷ nguyên Vàng, tôi rút ra một chân lý: Thị trường chứng khoán là một cỗ máy luân chuyển tài sản vô cùng công bằng.</p>
  <p>Nó lấy tiền của những kẻ thiếu kiên nhẫn, những người thích cờ bạc nay mua mai bán, và trao trọn vẹn phần thưởng đó cho những tổ chức biết giữ vững kỷ luật, có tầm nhìn thập kỷ, và trung thành với giá trị cốt lõi. Năm 2017 khép lại trong ánh hào quang, nhưng chúng tôi biết, bánh xe chu kỳ lại sắp sửa quay thêm một vòng mới.</p>`
];

// Normalize text for Vietnamese rendering safety
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

export const dcds2015Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
