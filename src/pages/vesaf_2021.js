const html = `
<section class="page active" id="page-vesaf-2021" data-route="/minds/vesaf-2021" data-title="The Mid-Cap Euphoria">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2021
    </div>
    <h1 style="margin-bottom: 8px;">The Mid-Cap Euphoria</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2021. Năm huy hoàng nhất trong lịch sử. Dòng tiền F0 đẩy cổ phiếu vốn hóa vừa lên mặt trăng, mang lại cho VESAF lợi suất không tưởng +67%.</p>

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
  <p>2021 là một năm mà bất kỳ người quản lý quỹ nào sống qua thời kỳ đó đều sẽ nhớ mãi. Một sự hưng phấn (Euphoria) chưa từng có tiền lệ bùng nổ trên thị trường chứng khoán Việt Nam. Lãi suất tiết kiệm thấp kỷ lục, dòng người F0 ùn ùn đổ tiền vào thị trường. Thanh khoản nhảy vọt lên mức 1-2 tỷ USD mỗi phiên.</p>
  <p>Trong một thị trường tiền rẻ vô hạn, nhóm cổ phiếu vốn hóa lớn (Blue-chips) trở nên quá nặng nề để kéo. Dòng tiền đầu cơ thông minh lập tức chảy cuồn cuộn vào nhóm vốn hóa vừa và nhỏ (Mid-Cap & Small-Cap). Và VESAF, với đặc thù là một quỹ chuyên đánh Mid-Cap, bất ngờ thấy mình đứng ngay giữa tâm bão của dòng tiền.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ngôi sao sáng chói nhất trong bầu trời của VESAF năm 2021 là <strong>Hóa chất Đức Giang (DGC)</strong>. Khi cước vận tải biển tăng cao và Trung Quốc thiếu hụt điện, giá phốt pho vàng thế giới tăng phi mã lên mức kỷ lục.</p>
  <p>Lợi nhuận của DGC tăng trưởng bằng lần sau mỗi quý. Cổ phiếu DGC liên tục phá đỉnh, tăng giá gấp 4, gấp 5 lần chỉ trong một năm. Nhờ việc đã thu gom DGC từ chân sóng năm 2020, VESAF tận hưởng trọn vẹn siêu chu kỳ này, ghi nhận khoản lợi nhuận tính bằng trăm phần trăm.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Cú hích thứ hai đến từ sự đứt gãy chuỗi cung ứng logistics toàn cầu. Tàu bè kẹt cứng ở các cảng biển lớn, giá cước container nội địa và quốc tế bùng nổ. Chúng tôi nhận ra ngay cơ hội "ngàn năm có một" này và giải ngân quyết liệt vào <strong>Vận tải biển Hải An (HAH)</strong>.</p>
  <p>Sở hữu đội tàu container lớn nhất Việt Nam, HAH nhanh chóng báo lãi kỷ lục. Giá cổ phiếu HAH cất cánh thẳng đứng, trở thành một trong những mã tăng mạnh nhất sàn HOSE năm 2021, đóng góp cực lớn vào NAV của quỹ.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Không thể bỏ qua ngành chứng khoán. Thanh khoản tỷ đô mỗi phiên là món quà trời cho đối với các công ty chứng khoán. VESAF đã chọn mặt gửi vàng vào <strong>VNDirect (VND)</strong> và <strong>VCI</strong>. Hai mã này liên tục chia tách, phát hành thêm và tăng giá bằng lần nhờ sự bùng nổ của doanh thu môi giới và cho vay margin.</p>
  <p>Lúc này, chiến lược của quỹ rất đơn giản nhưng hiệu quả: Nắm giữ thật chặt những siêu cổ phiếu đang có thiên thời, không để bị rũ bỏ bởi những nhịp rung lắc kỹ thuật.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tuy nhiên, mặt trái của sự hưng phấn là bong bóng đầu cơ. Nửa cuối năm 2021, dòng tiền F0 say máu bắt đầu tràn vào các cổ phiếu "rác", các doanh nghiệp bất động sản không có dự án thực tế, được thổi giá bằng những câu chuyện đếm cua trong lỗ.</p>
  <p>Rất nhiều nhà đầu tư cá nhân khoe lãi gấp 5, gấp 10 lần nhờ mua cổ phiếu đầu cơ. Áp lực vô hình đè nặng lên các quỹ đầu tư chuyên nghiệp khi phải đứng ngoài bữa tiệc điên rồ này. Kỷ luật của VESAF bị thử thách tột độ: Chúng tôi kiên quyết không mua một cổ phiếu "ba chữ cái" nào nếu nó không có nội tại doanh nghiệp.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự kiên định đó đã chứng minh giá trị của nó. Thay vì đánh bạc với các cổ phiếu thao túng, VESAF chốt lời từng phần nhóm Hóa chất, Logistics khi định giá bắt đầu trở nên đắt đỏ, và chuyển dịch dòng tiền sang các cổ phiếu có định giá rẻ hơn để bảo vệ thành quả.</p>
  <p>Chúng tôi hiểu rằng thị trường sẽ có lúc phải trả giá cho sự phi lý, nhưng nhiệm vụ hiện tại là phải tối đa hóa lợi nhuận trong xu hướng tăng lớn nhất thập kỷ.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2021, quỹ VESAF chốt lại bằng một con số vô tiền khoáng hậu: <strong>+67,0%</strong>. Chúng tôi đánh bại hoàn toàn mức tăng 35% của VN-Index, và vươn lên trở thành Quỹ Mở Cổ Phiếu Số 1 Việt Nam về hiệu suất hoạt động.</p>
  <p>Đây là một năm huyền thoại, khẳng định vị thế độc tôn của VESAF trong phân khúc Mid-Cap. Tiền của các nhà đầu tư cá nhân đổ vào quỹ ầm ầm, biến VESAF thành một trong những quỹ mở lớn nhất thị trường.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chúng tôi nâng ly chúc mừng một năm huy hoàng, nhưng những bộ óc thận trọng nhất tại VinaCapital đã bắt đầu nhìn thấy những đám mây xám xịt từ phía chân trời. Bóng ma lạm phát của Mỹ, sự thắt chặt tiền tệ của Fed, và những quả bom nợ trái phiếu doanh nghiệp trong nước đang phình to.</p>
  <p>Năm 2022 đang đến, và chúng tôi biết rằng: Bữa tiệc tiền rẻ đã kết thúc. Những kẻ bơi trần trong con sóng F0 chuẩn bị phải đối mặt với một cơn đại hồng thủy tàn khốc nhất lịch sử.</p>`
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
