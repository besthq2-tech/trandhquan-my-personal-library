const html = `
<section class="page active" id="page-dcds-2015" data-route="/minds/dcds-2015" data-title="The Golden Age">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2015-2017
    </div>
    <h1 style="margin-bottom: 8px;">The Golden Age</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2015 - 2017. Kỷ nguyên vàng của tăng trưởng, làn sóng thoái vốn tỷ đô và trái ngọt của sự kiên nhẫn.</p>

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
  <p>Sau khi trải qua cơn bạo bệnh của năm 2008, những cơn co giật của năm 2010 và cuộc đại phẫu thuật đau đớn 2011-2013, nền kinh tế Việt Nam bước vào giai đoạn 2015 - 2017 với một thể trạng hoàn toàn mới. Giống như một võ sĩ vừa hồi phục sau chấn thương, nhẹ cân hơn nhưng cơ bắp săn chắc và dẻo dai hơn bao giờ hết.</p>
  <p>Lạm phát được kiểm soát ở mức thấp kỷ lục. Dòng vốn FDI từ các tập đoàn toàn cầu như Samsung, LG đổ vào cuồn cuộn, biến Việt Nam thành công xưởng mới của thế giới. Tầng lớp trung lưu bùng nổ. Và trên thị trường chứng khoán, một "Kỷ nguyên vàng" (The Golden Age) chính thức bắt đầu.</p>`,

  // Page 2
  `<img src="/images/dcds2015_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>DCDS lúc này đã là một quỹ mở vận hành trơn tru. Lợi thế của cấu trúc quỹ mở bắt đầu phát huy sức mạnh khủng khiếp. Khi thị trường bước vào chu kỳ tăng, lợi nhuận thực tế (NAV) tăng lên, kéo theo dòng tiền mới từ các nhà đầu tư cá nhân và tổ chức không ngừng chảy vào quỹ. Chúng tôi có đạn dược dồi dào để săn bắn trên một cánh đồng đầy cơ hội.</p>
  <p>Chủ đề đầu tư lớn nhất của chúng tôi trong giai đoạn này là "Sự trỗi dậy của tiêu dùng nội địa". Những doanh nghiệp bán lẻ, hàng tiêu dùng nhanh (FMCG), và hàng không giá rẻ bắt đầu ghi nhận những mức tăng trưởng doanh thu 30-40% mỗi năm. Bức tranh tiêu dùng của 90 triệu dân đang lột xác.</p>`,

  // Page 3
  `<img src="/images/dcds2015_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Không chỉ có tiêu dùng, hệ thống ngân hàng - từng là nguyên nhân gây ra cuộc khủng hoảng - nay đã trở thành động lực kéo thị trường đi lên. VAMC đã nhốt xong phần lớn nợ xấu. Các ngân hàng thương mại cổ phần bắt đầu quá trình trích lập dự phòng mạnh mẽ và ghi nhận lợi nhuận cốt lõi phục hồi hình chữ V.</p>
  <p>Chúng tôi phân bổ tỷ trọng lớn vào nhóm ngân hàng tư nhân năng động, những nơi áp dụng công nghệ bán lẻ hiện đại để chiếm lĩnh thị phần. Sự lựa chọn này đã mang lại tỷ suất sinh lời vượt trội, khi cổ phiếu ngân hàng trở thành những cỗ xe tăng không thể cản bước trên bảng điện tử.</p>`,

  // Page 4
  `<img src="/images/dcds2015_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng điểm nhấn rực rỡ nhất của giai đoạn 2015-2017 chính là làn sóng thoái vốn nhà nước và sự xuất hiện của các "Mega-cap" (những doanh nghiệp vốn hóa siêu lớn) trên sàn chứng khoán. Nút thắt quy mô thị trường cuối cùng đã được cởi trói.</p>
  <p>Chính phủ quyết định bán vốn tại những "viên kim cương" của quốc gia. Các thương vụ thoái vốn tỷ đô tại Vinamilk, Sabeco thu hút sự chú ý của toàn bộ giới tài chính toàn cầu. Những tay chơi khổng lồ từ Thái Lan, Singapore, Nhật Bản mang hàng tỷ USD tiền mặt đến Việt Nam để đấu giá.</p>`,

  // Page 5
  `<img src="/images/dcds2015_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Là một quỹ đầu tư nội địa am hiểu thị trường, DCDS đứng ở vị trí đắc địa nhất để tận hưởng làn sóng này. Việc các tập đoàn nước ngoài sẵn sàng trả mức giá P/E 30-40 lần để thâu tóm các công ty hàng tiêu dùng hàng đầu Việt Nam đã tạo ra một mặt bằng định giá hoàn toàn mới cho toàn bộ thị trường.</p>
  <p>Bên cạnh đó, hàng loạt tập đoàn tư nhân khổng lồ như Vietjet Air, VPBank, và sau này là Vinhomes, Techcombank bắt đầu niêm yết. Thị trường chứng khoán Việt Nam lột xác từ một cái ao làng thành một vùng biển lớn, đủ sâu và rộng để tiếp nhận những dòng vốn ngoại khổng lồ.</p>`,

  // Page 6
  `<img src="/images/dcds2015_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đỉnh cao của sự thăng hoa đến vào cuối năm 2017. Chỉ số VN-Index bứt phá mạnh mẽ, bỏ lại phía sau những cột mốc lịch sử, hướng thẳng lên vùng 1.000 điểm và sau đó là 1.200 điểm (vào đầu 2018). Mọi danh mục đầu tư đều tăng trưởng hai con số. Những báo cáo gửi khách hàng hàng tháng tràn ngập những tin tức tích cực.</p>
  <p>Tuy nhiên, ký ức tàn khốc của năm 2007 vẫn luôn thường trực trong tâm trí tôi. Sự khác biệt giữa bong bóng năm 2007 và sự bùng nổ năm 2017 là gì? Năm 2007, người ta trả giá trên trời cho những công ty không có cốt lõi. Còn năm 2017, định giá tuy cao, nhưng nó được chống lưng bởi dòng tiền thực sự và tốc độ tăng trưởng EPS (lợi nhuận trên cổ phiếu) mạnh mẽ của các doanh nghiệp Blue-chips.</p>`,

  // Page 7
  `<img src="/images/dcds2015_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Dẫu vậy, kỷ luật vẫn là yếu tố sống còn. Trong bối cảnh hưng phấn, chúng tôi bắt buộc mình không được hạ thấp tiêu chuẩn đầu tư. Khi các cổ phiếu đầu cơ rác rưởi (penny stocks) bắt đầu tăng giá gấp 3-5 lần mà không có lý do cơ bản, đó là tiếng chuông cảnh báo. Chúng tôi kiên quyết đứng ngoài những cuộc chơi bơm thổi đó, tập trung bảo vệ thành quả ở những doanh nghiệp chất lượng cao nhất.</p>
  <p>Quản lý một danh mục khi thị trường tăng nóng đôi khi còn áp lực hơn cả khi thị trường giảm điểm. Nếu bạn quá thận trọng và giữ nhiều tiền mặt, bạn sẽ tụt hậu so với chỉ số Index (underperform) và khách hàng sẽ phàn nàn. Nếu bạn quá tham lam và mua đuổi, bạn sẽ dính bẫy khi thị trường điều chỉnh.</p>`,

  // Page 8
  `<img src="/images/dcds2015_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khép lại năm 2017, DCDS ghi nhận mức tăng trưởng thuộc hàng top trên thị trường. Nhưng điều làm tôi tự hào nhất không phải là con số lợi nhuận, mà là cách chúng tôi đạt được nó: Minh bạch, kiên định với phương pháp đầu tư giá trị tăng trưởng, và sử dụng trọn vẹn lợi thế của một quỹ mở hiện đại.</p>
  <p>Nhìn lại chặng đường từ lúc khẩn hoang đập đá năm 2004, vượt qua vực thẳm 2008, và giờ đây đứng trên đỉnh cao rực rỡ của Kỷ nguyên Vàng, tôi hiểu rằng: Thị trường chứng khoán là một cỗ máy phần thưởng vô cùng công bằng. Nó lấy tiền của những kẻ thiếu kiên nhẫn, thích cờ bạc, và trao trọn vẹn phần thưởng đó cho những tổ chức biết giữ vững kỷ luật, có tầm nhìn thập kỷ, và trung thành với giá trị cốt lõi.</p>`
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
