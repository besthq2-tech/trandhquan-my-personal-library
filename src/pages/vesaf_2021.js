const html = `
<section class="page active" id="page-vesaf-2021" data-route="/minds/vesaf-2021" data-title="Đỉnh cao danh vọng">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2021
    </div>
    <h1 style="margin-bottom: 8px;">Đỉnh cao danh vọng</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Một năm đi vào huyền thoại của VESAF với mức sinh lời +67,0%. Sự thăng hoa tuyệt đối khi những hạt giống gieo mầm từ trong đại dịch đồng loạt nở rộ.</p>

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
  <p>Năm 2021 mở ra một chương điên rồ nhất trong lịch sử thị trường chứng khoán Việt Nam. Với lãi suất tiền gửi giảm xuống đáy, hàng triệu "nhà đầu tư F0" đổ xô mở tài khoản. Thanh khoản thị trường bùng nổ lên mức tỷ USD mỗi phiên. VN-Index dễ dàng xuyên thủng mốc 1.200 rồi tiến thẳng lên 1.500 điểm.</p>
  <p>Mọi thứ đều tăng giá. Nhưng để tạo ra mức lợi suất vượt trội (Alpha) khủng khiếp, bạn cần nắm giữ đúng những "siêu cổ phiếu" (Super-stocks) của thập kỷ. Và may mắn thay, rổ danh mục của VESAF đang chứa đầy những viên kim cương đó.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ngôi sao sáng chói nhất của năm 2021 chính là <strong>Hóa Chất Đức Giang (DGC)</strong>. Cuộc khủng hoảng năng lượng tại Trung Quốc đã khiến nguồn cung phốt pho vàng toàn cầu sụt giảm nghiêm trọng. Giá phốt pho tăng theo phương thẳng đứng.</p>
  <p>DGC, với lợi thế tự chủ nguồn quặng apatit, chứng kiến biên lợi nhuận bùng nổ chưa từng có. Cổ phiếu DGC tăng trưởng bằng lần (multi-bagger), đóng góp khổng lồ vào sức bật NAV của quỹ VESAF.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự nhạy bén của đội ngũ quản lý tiếp tục được thể hiện qua quyết định đánh cược vào ngành Logistics, cụ thể là <strong>Vận tải biển Hải An (HAH)</strong>. Khi chuỗi cung ứng toàn cầu ách tắc, cước vận tải biển (Container rate) tăng phi mã lên mức không tưởng.</p>
  <p>HAH sở hữu đội tàu riêng và liên tục mở rộng công suất đúng ngay tâm bão giá cước. Khoản đầu tư này mang tính chiến thuật cực cao, đem lại một cú hích lơi nhuận khổng lồ trong khoảng thời gian rất ngắn.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Không thể bỏ qua "cỗ máy in tiền" vĩ đại nhất của năm 2021: Ngành Chứng khoán. Thanh khoản tỷ USD giúp lợi nhuận môi giới và margin của các công ty chứng khoán tăng trưởng bằng lần.</p>
  <p>VESAF đã nắm giữ chặt chẽ <strong>VNDirect (VND)</strong> và <strong>VCI (Bản Việt)</strong>. Quyết định nắm giữ (Hold) thay vì chốt lời non đã tối đa hóa hoàn toàn con sóng thần của ngành tài chính. VND trở thành một trong những cổ phiếu tăng giá mạnh nhất toàn thị trường.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự thăng hoa này cũng mang lại một áp lực vô hình cho quỹ. Vào nửa cuối năm 2021, dòng tiền F0 bắt đầu trở nên điên loạn. Bỏ qua mọi yếu tố cơ bản, dòng tiền đổ xô vào các cổ phiếu bất động sản rác (Penny và Mid-cap đầu cơ), kéo giá tăng gấp 3, gấp 4 lần trong vài tuần với hệ tư tưởng "Quỹ đất là Vua".</p>
  <p>Các Giám đốc quỹ tại VinaCapital phải đứng trước một lằn ranh cám dỗ: Tham gia vào cuộc chơi bơm thổi để đua NAV, hay kiên định với kỷ luật đầu tư giá trị?</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi đã chọn kỷ luật. VESAF kiên quyết đứng ngoài cơn điên của nhóm "Cổ phiếu A7" (ám chỉ một hiện tượng bơm thổi bất động sản bấy giờ). Chúng tôi âm thầm chốt lời một phần các mã chu kỳ đã quá nóng, và chuyển dịch dần sang các doanh nghiệp phòng thủ có tỷ suất cổ tức cao.</p>
  <p>Quyết định này có lúc khiến hiệu suất ngắn hạn của quỹ thua kém một số cổ phiếu nóng, nhưng nó chính là tấm khiên cứu rỗi sinh mạng của quỹ trong thảm họa năm 2022 sau này.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chốt năm 2021, VN-Index thiết lập mức tăng ấn tượng +35,7%.</p>
  <p>Nhưng Quỹ VESAF đã ghi danh vào ngôi đền huyền thoại với mức sinh lời không tưởng: <strong>+67,0%</strong>. Đây là hiệu suất cao nhất trong số toàn bộ các quỹ mở cổ phiếu tại Việt Nam năm đó. NAV của quỹ phình to, tiền từ nhà đầu tư cá nhân đổ vào ào ạt. VESAF chính thức được phong vương là "The Mid-Cap Kings".</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đứng trên đỉnh cao danh vọng, không khí ăn mừng ngập tràn. Nhưng đối với những người làm nghề lâu năm, "Euphoria" (Sự hưng phấn tột độ) luôn là tiếng chuông báo tử của một chu kỳ.</p>
  <p>Khi định giá thị trường bắt đầu ảo tưởng và các đợt phát hành trái phiếu doanh nghiệp diễn ra vô tội vạ, VinaCapital hiểu rằng một mùa đông khắc nghiệt sắp tràn về. Bữa tiệc nào rồi cũng đến lúc tàn, và năm 2022 sẽ là bài kiểm tra tàn khốc nhất để xem ai mới là người đang bơi trần khi thủy triều rút.</p>`
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

export const vesaf2021Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
