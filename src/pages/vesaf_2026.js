const html = `
<section class="page active" id="page-vesaf-2026" data-route="/minds/vesaf-2026" data-title="The Mid-Cap Kings">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2026
    </div>
    <h1 style="margin-bottom: 8px;">The Mid-Cap Kings</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2026. Hành trình 10 năm của những kẻ đi săn "Viên ngọc trong đá". VESAF vững vàng trên ngôi vị Quỹ Mở Cổ phiếu số 1 Việt Nam.</p>

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
  <p>10 năm. Một thập kỷ đầy thăng trầm của thị trường chứng khoán Việt Nam. Ngồi trong phòng họp của VinaCapital chi nhánh TP.HCM vào đầu năm 2026, nhìn lại bảng hiệu suất dài hạn của Quỹ VESAF (2017-2026), ngay cả những người quản trị nghiêm khắc nhất cũng phải mỉm cười tự hào.</p>
  <p>Từ một quỹ mở có quy mô vài trăm tỷ đồng những ngày đầu thành lập, VESAF giờ đây đã quản lý hàng ngàn tỷ đồng. Nhưng điều đáng tự hào nhất không phải là AUM (Tổng tài sản quản lý), mà là việc quỹ liên tục duy trì được mức lợi suất kép (CAGR) vượt trội so với VN-Index trong suốt một thập kỷ.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bí quyết của "Những vị vua Mid-Cap" là gì? Rất nhiều người đã cố gắng sao chép danh mục của VESAF qua các báo cáo hàng tháng. Nhưng họ nhanh chóng nhận ra: Bạn có thể sao chép ba chữ cái cổ phiếu, nhưng bạn không thể sao chép được sự kiên nhẫn và kỷ luật của người quản lý quỹ.</p>
  <p>Khi DGC rơi 30% trong năm 2020 vì dịch bệnh, chúng tôi mua thêm thay vì cắt lỗ. Khi FPT dậm chân tại chỗ nhiều năm, chúng tôi hiểu rõ đó là giai đoạn tích lũy nội lực. Khi đám đông điên cuồng với đất nền năm 2021, chúng tôi kiên định ôm cổ phiếu sản xuất xuất khẩu.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thị trường chứng khoán năm 2026 đã là một đấu trường hoàn toàn khác. Việc Việt Nam nâng hạng khiến dòng vốn ngoại ồ ạt chảy vào các rổ chỉ số (Passive Funds). Rất nhiều chuyên gia cho rằng kỷ nguyên của quỹ chủ động (Active Funds) đã kết thúc, giống như những gì đã diễn ra ở Mỹ.</p>
  <p>Nhưng VinaCapital không nghĩ vậy. Thị trường Việt Nam vẫn là một thị trường Mới nổi, nơi có vô số sự bất cân xứng thông tin (Information Asymmetry). Thuật toán có thể định giá được P/E của Vietcombank trong 1 giây, nhưng thuật toán không thể đến tận nhà máy của một doanh nghiệp hóa chất ở miền Tây để đánh giá năng lực của ban lãnh đạo.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Trong năm 2026, để tạo ra Alpha (mức sinh lời vượt trội), VESAF bắt đầu săn lùng những công ty thuộc thế hệ tiếp theo (Next-gen). Đó là các công ty về năng lượng tái tạo, xử lý rác thải và công nghệ môi trường (ESG). Các tập đoàn lớn trên thế giới đang ép chuỗi cung ứng tại Việt Nam phải xanh hóa.</p>
  <p>Những cổ phiếu như <strong>REE</strong> và những doanh nghiệp điện gió, điện mặt trời có dòng tiền đều đặn bắt đầu chiếm tỷ trọng cao trong danh mục, mang lại tấm khiên phòng thủ vững chắc giữa một thị trường đầy nhiễu động.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Cuộc chiến không bao giờ dễ dàng. Có những tháng, NAV của VESAF đi sau thị trường vì dòng tiền đầu cơ điên cuồng kéo trụ (các cổ phiếu vốn hóa lớn). Nhưng chúng tôi đã học được cách phớt lờ FOMO (Nỗi sợ bị bỏ lỡ).</p>
  <p>Nhiệm vụ của chúng tôi không phải là chạy đua theo từng phiên giao dịch. Nhiệm vụ của VESAF là bảo vệ tài sản của khách hàng khỏi những "Hố đen" phá sản, và đưa tài sản đó sinh sôi nảy nở ổn định ở mức 15-20% mỗi năm trong dài hạn. Đó mới là sức mạnh thực sự của Lãi Kép.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự trưởng thành lớn nhất của quỹ không nằm ở các công cụ tài chính, mà nằm ở hệ thống phân tích doanh nghiệp. Đội ngũ chuyên gia của VinaCapital không chỉ đọc báo cáo tài chính, họ "sống" cùng doanh nghiệp. Họ đối thoại với CEO, khảo sát nhà cung cấp, và đo lường từng biến số vĩ mô.</p>
  <p>Danh hiệu "Quỹ mở cổ phiếu tốt nhất Việt Nam" nhiều năm liền không tự nhiên mà có. Nó được xây đắp bằng hàng ngàn giờ lao động trí óc căng thẳng và những quyết định lạnh lùng khi ngã rẽ xuất hiện.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhìn lại 10 năm, nếu một nhà đầu tư kiên trì ủy thác số tiền tiết kiệm của mình vào VESAF từ năm 2017 và tái đầu tư liên tục, tài sản của họ đã tăng trưởng gấp nhiều lần so với việc ôm vàng hay gửi tiết kiệm ngân hàng.</p>
  <p>Đây là minh chứng rõ ràng nhất cho việc: Tại Việt Nam, kênh đầu tư chứng khoán thông qua các tổ chức quản lý quỹ chuyên nghiệp đã thực sự trưởng thành và mang lại giá trị bền vững cho xã hội.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Câu chuyện của 10 năm qua đã khép lại, nhưng hành trình của những kẻ đi săn Mid-Cap sẽ không bao giờ dừng lại. Có vô vàn những "Hidden Gems" mới đang âm thầm lớn lên trong nền kinh tế năng động nhất Đông Nam Á này.</p>
  <p>Và miễn là còn những khoảng trống định giá, miễn là còn những doanh nghiệp tăng trưởng xuất sắc bị thị trường lãng quên, quỹ VESAF sẽ còn tiếp tục ở đó, giương buồm đi trước đám đông, để mang về những khoản lợi nhuận rực rỡ nhất cho các nhà đầu tư của mình.</p>`
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
