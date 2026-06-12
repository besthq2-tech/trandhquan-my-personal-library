const html = `
<section class="page active" id="page-dcds-2021" data-route="/minds/dcds-2021" data-title="The Era of F0 & Easy Money">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2021
    </div>
    <h1 style="margin-bottom: 8px;">The Era of F0 & Easy Money</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2021. Lãi suất rẻ tạo ra kỷ nguyên F0, đẩy VN-Index lên 1.500 điểm. DCDS cưỡi sóng "Băng - Chứng - Thép".</p>

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
  <p>Nếu 2020 là một năm của sự sợ hãi xen lẫn cơ hội, thì 2021 là một bức tranh của lòng tham vô tận. Đại dịch vẫn hoành hành, dòng người vẫn phải ở nhà vì giãn cách xã hội (Lockdown). Nhưng trên sàn chứng khoán, đó là một lễ hội tiền rẻ vĩ đại nhất lịch sử.</p>
  <p>Lãi suất tiết kiệm xuống mức thấp kỷ lục. Các kênh đầu tư truyền thống như bất động sản đóng băng do không thể giao dịch trực tiếp. Hệ quả là dòng vốn khổng lồ của người dân đổ dồn vào một nơi duy nhất: Bảng điện tử. Mỗi tháng có hàng trăm nghìn tài khoản mới được mở. Khái niệm "F0" không chỉ dùng cho y tế, mà trở thành biểu tượng quyền lực mới của thị trường tài chính.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Quy mô giao dịch bùng nổ đến mức hệ thống cốt lõi của sàn HOSE liên tục nghẽn lệnh. Dòng tiền cuồn cuộn chảy không cần biết định giá, đẩy VN-Index vượt qua đỉnh lịch sử 1.200 điểm và tiến thẳng lên mốc 1.500 điểm đầy kiêu hãnh.</p>
  <p>Quỹ DCDS nhận diện rất rõ đây là chu kỳ bơm tiền, và chiến lược tốt nhất là thuận theo dòng nước. Chúng tôi cơ cấu danh mục tập trung vào bộ ba "Băng - Chứng - Thép" (Ngân hàng, Chứng khoán, Thép) - những cỗ máy in tiền thực sự của giai đoạn này.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ngành Thép tiếp tục là quả đấm thép. <strong>Hòa Phát (HPG)</strong> bước vào chu kỳ siêu lợi nhuận chưa từng có khi giá thép toàn cầu tăng phi mã nhờ đứt gãy chuỗi cung ứng, trong khi chi phí sản xuất tại Dung Quất được tối ưu. HPG mang lại cho DCDS khoản lợi nhuận khổng lồ, đóng góp lớn nhất vào mức tăng trưởng NAV năm 2021.</p>
  <p>Tiếp theo là Ngân hàng. Chúng tôi đặt cược lớn vào <strong>Techcombank (TCB)</strong>. Với tập khách hàng cá nhân giàu có và tỷ lệ tiền gửi không kỳ hạn (CASA) dẫn đầu thị trường, TCB có chi phí vốn rẻ mạt và biên lợi nhuận cao chót vót. Cổ phiếu này tăng trưởng ngoạn mục, trở thành trụ cột thứ hai của danh mục.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Không thể không nhắc đến ngành Chứng khoán. Khi thanh khoản thị trường tăng từ 3.000 tỷ lên 30.000 tỷ/phiên, các công ty chứng khoán là người hưởng lợi tuyệt đối. DCDS giải ngân vào <strong>SSI</strong> và <strong>VND</strong>, thu hoạch quả ngọt khi các mã này nhân nhiều lần giá trị chỉ trong thời gian ngắn nhờ nghiệp vụ môi giới và cho vay Margin bùng nổ.</p>
  <p>NAV của DCDS liên tục lập đỉnh mới. Hiệu suất đầu tư năm 2021 đạt mức kỷ lục, củng cố vị thế của Dragon Capital trên thị trường. Các nhà đầu tư quỹ mở được hưởng lợi lớn từ việc ủy thác cho các chuyên gia chuyên nghiệp thay vì tự mình bơi trong dòng nước xiết.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Dù chiến thắng vang dội, chúng tôi cũng không thể tránh khỏi những cám dỗ và sai lầm cục bộ. Giữa năm 2021, dòng tiền F0 quá mạnh đã đẩy các cổ phiếu "Penny" (vốn hóa nhỏ, không có nền tảng cơ bản) hoặc các mã Bất động sản đầu cơ tăng giá vô lý.</p>
  <p>Lòng tham của thị trường lúc đó được đo bằng câu nói: "Chỉ cần ba chữ cái là có tiền". Những công ty ma, dự án ảo được thổi giá lên trời. Mặc dù DCDS tuân thủ nghiêm ngặt kỷ luật đầu tư và không tham gia vào các cổ phiếu rác, nhưng đôi khi, việc nhìn thấy dòng tiền đầu cơ ăn bằng lần trong khi các Blue-chip tích lũy cũng tạo ra áp lực tâm lý không nhỏ lên đội ngũ quản lý quỹ.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự tỉnh táo là thứ xa xỉ nhất trong một thị trường bò tót (Bull market). Vào cuối năm 2021, P/E của nhiều cổ phiếu Bất động sản đã bị đẩy lên mức không tưởng. Quỹ DCDS đã thực hiện hóa lợi nhuận một phần ở nhóm Chứng khoán và Thép khi nhận thấy những dấu hiệu tạo đỉnh của lợi nhuận doanh nghiệp.</p>
  <p>Tuy nhiên, chúng tôi vẫn duy trì tỷ trọng cổ phiếu khá cao, tin rằng đà phục hồi kinh tế hậu COVID-19 sẽ hỗ trợ thị trường trong năm tiếp theo. Đó là một nhận định dựa trên kinh tế nội tại, nhưng lại đánh giá chưa đủ mức độ tàn khốc của bóng đen lạm phát toàn cầu đang kéo tới.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khép lại 2021, DCDS ghi nhận hiệu suất vượt trội xấp xỉ <strong>+40%</strong>, đánh dấu một trong những năm thành công rực rỡ nhất lịch sử quỹ. Chúng tôi ăn mừng thành quả cùng nhà đầu tư, nhưng trong các cuộc họp Ủy ban đầu tư (Investment Committee), những nếp nhăn bắt đầu xuất hiện.</p>
  <p>Bóng ma lạm phát của Mỹ đang hiện rõ hơn bao giờ hết. Hàng hóa cơ bản tăng giá chóng mặt do đứt gãy chuỗi cung ứng toàn cầu. Một câu hỏi lớn được đặt ra: "Điều gì sẽ xảy ra khi Fed ngừng in tiền và bắt đầu thu hẹp bảng cân đối kế toán?".</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kỷ nguyên F0 và tiền rẻ năm 2021 đã tạo ra một thế hệ nhà đầu tư mới chưa từng nếm mùi đau khổ của thị trường gấu (Bear market). Họ tin rằng chứng khoán chỉ có một chiều đi lên. Nhưng đối với những người đã từng đi qua xác của thị trường năm 2008 hay 2011 như chúng tôi, mùi vị của sự đổ vỡ đã phảng phất đâu đây.</p>
  <p>Không ai có thể đoán được chính xác khi nào âm nhạc sẽ ngừng lại. Nhưng năm 2022 đang đến, mang theo một cơn bão hoàn hảo (The Perfect Storm) tàn khốc nhất lịch sử cận đại, càn quét qua mọi thành quả mà kỷ nguyên tiền rẻ vừa xây đắp.</p>`
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

export const dcds2021Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
