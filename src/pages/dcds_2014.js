const html = `
<section class="page active" id="page-dcds-2014" data-route="/minds/dcds-2014" data-title="The Sound of Cannons">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2014
    </div>
    <h1 style="margin-bottom: 8px;">The Sound of Cannons</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, Tháng 5/2014. Sự kiện Biển Đông và bài kiểm tra bản lĩnh trước rủi ro địa chính trị.</p>

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
  `<img src="/images/dcds2014_1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đầu năm 2014, quỹ DCDS (vừa lột xác thành quỹ mở) đang bước đi những nhịp vững chắc. Nền kinh tế Việt Nam đã qua cơn bĩ cực của nợ xấu ngân hàng, vĩ mô dần ổn định, lạm phát được kiềm chế, và dòng vốn nước ngoài bắt đầu rục rịch quay trở lại. Bức tranh đang sáng dần lên. Chờ đón chúng tôi dường như là một chu kỳ tăng trưởng mới đầy êm ả.</p>
  <p>Nhưng thị trường chứng khoán chưa bao giờ là một kẻ dễ đoán. Những rủi ro kinh tế có thể được tính toán bằng mô hình Excel, nhưng những "Thiên nga đen" (Black Swan) mang tính địa chính trị thì luôn ập đến không báo trước.</p>`,

  // Page 2
  `<img src="/images/dcds2014_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tháng 5 năm 2014, sự kiện giàn khoan Hải Dương 981 được đưa vào vùng biển Việt Nam làm bùng nổ một cơn địa chấn tâm lý. Bầu không khí chính trị trở nên đặc quánh và căng thẳng tột độ. Tin tức dồn dập trên mọi mặt báo. Những cuộc biểu tình nổ ra, và những lo ngại về một cuộc xung đột vũ trang bắt đầu len lỏi vào từng bữa cơm gia đình.</p>
  <p>Và đối với các nhà đầu tư cá nhân trên thị trường chứng khoán Việt Nam, sự lo ngại đó nhanh chóng chuyển hóa thành sự hoảng loạn tột cùng (Panic Selling).</p>`,

  // Page 3
  `<img src="/images/dcds2014_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ngày 8 tháng 5 năm 2014 đi vào lịch sử như một trong những phiên giao dịch đẫm máu nhất của thị trường. VN-Index có lúc rơi tự do gần 6%, mức giảm mạnh nhất trong một phiên kể từ năm 2001. Gần như toàn bộ bảng điện tử chìm trong màu xanh lơ bạt ngàn của giá sàn. Người ta giẫm đạp lên nhau để tháo chạy. Khớp lệnh bất chấp giá.</p>
  <p>Trong phòng giao dịch của chúng tôi, không khí tĩnh lặng đến rợn người. Tiếng gõ phím lạch cạch xen lẫn những cuộc gọi cháy máy từ các đại lý phân phối chứng chỉ quỹ. Khách hàng đang đòi rút vốn. Nỗi sợ hãi hoàn toàn áp đảo lý trí.</p>`,

  // Page 4
  `<img src="/images/dcds2014_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi triệu tập một cuộc họp khẩn cấp. Câu hỏi đặt ra vô cùng rõ ràng: Liệu sự kiện địa chính trị này có làm thay đổi vĩnh viễn cấu trúc nền kinh tế Việt Nam không? Nó có làm một nhà máy sữa ngừng sản xuất? Nó có làm một công ty công nghệ ngừng viết phần mềm? Nó có làm người dân ngừng đi siêu thị mua sắm vào tuần sau?</p>
  <p>Câu trả lời của cả ban đầu tư là: Không. Bức tranh vĩ mô không hề thay đổi. Doanh thu và lợi nhuận cốt lõi của các doanh nghiệp trong danh mục không hề bị ảnh hưởng bởi những chiếc tàu ngoài khơi xa. Thứ duy nhất đang thay đổi, và thay đổi cực đoan, chính là "Tâm lý bầy đàn".</p>`,

  // Page 5
  `<img src="/images/dcds2014_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nam tước Rothschild từng có một câu nói nổi tiếng vào thế kỷ 18: "Buy when there's blood in the streets, even if the blood is your own" (Hãy mua khi máu đổ trên đường phố, ngay cả khi đó là máu của chính bạn). Đó là định nghĩa chuẩn xác nhất của một nhà đầu tư ngược dòng (contrarian).</p>
  <p>Chúng tôi đưa ra chỉ thị: Tuyệt đối không bán tháo theo đám đông. Ngược lại, chúng tôi kích hoạt quỹ tiền mặt dự phòng. Khi toàn bộ thị trường bị chiết khấu 10-15% chỉ trong vài ngày mà không vì một lý do kinh tế nào, đó không phải là thảm họa, đó là một đợt "sale-off" lịch sử.</p>`,

  // Page 6
  `<img src="/images/dcds2014_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi bắt đầu đặt lệnh mua gom những cổ phiếu Blue-chips tốt nhất với giá sàn. Nhờ cấu trúc quỹ mở, mặc dù có lệnh rút vốn của khách hàng cá nhân hoảng loạn, nhưng dòng tiền nội bộ và sự đồng hành của các nhà đầu tư tổ chức nước ngoài (những người cực kỳ bình tĩnh trước rủi ro địa chính trị ngắn hạn) đã giúp DCDS có đủ hỏa lực để thực hiện những pha giải ngân xuất sắc.</p>
  <p>Chúng tôi giải thích trong thư gửi nhà đầu tư: "Bản chất của các căng thẳng địa chính trị thường tạo ra cú sốc ngắn hạn, nhưng lịch sử thế giới chứng minh rằng thị trường tài chính luôn có khả năng tự phục hồi nếu nền tảng kinh tế quốc gia vẫn vững vàng. Hãy giữ chặt ghế."</p>`,

  // Page 7
  `<img src="/images/dcds2014_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Và thực tế đã chứng minh sự tàn nhẫn của đám đông. Chỉ vài tuần sau, khi tình hình bắt đầu hạ nhiệt, thị trường bật tăng trở lại mạnh mẽ. Những người đã hoảng loạn cắt lỗ ở vùng đáy ngậm ngùi nhìn giá cổ phiếu vượt qua mức trước khi có sự kiện. Việc để cảm xúc dẫn dắt trong thị trường cận biên luôn phải trả một cái giá rất đắt.</p>
  <p>Nhờ việc chủ động mua vào lúc thị trường cực hoảng loạn, hiệu suất của quỹ DCDS trong nửa cuối năm 2014 đã vượt bậc. Những cổ phiếu mua giá sàn hồi tháng 5 trở thành những viên kim cương lấp lánh trong danh mục.</p>`,

  // Page 8
  `<img src="/images/dcds2014_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự kiện Biển Đông 2014 là một bài kiểm tra tâm lý kinh điển. Nó dạy cho tôi rằng, nghề quản lý quỹ không chỉ đòi hỏi kỹ năng đọc bảng cân đối kế toán. Quản lý quỹ, ở tầng mức cao nhất, chính là việc quản trị Cảm Xúc. Bạn phải đủ lạnh lùng để tách bạch giữa tiếng ồn chính trị và dòng tiền doanh nghiệp.</p>
  <p>Đứng nhìn bảng điện tử xanh mướt vào cuối năm, tôi cảm nhận được sự trưởng thành thực sự của quỹ mở DCDS. Chúng tôi không chỉ là những người đếm tiền, chúng tôi là những mỏ neo. Khi giông bão nổi lên, chức năng của mỏ neo không phải là nổi lềnh bềnh theo sóng, mà là chìm sâu xuống đáy, bám chặt vào nền tảng cơ bản, để giữ cho con tàu không bị lật úp.</p>`
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

export const dcds2014Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
