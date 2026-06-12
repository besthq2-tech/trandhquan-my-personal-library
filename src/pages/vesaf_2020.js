const html = `
<section class="page active" id="page-vesaf-2020" data-route="/minds/vesaf-2020" data-title="The Pandemic Pivot">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2020
    </div>
    <h1 style="margin-bottom: 8px;">The Pandemic Pivot</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2020. Đại dịch bùng nổ, thị trường sụp đổ. VESAF thực hiện cú xoay trục quyết liệt, ôm trọn những siêu cổ phiếu như DGC và FPT.</p>

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
  <p>Tháng 3 năm 2020. Đường phố vắng lặng. Một màu xám xịt bao phủ khắp nơi khi lệnh phong tỏa (Lockdown) có hiệu lực toàn cầu. Trên màn hình máy tính, màu xanh lơ của những lệnh bán tháo nhấp nháy không ngừng. VN-Index cắm đầu xuyên thủng mọi ngưỡng hỗ trợ, tạo ra hố sâu hoảng loạn tồi tệ nhất kể từ cuộc khủng hoảng tài chính 2008.</p>
  <p>Những tiếng điện thoại đổ chuông liên tục tại văn phòng VinaCapital. Lệnh rút vốn xuất hiện. Nhưng ở cương vị người quản lý quỹ, đây chính là khoảnh khắc mà chúng tôi được trả tiền để làm: Giữ cái đầu lạnh nhất khi cả thế giới đang cháy.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi nhận ra rằng, dù con người phải ở trong nhà, nhưng các nhà máy sản xuất hàng thiết yếu không thể dừng lại. Đại dịch làm gián đoạn chuỗi cung ứng toàn cầu, tạo ra sự khan hiếm cục bộ. Và ai sở hữu nguồn cung, người đó sẽ chiến thắng.</p>
  <p>Cú "Pivot" (Xoay trục) lớn nhất lịch sử VESAF bắt đầu. Chúng tôi chuyển hướng mạnh mẽ sang các doanh nghiệp sản xuất và xuất khẩu nguyên vật liệu. Một cái tên tỏa sáng rực rỡ trong tầm ngắm của chúng tôi: <strong>Hóa chất Đức Giang (DGC)</strong>.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>DGC sở hữu công nghệ lõi sản xuất Phốt pho vàng - một nguyên liệu cực kỳ quan trọng cho chất bán dẫn và pin xe điện. Khi Trung Quốc cắt giảm sản lượng phốt pho vàng vì lý do môi trường, DGC gần như thâu tóm thị phần xuất khẩu sang châu Á. Sự đứt gãy chuỗi cung ứng đẩy giá bán lên mức không tưởng.</p>
  <p>VESAF giải ngân quyết liệt vào DGC. Chúng tôi không mua một cổ phiếu hóa chất, chúng tôi mua một "người hưởng lợi độc quyền" từ sự hỗn loạn của đại dịch. Quyết định này đã đặt nền móng cho mức sinh lời phi thường trong suốt 2 năm sau đó.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Cùng lúc đó, <strong>FPT</strong> một lần nữa chứng minh tại sao nó lại là hạt nhân bất khả xâm phạm trong danh mục VESAF. Khi cả thế giới phải làm việc tại nhà, nhu cầu chuyển đổi số (Digital Transformation) bùng nổ. FPT ký được hàng loạt hợp đồng triệu đô với khách hàng Nhật và Mỹ ngay trong tâm dịch.</p>
  <p>Chúng tôi mạnh tay mua thêm FPT ở những phiên sập sàn hoảng loạn của tháng 3. Giá vốn của VESAF tại FPT được kéo xuống mức rẻ mạt, tạo ra một biên an toàn (Margin of Safety) khổng lồ.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Một điểm sáng khác trong chiến lược linh hoạt của chúng tôi là việc bắt đúng mạch phục hồi của dòng tiền giá rẻ. Khi Fed bơm thanh khoản không giới hạn, tiền nhàn rỗi trong dân đổ xô vào chứng khoán. VESAF lập tức gia tăng vị thế ở các cổ phiếu được hưởng lợi kép từ lãi suất thấp và cầu tiêu dùng nội địa, trong đó có <strong>MWG</strong> và <strong>HPG</strong>.</p>
  <p>Nhờ quy mô linh hoạt, quỹ luân chuyển dòng vốn giữa nhóm xuất khẩu (DGC) và nhóm hưởng lợi dòng tiền nội (HPG) một cách nhịp nhàng.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tuy nhiên, năm 2020 không dành cho những người yếu bóng vía. Đã có những thời điểm danh mục quỹ âm nặng. Rất nhiều nhà đầu tư cá nhân tự hoảng loạn cắt lỗ ở đúng vùng đáy. Việc giao tiếp và giữ chân nhà đầu tư của VESAF trở nên khó khăn hơn bao giờ hết.</p>
  <p>Chúng tôi kiên định tổ chức các buổi hội thảo trực tuyến, lặp đi lặp lại một thông điệp: "Đừng bán những tài sản tốt nhất của bạn chỉ vì một con virus. Giá trị nội tại của doanh nghiệp không thay đổi trong dài hạn".</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thời gian đã trả lời. Khi vắc-xin bắt đầu được thử nghiệm thành công và thanh khoản ngập tràn hệ thống, VN-Index hồi phục hình chữ V thần tốc. Các cổ phiếu "Hidden Gems" của VESAF không chỉ phục hồi mà còn phá đỉnh lịch sử.</p>
  <p>Năm 2020 kết thúc đầy kịch tính, quỹ VESAF ghi nhận hiệu suất tăng trưởng <strong>+25,6%</strong>. Lật ngược thế cờ từ vực thẳm tháng 3, đây là minh chứng hùng hồn nhất cho nghệ thuật Stock-picking (chọn cổ phiếu) của đội ngũ VinaCapital.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Những bông hoa giấy cuối năm 2020 đã rơi, nhưng chúng tôi biết bữa tiệc thực sự bây giờ mới bắt đầu. Tiền trong dân cư đang dồi dào chưa từng thấy. Khái niệm "nhà đầu tư F0" xuất hiện với tần suất dày đặc trên truyền thông.</p>
  <p>Năm 2021 đang tới, hứa hẹn sẽ giải phóng một cơn sóng thần vĩ đại nhất lịch sử chứng khoán Việt Nam. Và VESAF, với danh mục đã nạp đầy những quả bom nguyên tử như DGC và FPT, đã sẵn sàng để trở thành quỹ đầu tư có hiệu suất khủng khiếp nhất thị trường.</p>`
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

export const vesaf2020Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
