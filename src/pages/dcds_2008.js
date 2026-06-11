const html = `
<section class="page active" id="page-dcds-2008" data-route="/minds/dcds-2008" data-title="The Abyss">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2008
    </div>
    <h1 style="margin-bottom: 8px;">The Abyss</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2008. Khủng hoảng kép, sự sụp đổ tàn khốc và bài toán sinh tồn trong vực thẳm.</p>

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
  `<img src="/images/dcds2008_1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nếu 2006-2007 là một bữa tiệc hoang lạc ngập ngụa champagne, thì 2008 là buổi sáng thức dậy với một cơn dư chấn kinh hoàng, bị trói trên ghế, và nhận ra căn nhà đang bốc cháy. Đối với thị trường tài chính Việt Nam, 2008 không chỉ là một đợt điều chỉnh. Nó là một sự hủy diệt có hệ thống. Nó là Vực Thẳm.</p>
  <p>Chúng tôi bước vào năm 2008 với một dự cảm tồi tệ, nhưng không ai có thể tưởng tượng được mức độ tàn khốc của cơn bão. Đó là một "Khủng hoảng Kép". Bên ngoài, hệ thống tài chính toàn cầu đang sụp đổ dưới sức nặng của nợ dưới chuẩn Mỹ. Lehman Brothers đệ đơn phá sản. Bên trong, kinh tế vĩ mô Việt Nam lên cơn sốt rét run người.</p>`,

  // Page 2
  `<img src="/images/dcds2008_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Lạm phát trong nước phi mã vượt mức 20%. Bạn có thể cảm nhận được sự hoảng loạn trên từng con phố khi giá gạo, giá xăng tăng theo ngày. Ngân hàng Nhà nước buộc phải phanh gấp, thắt chặt tiền tệ một cách cực đoan. Lãi suất huy động tại các ngân hàng vọt lên 18%, 20%, thậm chí có lúc thỏa thuận ngầm lên tới 25% một năm.</p>
  <p>Khi lãi suất phi rủi ro lên tới hơn 20%, mọi kênh tài sản rủi ro đều bị định giá lại. Bất động sản đóng băng hoàn toàn. Và thị trường chứng khoán - nơi vốn dĩ được bơm căng bằng tiền vay nợ - bắt đầu một quá trình vỡ nợ dây chuyền tàn khốc nhất lịch sử.</p>`,

  // Page 3
  `<img src="/images/dcds2008_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chỉ số VN-Index rơi tự do từ đỉnh cao 1.170 điểm xuống tận đáy dưới 240 điểm. Gần 80% giá trị vốn hóa bốc hơi. Không một đồ thị phân tích kỹ thuật nào có ý nghĩa. Không một mô hình định giá nào có thể giải thích được. Đó đơn thuần là sự sụp đổ của thanh khoản.</p>
  <p>Những tiếng chuông điện thoại reo liên tục tại văn phòng Dragon Capital. Lần này không phải để hỏi mua chứng chỉ quỹ, mà là những lời chất vấn giận dữ, những lệnh yêu cầu rút tiền trong hoảng loạn. Khách hàng nước ngoài gọi điện từ London, New York hỏi xem liệu nền kinh tế Việt Nam có bị vỡ nợ quốc gia hay không.</p>`,

  // Page 4
  `<img src="/images/dcds2008_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nỗi đau đớn nhất của một người quản lý quỹ không phải là nhìn NAV suy giảm. Nỗi đau lớn nhất là sự bất lực. Khi Margin Call (lệnh giải chấp) được kích hoạt hàng loạt trên toàn thị trường, các công ty chứng khoán thi nhau bán tống bán tháo mọi thứ để thu hồi nợ. Tốt, xấu, rác rưởi hay kim cương đều bị ném chung vào một cái lò thiêu.</p>
  <p>Chúng tôi nắm giữ những doanh nghiệp đầu ngành tuyệt vời, tiền mặt dồi dào, kinh doanh vẫn có lãi. Nhưng giá cổ phiếu của họ trên bảng điện vẫn giảm sàn la liệt không người mua ngày này qua ngày khác. Thị trường hoàn toàn phi lý, nhưng cơn bĩ cực của thanh khoản ép tất cả phải quy phục.</p>`,

  // Page 5
  `<img src="/images/dcds2008_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Mùa hè năm 2008, tôi thường ngồi lại văn phòng rất khuya. Ánh đèn đường hắt lên từ phố Nguyễn Huệ trống rỗng. Mọi thứ dường như tĩnh lặng đến nghẹt thở. Có những khoảnh khắc, tôi đã hoài nghi chính bản thân mình. Liệu chúng tôi có sai lầm khi đặt niềm tin vào thị trường sơ khai này? Liệu cuộc chơi này có thực sự kết thúc ở đây?</p>
  <p>Nhưng trong bóng tối, bản năng sinh tồn và kỷ luật đầu tư lại trỗi dậy. Đây là lúc chúng tôi phải hành xử như những người bảo vệ cuối cùng của nguồn vốn. Chúng tôi không được phép hoảng loạn cùng đám đông.</p>`,

  // Page 6
  `<img src="/images/dcds2008_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi dành thời gian đến thăm trực tiếp các doanh nghiệp trong danh mục. Gặp các CEO, đi xuống nhà máy. Chúng tôi phải đảm bảo rằng họ vẫn sống sót, vẫn sản xuất, dòng tiền của họ không bị đứt gãy bởi lãi suất 25%. Chỉ cần doanh nghiệp còn sống qua mùa đông, cổ phiếu sẽ hồi sinh khi mùa xuân đến.</p>
  <p>Chúng tôi viết những bản tin gửi nhà đầu tư với sự trung thực tuyệt đối. Không tô hồng, không hứa hẹn viển vông. Chỉ có sự lạnh lùng của phân tích vĩ mô và lời cam kết rằng: "Đừng bán ra lúc này. Mọi thứ đang rẻ đến mức vô lý. Định giá đã rơi xuống mức mà rủi ro duy nhất là việc bạn rời bỏ thị trường".</p>`,

  // Page 7
  `<img src="/images/dcds2008_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thảm kịch 2008 giống như một trận cháy rừng cực lớn. Rất nhiều tài sản bị thiêu rụi, rất nhiều "chuyên gia" tự xưng biến mất không để lại dấu vết. Những nhà đầu tư dùng đòn bẩy quá mức đã bị quét sạch khỏi cuộc chơi vĩnh viễn.</p>
  <p>Nhưng lửa cũng dọn dẹp những thứ mục nát. Sau trận cháy rừng, hạt giống của một thị trường vốn lành mạnh hơn bắt đầu nảy mầm. Ủy ban Chứng khoán bắt đầu thắt chặt lại các quy định về margin, yêu cầu minh bạch hóa thông tin. Nỗi đau đã tạo ra kháng thể.</p>`,

  // Page 8
  `<img src="/images/dcds2008_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ngày hôm nay, khi lật lại những bản báo cáo NAV nhuốm màu đỏ máu của năm 2008, tôi thấy được những vết sẹo. DCDS đã sống sót, NAV đã giảm sâu nhưng không vỡ trận, vì chúng tôi không sử dụng đòn bẩy và danh mục dựa trên nền tảng cơ bản.</p>
  <p>Thị trường tài chính không bao giờ là một đường thẳng đi lên. Nếu bạn chưa từng nhìn vào vực thẳm của năm 2008, chưa từng cảm nhận cái sự tuyệt vọng tột cùng khi thanh khoản biến mất, bạn sẽ không bao giờ thực sự hiểu được sự khốc liệt và vẻ đẹp của nghề quản lý quỹ. Sẹo lồi là huy chương của những người sống sót.</p>`
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

export const dcds2008Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
