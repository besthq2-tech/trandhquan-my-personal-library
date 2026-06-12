const html = `
<section class="page active" id="page-vesaf-2025" data-route="/minds/vesaf-2025" data-title="Nỗi đau của sự lỡ nhịp">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2025
    </div>
    <h1 style="margin-bottom: 8px;">Nỗi đau của sự lỡ nhịp</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Một năm tồi tệ (Underperform) nhất trong lịch sử khi VN-Index được kéo lên bằng những trụ cột vốn hóa lớn mà VESAF không nắm giữ. Sự dằn vặt giữa kỷ luật và hiệu suất.</p>

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
  <p>Lịch sử thị trường tài chính chỉ ra rằng: Cách nhanh nhất để hủy hoại danh tiếng của một nhà quản lý quỹ xuất sắc không phải là làm mất tiền, mà là để cho thị trường tăng giá vượt qua mình mà mình không được chia phần (Underperformance). Và năm 2025 chính xác là một nỗi đau như vậy đối với VESAF.</p>
  <p>Bức tranh vĩ mô năm 2025 chứng kiến dòng tiền đổ dồn vào một nhóm rổ cổ phiếu vô cùng đặc thù: Các tập đoàn cấu trúc Holding phức tạp và các Blue-chip vốn hóa khổng lồ. VN-Index liên tục thăng hoa, màu xanh ngập tràn bảng điện.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đứng đầu sóng gió là nhóm cổ phiếu nhà <strong>Vingroup (VIC, VHM)</strong> và tập đoàn <strong>GELEX (GEX)</strong>. Bằng những câu chuyện về tái cấu trúc và IPO công ty con, các mã cổ phiếu này ghi nhận mức tăng từ 25% đến hơn 40% chỉ trong vài tháng ngắn ngủi.</p>
  <p>Do tỷ trọng vốn hóa của nhóm này (đặc biệt là họ Vin) chiếm tới gần 18% của toàn bộ VN-Index, động lực kéo trụ này đã đẩy điểm số của Index bay cao vút. Một cảm giác FOMO (Sợ bỏ lỡ) tột độ lan tỏa khắp ngóc ngách của thị trường.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng bên trong VESAF, là sự im lặng đầy ức chế. Theo điều lệ quỹ và triết lý đầu tư khắt khe của VinaCapital, quỹ ưu tiên các doanh nghiệp có mô hình kinh doanh cốt lõi đơn giản, rõ ràng, và tránh xa các tập đoàn có cấu trúc nợ chéo phức tạp hoặc độ pha loãng cổ đông cao.</p>
  <p>Hệ quả là: VESAF hoàn toàn KHÔNG nắm giữ (hoặc nắm giữ tỷ trọng cực thấp) các mã cổ phiếu đang "làm mưa làm gió" kia. Quỹ vẫn kiên định ôm những FPT, GMD, KDH - những cổ phiếu tuyệt vời nhưng đang tạm nghỉ ngơi, lình xình đi ngang.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Mỗi tháng trôi qua là một bản Factsheet (Báo cáo tháng) đỏ mặt. Tháng 5/2025, VN-Index tăng gần 9%, trong khi NAV của quỹ lẹt đẹt ở mức 6%. Càng về cuối năm, khoảng cách (Tracking error) càng bị nới rộng một cách đau đớn.</p>
  <p>Áp lực đè nặng lên các Giám đốc danh mục. Nhà đầu tư cá nhân bắt đầu chất vấn: "Tại sao quỹ lại cầm những mã đi ngang trong khi ngoài kia người ta ăn bằng lần?". Làn sóng rút vốn (Redemption) râm ran xuất hiện.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự dằn vặt lên đến tột đỉnh trong các cuộc họp giao ban sáng thứ Hai. Có những ý kiến yêu cầu quỹ phải "linh hoạt" bẻ cong nguyên tắc, giải ngân một phần vào nhóm đầu cơ kéo trụ để cứu vãn tỷ suất lợi nhuận (Window dressing). Nhưng Ban giám đốc đầu tư của VinaCapital đã nói "KHÔNG".</p>
  <p>"Kỷ luật là thứ duy nhất phân biệt chúng ta với một tay cờ bạc. Nếu cấu trúc doanh nghiệp đó không vượt qua được bộ lọc rủi ro, chúng ta chấp nhận Underperform." - Đó là quyết định đẫm máu nhưng cần thiết.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng sự ức chế này cũng làm lộ ra một điểm nghẽn tử huyệt của quỹ: "Không gian Mid-Cap". Khi NAV của quỹ đã phình to lên mức hàng nghìn tỷ đồng sau những chu kỳ thành công trước, việc luồn lách mua bán ở nhóm vốn hóa vừa trở nên bất khả thi.</p>
  <p>Nếu bạn cầm một lượng tiền quá lớn và chỉ được phép đầu tư vào một cái ao (Mid-Cap), bạn sẽ không thể bơi. Và khi cái ao đó không đón được dòng tiền vĩ mô, quỹ sẽ bị thị trường chung (Index) đè bẹp.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2025 khép lại trong sự ê chề. Quỹ VESAF chỉ đạt mức tăng trưởng vỏn vẹn <strong>+6,3%</strong>.</p>
  <p>Con số này bị VN-Index bỏ xa tít tắp ở phía trước. Từ vị thế "The Mid-Cap Kings", quỹ bỗng trở thành tâm điểm của sự hoài nghi. Cảm giác bất lực khi nhìn thấy tiền trôi qua kẽ tay mà không thể với lấy, chỉ vì phải bám giữ lấy những nguyên lý sách vở rập khuôn.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thất bại của năm 2025 không phải là một chu kỳ xui xẻo, mà là hồi chuông cảnh báo về giới hạn mô hình. Thị trường chứng khoán Việt Nam đã trưởng thành, vốn hóa phình to, luật chơi đã khác. Những mánh lới "ăn chênh lệch quỹ ngoại" (FOL) hay săn hàng Mid-cap không còn đủ sức gánh vác tương lai.</p>
  <p>Ban lãnh đạo VinaCapital hiểu rằng: Để tồn tại trong một thập kỷ mới, VESAF phải tự đập bỏ đi chính bản ngã của mình. Một cuộc lột xác đau đớn, một cú xoay trục lịch sử đã được bí mật lên kế hoạch cho năm 2026.</p>`
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

export const vesaf2025Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
