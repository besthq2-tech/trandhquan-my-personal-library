const html = `
<section class="page active" id="page-dcds-2022" data-route="/minds/dcds-2022" data-title="The Perfect Storm">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2022
    </div>
    <h1 style="margin-bottom: 8px;">The Perfect Storm</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2022. Cú sốc lãi suất toàn cầu, khủng hoảng trái phiếu và bài học đẫm máu về thanh khoản hệ thống khi VN-Index rơi về 873 điểm.</p>

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
  <p>Có những năm thị trường dạy cho bạn cách kiếm tiền, nhưng có những năm thị trường dạy cho bạn bài học về sự sinh tồn. 2022 là một năm như thế. Trong giới tài chính, chúng tôi gọi nó là "Cơn bão hoàn hảo" (The Perfect Storm).</p>
  <p>Mọi thứ bắt đầu từ xa xôi: Cuộc chiến tranh Nga - Ukraine đẩy giá dầu mỏ và lúa mì lên mây, kích hoạt một đợt lạm phát tồi tệ nhất 40 năm tại Mỹ. Để cứu nguy, Chủ tịch Fed Jerome Powell đã làm điều mà thị trường sợ nhất: Tăng lãi suất liên tục với tốc độ bạo lực chưa từng có (từ 0% lên gần 5%). Tiền rẻ chính thức chấm dứt.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Dòng tiền nóng vội vã tháo chạy khỏi các thị trường mới nổi. Nhưng đó mới chỉ là cơn gió thoảng qua. Cơn sóng thần thực sự bắt nguồn từ trong nước: Chiến dịch làm sạch thị trường tài chính của nhà nước. Sự kiện bắt giữ lãnh đạo tập đoàn FLC và Tân Hoàng Minh là những viên gạch domino đầu tiên.</p>
  <p>Thị trường chứng khoán chao đảo, nhưng quỹ DCDS vẫn khá tự tin vì chúng tôi không nắm giữ các cổ phiếu mang tính thao túng đầu cơ cao. Luận điểm phòng thủ lúc bấy giờ là: Chỉ cần giữ các công ty có cơ bản tốt, lợi nhuận đều đặn thì sóng gió sẽ qua.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng chúng tôi đã lầm. Tháng 10/2022, quả bom Vạn Thịnh Phát và Ngân hàng SCB phát nổ. Lần đầu tiên sau nhiều năm, người dân đổ xô đi rút tiền tại một ngân hàng. Sự hoảng loạn lan sang thị trường Trái phiếu Doanh nghiệp. Niềm tin sụp đổ hoàn toàn.</p>
  <p>Điều gì xảy ra khi thị trường trái phiếu bị đóng băng? Các doanh nghiệp bất động sản (BĐS) không thể đảo nợ. Để có tiền trả nợ trái phiếu, họ buộc phải bán tháo cổ phiếu trên sàn chứng khoán. Một vòng xoáy Giải chấp (Margin Call) chéo khốc liệt diễn ra.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Trong một đợt giải chấp chéo, các cổ phiếu "tốt" lại bị bán mạnh nhất. Tại sao? Vì những cổ phiếu đầu cơ BĐS đã "trắng bên mua" (giảm sàn mất thanh khoản), các công ty chứng khoán buộc phải lôi những cổ phiếu Blue-chip thanh khoản cao ra bán để thu hồi nợ vay margin.</p>
  <p>Danh mục của DCDS chịu tổn thất nặng nề. Dù sở hữu những doanh nghiệp tốt như <strong>MWG, FPT, TCB</strong>, chúng tôi vẫn bị cuốn vào vòng xoáy hoảng loạn. VN-Index từ đỉnh 1.530 điểm rơi tự do xuyên qua các ngưỡng hỗ trợ kỹ thuật cứng nhất, chạm đáy đau đớn ở 873 điểm.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sai lầm lớn nhất của chúng tôi trong năm 2022 không nằm ở việc chọn sai công ty (Stock Picking), mà nằm ở việc đánh giá thấp <strong>Rủi ro thanh khoản hệ thống</strong> (Systemic Liquidity Risk).</p>
  <p>Chúng tôi đã quá tin tưởng vào sự tăng trưởng EPS của các ngân hàng mà quên mất rằng, khi Ngân hàng Nhà nước buộc phải hút tiền về để bảo vệ tỷ giá hối đoái, thanh khoản liên ngân hàng khô cạn. Lãi suất qua đêm vọt lên 8-9%. Các cổ phiếu ngân hàng, đặc biệt là nhóm tư nhân có tỷ lệ cho vay BĐS và trái phiếu cao như <strong>TCB</strong> hay <strong>VPB</strong>, đã bốc hơi một nửa giá trị.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi NAV của quỹ giảm sâu (khoảng -30%), áp lực từ khách hàng là vô cùng tận. Rất nhiều nhà đầu tư F0 đã đầu hàng, rút chứng chỉ quỹ ở đúng thời điểm đen tối nhất. Nhiệm vụ khó khăn nhất của một người quản lý quỹ lúc đó không phải là mua gì hay bán gì, mà là làm công tác tâm lý: "Đừng bỏ cuộc ở ngay trước rạng đông".</p>
  <p>Chúng tôi đã phải viết những bức tâm thư dài gửi khách hàng, phân tích rằng định giá của thị trường chứng khoán Việt Nam (P/E quanh 9x) đã rẻ hơn cả thời kỳ khủng hoảng COVID-19. Những gì tồi tệ nhất về khủng hoảng thanh khoản đang được phản ánh hết vào giá.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Và đúng như vậy. Giữa tháng 11/2022, khi sự chán nản cùng cực lan rộng khắp các diễn đàn chứng khoán, dòng tiền khối ngoại (đặc biệt là các quỹ ETF Đài Loan và Fubon) bất ngờ đổ vào mua ròng kỷ lục hàng chục nghìn tỷ đồng. Họ mua vét mọi thứ, từ ngân hàng, chứng khoán đến bất động sản.</p>
  <p>Thị trường bật chữ V tàn bạo không kém lúc nó rơi xuống. Quỹ DCDS nhanh chóng tận dụng nhịp hồi phục này bằng cách đảo mạnh danh mục, gia tăng tỷ trọng <strong>STB</strong> (Sacombank - với kỳ vọng tái cơ cấu thành công) và các cổ phiếu ngành Chứng khoán để kéo lại NAV bị mất.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2022 khép lại như một cơn ác mộng dai dẳng nhưng để lại một di sản khổng lồ về mặt kinh nghiệm quản trị. Chúng tôi học được rằng sự liên thông giữa Thị trường Tiền tệ (Lãi suất, Tỷ giá) - Thị trường Trái phiếu - Thị trường Chứng khoán là chặt chẽ hơn bất kỳ lý thuyết nào.</p>
  <p>Chúng tôi bước sang năm 2023 với một vị thế phòng thủ chặt chẽ hơn, chờ đợi những nút thắt của thị trường bất động sản được cởi trói. Năm 2022 đã dọn sạch những bong bóng ảo tưởng, trả lại một mặt bằng định giá hấp dẫn tuyệt vời cho một chu kỳ tăng trưởng mới.</p>`
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

export const dcds2022Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
