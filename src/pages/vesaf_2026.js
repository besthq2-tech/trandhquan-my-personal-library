const html = `
<section class="page active" id="page-vesaf-2026" data-route="/minds/vesaf-2026" data-title="Tái định vị: Cú xoay trục sinh tử">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2026
    </div>
    <h1 style="margin-bottom: 8px;">Tái định vị: Cú xoay trục sinh tử</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Giới hạn của chiếc áo Mid-Cap bị phá vỡ. Ngày 12/06/2026, VinaCapital khai tử cái tên cũ, mở ra kỷ nguyên Quỹ Tăng Trưởng Chiến Lược để bước vào đại dương xanh.</p>

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
  <p>Nửa đầu năm 2026 tiếp tục là một giai đoạn nghẹt thở. Cơn bĩ cực của năm 2025 như bóng ma ám ảnh các cuộc họp buổi sáng tại VinaCapital. Thị trường chứng khoán Việt Nam phân hóa cực đoan đến mức méo mó (Market Polarization).</p>
  <p>Báo cáo tháng 4/2026 chỉ ra một sự thật cay đắng: Mặc cho VN-Index xanh vỏ do lực kéo từ các mã trụ vốn hóa lớn, phần lớn rổ cổ phiếu Mid-Cap của thị trường lại cắm đầu giảm. NAV của quỹ ghi nhận mức lùi sâu từ -1% đến -3,1%. Lại một lần nữa, quỹ bị bỏ lại trong một đợt tăng điểm ảo ảnh.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Quy mô (Size) đã trở thành kẻ thù số một của hiệu suất. Khi AUM của quỹ đã lên tới hàng nghìn tỷ, một mã SMID-Cap tăng trần cũng không đủ sức làm nhúc nhích NAV tổng. Chiếc áo "Quỹ đầu tư cổ phiếu tiếp cận thị trường" (VESAF) đã trở thành một chiếc vòng kim cô trói buộc đôi tay của các Giám đốc đầu tư.</p>
  <p>Nền tảng triết lý cũ đã hoàn thành xuất sắc sứ mệnh lịch sử của nó. Nhưng nếu tiếp tục cố chấp bám víu vào vùng an toàn (Comfort zone) đó, quỹ sẽ chết chìm. Một cuộc đại phẫu là không thể tránh khỏi.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ngày <strong>12/06/2026</strong> chính thức đánh dấu một cột mốc lịch sử. VinaCapital ra thông cáo báo chí, chính thức đệ trình Ủy ban Chứng khoán Nhà nước về việc đổi tên và thay đổi điều lệ quỹ.</p>
  <p>Cái tên VESAF vang bóng một thời bị khai tử. Quỹ khoác lên mình một diện mạo mới, tham vọng hơn và quyết liệt hơn: <strong>Quỹ Đầu tư cổ phiếu Tăng trưởng chiến lược VinaCapital</strong>.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự thay đổi tên gọi không phải là một chiêu trò Marketing bình mới rượu cũ. Đó là một cú xoay trục chiến lược (Strategic Pivot) nhằm tái định nghĩa lại vũ trụ đầu tư (Investment Universe) của quỹ.</p>
  <p>Việc rũ bỏ cái mác "Tiếp cận thị trường" giúp quỹ thoát khỏi ràng buộc phải tập trung quá lớn vào nhóm cổ phiếu hết room ngoại hay vốn hóa vừa và nhỏ. Không gian đầu tư giờ đây được mở rộng tối đa ra nhóm Blue-Chips, Large-Caps, và những gã khổng lồ đang dẫn dắt nền kinh tế.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Mục tiêu "Tăng trưởng chiến lược" cho phép các Giám đốc danh mục tập trung hỏa lực vào những doanh nghiệp đầu ngành, những công ty có tiềm năng vươn mình ra khu vực, hoặc những hạt nhân công nghệ nắm giữ chìa khóa đổi mới sáng tạo quốc gia.</p>
  <p>Bằng cách nâng cấp vũ khí, quỹ sẵn sàng đánh những trận đánh tỷ đô, không còn e sợ việc thanh khoản bị bó hẹp khi muốn giải ngân hay chốt lời khối lượng lớn. Dòng tiền của quỹ giờ đây được tự do chảy đến nơi có tốc độ tăng trưởng EPS cao nhất.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Hiệu ứng của sự thay đổi lập tức thể hiện qua những con số. Bằng việc tái cơ cấu danh mục nhạy bén hơn, tính đến cuối tháng 5 và đầu tháng 6/2026, hiệu suất đầu tư (YTD) của quỹ bắt đầu lội ngược dòng, ghi nhận mức tăng khoảng <strong>+13,84%</strong>.</p>
  <p>Dù vẫn là một năm vĩ mô chứa đựng nhiều biến số như lạm phát rình rập và tỷ giá bấp bênh, nhưng bộ mặt của quỹ đã trở nên sáng sủa hơn rất nhiều. Lòng tin của giới đầu tư cá nhân bắt đầu quay trở lại.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Hành trình 10 năm của VESAF khép lại, nhường chỗ cho chương mới của Quỹ Tăng trưởng chiến lược. Đó là một chặng đường hội tụ đủ vinh quang chói lọi của năm 2021 và sự cay đắng tủi nhục của năm 2025.</p>
  <p>Câu chuyện này để lại một bài học xương máu cho giới tài chính: Phương pháp đầu tư cũng giống như một sinh vật sống. Nó phải không ngừng tiến hóa, không ngừng đập bỏ lớp vỏ cũ để thích nghi với sự tàn nhẫn của ngài thị trường (Mr. Market).</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đứng trước thập kỷ mới, khi thị trường chứng khoán Việt Nam chập chững bước vào cánh cửa Nâng hạng (Emerging Market), cuộc chơi đã không còn chỗ cho những tay săn nhỏ lẻ lướt sóng.</p>
  <p>VinaCapital đã sẵn sàng. Con thuyền Quỹ Tăng trưởng chiến lược đã giương buồm, nhổ neo, rẽ sóng tiến vào đại dương xanh của những siêu doanh nghiệp toàn cầu. Và kỷ nguyên thứ hai, giờ đây mới thực sự bắt đầu.</p>`
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

export const vesaf2026Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
