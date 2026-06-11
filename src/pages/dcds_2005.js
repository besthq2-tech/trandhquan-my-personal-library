const html = `
<section class="page active" id="page-dcds-2005" data-route="/minds/dcds-2005" data-title="The Mega Bubble">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2005-2007
    </div>
    <h1 style="margin-bottom: 8px;">The Mega Bubble</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2005 - 2007. Cơn điên loạn của thị trường sơ khai và sự giằng xé của lý trí.</p>

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
  `<img src="/images/dcds2005_1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2005, nền kinh tế Việt Nam đón những luồng gió mát lành. Dòng vốn đầu tư nước ngoài (FDI) đổ vào cuồn cuộn, quá trình cổ phần hóa các doanh nghiệp nhà nước lớn được đẩy mạnh. Vinamilk lên sàn. Những tài sản quý giá nhất của quốc gia lần đầu tiên được định giá công khai. Thị trường chứng khoán từ chỗ chỉ là một cái ao làng lèo tèo, bỗng chốc được bơm nước thành một hồ chứa khổng lồ.</p>
  <p>Là một quỹ đại chúng đầu tiên, VF1 (DCDS) như con cá mập bơi trong một vùng nước dồi dào thức ăn. Chúng tôi giải ngân mạnh mẽ vào các doanh nghiệp đầu ngành. Những báo cáo danh mục đầu tư đầu tiên gửi về cho khách hàng toàn những con số xanh rực rỡ. Nhưng đó chỉ là phần mở đầu cho một vở kịch hoang đường nhất mà tôi từng chứng kiến.</p>`,

  // Page 2
  `<img src="/images/dcds2005_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chuyển sang năm 2006 và đặc biệt là đầu năm 2007, thị trường không còn là một nơi để đầu tư nữa. Nó trở thành một cơn cuồng tín. VN-Index cất cánh từ mốc 300 điểm và xuyên thủng mọi ngưỡng kháng cự, lao thẳng lên đỉnh 1.170 điểm vào tháng 3/2007. Một sự bùng nổ mang tính kiến tạo, và cũng mang tính hủy diệt.</p>
  <p>Bất kỳ thứ gì có chữ "cổ phiếu" đều tăng giá. Người ta không cần biết công ty làm gì, báo cáo tài chính ra sao, chỉ cần có mã giao dịch là mua. Những bà nội trợ rút tiền tiết kiệm, những người lái taxi bàn chuyện mua mã này bán mã kia. Lòng tham lan tỏa như một dịch bệnh với tốc độ lây nhiễm không thể kiểm soát.</p>`,

  // Page 3
  `<img src="/images/dcds2005_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng thứ điên rồ nhất không nằm trên sàn giao dịch chính thức (HOSE hay HNX). Nó nằm ở thị trường OTC (thị trường phi tập trung). Những tờ giấy "chứng nhận sở hữu cổ phần" được trao tay nhau trong các quán cà phê dọc phố Nguyễn Công Trứ hay Tôn Thất Đạm. Tiền mặt hàng tỷ đồng được ném lên bàn kính uống nước chỉ để đổi lấy vài tờ giấy lộn xộn chưa hề được niêm yết.</p>
  <p>Người ta xếp hàng xuyên đêm trước cổng các công ty chứng khoán, trải chiếu ngủ vỉa hè chỉ để lấy "số thứ tự" nộp tiền mua IPO của Bảo Việt, của FPT. Đó là một cơn lên đồng tập thể. Một thế hệ người Việt đầu tiên đột nhiên phát hiện ra ảo giác của việc "làm giàu sau một đêm".</p>`,

  // Page 4
  `<img src="/images/dcds2005_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Là người quản lý quỹ, tôi đối mặt với một áp lực tâm lý khủng khiếp. Tài sản ròng (NAV) của quỹ tăng phi mã. Những khách hàng từng hoài nghi chúng tôi vào năm 2004 giờ đây coi chúng tôi như những vị á thần. Họ rót thêm tiền, tung hô chúng tôi. Lợi nhuận của VF1 lúc đó là một con số không tưởng.</p>
  <p>Nhưng tận sâu trong thâm tâm, sự lạnh lùng của một dân tài chính chuyên nghiệp báo cho tôi biết: Điều này là sai trái. Chỉ số P/E (Giá/Lợi nhuận) của thị trường đã vọt lên mức 40, 50, thậm chí có mã lên tới 100 lần. Không một nền kinh tế nào, dù tăng trưởng nhanh đến đâu, có thể theo kịp mức định giá hoang tưởng này.</p>`,

  // Page 5
  `<img src="/images/dcds2005_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đó là cái bẫy chết người của người quản lý quỹ. Bạn biết đó là bong bóng. Nhưng bạn có dám bán ra không? Nếu bạn bán quá sớm, thị trường tiếp tục tăng thêm 30% nữa, khách hàng sẽ xé xác bạn. Họ sẽ nói bạn là kẻ hèn nhát, kém cỏi. Họ sẽ rút tiền mang sang công ty chứng khoán kế bên để tự chơi.</p>
  <p>John Maynard Keynes từng nói: "Thị trường có thể duy trì sự phi lý lâu hơn khả năng bạn duy trì khả năng thanh toán". Còn tôi thì nhận ra: "Khách hàng có thể duy trì lòng tham lâu hơn khả năng một người quản lý quỹ duy trì sự thận trọng".</p>`,

  // Page 6
  `<img src="/images/dcds2005_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi bắt đầu những cuộc họp căng thẳng nội bộ. "Cơ cấu lại", "Chốt lời một phần", "Chuyển hướng sang trái phiếu hoặc tiền mặt". Những quyết định vô cùng đau đớn. Việc bán ra những cổ phiếu siêu tăng trưởng vào lúc đám đông đang hưng phấn nhất giống như việc bạn tự rút ống thở của chính mình trong một bữa tiệc ngập ngụa champagne.</p>
  <p>Chúng tôi không thể xả toàn bộ danh mục vì quy định của quỹ, nhưng chúng tôi buộc phải chuẩn bị cho một mùa đông khắc nghiệt. Chúng tôi cố gắng giải thích rủi ro trong các báo cáo, nhưng không ai muốn nghe về rủi ro khi ngày nào mở mắt ra tài khoản cũng tăng trần 5%.</p>`,

  // Page 7
  `<img src="/images/dcds2005_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Và rồi, điều gì đến cũng phải đến. Nửa cuối năm 2007, quả bóng bơm quá căng bắt đầu xì hơi. Sự can thiệp siết tín dụng chứng khoán (Chỉ thị 03 của Ngân hàng Nhà nước) như một mồi lửa. Những kẻ vay nợ margin để đánh bạc với thị trường bắt đầu bị giải chấp. Cơn tháo chạy bắt đầu.</p>
  <p>Bảng điện tử chuyển từ một màu tím hưng phấn sang màu xanh lơ chết chóc. Thanh khoản đóng băng. Người ta dẫm đạp lên nhau để thoát ra cửa nhưng không ai mua. Những tờ giấy chứng nhận OTC trong quán cà phê hôm qua giá vài tỷ, hôm nay trở thành mớ giấy vụn không ai màng tới.</p>`,

  // Page 8
  `<img src="/images/dcds2005_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Những năm tháng 2005-2007 đã khắc sâu vào DNA của quỹ chúng tôi một bài học tàn khốc về tâm lý hành vi. Chúng tôi đã sống sót qua cơn điên rồ ấy, không phải vì chúng tôi thông minh hơn đám đông, mà vì chúng tôi bị trói buộc bởi kỷ luật của một thiết chế tổ chức chuyên nghiệp.</p>
  <p>Khi tôi nhìn những vệt máu (theo nghĩa bóng) đổ trên sàn chứng khoán vào cuối năm 2007, tôi nhận ra sứ mệnh của DCDS không chỉ là kiếm tiền. Sứ mệnh của chúng tôi là làm người hoa tiêu, giữ chặt bánh lái đi qua cơn say sóng tập thể. Sự hoang dã của thị trường cận biên là thứ có thể giết chết bất cứ kẻ nào thiếu đi sự tôn trọng đối với chu kỳ của dòng tiền.</p>`
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

export const dcds2005Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
