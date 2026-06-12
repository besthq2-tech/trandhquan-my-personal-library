const html = `
<section class="page active" id="page-dcds-2026" data-route="/minds/dcds-2026" data-title="The New Frontier">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2026
    </div>
    <h1 style="margin-bottom: 8px;">The New Frontier</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2026. Lăng kính của 22 năm. Đầu tư ESG, kỷ nguyên thuật toán và sự trưởng thành tuyệt đối của DCDS.</p>

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
  <p>2026. Đứng trên tầng cao nhất của tòa nhà văn phòng tại quận 1, nhìn xuống dòng xe cộ hối hả của TP.HCM, tôi nhận ra thị trường chứng khoán Việt Nam đã thay đổi nhiều đến nhường nào sau 22 năm kể từ ngày VF1 (tiền thân của DCDS) chào đời. Chúng tôi đã không còn là những tay buôn cổ phiếu OTC cầm bao tải tiền mặt nữa.</p>
  <p>Thị trường chứng khoán năm 2026 là một đấu trường của robot, của thuật toán giao dịch cao tần (HFT - High Frequency Trading), và của những dòng vốn định lượng (Quant Funds). Sự cảm tính của con người dần bị thay thế bởi dữ liệu vô cảm.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Giữa sự thay đổi vũ bão đó, luận điểm đầu tư của DCDS cũng bước sang một kỷ nguyên mới: <strong>Kỷ nguyên ESG (Môi trường, Xã hội và Quản trị)</strong>. Các quỹ hưu trí khổng lồ từ châu Âu và Bắc Mỹ giờ đây yêu cầu khắt khe: Nếu doanh nghiệp của bạn phát thải quá nhiều Carbon, họ sẽ không mua cổ phiếu của bạn dù P/E có thấp đến đâu.</p>
  <p>Chúng tôi là những người đi tiên phong trong việc tích hợp ESG vào mô hình định giá. Các công ty bị trừ điểm nặng nếu quản trị doanh nghiệp tồi hoặc gây ô nhiễm môi trường. Ngược lại, chúng tôi trả mức Premium (giá cao hơn) cho những doanh nghiệp phát triển bền vững.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đó là lý do DCDS tích lũy mạnh mẽ <strong>REE (Cơ điện lạnh)</strong> và <strong>PC1</strong>. Đây là những doanh nghiệp hàng đầu trong công cuộc chuyển đổi xanh (Green Transition), sở hữu hàng loạt dự án điện gió và điện mặt trời. Khi Việt Nam cam kết Net Zero vào năm 2050, dòng tiền thông minh chảy mạnh vào năng lượng tái tạo.</p>
  <p>REE mang lại lợi suất cực kỳ ổn định, đóng vai trò như một cỗ máy in tiền phòng thủ hoàn hảo trong một thị trường vốn đã trở nên quá nhanh và quá nguy hiểm bởi thuật toán.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thách thức lớn nhất trong năm 2026 là sự cạnh tranh từ các quỹ ETF. Khi hệ thống giao dịch trở nên minh bạch và rẻ hơn, nhiều nhà đầu tư tự hỏi: "Tại sao tôi phải trả phí quản lý cho DCDS (quỹ chủ động) trong khi tôi có thể mua chứng chỉ quỹ ETF (bị động) mô phỏng VN30 với mức phí bèo bọt?".</p>
  <p>Câu trả lời của chúng tôi chính là tỷ suất sinh lời vượt trội (Alpha). Để đánh bại thị trường, DCDS phải đi săn lùng cơ hội ở phân khúc Mid-cap (vốn hóa vừa), nơi các quỹ ETF khổng lồ không thể chen chân vào vì giới hạn thanh khoản.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi phát hiện ra những doanh nghiệp xuất khẩu công nghệ cao và logistics hậu cần (như <strong>GMD - Gemadept</strong>) đang ăn nên làm ra nhờ chuỗi cung ứng toàn cầu dịch chuyển. Bằng kỹ năng Stock Picking thượng thừa được rèn giũa qua 2 thập kỷ, quỹ DCDS tiếp tục tạo ra Alpha dương (mức sinh lời cao hơn VN-Index) ổn định.</p>
  <p>Năm 2026, NAV của DCDS không còn biến động giật cục tăng 50% rồi sập 30% như những năm đầu đời nữa. Nó tịnh tiến đi lên một cách vững chãi, đại diện cho một danh mục tài sản đẳng cấp quốc tế.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhìn lại chặng đường 22 năm, từ 2004 đến 2026, chúng tôi đã trải qua tất cả. Từ một đợt phát hành IPO 300 tỷ đầy hoài nghi của năm 2004; qua cơn điên loạn OTC 2007; sống sót qua thảm họa lạm phát 2008, nợ xấu 2011; mạnh mẽ đi xuyên qua Thiên nga đen COVID-19 2020 và cú sập trái phiếu 2022.</p>
  <p>Dragon Capital nói chung và DCDS nói riêng không chỉ là những người quan sát, chúng tôi là những người thợ xây đã đặt từng viên gạch nền móng cho thị trường vốn Việt Nam.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bài học lớn nhất mà quỹ DCDS đúc kết được sau hơn 2 thập kỷ chiến đấu, đó là: <strong>Thị trường luôn đúng, và thời gian là người bạn tuyệt vời nhất của doanh nghiệp tốt</strong>.</p>
  <p>Bạn không thể đoán được ngày mai Donald Trump sẽ tweet gì, hay Fed sẽ tăng lãi suất lúc nào. Nhưng nếu bạn mua và nắm giữ một rổ các doanh nghiệp xuất sắc nhất Việt Nam (như FPT, VNM, VCB, MWG), vượt qua những nỗi sợ hãi tột cùng của đám đông, sức mạnh của Lãi Kép (Compound Interest) sẽ tự động làm phần việc còn lại.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khép lại trang nhật ký của năm 2026, tôi tắt màn hình Bloomberg Terminal. Thị trường chứng khoán Việt Nam giờ đây là một đại dương sâu thẳm và đầy cơ hội.</p>
  <p>Những F0 năm xưa giờ đã trở thành thế hệ nhà đầu tư giá trị lão luyện. Và DCDS vẫn sẽ ở đây, tiếp tục giương buồm, bảo vệ và phát triển tài sản cho hàng chục vạn nhà đầu tư trong những chu kỳ kinh tế tiếp theo. Trò chơi của tiền bạc và tâm lý con người, suy cho cùng, chưa bao giờ kết thúc.</p>`
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

export const dcds2026Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
