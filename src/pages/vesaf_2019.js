const html = `
<section class="page active" id="page-vesaf-2019" data-route="/minds/vesaf-2019" data-title="Thiên đường của Stock Picker">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2019
    </div>
    <h1 style="margin-bottom: 8px;">Thiên đường của Stock Picker</h1>
    <p class="section-desc" style="margin-bottom: 32px;">VN-Index lình xình đi ngang, thanh khoản cạn kiệt. Nhưng với chiến lược chọn lọc từ dưới lên, VESAF vẫn vắt ra lợi nhuận xuất sắc từ những viên ngọc sáng.</p>

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
  <p>Nếu phải mô tả thị trường chứng khoán năm 2019 bằng một từ, thì đó là "Buồn ngủ". VN-Index lình xình suốt 12 tháng quanh trục 950 - 1.000 điểm. Thanh khoản thoi thóp ở mức thấp kỷ lục. Nhóm cổ phiếu trụ như Vinamilk, VIC, hay các ngân hàng quốc doanh đều đi ngang hoặc cắm đầu.</p>
  <p>Đối với những nhà đầu cơ theo dòng tiền kỹ thuật (Momentum Traders), đây là một cơn ác mộng. Nhưng đối với triết lý quản trị chủ động của VESAF, thị trường đi ngang (Sideways) lại chính là một "Thiên đường của Stock Picker" - nơi kỹ năng phân tích lõi doanh nghiệp lên ngôi.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi tập trung vào luận điểm độc lập: Tìm kiếm những doanh nghiệp tự mình tạo ra sự tăng trưởng bất chấp sóng gió vĩ mô. Điển hình nhất trong năm 2019 là sự lột xác của <strong>FPT</strong>.</p>
  <p>Năm đó, FPT bắt đầu ghi nhận những trái ngọt từ quyết định dũng cảm: Thoái vốn mảng phân phối phần cứng để trở thành một đế chế phần mềm thuần túy. Lợi nhuận từ xuất khẩu phần mềm sang Nhật và Mỹ tăng trưởng hơn 25%. Mức định giá P/E 10x trở nên quá rẻ rúng. VESAF gia tăng FPT thành khoản đầu tư cốt lõi.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Trụ cột thứ hai kéo NAV của quỹ đi lên chính là <strong>Thế Giới Di Động (MWG)</strong>. Thị trường lo ngại rằng chuỗi Thegioididong đã bão hòa và Điện Máy Xanh đang chững lại. Đám đông bắt đầu nghi ngờ.</p>
  <p>Tuy nhiên, các phân tích chuyên sâu (Channel checks) của VinaCapital cho thấy một câu chuyện khác: Chuỗi Bách Hóa Xanh bắt đầu chạm điểm hòa vốn ở cấp độ cửa hàng (Store-level EBITDA). MWG đang chuẩn bị nuốt trọn miếng bánh bán lẻ tạp hóa trị giá 50 tỷ USD của Việt Nam. Chúng tôi gom mạnh MWG, và thị trường đã tưởng thưởng xứng đáng khi cổ phiếu này liên tục phá đỉnh bất chấp Index đi ngang.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự tinh tế của VESAF còn thể hiện ở việc chọn lọc nhóm Bất động sản. Giữa lúc ngành này đang khốn đốn vì nút thắt pháp lý tại TP.HCM, chúng tôi đặt cược lớn vào <strong>Khang Điền (KDH)</strong>.</p>
  <p>KDH sở hữu điểm nghẽn mà mọi đối thủ thèm khát: Pháp lý sạch và dòng tiền khỏe. Thay vì theo đuổi những dự án vẽ trên giấy, KDH xây xong nhà mới bán. Cổ phiếu KDH lầm lũi đi lên trong sự ngỡ ngàng của những kẻ đã bán tháo nó.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Và không thể không nhắc đến mảng Ngân hàng. VESAF từ chối các ngân hàng có rủi ro nợ xấu cao, và tập trung vào những cái tên "chất lượng Nhật Bản" như <strong>MBB</strong>. Với tỷ lệ CASA (tiền gửi không kỳ hạn) thuộc hàng top và chi phí vốn cực rẻ, MBB vững vàng tạo ra tỷ suất sinh lời trên vốn chủ (ROE) vượt 20%.</p>
  <p>Từng đồng vốn của quỹ được luân chuyển một cách đầy kỷ luật: Mua doanh nghiệp tốt lúc bị định giá rẻ, chờ thị trường nhận ra sai lầm, và chốt lời khi đám đông bắt đầu FOMO.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2019 cũng là năm mà sức mạnh của việc nắm giữ các cổ phiếu "kín room ngoại" phát huy tối đa. Các quỹ ngoại thụ động (ETF) gặp khó khăn trong việc giải ngân vì không thể mua được MWG, FPT, hay PNJ trên sàn.</p>
  <p>VESAF, với đặc quyền của quỹ nội địa, nghiễm nhiên trở thành một giỏ tài sản cực kỳ hấp dẫn. Nhiều nhà đầu tư tổ chức quốc tế đã chọn cách mua chứng chỉ quỹ VESAF để gián tiếp sở hữu những siêu cổ phiếu này, đẩy AUM của quỹ tăng trưởng mạnh mẽ.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2019, VN-Index chỉ lết lên được mức tăng nhẹ <strong>+7,7%</strong>. Tuy nhiên, đội ngũ VESAF đã xuất sắc mang về mức lợi nhuận <strong>+9,2%</strong>, tiếp tục chuỗi thành tích vượt trội so với thị trường chung.</p>
  <p>Trong một năm mà làm giàu nhanh là nhiệm vụ bất khả thi, mức lợi suất bền vững này là lời khẳng định đanh thép: "Đầu cơ" cần có xu hướng để sống sót, còn "Đầu tư giá trị" thì có thể tự tạo ra mạch nước ngầm để sinh sôi.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tháng 12/2019, văn phòng VinaCapital ngập tràn không khí lạc quan về một chu kỳ tăng trưởng mới vào năm sau. Thế nhưng, tận sâu trong những bản tin ngắn từ Vũ Hán (Trung Quốc), một biến số hắc ám đang lặng lẽ nhen nhóm.</p>
  <p>Sẽ không ai biết được rằng, năm 2020 sắp tới sẽ thổi bùng lên một "Thiên Nga Đen" tàn khốc nhất lịch sử hiện đại, xé toạc mọi định giá, và buộc VESAF phải đối mặt với cú "Pivot" (xoay trục) sinh tử lớn nhất kể từ khi thành lập.</p>`
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

export const vesaf2019Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
