const html = `
<section class="page active" id="page-vesaf-2023" data-route="/minds/vesaf-2023" data-title="The V-Shape Rebound">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2023
    </div>
    <h1 style="margin-bottom: 8px;">The V-Shape Rebound</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2023. Ngân hàng Nhà nước hạ lãi suất cứu nền kinh tế. VESAF hồi phục thần tốc +30,9%, bỏ xa đà tăng của VN-Index nhờ chiến lược đi trước dòng tiền.</p>

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

let pagesRaw = [
  `<img src="/images/dcds1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nền kinh tế Việt Nam bước vào năm 2023 với những vết thương chằng chịt từ cuộc khủng hoảng nợ trái phiếu. Các doanh nghiệp "chết lâm sàng" vì không tiếp cận được vốn tín dụng. Nhưng trong nguy luôn có cơ. Đối với những quỹ quản lý tài sản lớn như VESAF, sự bĩ cực của thị trường chính là tiếng còi báo hiệu chân sóng.</p>
  <p>Tháng 3/2023, Ngân hàng Nhà nước (NHNN) thực hiện một bước đi lịch sử: Đi ngược lại hoàn toàn xu hướng thắt chặt của Mỹ để hạ lãi suất điều hành. Tín hiệu vĩ mô đã rõ ràng: Chính phủ chọn "cứu tăng trưởng" thay vì "bảo vệ tỷ giá" bằng mọi giá.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tại VinaCapital, bộ phận phân tích lập tức phát lệnh tấn công. Luận điểm đầu tư được định hình: "Lãi suất giảm là kẻ thù của tiền gửi, nhưng là bạn thân của chứng khoán". Nhóm ngành nhạy cảm nhất với lãi suất là Chứng khoán và Bất động sản Khu công nghiệp.</p>
  <p>VESAF tăng mạnh tỷ trọng ở <strong>VCI (Chứng khoán Vietcap)</strong> và <strong>SSI</strong>. Đây là những doanh nghiệp hàng đầu trong mảng môi giới tổ chức và tự doanh. Khi mặt bằng lãi suất giảm, thanh khoản thị trường sẽ hồi phục, kéo theo định giá của nhóm chứng khoán được định giá lại (Re-rating) lên mức cao hơn.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Một vũ khí bí mật khác của VESAF trong năm 2023 là nhóm <strong>Bất động sản Khu công nghiệp (BĐS KCN)</strong>. Trong khi thị trường nhà ở dân dụng đóng băng vì khủng hoảng, BĐS KCN lại hái ra tiền nhờ dòng vốn FDI khổng lồ chuyển dịch từ Trung Quốc sang Việt Nam.</p>
  <p>Chúng tôi tập trung vào <strong>IDC (Idico)</strong> và <strong>SZC (Sonadezi Châu Đức)</strong>. Các doanh nghiệp này sở hữu quỹ đất sẵn sàng cho thuê khổng lồ ở phía Nam, biên lợi nhuận gộp lên tới 40-50%, và trả cổ tức bằng tiền mặt cực kỳ đều đặn.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thực tế năm 2023 đã diễn ra đúng như kịch bản của chúng tôi. Lãi suất tiền gửi từ mức 10%/năm lao dốc không phanh xuống còn 5%/năm. Dòng tiền nhàn rỗi trong dân cư không còn lựa chọn nào khác ngoài việc quay trở lại kênh chứng khoán.</p>
  <p>VN-Index từ đáy 900 điểm lầm lũi bò lên vùng 1.100 - 1.200 điểm. Các cổ phiếu trong danh mục của VESAF như VCI, IDC tăng giá từ 50% đến 80%, đóng góp khổng lồ vào đà phục hồi của quỹ.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Một điểm nhấn đặc biệt của năm 2023 là những cú "Flash Crash" (sập mạnh trong phiên) liên quan đến sự kiện hút tín phiếu của NHNN vào tháng 9 để điều tiết tỷ giá. Rất nhiều nhà đầu tư cá nhân hoảng loạn bán tháo vì sợ lặp lại kịch bản sập hầm của năm 2022.</p>
  <p>Nhưng quỹ VESAF đã phản ứng hoàn toàn khác. Với kinh nghiệm dày dặn, chúng tôi nhận định đây chỉ là nghiệp vụ điều tiết thanh khoản ngắn hạn, không phải là sự đảo chiều chính sách. Thay vì bán tháo, VESAF tận dụng những phiên giảm 30-40 điểm để gom thêm hàng giá rẻ.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Vào những tháng cuối năm 2023, chúng tôi cũng bắt đầu gia tăng tỷ trọng ở nhóm Xuất khẩu, đặc biệt là Thủy sản và Dệt may, với kỳ vọng chu kỳ tồn kho tại Mỹ và châu Âu đã chạm đáy. Các mã như <strong>VHC (Vĩnh Hoàn)</strong> được đưa vào tầm ngắm, đánh dấu sự dịch chuyển chiến lược chuẩn bị cho năm 2024.</p>
  <p>Năng lực dự báo và đi trước dòng tiền (Front-running) đã trở thành thương hiệu của VESAF. Quỹ luôn mua khi tin xấu tràn ngập, và thong thả chốt lời khi tin tốt xuất hiện trên mặt báo.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2023, trong khi VN-Index chỉ phục hồi ở mức khiêm tốn <strong>+12,2%</strong>, quỹ VESAF đã ghi nhận mức lợi nhuận nhảy vọt <strong>+30,9%</strong>.</p>
  <p>Sự chênh lệch hiệu suất khổng lồ này (Alpha xấp xỉ +18,7%) đã chứng minh một điều: Đầu tư thụ động (ôm index) trong một thị trường nhiễu động không mang lại hiệu quả cao bằng chiến lược đầu tư chủ động (Active Management) của các chuyên gia săn Mid-Cap.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2023 khép lại với những tín hiệu phục hồi vĩ mô rõ nét. Chuyến thăm lịch sử của Tổng thống Mỹ Joe Biden vào tháng 9 đã nâng tầm quan hệ Việt-Mỹ, mở ra làn sóng đầu tư vào Công nghệ Bán dẫn và Trí tuệ Nhân tạo (AI).</p>
  <p>Một chu kỳ kinh tế mới đang thành hình. Và VESAF, với danh mục được tinh chỉnh sắc bén, đã sẵn sàng để cất cánh trong năm 2024 - năm của những Hào hào Kinh tế và Kỷ nguyên Số.</p>`
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

export const vesaf2023Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
