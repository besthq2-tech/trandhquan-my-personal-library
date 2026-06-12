const html = `
<section class="page active" id="page-dcds-2023" data-route="/minds/dcds-2023" data-title="The Great Pivot">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2023
    </div>
    <h1 style="margin-bottom: 8px;">The Great Pivot</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2023. Cú đi ngược dòng lịch sử của Ngân hàng Nhà nước để giải cứu nền kinh tế. DCDS tái cơ cấu và bắt đầu nhịp phục hồi dài hơi.</p>

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
  <p>Sau đống đổ nát của năm 2022, nền kinh tế Việt Nam bước vào năm 2023 trong tình trạng kiệt quệ. Đơn hàng xuất khẩu từ Mỹ, châu Âu sụt giảm nghiêm trọng; các dự án bất động sản đóng băng do không thể vay vốn hay phát hành trái phiếu. Sự bi quan bao phủ khắp mọi ngõ ngách.</p>
  <p>Và rồi, một quyết định táo bạo đã làm thay đổi cục diện. Giữa lúc Cục Dự trữ Liên bang Mỹ (Fed) vẫn tiếp tục duy trì lãi suất ở đỉnh 20 năm, Ngân hàng Nhà nước Việt Nam (SBV) quyết định "đi ngược chiều gió": Liên tiếp 4 lần hạ lãi suất điều hành ngay từ quý I/2023.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đây là một nước đi mạo hiểm nhưng cần thiết để cứu nền kinh tế khỏi nguy cơ hạ cánh cứng (Hard Landing). Chấp nhận áp lực về tỷ giá USD/VND, SBV đặt ưu tiên bơm thanh khoản hệ thống lên hàng đầu. Đối với những nhà quản lý quỹ như DCDS, đây là tiếng còi báo hiệu: <strong>The Great Pivot (Cú xoay trục vĩ mô)</strong> đã bắt đầu.</p>
  <p>Trong chứng khoán, tiền tệ là dòng máu. Lãi suất hạ nhiệt đồng nghĩa với việc chi phí cơ hội của chứng khoán rẻ đi. Định giá P/E của thị trường từ mức 10x trở nên hấp dẫn khủng khiếp khi đem so với lợi suất tiền gửi ngân hàng đang lao dốc.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi lập tức tái cơ cấu danh mục. Luận điểm đầu tiên: Ngành nào nhạy bén nhất với lãi suất giảm? Chắc chắn là Chứng khoán. DCDS gia tăng tỷ trọng ở <strong>VCI</strong> và <strong>SSI</strong>. Khi mặt bằng lãi suất giảm, thanh khoản thị trường tăng vọt trở lại, kéo theo lợi nhuận bùng nổ từ tự doanh và cho vay margin của các công ty này.</p>
  <p>Thực tế đã chứng minh, nhóm Chứng khoán là nhóm tăng giá điên rồ nhất năm 2023, giúp NAV của quỹ phục hồi thần tốc.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Luận điểm thứ hai đến từ động lực tăng trưởng kinh tế: Khi tiêu dùng yếu, xuất khẩu tắc nghẽn, "chiếc đũa thần" duy nhất của Chính phủ là Đầu tư công. Các đại dự án như Sân bay Long Thành, Cao tốc Bắc Nam được thúc đẩy với tiến độ chưa từng thấy.</p>
  <p>Tuy nhiên, thay vì mua các công ty xây dựng thi công (vốn có biên lợi nhuận mỏng và rủi ro nợ đọng), chúng tôi chọn đặt cược vào những công ty cung cấp vật liệu xây dựng và hưởng lợi gián tiếp. <strong>Hòa Phát (HPG)</strong> một lần nữa trở lại danh mục ưu tiên khi giá thép tạo đáy xong và sản lượng bán hàng phục hồi.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Không phải mọi thứ đều màu hồng. Quyết định đi ngược lãi suất với Fed khiến tỷ giá USD/VND liên tục phá đỉnh. Tháng 9/2023, để cứu tỷ giá, SBV buộc phải hút tiền về qua kênh tín phiếu (T-bills). Thị trường hoảng sợ, ký ức kinh hoàng về cú sập cuối năm 2022 ùa về.</p>
  <p>Chỉ trong 2 tháng (Tháng 9 và 10), VN-Index giảm gần 200 điểm. Nhưng với bài học xương máu từ năm 2022, DCDS đã chuẩn bị trước một lượng tiền mặt phòng thủ. Chúng tôi hiểu rằng, việc hút tín phiếu chỉ là công cụ điều tiết tỷ giá ngắn hạn, không làm thay đổi xu hướng tiền rẻ dài hạn.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhân lúc đám đông bán tháo vì sợ hãi tỷ giá, DCDS lặng lẽ gom thêm <strong>Sacombank (STB)</strong> và <strong>ACB</strong> ở những vùng giá chiết khấu cực sâu. STB đang đi đến chặng cuối của quá trình tái cơ cấu xử lý nợ xấu, chuẩn bị đón nhận điểm rơi lợi nhuận lớn nhất lịch sử.</p>
  <p>Cùng lúc đó, chúng tôi mạnh tay giải ngân vào các nhóm ngành phòng thủ, có dòng tiền mạnh mẽ và lợi suất cổ tức cao để cân bằng rủi ro, tiêu biểu là ngành Điện, Công nghệ và Khu công nghiệp.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2023, VN-Index hồi phục hơn +12%, nhưng DCDS ghi nhận mức tăng trưởng NAV tốt hơn thế đáng kể, xấp xỉ <strong>+25%</strong>. Nhờ khả năng phân bổ tài sản linh hoạt, đi trước nhịp đập lãi suất và tránh được cú lừa "đỉnh lợi nhuận" của nhiều ngành chu kỳ, chúng tôi đã đưa tài sản của nhà đầu tư quay lại quỹ đạo tăng trưởng.</p>
  <p>Năm 2023 đánh dấu sự trưởng thành của một thế hệ nhà quản lý quỹ trong môi trường vĩ mô bất định (VUCA - Volatility, Uncertainty, Complexity, Ambiguity).</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi khép lại năm 2023, chúng tôi hướng ánh mắt đến những bức tranh lớn hơn. Tổng thống Mỹ Joe Biden thăm Việt Nam, nâng cấp quan hệ lên Đối tác Chiến lược Toàn diện. Các gã khổng lồ bán dẫn (Semiconductor) và AI toàn cầu bắt đầu đổ bộ vào Bắc Ninh, Thái Nguyên, TP.HCM.</p>
  <p>Luận điểm lớn cho chu kỳ tới đã hình thành rõ ràng: Bán dẫn, Trí tuệ Nhân tạo (AI) và Sự trỗi dậy của vốn FDI thế hệ mới. Và ngôi sao sáng nhất trong kỷ nguyên này, một cổ phiếu sẽ lập nên những kỷ lục chưa từng có, đã nằm gọn trong danh mục cốt lõi của DCDS. Năm 2024 sẽ gọi tên FPT.</p>`
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

export const dcds2023Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
