const html = `
<section class="page active" id="page-dcds-2011" data-route="/minds/dcds-2011" data-title="The Great Surgery & The Rebirth">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2011-2013
    </div>
    <h1 style="margin-bottom: 8px;">The Great Surgery & The Rebirth</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2011 - 2013. Mua ròng VNM, DHG, FPT và cuộc đại phẫu lịch sử chuyển đổi thành quỹ mở.</p>

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
  <p>Giai đoạn 2011 - 2013 không có những cú sập kinh hoàng trong một đêm, mà nó là một sự bào mòn dai dẳng. Căn bệnh nợ xấu (NPL) và sở hữu chéo đã ăn sâu vào hệ thống ngân hàng. Thị trường chứng khoán chán nản cùng cực. Thanh khoản teo tóp, dòng vốn ngoại rút lui.</p>
  <p>Nhưng trong sự chán nản đó, chúng tôi nhận ra một cơ hội chuyển dịch danh mục mang tính sống còn. Luận điểm đầu tư (Thesis) của giai đoạn này là: <strong>Phải tránh xa các tâm chấn nợ xấu (Ngân hàng, Bất động sản) và trú ẩn vào các doanh nghiệp Hàng tiêu dùng, Dược phẩm, Công nghệ có dòng tiền tự do (Free Cash Flow) dương và độc quyền trong ngách của họ</strong>.</p>`,

  // Page 2
  `<img src="/images/dcds2011_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Những thương vụ thành công và đóng vai trò "cứu tinh" cho quỹ trong giai đoạn này chính là <strong>Dược Hậu Giang (DHG)</strong>, <strong>Vinamilk (VNM)</strong> và <strong>FPT</strong>. Khi các doanh nghiệp khác chật vật xoay tiền trả lãi vay ngân hàng, thì VNM, DHG và FPT lại sở hữu một lượng tiền mặt khổng lồ. Họ trả cổ tức tiền mặt đều đặn, một thứ xa xỉ phẩm trong thời kỳ khủng hoảng thanh khoản.</p>
  <p>Nhờ chuyển trục quyết liệt sang các mã phòng thủ này, hiệu suất của quỹ bắt đầu ổn định trở lại dù thị trường chung vẫn đang ngụp lặn. Những viên gạch nền móng này về sau đã sinh lời rực rỡ khi nền kinh tế bước vào chu kỳ phục hồi.</p>`,

  // Page 3
  `<img src="/images/dcds2011_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tuy nhiên, dù chúng tôi có chọn cổ phiếu giỏi đến đâu, quỹ VF1 vẫn phải đối mặt với một "lỗ hổng" chí mạng về mặt cấu trúc. VF1 là một "quỹ đóng" (closed-end fund). Có nghĩa là chứng chỉ quỹ bị giao dịch trên sàn chứng khoán như một cổ phiếu bị giới hạn nguồn cung.</p>
  <p>Khi nhà đầu tư hoảng loạn muốn rút tiền, họ phải bán chứng chỉ quỹ trên sàn HOSE bằng mọi giá. Điều này tạo ra một hiện tượng đầy cay đắng: Thị giá chứng chỉ quỹ trên sàn bị chiết khấu (discount) tới hơn 30% so với Giá trị Tài sản Ròng (NAV) thực tế của danh mục.</p>`,

  // Page 4
  `<img src="/images/dcds2011_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Hãy tưởng tượng: Quỹ đang cầm trong tay 100 đồng giá trị cổ phiếu VNM, DHG, FPT, nhưng thị trường chỉ định giá toàn bộ quỹ ở mức 70 đồng. Sự bất công này khiến những cổ đông trung thành chịu thiệt hại nặng nề nếu họ cần bán ra.</p>
  <p>Lúc này, chúng tôi đưa ra một quyết định lịch sử: Phải chuyển đổi VF1 từ quỹ đóng thành "quỹ mở" (open-ended fund). Trong quỹ mở, nhà đầu tư có quyền mua hoặc bán lại chứng chỉ quỹ trực tiếp cho công ty quản lý quỹ theo đúng mức giá NAV thực tế. Xóa bỏ hoàn toàn mức chiết khấu 30% oan uổng kia.</p>`,

  // Page 5
  `<img src="/images/dcds2011_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ý tưởng thì tuyệt vời, nhưng thực thi là một cơn ác mộng pháp lý. Khái niệm "quỹ mở" ở Việt Nam lúc đó vẫn chỉ nằm trên giấy. Rất nhiều cuộc họp căng thẳng với Ủy ban Chứng khoán, các ngân hàng giám sát và bộ phận IT để xây dựng quy trình định giá NAV hàng ngày (thay vì hàng tuần) và chuẩn bị dòng tiền mặt thanh khoản sẵn sàng đáp ứng lệnh rút của khách hàng.</p>
  <p>Thách thức lớn nhất là tại Đại hội Cổ đông lịch sử năm 2013. Có nhiều ý kiến phản đối. Họ lo sợ nếu mở quỹ, tất cả nhà đầu tư sẽ ồ ạt rút vốn, quỹ sẽ sụp đổ. Chúng tôi phải giải thích từng rủi ro, vạch ra tầm nhìn dài hạn và cam kết danh mục đủ mạnh để đáp ứng thanh khoản.</p>`,

  // Page 6
  `<img src="/images/dcds2011_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tháng 10 năm 2013, VF1 chính thức hoàn tất quá trình chuyển đổi, đổi tên thành <strong>DCDS (Dragon Capital Dynamic Securities Fund)</strong>. Đây là một cột mốc đánh dấu sự trưởng thành của ngành quản lý quỹ Việt Nam: Quỹ đại chúng đầu tiên chuyển đổi thành công từ quỹ đóng sang quỹ mở.</p>
  <p>Ngay trong tuần đầu tiên hoạt động dưới hình thức mới, áp lực rút vốn đổ về. Nhưng nhờ danh mục có tính thanh khoản cao (những cổ phiếu Blue-chips đã cơ cấu từ trước), DCDS đáp ứng trọn vẹn 100% lệnh rút vốn theo đúng NAV. Không có sự sụp đổ nào. Chỉ có sự minh bạch và công bằng được lập lại.</p>`,

  // Page 7
  `<img src="/images/dcds2011_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhờ mức chiết khấu bị xóa bỏ hoàn toàn ngay lập tức, tài sản thực tế của những nhà đầu tư tiếp tục gắn bó với quỹ đã tăng lên ngay lập tức so với thị giá cũ trên sàn. Hiệu suất của DCDS trong giai đoạn này bắt đầu ghi nhận đà tăng trưởng vững chắc nhờ vào sự phục hồi của VNM, FPT và DHG.</p>
  <p>Cùng thời điểm đó, trên bình diện vĩ mô, Chính phủ thành lập VAMC để xử lý "cục máu đông" nợ xấu ngân hàng. Cuộc đại phẫu thuật kép – cả ở tầm quốc gia lẫn trong lòng cấu trúc quỹ DCDS – đã hoàn tất. Phần hoại tử đã bị cắt bỏ.</p>`,

  // Page 8
  `<img src="/images/dcds2011_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Giai đoạn 2011-2013 dạy cho tôi một bài học quan trọng: Trong tài chính, cấu trúc và pháp lý đôi khi quan trọng không kém gì việc chọn đúng cổ phiếu. Một danh mục tốt đặt trong một cấu trúc quỹ đóng tồi tệ (bị discount 30%) vẫn sẽ mang lại sự đau khổ cho khách hàng.</p>
  <p>Cuối năm 2013, nhìn bảng định giá NAV hàng ngày được tự động cập nhật, tôi biết rằng DCDS đã cởi bỏ được chiếc áo chật hẹp nhất của mình. Quỹ mở là một sân chơi minh bạch, nơi bạn không thể trốn tránh bằng những báo cáo đóng hộp. Giờ đây, DCDS đã thực sự sẵn sàng để vươn ra biển lớn, đón sóng cho thập kỷ bùng nổ tiếp theo của thị trường cận biên Việt Nam.</p>`
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
