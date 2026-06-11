const html = `
<section class="page active" id="page-buffett-bnsf" data-route="/minds/buffett-bnsf" data-title="The All-In Wager on America">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">01 · Inner Monologues</a> · Warren Buffett
    </div>
    <h1 style="margin-bottom: 8px;">The All-In Wager on America</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Omaha, 2010. Thương vụ mua đứt BNSF Railway và ván cược tuyệt đối vào nền kinh tế Hoa Kỳ.</p>

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

let bnsfPagesRaw = [
  // Page 1
  `<img src="/images/bnsf1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Có những âm thanh đã trở thành bản giao hưởng của nước Mỹ. Tiếng gầm rú của những động cơ diesel khổng lồ, tiếng rít của bánh thép nghiến trên đường ray, và tiếng còi tàu vang vọng giữa những đồng bằng rộng lớn. Khi tôi nhìn vào một đoàn tàu chở hàng dài hai dặm đang lầm lũi tiến về phía trước, tôi không chỉ thấy thép và than. Tôi thấy hệ tuần hoàn của một siêu cường kinh tế.</p>
  <p>Năm 2009, nước Mỹ vẫn đang chìm trong bầu không khí ảm đạm sau cuộc Đại Suy Thoái. Bóng ma của vụ sụp đổ Lehman Brothers vẫn còn lảng vảng, thị trường nhà đất đổ nát, và niềm tin vào tương lai ở mức thấp nhất trong nhiều thập kỷ. Mọi người đều đang giữ rịt lấy tiền mặt và sợ hãi.</p>`,

  // Page 2
  `<img src="/images/bnsf2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng đó chính xác là lúc tôi quyết định lôi khẩu súng săn voi của mình ra. Tôi đã ngắm bắn mục tiêu này từ lâu: BNSF Railway. Burlington Northern Santa Fe không chỉ là một công ty đường sắt; nó là một phần ba mạng lưới vận tải của toàn bộ Bắc Mỹ.</p>
  <p>Lúa mì từ các nông trại ở Trung Tây, than đá từ vùng lòng chảo Powder River Basin, hàng tiêu dùng nhập khẩu cập cảng Los Angeles... tất cả đều phải di chuyển trên những đường ray đó. Nếu nước Mỹ muốn tồn tại và phát triển, những con tàu đó phải chạy. Đó là một định luật vật lý không thể chối cãi của nền kinh tế.</p>`,

  // Page 3
  `<img src="/images/bnsf3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Giống như MidAmerican Energy, đường sắt là một ngành kinh doanh "khát vốn" đến mức đáng sợ. Mỗi năm, BNSF phải chi hàng tỷ đô la chỉ để thay thế những thanh tà vẹt gỗ bị mục nát, nâng cấp đường ray và bảo trì những cỗ máy kéo khổng lồ. Trong nhiều thập kỷ, tôi từng ghét cay ghét đắng những ngành kinh doanh như vậy.</p>
  <p>Nhưng vấn đề của tôi giờ đã khác. Nguồn tiền "Float" từ mảng bảo hiểm (GEICO và General Re) đã phình to thành một dòng sông khổng lồ không ngừng chảy. Lượng tiền mặt của Berkshire đã trở thành một gánh nặng. Tôi cần một cái hồ chứa khổng lồ, an toàn tuyệt đối và vĩnh cửu để hút hết số tiền đó. Và không có cái hồ nào sâu hơn ngành đường sắt.</p>`,

  // Page 4
  `<img src="/images/bnsf4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Hơn nữa, con hào kinh tế (moat) của BNSF là bất khả xâm phạm. Sẽ không bao giờ, và ý tôi là không bao giờ, có ai đó đi gom đất xuyên qua nước Mỹ để xây dựng một mạng lưới đường sắt mới để cạnh tranh. Vị trí độc quyền tự nhiên của họ là tuyệt đối và mãi mãi.</p>
  <p>Và nếu nhìn vào hiệu suất, đường sắt là một phép màu. BNSF có thể vận chuyển một tấn hàng hóa đi xa 500 dặm chỉ với một gallon dầu diesel. Nó hiệu quả hơn xe tải về chi phí và thân thiện với môi trường gấp nhiều lần. Khi giá dầu mỏ biến động trong tương lai, lợi thế của đường sắt sẽ càng nới rộng.</p>`,

  // Page 5
  `<img src="/images/bnsf5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Để hoàn tất thương vụ này, tôi phải bỏ ra 44 tỷ đô la (bao gồm cả khoản nợ tiếp quản). Berkshire Hathaway đã phải chi ra 26 tỷ đô la tiền mặt cùng với một lượng lớn cổ phiếu. Đó là tấm séc lớn nhất mà tôi từng viết trong đời. Charlie Munger gọi đó là một quyết định "chỉ có một lần trong đời".</p>
  <p>Thực tế, đó không chỉ là việc mua một công ty. Trong thư gửi cổ đông năm đó, tôi đã gọi thương vụ này là "Ván cược tất tay (All-In Wager) vào tương lai kinh tế của Hoa Kỳ".</p>`,

  // Page 6
  `<img src="/images/bnsf6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi mọi người nhìn vào biểu đồ thất nghiệp tồi tệ và những dòng tít bi quan trên báo chí, họ tưởng rằng nước Mỹ đã chạm đến thời kỳ hoàng hôn. Nhưng tôi đã sống qua 8 thập kỷ. Tôi đã thấy Đại Suy Thoái, Đệ nhị Thế chiến, Chiến tranh Lạnh, lạm phát đình đốn thập niên 70. Hệ thống tư bản Mỹ có một khả năng tái sinh và phát triển đáng kinh ngạc.</p>
  <p>Nếu bạn tin rằng một trăm năm nữa, dân số Mỹ sẽ đông hơn, họ sẽ tiêu thụ nhiều hàng hóa hơn, và nước Mỹ sẽ giàu có hơn, thì bạn phải tin vào ngành đường sắt. Bạn không thể cá cược chống lại nước Mỹ (Never bet against America).</p>`,

  // Page 7
  `<img src="/images/bnsf7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thương vụ được hoàn tất vào năm 2010. Ngay lập tức, dòng tiền tự do khổng lồ của BNSF bắt đầu chảy ngược về tổng hành dinh Omaha. Nó không giống như bảo hiểm có thể lên xuống thất thường theo bão giá, dòng tiền từ đường sắt đều đặn và chắc chắn như tiếng còi tàu báo giờ.</p>
  <p>Cùng với mảng năng lượng (MidAmerican), mảng đường sắt đã biến Berkshire Hathaway thành một trụ cột hạ tầng vật lý của đất nước. Chúng tôi từ một cỗ máy đầu tư tài chính thuần túy, nay đã cắm rễ sâu vào lớp đất cứng, trở thành những người vận chuyển, những người thắp sáng.</p>`,

  // Page 8
  `<img src="/images/bnsf8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thi thoảng, khi có dịp lái xe dọc theo những xa lộ chạy song song với tuyến đường sắt, tôi lại thấy một đoàn tàu chở hàng BNSF dài dằng dặc lướt qua. Cảm giác đó rất kỳ lạ và thỏa mãn.</p>
  <p>Tôi nhớ lại thằng bé 11 tuổi năm xưa đã từng đếm từng đồng xu lẻ để mua ba cổ phiếu Cities Service Preferred đầu tiên trong đời. Thằng bé đó chưa bao giờ tưởng tượng nổi một ngày nào đó, nó sẽ thực sự sở hữu toàn bộ con tàu thép khổng lồ kia, âm vang còi tàu vọng lại từ những rặng núi xa xăm, đang hối hả chuyên chở sinh khí cho cả một quốc gia.</p>`
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

export const bnsfPages = bnsfPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
