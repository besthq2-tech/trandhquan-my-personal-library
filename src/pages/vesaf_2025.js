const html = `
<section class="page active" id="page-vesaf-2025" data-route="/minds/vesaf-2025" data-title="The Premium Game">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2025
    </div>
    <h1 style="margin-bottom: 8px;">The Premium Game</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2025. Cuộc chơi Nâng hạng thị trường bắt đầu. VESAF tối đa hóa lợi nhuận bằng việc nắm giữ các cổ phiếu cạn Room Ngoại.</p>

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
  <p>2025. Sự kiện được chờ đợi nhất trong hai thập kỷ của chứng khoán Việt Nam cuối cùng cũng diễn ra: Việc nâng hạng lên Thị trường Mới nổi (Emerging Market) của FTSE Russell. Hệ thống giao dịch mới vận hành trơn tru, tiêu chuẩn ký quỹ "Prefunding" được tháo gỡ hoàn toàn cho nhà đầu tư tổ chức nước ngoài.</p>
  <p>Tuy nhiên, một vấn đề muôn thuở vẫn chưa được giải quyết triệt để: Room ngoại (Foreign Ownership Limit - FOL). Các cổ phiếu tốt nhất, hấp dẫn nhất như FPT, MWG, PNJ luôn trong tình trạng kín room 49%. Khối ngoại muốn mua, nhưng không ai bán.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đây chính là nơi VinaCapital và đặc biệt là VESAF tỏa sáng. Nhờ lợi thế là một Quỹ Mở Nội Địa, chúng tôi không bị giới hạn bởi Room ngoại. Chúng tôi có thể mua bán tự do các cổ phiếu này trên sàn khớp lệnh hàng ngày với mức giá niêm yết.</p>
  <p>Trong khi đó, các quỹ ETF ngoại khổng lồ từ Đài Loan, Mỹ, châu Âu khi được rót vốn thụ động bắt buộc phải mua các cổ phiếu này. Họ đành phải tìm đến các giao dịch thỏa thuận (Put-through) ngoài sàn, và chấp nhận trả một mức giá chênh lệch khổng lồ, gọi là **Premium**.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Cuộc chơi "The Premium Game" (Trò chơi phần bù rủi ro) diễn ra khốc liệt. Mức Premium của FPT có lúc vọt lên 15-20% so với giá trên sàn, MWG cũng lên tới 10-15%. Lợi thế của VESAF là chúng tôi đã xây dựng sẵn một kho hàng khổng lồ những cổ phiếu "Diamond" (Kim cương) này từ những năm trước.</p>
  <p>Khi NAV của quỹ được định giá lại theo giá trị thực tế của các giao dịch thỏa thuận, mức sinh lời của VESAF tăng vọt chỉ sau một đêm. Quỹ nội địa bỗng nhiên nắm trong tay quyền sinh quyền sát đối với dòng vốn ngoại thụ động.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Song song với trò chơi Room ngoại, năm 2025 cũng chứng kiến sự thức tỉnh của một nhóm ngành ngủ quên: Bán lẻ Tiêu dùng. Lạm phát toàn cầu được kiểm soát hoàn toàn, thu nhập thực tế của người dân đô thị tại Việt Nam hồi phục mạnh mẽ.</p>
  <p>VESAF dồn lực gom mạnh <strong>Masan Group (MSN)</strong>. Chuỗi siêu thị WinMart sau nhiều năm tái cơ cấu đã bắt đầu tạo ra dòng tiền dương. Hệ sinh thái tiêu dùng Point-of-Life của Masan bắt đầu cho quả ngọt. Cổ phiếu MSN, từ một mã bị bỏ rơi trong năm 2022-2023, đã trở lại đường đua mạnh mẽ.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Một điểm đáng chú ý khác là cách VESAF xử lý rủi ro "Tin ra là bán" (Buy the rumor, sell the news). Khi tin nâng hạng chính thức được công bố, thị trường có một nhịp xả hàng rất mạnh từ các tay chơi đầu cơ lướt sóng, khiến VN-Index giảm nhanh trong vài tuần.</p>
  <p>Nhưng bộ máy phân tích của VinaCapital giữ cái đầu cực lạnh. Chúng tôi hiểu rằng dòng vốn ETF là dòng vốn thụ động, chúng giải ngân từ từ qua từng quý theo tỷ trọng chỉ số, chứ không phải đổ ập vào trong một ngày. Do đó, nhịp rũ bỏ ngắn hạn này chỉ là cơ hội để cơ cấu lại danh mục với giá rẻ hơn.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thực tế đã chứng minh, chỉ sau 1 tháng rung lắc, dòng tiền tổ chức quốc tế cuồn cuộn đổ vào, đẩy VN-Index vượt 1.500 điểm và tiến thẳng lên mốc 1.600 điểm. Khác với sự điên rồ của dòng tiền F0 năm 2021, điểm số của năm 2025 được bảo chứng bằng nền tảng lợi nhuận doanh nghiệp thực chất.</p>
  <p>Tỷ trọng P/E của thị trường vẫn duy trì ở mức hấp dẫn 13-14x, nhờ EPS (Lợi nhuận trên mỗi cổ phiếu) của các doanh nghiệp trong danh mục tăng trưởng trung bình 20-25%.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khép lại năm 2025 lịch sử, quỹ VESAF một lần nữa đứng trên đỉnh vinh quang với mức tăng trưởng NAV <strong>+38%</strong>. Các nhà đầu tư cá nhân ủy thác vào VESAF chứng kiến tài sản của mình nhân lên mạnh mẽ mà không cần phải tự mình đánh vật với bảng điện tử.</p>
  <p>Đây là chiến thắng của phương pháp luận đầu tư bài bản, của sự kiên nhẫn nắm giữ tài sản tốt, và sự hiểu biết sâu sắc về cấu trúc vi mô (Microstructure) của dòng vốn ngoại trên thị trường Việt Nam.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Việt Nam năm 2025 đã khác rất xa so với năm 2015. Chúng ta đã có tên trên bản đồ của dòng vốn toàn cầu. Sự minh bạch được đẩy lên mức tối đa.</p>
  <p>Nhưng cuộc chơi ở một Thị trường Mới nổi cũng tàn khốc hơn. Dòng "Hot money" có thể rút ra nhanh như cách nó bơm vào nếu vĩ mô toàn cầu đảo chiều. Năm 2026 đang đến, đánh dấu kỷ niệm 10 năm thành lập của quỹ VESAF. Và chúng tôi chuẩn bị bước vào một kỷ nguyên mới, nơi thuật toán và dữ liệu sẽ quyết định kẻ thắng người thua.</p>`
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
