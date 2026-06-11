const html = `
<section class="page active" id="page-dcds-2009" data-route="/minds/dcds-2009" data-title="The False Dawn & The Hangover">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2009-2010
    </div>
    <h1 style="margin-bottom: 8px;">The False Dawn & The Hangover</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2009 - 2010. Gói kích cầu, cơn hưng phấn bằng steroid và bóng ma nợ xấu Vinashin.</p>

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
  `<img src="/images/dcds2009_1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi khói bụi của thảm họa 2008 còn chưa kịp tan hết, năm 2009 mở ra với một liều adrenaline cực mạnh được tiêm thẳng vào tĩnh mạch của nền kinh tế. Chính phủ Việt Nam tung ra gói kích cầu trị giá 1 tỷ USD (sau đó quy mô thực tế còn lớn hơn rất nhiều) với chính sách hỗ trợ 4% lãi suất vay vốn cho các doanh nghiệp. Tiền rẻ đột ngột tràn ngập thị trường.</p>
  <p>Thị trường chứng khoán, vốn đang nằm thoi thóp dưới đáy sâu 235 điểm, lập tức bật dậy như một chiếc lò xo bị nén chặt. Đó là một cú phục hồi hình chữ V ngoạn mục. Chỉ trong vài tháng, VN-Index tăng dựng đứng lên vượt mốc 600 điểm. Các bảng điện tử lại ngập tràn sắc tím hưng phấn.</p>`,

  // Page 2
  `<img src="/images/dcds2009_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Danh mục của DCDS phục hồi với tốc độ chóng mặt. Các cổ phiếu cơ bản mà chúng tôi đã cắn răng nắm giữ qua tâm bão giờ đây đền đáp xứng đáng. Nhưng với tư cách là những nhà quản lý tiền chuyên nghiệp, chúng tôi không cho phép mình bị cuốn vào cơn say. Lợi nhuận đang chảy vào quỹ, nhưng bộ não phân tích của chúng tôi lại cảnh báo tiếng còi báo động: Đây là một "Bình minh giả tạo" (False Dawn).</p>
  <p>Chúng tôi nhận thấy dòng tiền kích cầu đáng lẽ phải chảy vào sản xuất kinh doanh thì lại đang chảy vòng vèo vào chứng khoán và bất động sản. Các doanh nghiệp vay vốn giá rẻ không để mở rộng nhà máy, mà để đi đánh tháp tài chính. Đó là tăng trưởng bằng steroid, và steroid thì luôn có tác dụng phụ tàn khốc.</p>`,

  // Page 3
  `<img src="/images/dcds2009_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bước sang năm 2010, cơn say thuốc nhường chỗ cho một cơn đau đầu nhức nhối (The Hangover). Lượng tiền khổng lồ được bơm ra đã làm thức tỉnh con quái vật lạm phát một lần nữa. Lãi suất bắt đầu nhích lên. Dòng chảy tín dụng đột ngột bị siết lại. Và những doanh nghiệp đã lỡ "ăn chơi" quá đà bằng tiền vay giá rẻ bắt đầu lộ ra những lỗ hổng chết người.</p>
  <p>Nguy hiểm nhất là hệ thống ngân hàng. Những món nợ kích cầu không thể thu hồi bắt đầu biến thành nợ xấu (Non-Performing Loans - NPL). Nợ xấu bị giấu giếm bằng việc đảo nợ, cấu trúc lại. Nhưng trên sổ sách của chúng tôi, khi phân tích sâu vào bảng cân đối kế toán của một số ngân hàng, chúng tôi thấy một cục máu đông đang phình to.</p>`,

  // Page 4
  `<img src="/images/dcds2009_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Và rồi, quả bom lớn nhất phát nổ: Vinashin (Tập đoàn Công nghiệp Tàu thủy Việt Nam). Sự sụp đổ của một "quả đấm thép" nhà nước với khối nợ lên tới hơn 4 tỷ USD (gần 86.000 tỷ đồng lúc bấy giờ) đã làm chấn động toàn bộ nền kinh tế. Vinashin vay nợ khắp nơi, từ các tổ chức quốc tế cho đến các ngân hàng thương mại trong nước.</p>
  <p>Sự kiện Vinashin không chỉ là một vụ vỡ nợ doanh nghiệp. Nó làm lung lay niềm tin của các nhà đầu tư nước ngoài vào mức độ an toàn của trái phiếu chính phủ và hệ thống tài chính Việt Nam. Các quỹ đầu tư quốc tế bắt đầu đặt câu hỏi gắt gao về tính minh bạch và rủi ro hệ thống.</p>`,

  // Page 5
  `<img src="/images/dcds2009_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đối mặt với bóng ma nợ xấu và cú sốc Vinashin, chiến lược của DCDS trong năm 2010 phải thay đổi quyết liệt. Chúng tôi phải trở thành những "bác sĩ pháp y" tài chính, mổ xẻ từng báo cáo lưu chuyển tiền tệ của doanh nghiệp. Lợi nhuận trên giấy không còn ý nghĩa gì nếu doanh nghiệp không thu được tiền mặt thật về két.</p>
  <p>Chúng tôi thanh lọc danh mục, loại bỏ thẳng tay những công ty đa ngành nghiệp dư – những kẻ đi vay tiền để làm bất động sản, chơi chứng khoán trong khi cốt lõi là làm thủy sản hay dệt may. Chúng tôi thu hẹp vòng tròn đầu tư vào những doanh nghiệp có dòng tiền tự do (Free Cash Flow) cực mạnh, ít nợ vay, và có khả năng sống sót độc lập khỏi bầu vú tín dụng của ngân hàng.</p>`,

  // Page 6
  `<img src="/images/dcds2009_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Giai đoạn này là lúc giá trị thực sự của một nhà quản lý quỹ chủ động được bộc lộ. Nếu bạn mua một quỹ chỉ số ETF trong năm 2010, bạn sẽ bị kéo chìm bởi sức nặng của các cổ phiếu ngân hàng đầy nợ xấu và các tập đoàn nhà nước kém hiệu quả. Nhưng bằng cách chọn lọc khắt khe (stock picking), DCDS đã lách qua được những tảng đá ngầm.</p>
  <p>Chúng tôi tập trung vào ngành hàng tiêu dùng thiết yếu, y tế, những ngành mà dù kinh tế có suy thoái, nợ xấu có tăng cao, thì người dân vẫn phải mua sữa cho con uống và mua thuốc khi ốm đau. Đó là những chiếc hầm trú ẩn chống bom hoàn hảo.</p>`,

  // Page 7
  `<img src="/images/dcds2009_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Cuối năm 2010, thị trường chìm vào một trạng thái lình xình, thanh khoản cạn kiệt, tâm lý nhà đầu tư chán nản cùng cực. Lạm phát lại một lần nữa ngóc đầu lên mức hai con số. Bóng đen của khủng hoảng nợ công châu Âu (Hy Lạp) bắt đầu manh nha, đe dọa trực tiếp đến dòng vốn ngoại.</p>
  <p>Rất nhiều đồng nghiệp trong ngành quản lý quỹ đã bỏ cuộc trong giai đoạn này. Họ không chịu nổi áp lực của một thị trường đi ngang trong sự bào mòn. Việc giải thích với khách hàng tại sao NAV không tăng trưởng (dù đã né được rủi ro giảm sâu) là một bài thuyết trình vô cùng mệt mỏi và vô vọng.</p>`,

  // Page 8
  `<img src="/images/dcds2009_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng ngồi trong phòng làm việc tĩnh lặng lúc nửa đêm, tôi biết rằng quá trình thanh lọc này là cần thiết. Những cục nợ xấu phải được phơi bày, những doanh nghiệp zombie phải bị đào thải, những vết thương phải được cắt bỏ phần hoại tử. Việt Nam đang trả giá cho một thập kỷ tăng trưởng nóng và thiếu kiểm soát.</p>
  <p>Tôi gập lại bản báo cáo kinh tế vĩ mô. Giai đoạn 2009-2010 dạy cho chúng tôi rằng: Đừng bao giờ nhầm lẫn giữa sự hỗ trợ của chính sách với sức mạnh nội tại của nền kinh tế. Sự phục hồi thực sự sẽ không đến từ những gói kích cầu tiền rẻ, nó sẽ phải đến từ sự tái cấu trúc đau đớn từ tận xương tủy mà chúng tôi sẽ phải chứng kiến trong những năm tiếp theo.</p>`
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

export const dcds2009Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
