const html = `
<section class="page active" id="page-vesaf-2018" data-route="/minds/vesaf-2018" data-title="The Shield">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2018
    </div>
    <h1 style="margin-bottom: 8px;">The Shield</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2018. Chiến tranh thương mại Mỹ - Trung châm ngòi cho sự sụp đổ. VESAF chứng minh bản lĩnh khi bảo vệ dòng vốn trong giông bão.</p>

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
  <p>Mùa xuân năm 2018, VN-Index chính thức phá vỡ đỉnh lịch sử 1.200 điểm được thiết lập từ năm 2007. Khắp các sàn giao dịch, nhà đầu tư ôm nhau ăn mừng. Các chuyên gia đua nhau dự báo về mốc 1.500, thậm chí 2.000 điểm. Lòng tham chạm ngưỡng cực đại.</p>
  <p>Nhưng tại VinaCapital, hệ thống cảnh báo rủi ro của chúng tôi bắt đầu nhấp nháy đỏ. Định giá thị trường (P/E) đã bị kéo giãn lên mức 22x - mức cao nhất trong một thập kỷ. Quá nhiều "tiền nóng" đang bơm căng các cổ phiếu Blue-chips. Cảm giác bất an bao trùm cuộc họp giao ban sáng đầu tuần.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Và rồi, sự sụp đổ luôn bắt đầu từ nơi không ai ngờ tới. Một dòng tweet của cựu Tổng thống Mỹ Donald Trump châm ngòi cho cuộc Chiến tranh thương mại Mỹ - Trung. Các hàng rào thuế quan được dựng lên, đe dọa chuỗi cung ứng toàn cầu. Sự sợ hãi lây lan từ Phố Wall sang châu Á, và dội một gáo nước lạnh vào Việt Nam.</p>
  <p>Sự sụp đổ diễn ra khốc liệt. VN-Index từ 1.200 rơi thẳng đứng không phanh, cuốn phăng mọi thành quả của năm 2017. Những danh mục đầu cơ margin bốc hơi 50-70% giá trị chỉ trong vài tháng.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đứng giữa tâm bão, quỹ VESAF phải đối mặt với thử thách sinh tồn đầu tiên. Triết lý đầu tư Giá trị và tập trung vào Mid-Cap của chúng tôi giờ đây phải chứng minh được sức mạnh phòng thủ.</p>
  <p>Chúng tôi đã chủ động hạ tỷ trọng cổ phiếu từ vùng đỉnh, đưa tỷ lệ tiền mặt lên mức an toàn. Quan trọng hơn, bộ khung danh mục của VESAF là những doanh nghiệp tạo ra "Dòng tiền tự do" (Free Cash Flow) cực mạnh, thay vì những công ty "đốt tiền" để tăng trưởng nóng.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Trong khi các cổ phiếu vốn hóa lớn thuộc rổ VN30 bị khối ngoại bán tháo tàn bạo qua các rổ ETF, thì các cổ phiếu Mid-Cap kín room của VESAF lại cho thấy sự lỳ lợm đáng kinh ngạc. <strong>PNJ</strong> vẫn duy trì tốc độ mở mới cửa hàng đều đặn. <strong>FPT</strong> vẫn ký được các hợp đồng phần mềm bất chấp rủi ro thương mại toàn cầu.</p>
  <p>Việc không chạy theo cơn sốt cổ phiếu Bất động sản và Tài chính đầu cơ ở đầu năm 2018 đã tạo ra một "Tấm khiên" (The Shield) vững chắc bảo vệ tài sản của khách hàng.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Những nhịp rơi sâu của thị trường luôn là mỏ vàng đối với những người cầm tiền mặt. Khi P/E của nhiều doanh nghiệp xuất sắc rơi về mức 8x, 9x, VESAF bắt đầu đi săn.</p>
  <p>Chúng tôi để mắt đến nhóm Khu công nghiệp. Luận điểm rất rõ ràng: Chiến tranh thương mại Mỹ-Trung sẽ buộc các tập đoàn đa quốc gia phải dời nhà máy khỏi Trung Quốc để tránh thuế. Việt Nam, với vị trí địa lý đắc địa và chi phí nhân công rẻ, sẽ là điểm đến số một.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tuy nhiên, những thương vụ bắt đáy này đòi hỏi thời gian để "ngấm". Trong năm 2018, áp lực từ đà giảm chung của thị trường là quá lớn để bất kỳ cổ phiếu nào có thể đi ngược dòng hoàn toàn.</p>
  <p>Ban điều hành quỹ VESAF liên tục phải trả lời các chất vấn của nhà đầu tư. Chúng tôi kiên định giải thích rằng: Đầu tư cổ phiếu không phải là trò chơi đoán xem ngày mai VN-Index xanh hay đỏ. Đó là việc mua doanh nghiệp và đồng hành cùng lợi nhuận của họ qua nhiều năm.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2018 đầy giông bão, VN-Index ghi nhận mức giảm thê thảm -9,3%. Rất nhiều quỹ đầu tư lớn trên thị trường bốc hơi từ 12% đến 15% giá trị NAV do kẹp hàng Blue-chips.</p>
  <p>Trong bối cảnh đó, quỹ VESAF chỉ ghi nhận mức sụt giảm <strong>-7,6%</strong>. Mặc dù là một con số âm, nhưng trong giới quản lý quỹ chuyên nghiệp, việc thua lỗ ít hơn thị trường chung trong một năm Bear Market (Thị trường gấu) được coi là một chiến thắng về mặt chiến thuật phòng thủ.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2018 khép lại với bầu không khí ảm đạm bao trùm giới tài chính. Đám đông nhà đầu tư cá nhân rời bỏ thị trường, thanh khoản teo tóp, các room chat chứng khoán tĩnh lặng như tờ.</p>
  <p>Nhưng tại VinaCapital, chúng tôi biết rằng bóng tối sâu nhất là lúc rạng đông sắp đến. Thị trường sắp bước vào một giai đoạn đi ngang (sideways) chán nản kéo dài. Và lịch sử đã chứng minh, thị trường đi ngang chính là thiên đường cho chiến lược Stock-Picking (Chọn lọc cổ phiếu) của VESAF.</p>`
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

export const vesaf2018Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
