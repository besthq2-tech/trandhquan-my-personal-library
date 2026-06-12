const html = `
<section class="page active" id="page-dcds-2020" data-route="/minds/dcds-2020" data-title="The Black Swan">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2020
    </div>
    <h1 style="margin-bottom: 8px;">The Black Swan</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2020. Thế giới phong tỏa, sự hoảng loạn tột độ đẩy VN-Index rơi tự do. Bài học về sự tham lam khi người khác sợ hãi.</p>

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

let dcdsPagesRaw = [
  `<img src="/images/dcds1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tháng 3 năm 2020, một đám mây đen kịt bao phủ toàn cầu mang tên COVID-19. Những đường phố sầm uất tại TP.HCM trở nên vắng lặng đến rợn người. Trên bảng điện tử, màu xanh lơ (giảm sàn) trải dài từ mã này sang mã khác. VN-Index cắm đầu rơi thẳng đứng, có lúc chạm mốc 650 điểm - mức thấp nhất trong nhiều năm.</p>
  <p>Sự hoảng loạn (panic) tột độ lan rộng. Cổ phiếu bị ném ra cửa sổ không cần biết định giá hay nền tảng doanh nghiệp. Trong căn phòng giao dịch của DCDS, không khí đặc quánh lại. Chúng tôi đang chứng kiến một "Thiên nga đen" thực sự, thứ mà Nassim Taleb từng miêu tả.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ban đầu, quỹ cũng không tránh khỏi những cú vấp. Chịu áp lực rút vốn và nỗi sợ hãi về sự sụp đổ kinh tế toàn cầu, chúng tôi đã buộc phải cắt lỗ một phần danh mục ở vùng đáy của tháng 3. Đó là một sai lầm đắt giá sinh ra từ nỗi sợ hãi tột cùng.</p>
  <p>Tuy nhiên, ngay sau đó, một sự kiện vô tiền khoáng hậu đã xảy ra: Cục Dự trữ Liên bang Mỹ (Fed) cắt giảm lãi suất về 0% và tung ra các gói nới lỏng định lượng (QE) không giới hạn. Tiền được bơm ồ ạt vào hệ thống tài chính toàn cầu để cứu vãn sự sụp đổ.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhận ra dòng tiền khổng lồ này, chúng tôi lập tức xoay trục. Luận điểm đầu tư được thiết lập lại: "Đây không phải là ngày tận thế, đây là cơ hội mua sắm cả thập kỷ mới có một lần". Chúng tôi bắt đầu giải ngân quyết liệt vào các doanh nghiệp đầu ngành với mức giá rẻ mạt chưa từng thấy.</p>
  <p>Trọng tâm của đợt bắt đáy này là <strong>Tập đoàn Hòa Phát (HPG)</strong>. Luận điểm của chúng tôi: Để phục hồi kinh tế hậu phong tỏa, Chính phủ chắc chắn sẽ đẩy mạnh đầu tư công, và thép là vật liệu không thể thiếu. Hơn nữa, lò cao Dung Quất của HPG sắp đi vào hoạt động, giúp họ thâu tóm thị phần ngay khi đối thủ đang thoi thóp.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đồng thời, chúng tôi mạnh tay gom <strong>Vietcombank (VCB)</strong> và <strong>FPT</strong>. VCB với chất lượng tài sản số một sẽ chống chọi tốt nhất với nợ xấu do dịch bệnh. Trong khi đó, FPT trở thành doanh nghiệp "miễn nhiễm" với COVID-19 khi nhu cầu số hóa (Digital Transformation) bùng nổ mạnh mẽ trong thời kỳ Work-from-Home.</p>
  <p>Cú đảo chiều hình chữ V của thị trường chứng khoán vào nửa cuối năm 2020 đã minh chứng cho quyết định dũng cảm đó. HPG tăng giá phi mã, kéo theo đà tăng tốc của toàn bộ danh mục DCDS. Dù khởi đầu năm 2020 đầy giông bão và sợ hãi, chúng tôi kết năm với mức tăng trưởng NAV vượt trội, bỏ xa mức hồi phục của VN-Index.</p>`,
  
  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bên cạnh HPG, một "con gà đẻ trứng vàng" khác của năm 2020 là nhóm Cổ phiếu Ngân hàng. Nhờ chính sách giãn hoãn nợ của Ngân hàng Nhà nước, rủi ro nợ xấu được đẩy lùi về tương lai, trong khi chi phí vốn (CASA) của các ngân hàng sụt giảm mạnh do lãi suất huy động chạm đáy.</p>
  <p>DCDS đã thu lời lớn nhờ tỷ trọng cao ở các ngân hàng quốc doanh (VCB) và các ngân hàng tư nhân năng động (như TCB, MBB). Biên lãi thuần (NIM) của nhóm này mở rộng kỷ lục, đẩy lợi nhuận lên những tầm cao chưa từng có.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Cuối năm 2020, một hiện tượng kỳ lạ xuất hiện trên thị trường: Hàng vạn tài khoản chứng khoán mở mới mỗi tháng. Tiền nhàn rỗi trong dân cư, do không thể kinh doanh sản xuất vì giãn cách xã hội, đã ùn ùn đổ vào chứng khoán.</p>
  <p>Một lớp nhà đầu tư mới toanh - thường được gọi là các nhà đầu tư "F0" - bắt đầu làm chủ cuộc chơi. Họ không quan tâm đến phân tích định giá phức tạp; họ mua bằng niềm tin và sự hưng phấn của dòng tiền rẻ. Sự sôi động này đẩy thanh khoản thị trường lên mức tỷ đô mỗi phiên.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tổng kết năm 2020, NAV của quỹ DCDS lật ngược thế cờ một cách ngoạn mục. Từ đáy sâu âm nặng trong tháng 3, NAV đã kết năm với mức tăng trưởng dương mạnh mẽ. Chúng tôi đã thành công trong việc "tham lam khi người khác sợ hãi".</p>
  <p>Bài học lớn nhất của năm 2020 không phải là về các mô hình tài chính, mà là về tâm lý học hành vi. Khi toàn bộ thế giới dường như sắp sụp đổ, việc giữ cái đầu lạnh và bám sát các chỉ số vĩ mô (như cung tiền từ ngân hàng trung ương) quan trọng hơn bất kỳ phân tích vi mô nào.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2020 khép lại, để lại phía sau một nền kinh tế thực đầy vết thương nhưng một thị trường tài chính đang trong cơn say của thanh khoản khổng lồ. Chúng tôi biết rằng, bữa tiệc tiền rẻ này mới chỉ bắt đầu.</p>
  <p>Với dòng tiền F0 đang cuồn cuộn chảy và mặt bằng lãi suất duy trì ở mức thấp kỷ lục, năm 2021 hứa hẹn sẽ là một trong những năm điên rồ nhất, bùng nổ nhất trong lịch sử chứng khoán Việt Nam. Và DCDS đã sẵn sàng hành trang để bước vào "Kỷ nguyên F0".</p>`
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

export const dcds2020Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
