const html = `
<section class="page active" id="page-vesaf-2022" data-route="/minds/vesaf-2022" data-title="Cú sập hầm lịch sử">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2022
    </div>
    <h1 style="margin-bottom: 8px;">Cú sập hầm lịch sử</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Bữa tiệc tiền rẻ kết thúc bằng một thảm họa trái phiếu và Call Margin hệ thống. Một năm đẫm máu mà mục tiêu duy nhất là bảo toàn sinh mạng để chờ ngày tái thiết.</p>

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
  <p>Tháng 4/2022. Sự kiện bắt giữ lãnh đạo Tân Hoàng Minh và FLC như một mồi lửa ném vào kho thuốc súng margin đang phình to của thị trường. Cùng lúc đó, Fed bắt đầu chuỗi tăng lãi suất dồn dập tàn khốc nhất lịch sử để chống lạm phát toàn cầu. Bữa tiệc đã thực sự kết thúc.</p>
  <p>Và rồi cơn ác mộng lớn nhất ập đến vào tháng 10/2022: Khủng hoảng Vạn Thịnh Phát và Ngân hàng SCB. Niềm tin vào thị trường trái phiếu doanh nghiệp sụp đổ hoàn toàn. Thanh khoản nền kinh tế đông cứng. VN-Index rơi tự do từ 1.500 xuống chạm mốc 873 điểm.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Lúc này, "Rủi ro hệ thống" (Systemic Risk) bao trùm tất cả. Khái niệm định giá rẻ (P/E, P/B) trở nên vô nghĩa. Các công ty chứng khoán phải tiến hành Force-Sell (bán giải chấp) chéo mọi cổ phiếu trong danh mục của nhà đầu tư để thu hồi nợ.</p>
  <p>Kể cả những cổ phiếu tốt nhất, làm ăn lợi nhuận ngàn tỷ như FPT hay MBB cũng bị lôi ra bán sàn nằm la liệt chỉ vì chúng có thanh khoản để bán. Tại VESAF, chúng tôi phải chứng kiến những tài sản tuyệt vời bị định giá rớt xuống mức của thời kỳ đồ đá.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhờ việc duy trì kỷ luật khắt khe trong năm 2021, VESAF đã hoàn toàn không nắm giữ bất kỳ cổ phiếu bất động sản đầu cơ nào. Khách hàng của chúng tôi không phải chứng kiến cảnh cổ phiếu mất 80-90% giá trị không có thanh khoản như nhóm NVL hay PDR.</p>
  <p>Tuy nhiên, là một quỹ mở cổ phiếu, việc phải duy trì một tỷ lệ giải ngân cao (Fully-invested) khiến quỹ không thể miễn nhiễm với đà giảm chung của thị trường. NAV của quỹ liên tục bốc hơi từng ngày.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Giữa tâm bão, chiến lược của đội ngũ VinaCapital chuyển sang "Phòng thủ cực đoan". Mục tiêu số một không phải là kiếm tiền, mà là <strong>bảo toàn sinh mạng</strong> để có thể quay trở lại vào chu kỳ sau.</p>
  <p>Chúng tôi tập trung rà soát lại toàn bộ bảng cân đối kế toán của các doanh nghiệp đang nắm giữ. Tiêu chí sống còn lúc này là: Tiền mặt dồi dào, nợ vay bằng USD thấp (để né tỷ giá bùng nổ), và hoàn toàn không dính dáng đến trái phiếu sai phạm.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Những khoản đầu tư vào <strong>FPT</strong>, <strong>Gemadept (GMD)</strong> và <strong>DGC</strong> vẫn được giữ lại làm xương sống. FPT với dòng tiền ngoại tệ đổ về từ mảng xuất khẩu phần mềm tỏ ra cực kỳ lỳ lợm trước giông bão. GMD hưởng lợi nhờ mảng khai thác cảng cốt lõi không bị ảnh hưởng bởi tín dụng.</p>
  <p>Chúng tôi thấu hiểu sự hoảng loạn của nhà đầu tư khi phải nhận những bản tin báo cáo NAV đỏ lửa mỗi tháng. Nhiều đêm thức trắng, áp lực đè nặng lên vai các nhà quản lý quỹ. Lời khuyên duy nhất lúc này là: Đừng buông xuôi ngay tại đáy.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Vào tháng 11/2022, khi sự bi quan đạt đến cực điểm, một dòng vốn ngoại khối lượng lớn (chủ yếu từ các quỹ ETF Đài Loan và khối ngoại) đã ào ạt giải ngân bắt đáy. VN-Index bật chữ V dữ dội từ đáy 873 lên lại mốc 1.000 điểm.</p>
  <p>Sự kiên định ôm chặt các cổ phiếu chất lượng cao đã giúp VESAF bật nảy cực mạnh trong nhịp hồi phục này, thu hẹp đáng kể mức thua lỗ trong năm.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2022 khép lại như một vết sẹo lớn đối với giới tài chính. VN-Index chốt sổ với mức sụt giảm kinh hoàng <strong>-32,8%</strong>, lọt top các thị trường chứng khoán giảm mạnh nhất thế giới.</p>
  <p>Quỹ VESAF cũng phải chịu một năm đẫm máu với mức giảm <strong>-24,4%</strong>. Dù đây là một mức sụt giảm lớn, nhưng xét trên bình diện tương quan, việc đỡ thiệt hại hơn chỉ số chung gần 8,5% chứng minh rằng danh mục cổ phiếu chất lượng cao đã làm tốt vai trò chiếc dù cứu sinh của nó.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sau đống tro tàn, sự thật luôn được phơi bày: Những công ty làm ăn gian dối đã bị đào thải, những nhà đầu tư dùng margin quá mức đã bị xóa sổ. Thị trường trở về với mức định giá rẻ đến vô lý.</p>
  <p>Vết thương 2022 là một bài học đắt giá về sự tàn nhẫn của chu kỳ tín dụng. Nhưng ở VinaCapital, chúng tôi biết rằng, hạt giống của một chu kỳ tăng trưởng mới luôn được gieo mầm ngay giữa mùa đông khắc nghiệt nhất.</p>`
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
