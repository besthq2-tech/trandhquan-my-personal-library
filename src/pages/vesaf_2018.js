const html = `
<section class="page active" id="page-vesaf-2018" data-route="/minds/vesaf-2018" data-title="Thử lửa thị trường gấu">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2018
    </div>
    <h1 style="margin-bottom: 8px;">Thử lửa thị trường gấu</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Chiến tranh thương mại và chu kỳ tăng lãi suất bóp nghẹt thanh khoản toàn cầu. VESAF chứng minh năng lực quản trị rủi ro vượt trội giữa tâm bão sụp đổ.</p>

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
  <p>Mùa xuân năm 2018, VN-Index chính thức thiết lập đỉnh lịch sử mới tại mốc 1.200 điểm. Định giá P/E của thị trường vọt lên 22x, một con số đầy rủi ro. Khắp các diễn đàn, đám đông đua nhau sử dụng Margin cực đại để mua các cổ phiếu ngân hàng và bất động sản rác.</p>
  <p>Và rồi, tiếng sấm từ Washington D.C vang lên. Những dòng tweet của Donald Trump khơi mào cuộc Chiến tranh Thương mại Mỹ - Trung. Hàng rào thuế quan được dựng lên, đe dọa làm gián đoạn chuỗi cung ứng toàn cầu. Khối ngoại lập tức kích hoạt chế độ "Risk-Off" (Thoát khỏi tài sản rủi ro), ồ ạt bán tháo cổ phiếu tại các thị trường mới nổi.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự hoảng loạn nhanh chóng lây lan sang nhà đầu tư trong nước. Cú sập hầm diễn ra khốc liệt. VN-Index rơi tự do từ 1.200 xuống vùng 900 điểm, thổi bay hàng trăm nghìn tỷ đồng vốn hóa. Hàng loạt tài khoản bốc hơi 50% chỉ trong vòng vài tháng.</p>
  <p>Đứng giữa tâm bão, VESAF phải đối mặt với bài kiểm tra sinh tồn đầu tiên. Chiến lược săn Mid-Cap và giá trị giờ đây phải chứng minh được một điều: Nó không chỉ biết cách tấn công, mà còn biết cách dựng khiên phòng thủ.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Vũ khí phòng thủ số 1 của chúng tôi chính là chất lượng doanh nghiệp. Trong khi các quỹ chạy theo đà tăng trưởng nóng (Momentum) mắc kẹt với một đống cổ phiếu rác vô giá trị, danh mục của VESAF vẫn là những cỗ máy tạo tiền mặt (Cash Cows) thực thụ.</p>
  <p>Chúng tôi đã chủ động hạ tỷ trọng các cổ phiếu bị kéo căng về định giá từ đầu năm, và bảo vệ chặt chẽ các vị thế cốt lõi như <strong>MWG, MBB, PNJ</strong>. Việc sở hữu các cổ phiếu "Kín Room Ngoại" cũng tạo ra một tấm nệm đỡ giá hiệu quả, vì lực cầu thỏa thuận ngoài sàn luôn trực chờ.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi thị trường sụp đổ, bóng tối của người này là cơ hội của kẻ khác. Một trong những chiến thuật đặc thù của đội ngũ VinaCapital là "Buy on blood" (Mua khi máu đổ) - nhưng chỉ mua những thứ có giá trị nội tại.</p>
  <p>Khi nhóm Ngân hàng bị bán tống bán tháo vì tâm lý chung, <strong>MBB (Ngân hàng Quân đội)</strong> rớt xuống vùng định giá P/B cực kỳ hấp dẫn. Chúng tôi đánh giá chất lượng tài sản của MBB vẫn vững như bàn thạch, và không ngần ngại gom thêm cổ phiếu này ngay trong những nhịp hoảng loạn.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thêm vào đó, chúng tôi bắt đầu ngắm tới <strong>Khang Điền (KDH)</strong>. Giữa lúc ngành bất động sản đứng trước nguy cơ siết tín dụng, KDH nổi lên với quỹ đất sạch khổng lồ, cấu trúc vốn an toàn và pháp lý minh bạch.</p>
  <p>Sự khác biệt của VESAF là luôn đánh giá rủi ro dòng tiền của doanh nghiệp trước khi nhìn vào tiềm năng tăng trưởng. Chính sự thận trọng này đã cứu chúng tôi khỏi hố sâu tử thần mà nhiều quỹ khác đã sa chân vào.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tuy nhiên, không có một con đê nào hoàn toàn khô ráo trong một trận đại hồng thủy. Áp lực giảm giá chung của toàn thị trường (Systemic Risk) là quá lớn. NAV của quỹ không thể tránh khỏi việc trượt dốc theo đà sụt giảm của các cổ phiếu trụ cột.</p>
  <p>Phòng quan hệ nhà đầu tư của VinaCapital làm việc hết công suất để trấn an khách hàng. Chúng tôi phải liên tục nhắc nhở họ rằng: Sự biến động giá trên sàn không đồng nghĩa với sự suy giảm giá trị của công ty. FPT vẫn bán được phần mềm, MWG vẫn mở thêm cửa hàng.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2018 thảm khốc, VN-Index ghi nhận mức giảm <strong>-9,3%</strong>. Hàng loạt quỹ mở lớn trên thị trường sụt giảm từ 12% đến 15%.</p>
  <p>Trong khi đó, quỹ VESAF chốt sổ với mức giảm <strong>-7,6%</strong>. Trong giới tài chính chuyên nghiệp, việc thua lỗ ít hơn Benchmark (Chỉ số tham chiếu) trong một năm Bear Market (Thị trường gấu) được coi là một chiến thắng rực rỡ về mặt chiến thuật. Chúng tôi đã thành công trong việc tạo ra "Alpha" bằng cách giữ tiền không bị bốc hơi.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2018 đi qua, để lại một tâm lý ê chề trên toàn thị trường. Tiền rẻ đã bị hút về, margin đã bị quét sạch. Những năm tháng đánh cược nhắm mắt mua bừa đã kết thúc.</p>
  <p>Phía trước là một giai đoạn u ám và đi ngang (Sideways). Nhưng đối với những kẻ đi săn theo chiến lược Bottom-up như VESAF, đây chính là lúc những phẩm chất của một Stock-Picker (Chuyên gia chọn cổ phiếu) được phát huy tối đa nhất.</p>`
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

export const vesaf2018Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
