const html = `
<section class="page active" id="page-vesaf-2017" data-route="/minds/vesaf-2017" data-title="The Genesis of Hidden Gems">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2017
    </div>
    <h1 style="margin-bottom: 8px;">The Genesis of Hidden Gems</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2017. VinaCapital ra mắt VESAF giữa lúc thị trường đang hừng hực khí thế. Sứ mệnh của chúng tôi: Đi tìm những viên ngọc trong đá ở phân khúc Mid-Cap.</p>

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
  <p>Tháng 4 năm 2017, Quỹ Đầu tư Cổ phiếu Tiếp cận Thị trường Việt Nam (VESAF) chính thức được VinaCapital khai sinh. Đứng trước một thị trường đang bị thống trị bởi các quỹ mô phỏng chỉ số (ETF) nhắm vào nhóm Blue-chips, chúng tôi tự hỏi: Đâu là lợi thế cạnh tranh thực sự của mình?</p>
  <p>Câu trả lời nằm ở "khoảng trống thông tin" (Information Gap). Trong khi hàng chục chuyên gia phân tích bám sát từng động thái của Vinamilk hay Vietcombank, thì hàng trăm doanh nghiệp quy mô vừa và nhỏ (Mid-Cap & Small-Cap) bị bỏ ngỏ. Đó chính là sân chơi của VESAF.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Triết lý đầu tư của quỹ từ ngày đầu tiên rất rõ ràng: Xây dựng một danh mục cô đặc (Concentrated Portfolio) gồm những "viên ngọc trong đá" - những doanh nghiệp có nền tảng vững chắc, sở hữu lợi thế cạnh tranh độc quyền, nhưng đang bị định giá thấp do thanh khoản kém hoặc chưa được đám đông chú ý.</p>
  <p>Một vũ khí bí mật khác của VESAF là khả năng tiếp cận các cổ phiếu đã kín "Room ngoại" (Foreign Ownership Limit - FOL). Dưới lớp vỏ của một quỹ nội địa, chúng tôi có thể tự do mua sắm những tài sản mà các tay chơi tỷ đô quốc tế thèm khát nhưng không thể chạm tới.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2017 là một năm thăng hoa tột độ của VN-Index. Dòng tiền ngoại cuồn cuộn chảy vào thị trường, đẩy điểm số băng băng hướng tới mốc 1.000 điểm. Sự hưng phấn hiện diện trên khắp các mặt báo.</p>
  <p>Trong bối cảnh đó, nhiệm vụ của đội ngũ VESAF là không được để dòng tiền rẻ làm mờ mắt. Chúng tôi kiên nhẫn giải ngân vào <strong>MBB (Ngân hàng Quân đội)</strong>. Với chất lượng tài sản thuộc hàng top hệ thống nhưng P/B chỉ nhỉnh hơn 1.0x ở thời điểm đó, MBB là một món hời không thể bỏ qua đối với dòng tiền thông minh.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thương vụ thứ hai định hình năm 2017 của chúng tôi là <strong>PNJ (Vàng bạc đá quý Phú Nhuận)</strong>. Đây là ví dụ kinh điển về cổ phiếu "kín room ngoại". PNJ sở hữu chuỗi bán lẻ trang sức không có đối thủ tại Việt Nam, biên lợi nhuận mở rộng liên tục nhờ chuyển dịch từ bán vàng miếng sang vàng trang sức.</p>
  <p>Khối ngoại liên tục trả giá chênh lệch (Premium) để mua PNJ, trong khi VESAF có thể mua trực tiếp trên sàn với giá chiết khấu. PNJ nhanh chóng trở thành một trong những trụ cột sinh lời mạnh nhất của danh mục.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bên cạnh MBB và PNJ, chúng tôi cũng bắt đầu tích lũy <strong>FPT</strong>. Dù thời điểm đó FPT vẫn chưa bứt phá mạnh mẽ và bị coi là một cổ phiếu "nặng mông", nhưng phân tích của chúng tôi cho thấy mảng Xuất khẩu phần mềm đang âm thầm tăng trưởng ở mức hai con số.</p>
  <p>Đầu tư vào giá trị đôi khi đòi hỏi sự kiên nhẫn đến tàn nhẫn. Chúng tôi chấp nhận nhìn các cổ phiếu đầu cơ tăng bằng lần, miễn là FPT vẫn đang đi đúng quỹ đạo kinh doanh cốt lõi của nó.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Vì quy mô NAV ban đầu còn khiêm tốn (vài trăm tỷ đồng), quỹ có độ linh hoạt (Agility) cực cao. Khi phát hiện một doanh nghiệp vừa và nhỏ có chất xúc tác (Catalyst) tăng trưởng lợi nhuận, VESAF có thể giải ngân và đạt tỷ trọng ý nghĩa chỉ trong vài phiên giao dịch, điều mà các quỹ tỷ đô không làm được.</p>
  <p>Đây chính là Alpha - mức sinh lời vượt trội - mà chúng tôi hứa hẹn mang lại cho các nhà đầu tư cá nhân khi họ ủy thác tiền cho VinaCapital.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2017 (tính từ tháng 4), quỹ VESAF ghi nhận mức tăng trưởng ấn tượng <strong>+23,5%</strong>. Một khởi đầu như mơ đối với một chứng chỉ quỹ hoàn toàn mới trên thị trường.</p>
  <p>Mức lợi suất này không chỉ giúp quỹ xây dựng được track-record (lịch sử hiệu suất) vững chắc, mà còn chứng minh rằng: Ở Việt Nam, chiến lược "Bottom-up" (chọn lọc từ dưới lên) hoàn toàn có thể chiến thắng đà tăng chung của thị trường.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2017 khép lại trong sự tung hô của đám đông và rượu champagne. VN-Index tiến sát đỉnh lịch sử. Mọi người đều nghĩ mình là thiên tài đầu tư. Nhưng phòng phân tích của VinaCapital bắt đầu nhận thấy những điểm nóng trong nền kinh tế toàn cầu.</p>
  <p>Một vị tổng thống mới tại Mỹ đang đe dọa viết lại luật chơi thương mại thế giới. Chúng tôi biết rằng, phép thử thực sự của một quỹ đầu tư không nằm ở những năm thị trường giá lên, mà nằm ở khả năng sống sót qua mùa đông. Và mùa đông năm 2018 đang gõ cửa.</p>`
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
