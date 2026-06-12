const html = `
<section class="page active" id="page-dcds-2025" data-route="/minds/dcds-2025" data-title="The Emerging Market Upgrade">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2025
    </div>
    <h1 style="margin-bottom: 8px;">The Emerging Market Upgrade</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2025. Nút thắt được cởi bỏ, Việt Nam chính thức bước vào nhóm Thị trường Mới nổi. Kỷ nguyên của dòng vốn thụ động ETF và sự thăng hoa của Blue-chips.</p>

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
  <p>2025 là cột mốc mà những người tiên phong của thị trường chứng khoán Việt Nam đã mong mỏi suốt 2 thập kỷ. Sự kiện lớn nhất thập kỷ đã xảy ra: FTSE Russell chính thức nâng hạng Việt Nam lên "Thị trường Mới nổi thứ cấp" (Secondary Emerging Market).</p>
  <p>Không còn những cuộc thảo luận vô tận về "Prefunding" hay "Room ngoại". Các rào cản kỹ thuật cuối cùng đã bị dỡ bỏ. Và đúng như sách giáo khoa tài chính dự báo: Một cơn sóng thần thanh khoản từ các quỹ ETF bị động (Passive Funds) trên toàn cầu bắt đầu tràn vào.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Luận điểm đầu tư của DCDS trong năm 2025 rất rõ ràng: Không phải cố gắng tìm kiếm các mỏ vàng ẩn giấu (Hidden Gems), mà hãy mua những gì các quỹ ETF bắt buộc phải mua. Đó là các rổ chỉ số vốn hóa lớn (VN30), các cổ phiếu có trọng số cao nhất thị trường.</p>
  <p>Cụ thể, dòng tiền ngoại đổ mạnh vào Ngân hàng. Chúng tôi đã xây dựng vị thế phòng thủ kiên cố ở <strong>VCB, BID, CTG</strong> từ những năm trước. Cú hích nâng hạng đẩy định giá (P/B) của nhóm Big 4 ngân hàng quốc doanh lên một mặt bằng mới hoàn toàn, tiệm cận với định giá của các ngân hàng trong khu vực Thái Lan, Indonesia.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đặc biệt hơn, những mã cổ phiếu hết room ngoại (FOL - Foreign Ownership Limit) như <strong>FPT, MWG, PNJ, REE</strong> chứng kiến sự thăng hoa điên rồ. Khi Việt Nam ra mắt chứng chỉ lưu ký không có quyền biểu quyết (NVDR) để lách luật room ngoại, các nhà đầu tư nước ngoài tranh nhau trả giá chênh lệch (Premium) có lúc lên tới 15-20% để sở hữu.</p>
  <p>Quỹ DCDS, nhờ vị thế là quỹ nội và đã nắm giữ chặt chẽ các cổ phiếu Kim cương (Diamond) này từ sớm, chứng kiến NAV của mình nhảy vọt theo từng đợt tái cơ cấu danh mục của các quỹ Vanguard hay iShares.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tuy nhiên, thị trường luôn có những cái bẫy. Sai lầm mà nhiều nhà đầu tư cá nhân mắc phải trong năm 2025 là "mua tin đồn, bán sự thật" (Buy the rumor, sell the news). Khi tin nâng hạng vừa ra mắt, có một nhịp xả hàng chốt lời cực lớn khiến VN-Index sụt giảm vài chục điểm.</p>
  <p>Nhiều người nghĩ rằng câu chuyện đã kết thúc. Nhưng DCDS giữ vững lập trường: Nâng hạng không phải là tin tức, nâng hạng là sự thay đổi cấu trúc dòng vốn. Sự thay đổi này kéo dài bằng năm, không phải bằng ngày.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bên cạnh câu chuyện dòng tiền ngoại, năm 2025 còn ghi nhận sự phục hồi rực rỡ của nhóm Bán lẻ Tiêu dùng. Lạm phát được kiểm soát, thu nhập người dân phục hồi mạnh mẽ sau nhiều năm thắt lưng buộc bụng.</p>
  <p><strong>Masan Group (MSN)</strong> và <strong>MWG</strong> bùng nổ lợi nhuận khi các chuỗi bán lẻ hiện đại chiếm lĩnh hoàn toàn thị phần từ chợ truyền thống. DCDS thu lãi đậm nhờ việc kiên nhẫn nắm giữ MSN qua giai đoạn khó khăn nhất, và giờ đây hái quả ngọt khi câu chuyện tiêu dùng (Consumer Story) của Việt Nam một lần nữa hấp dẫn vốn ngoại.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Với sự hỗ trợ của cả vĩ mô nội địa (lãi suất thấp, tiêu dùng hồi phục) và vĩ mô quốc tế (Nâng hạng EM, dòng vốn FDI), VN-Index dễ dàng xuyên thủng mốc 1.500 điểm - đỉnh cũ của thời kỳ tiền rẻ 2021. Nhưng lần này, chất lượng của điểm số hoàn toàn khác.</p>
  <p>Nó không được xây dựng bằng lòng tham đầu cơ F0 hay dòng tiền margin đòn bẩy cao, mà nó được neo giữ bởi lợi nhuận kỷ lục của doanh nghiệp và sự ổn định của dòng tiền tổ chức quốc tế.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khép lại 2025, quỹ DCDS vinh dự được nhận nhiều giải thưởng quản lý quỹ xuất sắc nhất thập kỷ. NAV tăng trưởng vượt bậc <strong>hơn +40%</strong>, một con số không tưởng đối với một quỹ quy mô lớn (AUM hàng tỷ USD). Các quỹ nội như DCDS đã chứng minh được vị thế "sân nhà", đánh bại cả các quỹ ETF ngoại bằng chiến lược chọn lọc cổ phiếu chủ động (Active Stock Picking).</p>
  <p>Cột mốc nâng hạng không chỉ là chiến thắng của thị trường chứng khoán, mà còn là sự thừa nhận của thế giới đối với nền kinh tế Việt Nam.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng chúng tôi biết rằng, nâng hạng chỉ là tấm vé bước vào sân chơi lớn hơn. Ở một thị trường Mới nổi thực thụ, rủi ro biến động dòng vốn ngoại (Hot money) cũng khắc nghiệt hơn. Khối ngoại có thể mua hàng tỷ USD hôm nay, và xả bán hàng tỷ USD vào ngày mai nếu vĩ mô toàn cầu xoay chiều.</p>
  <p>Chúng tôi bước sang năm 2026 với tâm thế của những người lính dày dạn trận mạc. Thị trường đã nâng cấp, và chính bản thân DCDS cũng phải nâng cấp các mô hình quản trị rủi ro bằng định lượng (Quant) và thuật toán (Algo). Kỷ nguyên mới đã bắt đầu.</p>`
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

export const dcds2025Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
