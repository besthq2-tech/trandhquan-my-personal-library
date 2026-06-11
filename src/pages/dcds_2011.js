const html = `
<section class="page active" id="page-dcds-2011" data-route="/minds/dcds-2011" data-title="The Great Surgery & The Rebirth">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2011-2013
    </div>
    <h1 style="margin-bottom: 8px;">The Great Surgery & The Rebirth</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2011 - 2013. Cuộc đại phẫu thuật nợ xấu và bước chuyển mình lịch sử từ quỹ đóng sang quỹ mở.</p>

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
  `<img src="/images/dcds2011_1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thập kỷ đầu tiên của thị trường chứng khoán Việt Nam khép lại trong một bầu không khí u ám và nặng nề. Giai đoạn 2011 - 2012 không còn những cú sập kinh hoàng trong một đêm như năm 2008, mà nó là một sự bào mòn từ từ, dai dẳng và nghẹt thở. Nền kinh tế đang phải trả giá cho thập kỷ tăng trưởng nóng và những gói kích cầu dễ dãi trước đó.</p>
  <p>Căn bệnh nguy hiểm nhất lúc này không nằm trên sàn chứng khoán, mà nằm sâu bên trong cơ thể của hệ thống ngân hàng: Nợ xấu (NPL) và sở hữu chéo. Những khối ung nhọt tài chính khổng lồ bị giấu dưới những lớp báo cáo kế toán kỹ thuật, đe dọa đánh sập toàn bộ mạch máu của nền kinh tế.</p>`,

  // Page 2
  `<img src="/images/dcds2011_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thị trường chứng khoán phản ứng lại bằng một sự chán nản cùng cực. Thanh khoản teo tóp. Niềm tin của các nhà đầu tư nước ngoài sụt giảm nghiêm trọng. Hàng loạt công ty chứng khoán phải đóng cửa hoặc sáp nhập.</p>
  <p>Đối với chúng tôi tại Dragon Capital, sự hoảng loạn của đám đông luôn là nơi chứa đựng những cơ hội vĩ đại nhất, nhưng chỉ khi bạn đủ tỉnh táo để phân biệt được đâu là "giá trị bị định giá thấp" và đâu là "cái bẫy giá trị" (value trap). Việc né tránh mảng ngân hàng và bất động sản trong giai đoạn này là một quyết định sinh tử. Chúng tôi đi tìm những doanh nghiệp sản xuất cơ bản, những cỗ máy tạo tiền mặt đều đặn miễn nhiễm với nợ xấu.</p>`,

  // Page 3
  `<img src="/images/dcds2011_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng bên cạnh bài toán đầu tư, chúng tôi đang phải đối mặt với một vấn đề mang tính sống còn đối với chính thiết chế của quỹ. Quỹ VF1 (tiền thân của DCDS) vốn là một "quỹ đóng" (closed-end fund). Trong một quỹ đóng, chứng chỉ quỹ được giao dịch trên sàn chứng khoán như một cổ phiếu thông thường. Khi thị trường hoảng loạn, giá chứng chỉ quỹ trên sàn rớt thê thảm, thấp hơn rất nhiều so với Giá trị Tài sản Ròng (NAV) thực tế của danh mục.</p>
  <p>Có những thời điểm, thị giá của VF1 trên sàn HOSE chiết khấu (discount) tới hơn 30% so với NAV. Điều này có nghĩa là nếu bạn bỏ ra 70 đồng để mua quỹ, bạn đang thực sự sở hữu 100 đồng giá trị cổ phiếu cơ sở. Nó là một món hời cho người mua mới, nhưng lại là sự bất công tột cùng đối với những nhà đầu tư gắn bó lâu năm nếu họ buộc phải bán ra.</p>`,

  // Page 4
  `<img src="/images/dcds2011_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Mức chiết khấu khổng lồ này giống như một đám mây đen che phủ lên uy tín của toàn bộ ngành quản lý quỹ tại Việt Nam. Không ai muốn đầu tư vào một quỹ mà giá trị trên sàn luôn thấp hơn giá trị thực tế của nó. Cấu trúc quỹ đóng đã hoàn thành sứ mệnh lịch sử của nó trong giai đoạn sơ khai, nhưng giờ đây nó đã trở thành một chiếc áo chật hẹp cản trở sự phát triển.</p>
  <p>Chúng tôi đi đến một quyết định lịch sử: Phải chuyển đổi VF1 từ quỹ đóng thành "quỹ mở" (open-ended fund). Trong quỹ mở, nhà đầu tư có quyền mua hoặc bán lại chứng chỉ quỹ trực tiếp cho công ty quản lý quỹ theo đúng mức giá NAV thực tế. Không còn mức chiết khấu nào nữa. Sự minh bạch và công bằng tuyệt đối được lập lại.</p>`,

  // Page 5
  `<img src="/images/dcds2011_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng nói thì dễ, làm mới vô cùng gian nan. Lúc bấy giờ, khái niệm "quỹ mở" tại Việt Nam gần như là một vùng giấy trắng về mặt pháp lý. Chúng tôi lại một lần nữa khoác áo tiên phong, như những gì đã làm năm 2004. Hàng chục cuộc họp kéo dài vô tận với Ủy ban Chứng khoán Nhà nước, Bộ Tài chính để xây dựng hành lang pháp lý cho quỹ mở.</p>
  <p>Chúng tôi phải giải bài toán hóc búa về thanh khoản: Làm sao để quỹ luôn có đủ tiền mặt đáp ứng lệnh rút vốn của nhà đầu tư mà không phải bán tháo cổ phiếu gây thiệt hại cho quỹ? Chúng tôi phải nâng cấp toàn bộ hệ thống IT, quy trình kế toán, và làm việc với ngân hàng giám sát để tính toán NAV hàng ngày (thay vì hàng tuần như trước).</p>`,

  // Page 6
  `<img src="/images/dcds2011_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đỉnh điểm của sự căng thẳng là Đại hội Cổ đông lịch sử vào năm 2013 để biểu quyết thông qua việc chuyển đổi quỹ. Có những cổ đông phản đối, có những người nghi ngờ. Phải mất rất nhiều công sức thuyết trình, giải thích về lợi ích dài hạn, chúng tôi mới nhận được cái gật đầu của đại đa số. Đó là một trận chiến thuyết phục sự đồng thuận khó khăn nhất mà tôi từng trải qua.</p>
  <p>Sau nhiều nỗ lực phi thường, năm 2013, VF1 chính thức hoàn tất quá trình chuyển đổi, đổi tên thành DCDS (Dragon Capital Dynamic Securities Fund), và ghi danh vào lịch sử: Quỹ đầu tư đại chúng đầu tiên của Việt Nam chuyển đổi thành công từ dạng đóng sang dạng mở.</p>`,

  // Page 7
  `<img src="/images/dcds2011_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Song song với cuộc đại phẫu thuật cấu trúc quỹ của chúng tôi, ở tầm vĩ mô, Chính phủ Việt Nam cũng thực hiện một cuộc đại phẫu thuật nền kinh tế. VAMC (Công ty Quản lý Tài sản của các TCTD Việt Nam) ra đời để gom và xử lý cục máu đông nợ xấu. Các vụ đại án ngân hàng được đưa ra xét xử nhằm lập lại trật tự và minh bạch hóa hệ thống.</p>
  <p>Đó là những liều thuốc đắng, rất đắng, nhưng bắt buộc phải uống. Việc cắt bỏ phần hoại tử tuy đau đớn, nhưng nó là điều kiện tiên quyết để cơ thể có thể hồi phục và bước vào một chu kỳ tăng trưởng mới bền vững hơn.</p>`,

  // Page 8
  `<img src="/images/dcds2011_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Cuối năm 2013, đứng trong văn phòng mới sau khi hoàn tất mọi thủ tục pháp lý cho DCDS, tôi thở phào nhẹ nhõm. Mức chiết khấu oan uổng trên thị trường đã biến mất. Nhà đầu tư đã có thể giao dịch ở giá trị thực NAV. Niềm tin bắt đầu quay trở lại.</p>
  <p>Giai đoạn 2011-2013 giống như một đường hầm dài và tối. Nhưng ở cuối đường hầm, chúng tôi không chỉ tìm thấy ánh sáng, mà còn xây dựng xong một hạ tầng tài chính vững chắc và chuẩn mực hơn. Với cấu trúc quỹ mở hoàn toàn mới, DCDS giờ đây đã thực sự sẵn sàng để vươn ra biển lớn, đón đầu một thập kỷ bùng nổ tiếp theo của thị trường chứng khoán Việt Nam.</p>`
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

export const dcds2011Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
