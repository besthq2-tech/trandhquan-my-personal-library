const html = `
<section class="page active" id="page-dcds-2018" data-route="/minds/dcds-2018" data-title="The Trade War & The Sideways">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2018-2019
    </div>
    <h1 style="margin-bottom: 8px;">The Trade War & The Sideways</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2018 - 2019. Đỉnh cao 1.200 điểm bị xô đổ bởi những dòng tweet của Donald Trump và bài học về biến số địa chính trị.</p>

    <div class="book-reader" style="max-width: 680px; margin: 0 auto; background: var(--paper); border: 1px solid var(--line); border-radius: 4px; padding: 56px 64px; position: relative; min-height: 65vh; display: flex; flex-direction: column; box-shadow: 0 10px 30px rgba(0,0,0,0.02), inset 0 0 120px rgba(255,249,240,0.5);">
      
      <div id="bookContent" class="book-content" style="flex-grow: 1; font-family: 'Times New Roman', Times, serif; font-size: 19px; line-height: 1.8; color: #2c2a28;">
        <!-- Content will be injected here -->
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
  // Page 1
  `<img src="/images/dcds1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đầu năm 2018, thị trường chứng khoán Việt Nam sống trong bầu không khí của một lễ hội kéo dài. VN-Index kiêu hãnh vượt qua cột mốc lịch sử 1.200 điểm vào tháng 4, phá vỡ kỷ lục đã tồn tại hơn một thập kỷ (từ đỉnh bong bóng 2007).</p>
  <p>Các báo cáo phân tích tràn ngập những lời có cánh về "bứt phá", "nâng hạng thị trường", và "Kỷ nguyên Vàng". Dòng tiền FII (đầu tư gián tiếp nước ngoài) liên tục đổ vào các thương vụ IPO và thoái vốn khổng lồ của nhóm Vingroup (như VHM, VRE). Ai cũng nghĩ rằng con đường phía trước chỉ trải đầy hoa hồng.</p>`,

  // Page 2
  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng thị trường tài chính là nơi mà sự kiêu ngạo luôn bị trừng phạt nhanh nhất. Thiên nga đen lần này không bay ra từ nội tại nền kinh tế Việt Nam, mà xuất phát từ bờ bên kia bán cầu: Cuộc chiến tranh thương mại (Trade War) Mỹ - Trung chính thức bùng nổ bởi những dòng tweet của Tổng thống Donald Trump.</p>
  <p>Song song đó, Cục Dự trữ Liên bang Mỹ (Fed) liên tục tăng lãi suất, hút dòng tiền đô la Mỹ từ các thị trường mới nổi quay về quê nhà. Áp lực kép này giáng một đòn chí mạng vào tâm lý nhà đầu tư toàn cầu.</p>`,

  // Page 3
  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tháng 5/2018, một cơn lốc bán tháo quét qua sàn HOSE. Các quỹ ngoại đồng loạt rút ròng. Từ đỉnh 1.211 điểm, VN-Index bốc hơi hơn 25% chỉ trong vòng 3 tháng. Lợi nhuận tích lũy từ những tháng đầu năm bốc hơi sạch sẽ.</p>
  <p>Sai lầm đắt giá của quỹ DCDS (và của gần như toàn bộ thị trường lúc bấy giờ) là việc duy trì một tỷ trọng giải ngân quá cao ở vùng đỉnh, tin tưởng tuyệt đối vào đà tăng trưởng vĩ mô nội tại mà quên mất rằng Việt Nam là một nền kinh tế có độ mở cực lớn. Khi các chuỗi cung ứng toàn cầu hắt hơi, chứng khoán Việt Nam lập tức sổ mũi.</p>`,

  // Page 4
  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tuy nhiên, sự khác biệt giữa một quỹ mở chuyên nghiệp và nhà đầu tư cá nhân nằm ở cách xử lý sau cú sốc. Khi thị trường hoảng loạn, thay vì bán tháo theo đám đông, chúng tôi bình tâm rà soát lại từng danh mục. Luận điểm đầu tư lúc này là: Tìm kiếm những pháo đài phòng thủ có dòng tiền miễn nhiễm với chiến tranh thương mại.</p>
  <p>Và <strong>FPT</strong> chính là ngôi sao sáng nhất. Bất chấp thuế quan Mỹ-Trung, nhu cầu chuyển đổi số toàn cầu vẫn bùng nổ. FPT với mảng gia công phần mềm quốc tế đem về nguồn thu ngoại tệ USD dồi dào, trở thành chiếc mỏ neo vững chắc nhất giúp danh mục của DCDS trụ vững qua sóng gió.</p>`,

  // Page 5
  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bước sang năm 2019, thị trường không còn sụt giảm sâu như 2018, nhưng nó rơi vào một trạng thái còn tra tấn tâm lý hơn: Thị trường đi ngang (Sideways) biên độ hẹp với thanh khoản cạn kiệt. Giới đầu tư gọi đây là giai đoạn "cưa chân bàn".</p>
  <p>Trong một thị trường không có sóng, lợi nhuận không đến từ việc mua toàn bộ thị trường, mà đến từ việc chọn lọc cổ phiếu cực kỳ khắt khe (Stock Picking). Chúng tôi gia tăng tỷ trọng mạnh mẽ vào <strong>Thế Giới Di Động (MWG)</strong>. Luận điểm của chúng tôi: Khi xuất khẩu gặp khó, nền kinh tế sẽ dựa vào động lực tiêu dùng nội địa.</p>`,

  // Page 6
  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Quyết định này mang lại trái ngọt ngoài sức tưởng tượng. Trong khi VN-Index cả năm 2019 gần như dậm chân tại chỗ, cổ phiếu MWG tăng giá rực rỡ nhờ sự bứt phá của chuỗi Bách Hóa Xanh và tối ưu hóa hệ thống Điện Máy Xanh.</p>
  <p>Cùng với MWG, <strong>Vietcombank (VCB)</strong> cũng là một điểm nhấn thành công rực rỡ của quỹ. VCB là ngân hàng duy nhất có chất lượng tài sản hoàn hảo, không bị vướng bận nợ xấu như các đối thủ, và tiếp tục tăng trưởng lợi nhuận 30%. DCDS hưởng lợi lớn nhờ việc nắm giữ VCB ngay từ sớm.</p>`,

  // Page 7
  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhìn lại hiệu suất, năm 2018 là một năm khó khăn khi NAV của DCDS sụt giảm cùng nhịp đập của thị trường chung. Nhưng nhờ sự phòng thủ từ FPT và MWG, mức giảm này được khống chế ở mức thấp hơn mức giảm 25% của VN-Index.</p>
  <p>Đến năm 2019, nhờ chiến lược Stock Picking xuất sắc ở các mã VCB, FPT, MWG, quỹ DCDS đã ghi nhận mức tăng trưởng NAV ấn tượng trở lại, đánh bại hoàn toàn chỉ số VN-Index (vốn đi ngang cả năm). Khách hàng của quỹ mở một lần nữa thấy được sức mạnh của việc đầu tư dài hạn qua các chu kỳ thay vì lướt sóng ngắn hạn.</p>`,

  // Page 8
  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Hai năm 2018-2019 để lại một bài học thấm thía: "Khi bạn nghĩ rằng rủi ro đã bị loại bỏ, đó là lúc rủi ro lớn nhất xuất hiện". Các biến số địa chính trị như những dòng tweet của Donald Trump là thứ không một mô hình DCF nào tính toán được.</p>
  <p>Nhưng đó cũng là lúc giá trị của sự kỷ luật lên tiếng. Quỹ DCDS đã sống sót qua cơn bão Trade War bằng sự bình tĩnh và tập trung vào sức mạnh nội tại của doanh nghiệp. Cuối năm 2019, chúng tôi tự tin rằng thị trường đã tạo một vùng nền móng vững chắc. Không ai ngờ được rằng, chỉ vài tháng sau, một "Thiên nga đen" còn khổng lồ và đáng sợ hơn nhiều mang tên COVID-19 đang âm thầm chuẩn bị giáng xuống toàn nhân loại.</p>`
];

// Normalize text for Vietnamese rendering safety
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

export const dcds2018Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
