const html = `
<section class="page active" id="page-dcds-2005" data-route="/minds/dcds-2005" data-title="The Mega Bubble">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2005-2007
    </div>
    <h1 style="margin-bottom: 8px;">The Mega Bubble</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2005 - 2007. Khi lòng tham vượt qua lý trí, sự bùng nổ của FPT, VNM và bài học cay đắng trên thị trường OTC.</p>

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
  `<img src="/images/dcds2005_1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nếu bạn chưa từng sống qua năm 2006 tại Việt Nam, bạn sẽ không thể hiểu được khái niệm "điên rồ" trong tài chính là gì. Nền kinh tế bừng tỉnh nhờ tin tức Việt Nam gia nhập WTO. Dòng vốn ngoại khổng lồ từ các quỹ đầu tư quốc tế ồ ạt đổ bộ vào mảnh đất hình chữ S, nơi có tốc độ tăng trưởng GDP trên 8%.</p>
  <p>Và thị trường chứng khoán - từ chỗ là một "chợ chiều" vắng vẻ năm 2004 - bỗng chốc trở thành sòng bạc lớn nhất quốc gia. Bất cứ ai cũng có thể là chuyên gia. Các bà nội trợ, sinh viên, tài xế taxi đều nói về cổ phiếu. Các sàn giao dịch chật cứng người đến mức bạn không thể chen chân vào cửa.</p>`,

  // Page 2
  `<img src="/images/dcds2005_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chỉ số VN-Index bùng nổ, tăng từ mức khoảng 300 điểm đầu năm 2006 lên mức đỉnh không tưởng 1.170 điểm vào tháng 3 năm 2007. Lòng tham lây lan nhanh hơn một dịch bệnh. Người ta không còn hỏi "Công ty này làm gì?", họ chỉ hỏi "Mã này có game gì? Bao giờ lên sàn?".</p>
  <p>Đối với DCDS (lúc này vẫn là Quỹ đóng VF1), chúng tôi như trúng số độc đắc. Danh mục cổ phiếu chúng tôi đã gom nhặt kiên nhẫn từ những năm trước với định giá P/E 5x nay được thị trường điên cuồng trả giá P/E 30x, thậm chí 50x. Tài sản của quỹ tăng theo chiều thẳng đứng từng ngày.</p>`,

  // Page 3
  `<img src="/images/dcds2005_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Luận điểm đầu tư của chúng tôi lúc này tập trung vào sự trỗi dậy của công nghệ và tiêu dùng, đón đầu dòng tiền mới của quốc gia. Thương vụ thành công vang dội nhất phải kể đến <strong>Công ty Cổ phần Sữa Việt Nam (Vinamilk - VNM)</strong>. Khi VNM lên sàn đầu năm 2006, chúng tôi đã nhận ra vị thế độc tôn không thể lay chuyển của họ trong ngành sữa. Dragon Capital nhanh chóng trở thành một trong những cổ đông lớn nhất, ôm chặt "con gà đẻ trứng vàng" này qua mọi sóng gió.</p>
  <p>Bên cạnh đó là thương vụ niêm yết lịch sử của <strong>FPT</strong> vào cuối năm 2006. FPT lập tức trở thành hiện tượng, là cổ phiếu công nghệ duy nhất mang dáng dấp của thung lũng Silicon. Giá FPT tăng bạo lực, đẩy hàng loạt nhân viên công ty thành triệu phú USD chỉ sau một đêm. Quỹ VF1 đã thắng lớn khi nắm giữ FPT từ sớm.</p>`,

  // Page 4
  `<img src="/images/dcds2005_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng khi bạn sống trong một siêu bong bóng (Mega Bubble), não bộ của bạn bắt đầu tiết ra Dopamine quá mức. Ranh giới giữa sự tự tin của một nhà đầu tư có tầm nhìn và sự tự cao của một gã say bạc trở nên cực kỳ mong manh.</p>
  <p>Chúng tôi bắt đầu mắc sai lầm, một sai lầm đặc trưng của thị trường Việt Nam lúc bấy giờ: <strong>Cuộc chơi trên thị trường OTC (Thị trường chưa niêm yết)</strong>. Các công ty chưa lên sàn được định giá một cách điên rồ chỉ qua những lời rỉ tai. Sức ép giải ngân từ dòng vốn mới đổ vào quỹ khiến chúng tôi phải đi tìm những "FPT thứ hai", "Vinamilk thứ hai" ở ngoài chợ đen.</p>`,

  // Page 5
  `<img src="/images/dcds2005_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi mua vào các công ty bất động sản, ngân hàng nhỏ và công ty tài chính trên thị trường OTC với mức giá trên trời. Luận điểm lúc đó là: "Chỉ cần họ lên sàn, giá sẽ lập tức x2, x3". Đó là lý thuyết của Kẻ ngốc hơn (Greater Fool Theory) - mua một tài sản giá cao ngất ngưởng vì tin rằng sẽ có một kẻ ngốc hơn mua lại nó với giá cao hơn nữa.</p>
  <p>Nhưng thanh khoản trên OTC là một cái bẫy chết người. Khi thị trường tốt, bạn có thể bán bất cứ thứ gì. Nhưng khi gió đổi chiều, thị trường OTC đông cứng ngay lập tức. Không có lệnh đỡ giá, không có biên độ, không có người mua. Bạn bị nhốt trong chính lòng tham của mình.</p>`,

  // Page 6
  `<img src="/images/dcds2005_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Giữa năm 2007, những tín hiệu rạn nứt đầu tiên xuất hiện. Ngân hàng Nhà nước, nhận thấy bong bóng tài sản và lạm phát bắt đầu phi mã, đã ra Chỉ thị 03 nhằm siết chặt tín dụng chảy vào chứng khoán. Bữa tiệc tiền rẻ chính thức kết thúc.</p>
  <p>Thị trường chứng khoán quay đầu giảm điểm nhanh như cách nó tăng lên. Hàng loạt cổ phiếu OTC mà chúng tôi và nhiều nhà đầu tư khác đang nắm giữ bỗng chốc trở thành những tờ giấy lộn không thể quy ra tiền mặt. Chúng tôi đã đánh giá sai tốc độ và sự quyết liệt trong chính sách thắt chặt tiền tệ của cơ quan quản lý.</p>`,

  // Page 7
  `<img src="/images/dcds2005_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhìn lại hiệu suất, năm 2006 là năm huy hoàng nhất trong lịch sử, NAV của VF1 tăng trưởng phi mã <strong>hơn 100%</strong>. Nhưng bước sang cuối năm 2007, mọi thứ bắt đầu sụt giảm. Dù quỹ vẫn ghi nhận mức tăng trưởng tốt so với khi mới thành lập, nhưng sự sụp đổ của thanh khoản đang báo hiệu một cơn bão kinh hoàng sắp ập đến.</p>
  <p>Nhà đầu tư từng hoan hô chúng tôi như những vị thánh vào đầu năm 2007, giờ đây bắt đầu hoang mang. Cấu trúc quỹ đóng (Closed-end) của VF1 lộ ra điểm yếu chí mạng: Lực bán hoảng loạn trên sàn khiến thị giá của chứng chỉ quỹ giảm nhanh hơn rất nhiều so với giá trị tài sản ròng (NAV) thực tế của danh mục, tạo ra một mức chiết khấu (discount) đầy bất công.</p>`,

  // Page 8
  `<img src="/images/dcds2005_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bong bóng 2005-2007 đã dạy cho tôi một bài học mà bất kỳ nhà quản lý quỹ nào cũng phải xăm lên tay: Thanh khoản là ôxy. Khi lòng tham ngự trị, những tài sản OTC kém thanh khoản trông giống như những mỏ vàng vô tận. Nhưng khi sợ hãi bao trùm, chúng lập tức trở thành những chiếc mỏ neo sắt kéo chìm toàn bộ con tàu.</p>
  <p>Cuối năm 2007, đứng nhìn bảng điện tử chìm trong sắc đỏ rực của những đợt bán tháo đầu tiên, tôi có một dự cảm chẳng lành. Chúng tôi đã sống sót qua cơn điên loạn của lòng tham, nhưng liệu quỹ có thể chống chọi lại được với vực thẳm của sự tuyệt vọng đang chờ đợi ở năm 2008?</p>`
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

export const dcds2005Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
