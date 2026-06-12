const html = `
<section class="page active" id="page-dcds-2004" data-route="/minds/dcds-2004" data-title="The Genesis">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2004
    </div>
    <h1 style="margin-bottom: 8px;">The Genesis</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2004. Ý tưởng điên rồ về một quỹ đại chúng đầu tiên, và hành trình đi nhặt những "viên kim cương" bị lãng quên với giá rẻ mạt.</p>

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
  `<img src="/images/dcds1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2004. Bầu không khí ngột ngạt của một buổi chiều tháng Tư ở trung tâm Sài Gòn dường như bị đè nén thêm bởi những xấp hồ sơ pháp lý dày cộp đặt trên bàn làm việc của tôi. Thị trường chứng khoán Việt Nam lúc bấy giờ, thật thà mà nói, giống một khu chợ chiều hơn là một trung tâm tài chính.</p>
  <p>Chỉ số VN-Index lẹt đẹt dưới 250 điểm. Cả sàn giao dịch chỉ có chưa tới hai chục công ty niêm yết. Thanh khoản lèo tèo, vài tỷ đồng một phiên đã được xem là "sôi động". Trong mắt các nhà đầu tư tổ chức nước ngoài, đây là một thị trường không thể đầu tư vì quy mô quá nhỏ và luật chơi chưa rõ ràng.</p>`,

  // Page 2
  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng Dominic Scriven không nghĩ vậy. Giữa sự hoài nghi của tất cả mọi người, Dragon Capital quyết định thành lập một thứ chưa từng có tiền lệ: <strong>Quỹ Đầu tư Chứng khoán Việt Nam (VF1)</strong>, tiền thân của quỹ mở DCDS ngày nay. Nó là quỹ đại chúng đầu tiên, là bước đi liều lĩnh để khai phá một mỏ vàng đang bị che khuất bởi sự thiếu thanh khoản.</p>
  <p>Việc đi xin giấy phép giống như việc cố gắng giải thích khái niệm về "máy bay" cho những người mới chỉ biết đi xe đạp. Vùng trũng pháp lý khiến chúng tôi phải tự tay viết nên những quy tắc đầu tiên cùng với Ủy ban Chứng khoán Nhà nước. Khi đợt phát hành lần đầu (IPO) thành công thu về <strong>300 tỷ đồng</strong> (khoảng 19 triệu USD thời bấy giờ), chúng tôi biết mình đã mở ra một kỷ nguyên mới.</p>`,

  // Page 3
  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Có trong tay 300 tỷ đồng, bài toán lúc này là: Mua gì trong cái chợ chỉ có 20 mặt hàng? Luận điểm đầu tư (Investment Thesis) của chúng tôi trong giai đoạn sơ khai này cực kỳ đơn giản nhưng mạnh mẽ: <strong>Mua những doanh nghiệp nhà nước cổ phần hóa đầu tiên, đang thống lĩnh thị trường với lợi thế độc quyền, và bị định giá rẻ mạt đến mức phi lý</strong>.</p>
  <p>Người dân lúc đó vẫn thích giữ vàng hoặc gửi tiết kiệm lãi suất cao. Không ai quan tâm đến cổ phiếu. Hệ quả là, những viên kim cương thô của nền kinh tế đang bị ném ra vỉa hè với mức P/E (Hệ số giá trên thu nhập) chỉ vỏn vẹn <strong>5 đến 6 lần</strong>.</p>`,

  // Page 4
  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi nhắm thẳng vào Cơ điện lạnh (REE) và Cáp và Vật liệu Viễn thông (SAM) - hai anh cả của thị trường niêm yết. Đây không phải là những công ty khởi nghiệp mông lung. Họ là những cỗ máy tạo tiền mặt (cash cow) đã khẳng định vị thế. Khi bạn mua REE hay SAM ở định giá P/E 5x, tức là lợi suất thu nhập (Earnings Yield) lên tới 20%, cao hơn bất kỳ mức lãi suất ngân hàng nào.</p>
  <p>Việc gom hàng diễn ra âm thầm nhưng quyết liệt. Thanh khoản thấp là một trở ngại, nhưng nó cũng là lớp khiên bảo vệ chúng tôi khỏi sự cạnh tranh của các quỹ ngoại khổng lồ chưa thèm để mắt tới Việt Nam.</p>`,

  // Page 5
  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự thành công vang dội nhất của giai đoạn này, tuy nhiên, không nằm trên sàn niêm yết mà nằm ở <strong>thị trường chợ đen (OTC)</strong>. Chúng tôi nhận ra rằng những tài sản tốt nhất của Việt Nam vẫn chưa lên sàn. Một trong số đó là <strong>Ngân hàng TMCP Sài Gòn Thương Tín (Sacombank - STB)</strong>.</p>
  <p>Lúc đó, mua cổ phiếu STB có nghĩa là bạn phải mang từng bao tải tiền mặt đến quán cà phê, ký giấy tay chuyển nhượng cổ phần với các cổ đông cá nhân. Không có sàn giao dịch điện tử, không có số hóa. Nhưng chúng tôi biết mình đang mua một đế chế tài chính bán lẻ tương lai với giá của một công ty vô danh. Việc thâu tóm STB trên thị trường OTC sau này trở thành một trong những thương vụ siêu lợi nhuận huyền thoại của quỹ.</p>`,

  // Page 6
  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tất nhiên, làm kẻ khai hoang thì không tránh khỏi những sai lầm. Khát khao đa dạng hóa danh mục khiến chúng tôi đôi khi dễ dãi với những doanh nghiệp vừa và nhỏ, có quản trị công ty (corporate governance) kém minh bạch. Những công ty này có báo cáo tài chính rất đẹp, nhưng dòng tiền thực tế lại không hề tồn tại.</p>
  <p>Đó là bài học vỡ lòng đắt giá về "chất lượng lợi nhuận". Lợi nhuận ghi sổ (Accounting Profit) trong giai đoạn thị trường sơ khai thường bị thổi phồng bởi các bút toán. Chúng tôi nhận ra rằng, ở thị trường cận biên, sự trung thực của Ban điều hành quan trọng hơn mọi chỉ số định giá rẻ tiền.</p>`,

  // Page 7
  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khép lại năm 2004, Quỹ VF1 bắt đầu định hình được bộ khung danh mục. Với mức giá trị tài sản ròng (NAV) khởi điểm là <strong>10.000 VNĐ/chứng chỉ quỹ</strong>, chúng tôi kết thúc năm với mức lợi nhuận tương đối khiêm tốn nhưng cực kỳ vững chắc.</p>
  <p>Cái được lớn nhất không nằm ở con số tăng trưởng NAV ngắn hạn, mà là chúng tôi đã hoàn tất việc đặt móng, tích lũy xong một rổ những doanh nghiệp hàng đầu với giá rẻ mạt, sẵn sàng cho một cơn địa chấn sắp diễn ra.</p>`,

  // Page 8
  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Những tiếng cười nhạo về "vùng trũng thanh khoản" hay "chợ chiều" năm 2004 đã lùi vào dĩ vãng. Đứng trên ban công văn phòng, nhìn xuống dòng người tấp nập của Sài Gòn, tôi biết rằng dòng tiền khổng lồ đang nằm dưới các nệm giường và trong hầm vàng của người dân sắp sửa được đánh thức.</p>
  <p>Chúng tôi đã mua xong vé hạng nhất khi con tàu mới chỉ đang nổ máy rời ga. Không ai trong chúng tôi lúc bấy giờ có thể tưởng tượng được rằng, chỉ một năm sau đó, thị trường chứng khoán Việt Nam sẽ bước vào một trong những siêu bong bóng (Mega Bubble) điên rồ nhất trong lịch sử tài chính thế giới.</p>`
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

export const dcds2004Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
