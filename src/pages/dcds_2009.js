const html = `
<section class="page active" id="page-dcds-2009" data-route="/minds/dcds-2009" data-title="The False Dawn & The Hangover">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2009-2010
    </div>
    <h1 style="margin-bottom: 8px;">The False Dawn & The Hangover</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2009 - 2010. Bình minh giả tạo từ gói kích cầu, sự phục hồi của HPG và trái đắng mang tên nợ xấu Vinashin.</p>

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
  <p>Thảm họa 2008 để lại một thị trường hoang tàn, nhưng cũng tạo ra một mặt bằng giá rẻ không tưởng. VN-Index chạm đáy khoảng 235 điểm vào đầu năm 2009. Lúc này, để cứu vãn nền kinh tế đang hấp hối, Chính phủ tung ra gói kích cầu lịch sử trị giá 1 tỷ USD, hỗ trợ lãi suất 4%/năm cho doanh nghiệp.</p>
  <p>Phản ứng của thị trường ngay lập tức giống như một người đang khát cháy họng được bơm một liều steroid cực mạnh. Tiền rẻ ngập tràn hệ thống. VN-Index có một cú bật tăng hình chữ V ngoạn mục, kéo thẳng một mạch lên hơn 600 điểm vào cuối năm. Sự lạc quan trở lại nhanh chóng đến mức người ta dường như đã quên mất nỗi đau vừa trải qua.</p>`,

  // Page 2
  `<img src="/images/dcds2009_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Với nguồn tiền mặt bảo toàn được từ năm 2008, chúng tôi bắt đầu giải ngân mạnh tay vào những doanh nghiệp sản xuất cơ bản. Luận điểm đầu tư (Thesis) cực kỳ rõ ràng: Những công ty có nhà máy, có sản phẩm thực sẽ là những người hưởng lợi trực tiếp và nhanh nhất từ gói hỗ trợ lãi suất của Chính phủ.</p>
  <p>Thương vụ xuất sắc nhất của chúng tôi trong đợt phục hồi này là <strong>Tập đoàn Hòa Phát (HPG)</strong>. Ngành thép đang ở đáy chu kỳ, nhưng gói kích cầu sẽ thổi bùng lại nhu cầu xây dựng và hạ tầng. HPG, với lợi thế quy mô và quản trị chi phí xuất sắc, đã mang lại cho quỹ lợi nhuận vượt trội khi giá cổ phiếu bật tăng x2, x3 từ đáy.</p>`,

  // Page 3
  `<img src="/images/dcds2009_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bên cạnh HPG, chúng tôi tiếp tục gia tăng tỷ trọng tại <strong>Vinamilk (VNM)</strong>. Trong lúc khủng hoảng, nhu cầu tiêu thụ sữa của trẻ em không hề giảm sút. Sự ổn định của VNM hoạt động như một cỗ xe tăng phòng thủ, đồng thời mang lại dòng tiền cổ tức đều đặn để tái đầu tư.</p>
  <p>Năm 2009, nhờ việc bắt đúng nhịp đập của chính sách kích cầu và nhóm sản xuất cơ bản, NAV của quỹ phục hồi mạnh mẽ, bù đắp được một phần đáng kể những tổn thất của năm 2008. Khách hàng bắt đầu thở phào nhẹ nhõm. Nhưng với tư cách là những người quan sát, chúng tôi cảm thấy có một thứ gì đó vô cùng bất ổn đang nhen nhóm dưới lớp vỏ bọc tăng trưởng này.</p>`,

  // Page 4
  `<img src="/images/dcds2009_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi tiền quá rẻ và dễ dãi, nó hiếm khi được sử dụng đúng mục đích. Bước sang năm 2010, hiệu ứng của gói "steroid" bắt đầu nhạt phai, và cơn "say xỉn" (Hangover) chính thức ập tới. Rất nhiều doanh nghiệp thay vì dùng vốn kích cầu để sản xuất, đã ném nó vào đầu cơ bất động sản, chứng khoán hoặc các dự án tay trái ngoài ngành.</p>
  <p>Bóng ma nợ xấu khổng lồ bắt đầu hiện hình trên bảng cân đối kế toán của các ngân hàng thương mại. Sự sụp đổ của thanh khoản bất động sản khiến những khoản vay này trở thành nợ khó đòi (NPL), đe dọa sự an toàn của toàn bộ hệ thống tài chính quốc gia.</p>`,

  // Page 5
  `<img src="/images/dcds2009_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đỉnh điểm của cơn ác mộng năm 2010 là sự kiện đổ vỡ của quả đấm thép <strong>Vinashin</strong>. Một tập đoàn nhà nước khổng lồ ôm khối nợ lên tới 86.000 tỷ đồng không có khả năng chi trả. Cú sốc này giáng một đòn chí mạng vào niềm tin của các nhà đầu tư nước ngoài đối với trái phiếu và tính minh bạch của kinh tế Việt Nam.</p>
  <p>Thị trường chứng khoán năm 2010 không sập thảm khốc như 2008, nhưng nó chìm vào một trạng thái suy kiệt thanh khoản, "cưa chân bàn" bào mòn tài khoản mỗi ngày. Nỗi sợ hãi bây giờ không phải là giá cổ phiếu giảm bao nhiêu, mà là nền kinh tế liệu có mất khả năng thanh toán hay không.</p>`,

  // Page 6
  `<img src="/images/dcds2009_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Và một lần nữa, chúng tôi lại phải trả giá cho một sai lầm lặp lại: <strong>Đánh giá thấp quy mô nợ xấu ngân hàng</strong>. Dù đã bán bớt, quỹ vẫn duy trì tỷ trọng tương đối tại các cổ phiếu ngân hàng hàng đầu như ACB, STB vì tin rằng họ đủ sức chống đỡ. Tuy nhiên, khi cơn bão Vinashin và nợ xấu bất động sản quét qua, không một ngân hàng nào được an toàn.</p>
  <p>Sự sụt giảm mạnh của nhóm cổ phiếu tài chính đã kéo lùi hiệu suất của danh mục trong năm 2010, xóa sổ một phần đáng kể đà phục hồi rực rỡ của năm 2009.</p>`,

  // Page 7
  `<img src="/images/dcds2009_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Giai đoạn 2009-2010 là một đồ thị hình Sin cực đoan. Lên đỉnh nhờ gói kích cầu 2009, và rơi vào trì trệ, đi ngang trong suốt năm 2010 do gánh nặng nợ xấu. Hiệu suất (NAV) của quỹ biến động mạnh và kết thúc chu kỳ 2 năm này với một kết quả giằng co: Phục hồi mạnh mẽ ở đầu chu kỳ, nhưng lại để thị trường lấy đi một phần ở cuối chu kỳ.</p>
  <p>Điều này càng làm gia tăng sự phẫn nộ của cổ đông về mức chiết khấu (discount) của quỹ đóng trên sàn. Giá chứng chỉ quỹ trên HOSE bị trừng phạt tàn nhẫn hơn cả bản thân NAV thực tế của nó.</p>`,

  // Page 8
  `<img src="/images/dcds2009_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Cuối năm 2010, ngồi nhìn những báo cáo nợ xấu chồng chất của ngành ngân hàng, tôi nhận ra rằng nền kinh tế Việt Nam đang cần một cuộc "đại phẫu thuật" cắt bỏ những khối u thực sự, chứ không phải là những viên thuốc giảm đau từ các gói kích cầu.</p>
  <p>Và đối với bản thân quỹ VF1, chúng tôi cũng cần một cuộc đại phẫu thuật cho chính mình. Cấu trúc quỹ đóng đã quá cũ kỹ và bất công cho nhà đầu tư. Lựa chọn duy nhất để tồn tại và lấy lại niềm tin là phải đập bỏ chiếc áo cũ này, và chuyển mình thành một "quỹ mở" (open-ended fund) - một cuộc chiến sinh tử sẽ định hình thập kỷ tiếp theo.</p>`
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
