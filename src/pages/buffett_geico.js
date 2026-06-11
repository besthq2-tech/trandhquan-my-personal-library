const html = `
<section class="page active" id="page-buffett-geico" data-route="/minds/buffett-geico" data-title="The 45-Year Love Affair">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">01 · Inner Monologues</a> · Warren Buffett
    </div>
    <h1 style="margin-bottom: 8px;">The 45-Year Love Affair</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Omaha, 1996. Thâu tóm toàn bộ GEICO và sức mạnh của sự kiên nhẫn vĩ đại.</p>

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

let geicoPagesRaw = [
  // Page 1
  `<img src="/images/geico1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tháng 1 năm 1951. Một buổi sáng thứ Bảy lạnh lẽo ở Washington D.C. Tôi lúc đó chỉ là một sinh viên 20 tuổi gầy gò của đại học Columbia. Tôi bắt một chuyến tàu đến thủ đô chỉ vì một lý do duy nhất: người hùng của tôi, giáo sư Ben Graham, là Chủ tịch của một công ty bảo hiểm vô danh có tên GEICO.</p>
  <p>Khi tôi đến trụ sở của họ, cánh cửa đã đóng kín. Tất nhiên rồi, ai lại làm việc vào cuối tuần cơ chứ? Nhưng tôi đã đập cửa liên tục cho đến khi một người bảo vệ phải ra mở. Tôi năn nỉ ông ấy cho tôi vào, và may mắn thay, có một giám đốc điều hành duy nhất đang làm việc hôm đó: Lorimer Davidson.</p>`,

  // Page 2
  `<img src="/images/geico2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Lorimer đã dành ra bốn tiếng đồng hồ quý giá của ngày thứ Bảy để giải thích toàn bộ ngành bảo hiểm cho một thằng nhóc vắt mũi chưa sạch. Ông ấy chỉ cho tôi thấy một mô hình kinh doanh rực rỡ: thay vì bán bảo hiểm qua đại lý và tốn 25% hoa hồng, GEICO bán trực tiếp qua thư cho các công chức chính phủ.</p>
  <p>Cắt bỏ trung gian. Giảm thiểu rủi ro nhờ tập khách hàng có thu nhập ổn định. Lợi thế chi phí tuyệt đối. Đầu tôi như nổ tung. Ngay ngày thứ Hai tuần sau, tôi đã vét sạch số tiền tiết kiệm ít ỏi của mình — khoảng 10.000 đô la, chiếm 65% tổng tài sản của tôi lúc bấy giờ — để mua cổ phiếu GEICO. Đó là tình yêu sét đánh.</p>`,

  // Page 3
  `<img src="/images/geico3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng tình yêu nào cũng có giông bão. Năm 1976, GEICO trượt dài đến bờ vực phá sản. Đội ngũ quản lý cũ đã mắc những sai lầm chết người: định giá sai rủi ro, dự phòng bồi thường quá mỏng, và mở rộng tập khách hàng một cách mù quáng. Cổ phiếu rơi tự do từ 61 đô la xuống chỉ còn 2 đô la.</p>
  <p>Cả Phố Wall đang tháo chạy trong hoảng loạn. Người ta bàn tán về việc GEICO sẽ sụp đổ, về việc chính phủ phải can thiệp. Tôi nhìn vào bảng báo cáo tài chính đẫm máu đó. Đúng, họ đang chảy máu. Nhưng tôi có thể nhìn xuyên qua những con số thâm hụt đó để thấy được cái cốt lõi.</p>`,

  // Page 4
  `<img src="/images/geico4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Cỗ máy vẫn ở đó. Lợi thế chi phí thấp của việc bán hàng trực tiếp không hề biến mất, nó chỉ bị che khuất bởi năng lực quản lý tồi tệ. Khi Jack Byrne, một vị cứu tinh tài ba, được đưa lên làm CEO mới để tái cơ cấu, tôi biết thời cơ đã đến.</p>
  <p>Giữa lúc máu chảy thành sông trên thị trường, Berkshire Hathaway đã âm thầm mua vào 4.1 triệu cổ phiếu GEICO với giá hơn 40 triệu đô la. Khoản đầu tư đó lớn đến mức nó khiến dạ dày của Charlie Munger cũng phải quặn lại. Nhưng chúng tôi biết mình đang mua một con ngỗng đẻ trứng vàng đang bị bệnh tạm thời với giá của một con vịt ốm đói.</p>`,

  // Page 5
  `<img src="/images/geico5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Hai mươi năm tiếp theo là một bản giao hưởng của lãi kép. Jack Byrne đã cứu công ty, lợi nhuận phục hồi một cách phi thường. Chúng tôi chưa bao giờ bán một cổ phiếu GEICO nào. Qua những lần công ty mua lại cổ phiếu quỹ, tỷ lệ sở hữu của Berkshire tự động tăng lên đến 51%.</p>
  <p>Năm 1996. GEICO đã trở thành một gã khổng lồ thực sự. Nhưng việc sở hữu một nửa vẫn khiến tôi cảm thấy không trọn vẹn. GEICO không chỉ là một khoản đầu tư, nó là một phần linh hồn của Berkshire Hathaway. Đã đến lúc phải đưa cô ấy về chung một mái nhà hoàn toàn.</p>`,

  // Page 6
  `<img src="/images/geico6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tôi ngồi trong phòng làm việc, cầm bút lên và chuẩn bị ký một tấm séc trị giá 2.3 tỷ đô la để mua nốt 49% còn lại. 2.3 tỷ đô la. Con số đó lớn gấp hàng trăm ngàn lần số tiền 10.000 đô la mà thằng nhóc 20 tuổi năm nào đã lén lút mua cổ phiếu lẻ.</p>
  <p>Nhiều người nói tôi điên khi trả một khoản thặng dư khổng lồ như vậy cho phần còn lại của một công ty. Nhưng toán học trong đầu tôi thì tĩnh lặng. Cái giá hôm nay có vẻ cao, nhưng 10, 20 năm nữa, nó sẽ trở thành một món hời lịch sử. Tôi đang mua không chỉ dòng tiền, mà tôi đang mua lại một bộ máy bơm máu vĩ đại nhất.</p>`,

  // Page 7
  `<img src="/images/geico7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đó là sự kỳ diệu của "Float". Khách hàng trả tiền bảo hiểm hôm nay, nhưng chúng tôi chỉ phải chi trả bồi thường cho tai nạn xảy ra vào năm sau, hoặc nhiều năm sau đó. GEICO lúc này đang giữ hàng tỷ đô la tiền mặt "tạm thời" của khách hàng.</p>
  <p>Đó là một nguồn vốn khổng lồ, không lãi suất, và thậm chí chúng tôi còn được trả tiền để giữ nó (nhờ lợi nhuận bảo lãnh). Tôi có thể lấy hàng tỷ đô la Float đó để mua thêm các doanh nghiệp khác, mua cổ phiếu Coca-Cola, mua Gillette. GEICO chính là động cơ phản lực gắn sau lưng cỗ xe ngựa Berkshire Hathaway.</p>`,

  // Page 8
  `<img src="/images/geico8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thương vụ thâu tóm hoàn tất. 45 năm. Từ cái ngày đập cửa ở Washington cho đến khi sở hữu 100% cổ phần của công ty trị giá hàng tỷ đô la. Một cuộc hành trình dài bằng nửa đời người.</p>
  <p>Wall Street luôn ám ảnh bởi việc mua hôm nay và bán ngày mai. Họ nhảy nhót điên cuồng trên những bảng điện tử nhấp nháy xanh đỏ. Nhưng sự giàu có vĩ đại nhất không nằm ở sự khôn vặt hay tốc độ. Nó nằm ở việc tìm thấy một viên ngọc quý tuyệt đối, mua nó, và quan trọng nhất: Không bao giờ, không bao giờ buông tay.</p>`
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

export const geicoPages = geicoPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
