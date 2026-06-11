const html = `
<section class="page active" id="page-buffett-apple" data-route="/minds/buffett-apple" data-title="The Digital See's Candies">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">01 · Inner Monologues</a> · Warren Buffett
    </div>
    <h1 style="margin-bottom: 8px;">The Digital See's Candies</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Omaha, 2016. Khám phá ra Apple và thương vụ vĩ đại nhất bẻ gãy mọi định kiến.</p>

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

let applePagesRaw = [
  // Page 1
  `<img src="/images/apple1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Trong suốt nhiều thập kỷ, tôi luôn tự hào nói với các cổ đông của mình rằng: "Tôi không đầu tư vào các công ty công nghệ vì tôi không hiểu chúng". Nếu tôi không thể nhìn thấy chính xác một công ty sẽ đứng ở đâu trong 10 năm tới, thì công ty đó nằm ngoài "vòng tròn năng lực" của tôi. Ngành công nghệ thay đổi quá nhanh, và thứ gì thay đổi nhanh thì hào kinh tế của nó rất mong manh.</p>
  <p>Nhưng vào năm 2016, một trong những người quản lý đầu tư của tôi, Todd hoặc Ted, đã mua một ít cổ phiếu Apple. Tôi bắt đầu chú ý. Tôi không nhìn vào những dòng mã code phần mềm hay các thông số vi xử lý. Tôi bắt đầu quan sát mọi người xung quanh.</p>`,

  // Page 2
  `<img src="/images/apple2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tôi đến các trung tâm thương mại và nhà hàng. Tôi đi dạo trên đường phố. Tôi để ý thấy hàng triệu người, từ những đứa trẻ 10 tuổi cho đến những người già 80 tuổi, đều đang dán mắt vào một mảnh kính phát sáng nhỏ bé. Họ dùng nó để liên lạc, để mua sắm, để giải trí, để lưu giữ toàn bộ hình ảnh và kỷ niệm của cuộc đời họ.</p>
  <p>Nó không chỉ là một chiếc điện thoại. Đó là bất động sản đắt giá nhất trên thế giới: Lòng bàn tay của con người. Và Apple đã độc chiếm mảnh đất đó một cách tuyệt đối. Tôi bỗng nhận ra, Apple không phải là một công ty công nghệ. Đó là một công ty sản phẩm tiêu dùng.</p>`,

  // Page 3
  `<img src="/images/apple3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Hãy hỏi một thiếu niên Mỹ rằng nếu họ phải từ bỏ chiếc iPhone của mình, hay từ bỏ chiếc xe hơi họ đang đi, họ sẽ chọn cái nào? Thật đáng kinh ngạc, rất nhiều người sẽ chọn giữ lại chiếc điện thoại. Mức độ gắn bó, hay sự "kết dính" (stickiness) của sản phẩm này lớn hơn bất kỳ thứ gì tôi từng thấy trong đời.</p>
  <p>Nếu bạn đổi từ iPhone sang một chiếc điện thoại Android, bạn sẽ mất hết ứng dụng, hình ảnh trên iCloud, những tin nhắn iMessage màu xanh quen thuộc, và phải học lại một hệ sinh thái mới. Chi phí chuyển đổi (switching cost) về mặt tâm lý và thói quen là khổng lồ.</p>`,

  // Page 4
  `<img src="/images/apple4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi tôi nhận ra điều này, bóng đèn trong đầu tôi bật sáng. Đây chính là See's Candies, đây chính là Coca-Cola của thế kỷ 21! Nó là một thương hiệu tiêu dùng mà khách hàng yêu thích đến mức mù quáng, sẵn sàng trả mức giá cắt cổ để sở hữu nó, và cực kỳ trung thành.</p>
  <p>Thế là tôi gỡ bỏ mọi định kiến cũ kỹ của mình. Nếu thực tế đã thay đổi, thì tâm trí tôi cũng phải thay đổi. Tôi bắt đầu mua cổ phiếu Apple. Không phải mua một ít. Tôi mua một cách cuồng nhiệt. Từ cuối năm 2016 đến 2018, Berkshire đã đổ khoảng 36 tỷ đô la để mua hơn 5% cổ phần của Apple.</p>`,

  // Page 5
  `<img src="/images/apple5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhiều người trên Phố Wall nghĩ rằng tôi đã lú lẫn khi đầu tư vào công nghệ ở tuổi 86. Họ nói rằng doanh số iPhone đã đạt đỉnh, rằng chu kỳ siêu lợi nhuận của Apple đã qua. Họ nhìn Apple qua lăng kính của những chiếc điện thoại Nokia hay BlackBerry năm xưa.</p>
  <p>Nhưng tôi không mua một nhà sản xuất thiết bị cứng có thể bị lỗi thời. Tôi mua một hệ sinh thái không thể bị thay thế. Hàng trăm triệu người dùng trên khắp thế giới bị khóa chặt vào hệ sinh thái đó. Và Apple có quyền định giá (pricing power) vô song. Họ có thể tăng giá điện thoại thêm 100 đô la, và người ta vẫn xếp hàng dài để mua.</p>`,

  // Page 6
  `<img src="/images/apple6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Điều tuyệt vời nhất ở Apple là mô hình tài chính của nó. Tim Cook là một CEO kiệt xuất về vận hành. Apple tạo ra những dòng sông tiền mặt khổng lồ mỗi năm, nhưng họ không cần phải đổ quá nhiều tiền vào các nhà máy hay kho bãi như đường sắt BNSF hay năng lượng MidAmerican.</p>
  <p>Mô hình của họ là "Vốn ít, Lợi nhuận siêu ngạch". Nó mang hình bóng của những doanh nghiệp vĩ đại mà Charlie và tôi từng mơ ước sở hữu vào những năm 1970. Hơn thế nữa, Tim Cook liên tục dùng số tiền khổng lồ đó để mua lại cổ phiếu quỹ. Điều đó có nghĩa là, tỷ lệ sở hữu của Berkshire tại Apple sẽ tự động tăng lên mỗi năm mà tôi chẳng cần phải bỏ thêm một đồng nào.</p>`,

  // Page 7
  `<img src="/images/apple7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Vài năm sau, thị trường bắt đầu nhận ra những gì tôi đã thấy. Cổ phiếu Apple tăng trưởng theo một quỹ đạo không tưởng. Khoản đầu tư 36 tỷ đô la của chúng tôi đã nở rộ thành hơn 150 tỷ đô la ở đỉnh cao. Nó tạo ra nhiều lợi nhuận hơn bất kỳ khoản đầu tư đơn lẻ nào trong suốt lịch sử sáu thập kỷ của Berkshire Hathaway.</p>
  <p>Apple lớn đến mức tôi không còn coi nó là một cổ phiếu trong danh mục đầu tư nữa. Tôi coi nó là mảng kinh doanh thứ tư của chúng tôi, bên cạnh Bảo hiểm, Đường sắt và Năng lượng. Đó là mảng kinh doanh vĩ đại nhất mà tôi biết.</p>`,

  // Page 8
  `<img src="/images/apple8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ngồi trong văn phòng, tôi lấy chiếc iPhone trong túi ra. Tôi vẫn không biết cách nó hoạt động bên trong. Tôi không rành về vi mạch hay phần mềm đám mây. Nhưng tôi biết rõ tâm lý của hàng tỷ người đang bị trói buộc vào bề mặt kính sáng lấp lánh này.</p>
  <p>Bài học lớn nhất từ thương vụ Apple không phải là về công nghệ. Bài học là sự kiên định không đồng nghĩa với sự bảo thủ cứng nhắc. Bạn phải biết những nguyên lý cốt lõi nào là vĩnh cửu (như sự trung thành của khách hàng và rào cản độc quyền), và phải sẵn sàng vứt bỏ những định kiến cá nhân khi một "See's Candies" thời đại số xuất hiện ngay trước mắt bạn.</p>`
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

export const applePages = applePagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
