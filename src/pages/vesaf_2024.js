const html = `
<section class="page active" id="page-vesaf-2024" data-route="/minds/vesaf-2024" data-title="Nương tựa Hào kinh tế">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2024
    </div>
    <h1 style="margin-bottom: 8px;">Nương tựa Hào kinh tế</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Năm bùng nổ của AI và làn sóng FDI công nghệ cao. VESAF củng cố sức mạnh của danh mục bằng cách nắm giữ chặt chẽ những doanh nghiệp có vị thế độc quyền tự nhiên.</p>

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
  <p>Thế giới năm 2024 chìm đắm trong cơn sốt Trí tuệ nhân tạo (AI). Cổ phiếu Nvidia trên phố Wall liên tục xô đổ các kỷ lục định giá, kéo theo đó là một làn sóng đầu tư cơ sở hạ tầng công nghệ khổng lồ trên toàn cầu. Việt Nam cũng không đứng ngoài lề xu thế đó.</p>
  <p>Với vị thế địa chính trị chiến lược, Việt Nam đón nhận hàng loạt chuyến thăm của các tỷ phú công nghệ (Jensen Huang, Bill Gates). Dòng vốn FDI thế hệ mới - chất lượng cao và hướng vào chuỗi giá trị bán dẫn - bắt đầu được giải ngân mạnh mẽ. VESAF biết rằng họ phải bắt trọn con sóng này.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khoản đầu tư cốt lõi nhất của quỹ vẫn xướng tên <strong>FPT</strong>. Năm 2024 chứng kiến FPT bước lên một tầm vóc hoàn toàn khác: Ký kết hợp tác chiến lược với Nvidia xây dựng AI Factory, đồng thời đẩy mạnh mảng xuất khẩu phần mềm sang khối Automotive (Ô tô điện).</p>
  <p>FPT không còn là một cổ phiếu giá rẻ. Định giá P/E vọt lên mốc 20x. Nhưng chúng tôi hiểu rằng, đối với những cỗ máy tăng trưởng sở hữu "Hào kinh tế" (Economic Moat) vững chắc, việc trả một mức giá đắt (Premium) là hoàn toàn xứng đáng. Cổ phiếu FPT trở thành động cơ phản lực kéo NAV của VESAF vượt đỉnh lịch sử.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Cùng hưởng lợi từ làn sóng FDI là ngành Logistics. Cửa ngõ xuất nhập khẩu hàng hóa đang chứng kiến sản lượng container bùng nổ. VESAF gia tăng tỷ trọng tại <strong>Gemadept (GMD)</strong>.</p>
  <p>GMD sở hữu lợi thế Độc quyền tự nhiên (Natural Monopoly) tuyệt đối nhờ cụm cảng nước sâu Gemalink lớn nhất miền Nam. Việc có thể đón được các siêu tàu mẹ đi thẳng sang Mỹ và Châu Âu giúp GMD không có đối thủ cạnh tranh xứng tầm. Chúng tôi thích những mô hình kinh doanh có rào cản gia nhập thị trường cực kỳ khó như vậy.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bức tranh thị trường năm 2024 cũng chứng kiến một hiện tượng kỳ lạ: "Sự thèm khát cổ phiếu cạn room". Câu chuyện Nâng hạng thị trường từ Cận biên (Frontier) lên Mới nổi (Emerging) của FTSE Russell trở thành chất xúc tác nóng.</p>
  <p>Các nhà đầu tư tổ chức nước ngoài đổ xô tìm kiếm các kênh gián tiếp để mua những cổ phiếu "hàng tuyển" của Việt Nam đã kín room. Các quỹ ETF mô phỏng chỉ số VN-Diamond liên tục phát hành chứng chỉ quỹ mới. VESAF, với tư cách là quỹ nội địa nắm giữ những viên ngọc này từ sớm, được hưởng lợi trực tiếp từ dòng tiền ngoại ồ ạt đổ vào đẩy giá lên.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Trong khi nhóm công nghệ và logistics thăng hoa, mảng ngân hàng lại phân hóa sâu sắc. Tín dụng bơm ra khó khăn, nợ xấu tiềm ẩn từ nhóm bất động sản khiến nhiều nhà băng chao đảo.</p>
  <p>VESAF duy trì sự thận trọng cực độ. Chúng tôi chỉ giữ lại <strong>MBB</strong> nhờ tệp khách hàng cá nhân vững chắc từ hệ sinh thái quân đội, và hoàn toàn né tránh các ngân hàng có mô hình kinh doanh phụ thuộc vào việc phát hành trái phiếu "ba không" cho các sân sau bất động sản.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nửa cuối năm 2024, câu chuyện tỷ giá USD/VND căng thẳng do Fed chần chừ hạ lãi suất. Áp lực hút tiền qua kênh tín phiếu của NHNN làm dấy lên những lo ngại về một cú sập hầm lặp lại như năm 2022.</p>
  <p>Tuy nhiên, sự khác biệt nằm ở chỗ doanh nghiệp hiện tại đã có bộ đệm tiền mặt (Cash buffer) dồi dào hơn rất nhiều. VESAF không thực hiện những cú cắt lỗ hoảng loạn, mà tận dụng nhịp rung lắc để gom thêm FPT và KDH ở mức giá chiết khấu.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2024, VN-Index thiết lập mức tăng trưởng <strong>+12,1%</strong> trong một năm vĩ mô khá phức tạp.</p>
  <p>Quỹ VESAF tiếp tục chuỗi phong độ cực kỳ ổn định với tỷ suất lợi nhuận <strong>+22,1%</strong>. Mức "Alpha" 10% này đến trực tiếp từ việc chúng tôi hiểu rõ rào cản kinh tế (Moat) của từng doanh nghiệp trong danh mục, chứ không phải từ việc đoán mò đỉnh đáy của thị trường chung.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thành công rực rỡ của VESAF trong những năm qua đã khiến quy mô quỹ (AUM) phình to nhanh chóng. Chúng tôi không còn là một quỹ nhỏ bé có thể dễ dàng luồn lách qua các mã cổ phiếu thanh khoản thấp như những ngày đầu tiên.</p>
  <p>Áo đã chật, và chiếc "Hộp Mid-Cap" bắt đầu bộc lộ giới hạn của nó. Không ai trong đội ngũ quản lý có thể ngờ rằng, năm 2025 sắp tới sẽ mang đến một "sự ức chế" khủng khiếp, một nỗi đau tột cùng của sự lỡ nhịp, buộc quỹ phải đưa ra một quyết định tàn nhẫn nhất trong lịch sử hoạt động.</p>`
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

export const vesaf2024Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
