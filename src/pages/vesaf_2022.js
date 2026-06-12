const html = `
<section class="page active" id="page-vesaf-2022" data-route="/minds/vesaf-2022" data-title="The Great Washout">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2022
    </div>
    <h1 style="margin-bottom: 8px;">The Great Washout</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2022. Fed tăng lãi suất bạo lực, bom nợ trái phiếu phát nổ. Một cú giũ bỏ tàn khốc của thị trường, và bài học đẫm máu về quản trị rủi ro thanh khoản.</p>

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
  <p>2022 bắt đầu bằng một tiếng sấm sét từ bên kia bán cầu: Fed (Cục Dự trữ Liên bang Mỹ) tuyên bố bước vào chu kỳ thắt chặt tiền tệ quyết liệt nhất trong 40 năm để chống lại bóng ma lạm phát. Dòng vốn ngoại lập tức đảo chiều, rút tháo chạy khỏi các thị trường mới nổi, trong đó có Việt Nam.</p>
  <p>Nhưng đó mới chỉ là giông bão từ xa. Cơn sóng thần thực sự đánh ập vào thị trường nội địa đến từ những quả bom mang tên: FLC, Tân Hoàng Minh, và tàn khốc nhất là Vạn Thịnh Phát. Niềm tin vào thị trường trái phiếu doanh nghiệp sụp đổ trong chớp mắt.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự hoảng loạn (Panic) lan rộng như một cơn dịch bệnh. Các doanh nghiệp bất động sản khát tiền để đảo nợ trái phiếu, họ buộc phải bán tháo cổ phiếu trên sàn để thu hồi thanh khoản. Một vòng xoáy giải chấp chéo (Cross-Margin Call) lớn nhất lịch sử chứng khoán Việt Nam diễn ra. VN-Index rơi tự do từ 1.530 điểm xuống vùng 873 điểm.</p>
  <p>Tại VinaCapital, bầu không khí đặc quánh. Quỹ VESAF, dù đã né được phần lớn các cổ phiếu bất động sản đầu cơ, vẫn không thể chống lại sức hút lực hấp dẫn của một thị trường sụp đổ toàn diện.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi đám đông mất lý trí, các cổ phiếu "tốt" lại bị đem ra bán mạnh nhất, bởi vì chúng là những thứ duy nhất còn thanh khoản để bán. Những siêu cổ phiếu làm nên tên tuổi của VESAF năm 2021 như DGC, HAH, hay MWG cũng bị cuốn phăng theo dòng nước lũ, bốc hơi 30-50% giá trị chỉ trong vài tháng.</p>
  <p>Đó là bài học đẫm máu về Rủi ro Hệ thống (Systemic Risk): Khi thanh khoản quốc gia khô cạn do NHNN hút tiền về để bảo vệ tỷ giá, định giá P/E có rẻ đến mấy cũng trở nên vô nghĩa.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tuy nhiên, sự khác biệt giữa nhà đầu tư chuyên nghiệp và F0 nằm ở khả năng chịu đựng nỗi đau. Giữa tâm bão tháng 11/2022, khi hàng loạt cổ phiếu bất động sản dư bán sàn chục triệu cổ, đội ngũ VESAF vẫn bình tĩnh rà soát lại sổ sách của từng doanh nghiệp trong danh mục.</p>
  <p>Chúng tôi nhận thấy <strong>Gemadept (GMD)</strong> vẫn tiếp tục ghi nhận lợi nhuận gộp khổng lồ từ cảng Gemalink và cụm cảng Hải Phòng, bất chấp sóng gió vĩ mô. Tiền mặt ròng của FPT vẫn dồi dào. Chúng là những pháo đài không thể bị phá vỡ bởi khủng hoảng nợ.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thay vì hoảng loạn bán tháo ở đáy, VESAF quyết định sử dụng lượng tiền mặt dự trữ (Cash Buffer) để dũng cảm mua vào. Chúng tôi gia tăng mạnh tỷ trọng ở <strong>GMD, FPT</strong> và các ngân hàng tư nhân top đầu bị định giá quá thấp như <strong>MBB, ACB</strong>. Chúng tôi biết rằng khi cơn bão qua đi, đây sẽ là những cái tên bật dậy đầu tiên.</p>
  <p>Nhờ việc né hoàn toàn nhóm Bất động sản rác, mức sụt giảm của VESAF vẫn được kiểm soát tốt hơn đáng kể so với thiệt hại của các cá nhân đu đỉnh.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2022 là bài kiểm tra tàn khốc về tâm lý. Có những ngày quỹ nhận được hàng loạt yêu cầu rút vốn (Redemption) từ các nhà đầu tư chán nản tột độ. Vai trò của người quản lý quỹ lúc này là chuyên gia tâm lý học: Chúng tôi phải liên tục gửi thư trấn an, phân tích vĩ mô, và thuyết phục khách hàng không rời bỏ thị trường ở ngưỡng định giá rẻ nhất thập kỷ (P/E ~ 9x).</p>
  <p>Mỗi cuộc khủng hoảng đều là một lần chuyển giao tài sản vĩ đại. Những ai chịu đựng được bóng tối sẽ đón ánh bình minh chói lọi.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khép lại năm 2022, VN-Index ghi nhận mức giảm lịch sử <strong>-32,7%</strong>. Quỹ VESAF kết năm với mức giảm <strong>-24,4%</strong>. Dù không thể thoát khỏi một năm âm nặng, mức chênh lệch hiệu suất (Outperformance) so với chỉ số tham chiếu vẫn cho thấy khả năng phòng vệ xuất sắc của quỹ trong những tình huống khắc nghiệt nhất.</p>
  <p>Những bong bóng đầu cơ đã bị chọc thủng, những doanh nghiệp "thây ma" bị thanh lọc. Nước rút đi, trả lại một thị trường sạch sẽ và lành mạnh hơn.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bước vào những ngày cuối năm 2022, dòng vốn ngoại khổng lồ từ các quỹ ETF như Fubon bất ngờ giải ngân hàng chục nghìn tỷ đồng vào thị trường Việt Nam. Họ đã nhìn thấy điều mà đám đông hoảng loạn không thấy: Cổ phiếu Việt Nam đang rẻ đến mức vô lý.</p>
  <p>Tại VinaCapital, danh mục của VESAF đã được tái cơ cấu gọn gàng và tinh nhuệ nhất. Chúng tôi sẵn sàng cho một cú nảy chữ V (V-shape Rebound) lịch sử vào năm 2023, khi chính sách tiền tệ đảo chiều để giải cứu nền kinh tế.</p>`
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

export const vesaf2022Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
