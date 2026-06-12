const html = `
<section class="page active" id="page-dcds-2014" data-route="/minds/dcds-2014" data-title="The Sound of Cannons">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2014
    </div>
    <h1 style="margin-bottom: 8px;">The Sound of Cannons</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, Tháng 5/2014. Bắt đáy VNM, FPT giữa lúc hoảng loạn Biển Đông và cú ngã ngựa đau đớn vì dầu khí.</p>

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
  `<img src="/images/dcds2014_1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thị trường chứng khoán chưa bao giờ là một kẻ dễ đoán. Năm 2014 khởi đầu với những tín hiệu vĩ mô rực rỡ nhất: Lạm phát đã bị khuất phục, nợ xấu đã được gom gọn vào VAMC, lãi suất giảm mạnh. Chúng tôi, với cấu trúc quỹ mở DCDS mới toanh, đang sẵn sàng cưỡi lên con sóng phục hồi kinh tế.</p>
  <p>Nhưng nếu rủi ro kinh tế có thể tính toán được bằng những mô hình Excel, thì những "Thiên nga đen" (Black Swan) địa chính trị lại luôn giáng xuống một cách phi lý và tàn bạo.</p>`,

  // Page 2
  `<img src="/images/dcds2014_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tháng 5 năm 2014, sự kiện giàn khoan Hải Dương 981 tạo ra một cơn địa chấn tâm lý chưa từng có. Đối với hàng triệu nhà đầu tư cá nhân trên thị trường, nguy cơ xung đột vũ trang đã làm lu mờ mọi báo cáo lợi nhuận doanh nghiệp. Sự lo ngại nhanh chóng chuyển hóa thành sự hoảng loạn tột cùng (Panic Selling).</p>
  <p>Ngày 8 tháng 5 năm 2014 là một phiên giao dịch đẫm máu. VN-Index có lúc rơi tự do gần 6%, mức giảm mạnh nhất trong một phiên kể từ năm 2001. Hàng loạt lệnh bán tháo (Market Order) quăng ra bằng mọi giá (MP). Hệ thống giao dịch nghẽn cứng bởi áp lực bán.</p>`,

  // Page 3
  `<img src="/images/dcds2014_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Trong phòng họp của ban điều hành DCDS, không khí tĩnh lặng. Luận điểm đầu tư (Thesis) của chúng tôi trong thời khắc này tập trung vào một câu hỏi duy nhất: "Sự kiện ngoài Biển Đông có làm người dân ngừng uống sữa Vinamilk không? Có làm sinh viên ngừng mua laptop tại FPT không?".</p>
  <p>Câu trả lời là: Không. Cốt lõi kinh doanh của các doanh nghiệp trong danh mục không bị tổn thương. Chỉ có tâm lý bầy đàn đang tự cấu xé lẫn nhau. Chúng tôi lập tức kích hoạt quỹ tiền mặt dự phòng để tham gia vào đợt "sale-off" định giá rẻ nhất năm.</p>`,

  // Page 4
  `<img src="/images/dcds2014_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thương vụ thành công nhất của chúng tôi là việc mua gom quyết liệt các cổ phiếu rường cột như <strong>VNM (Vinamilk)</strong>, <strong>FPT</strong> và <strong>HPG (Hòa Phát)</strong> ngay tại các mức giá sàn trong những ngày hoảng loạn. Nhờ cấu trúc quỹ mở (Open-ended) cho phép linh hoạt dòng tiền, chúng tôi đã sử dụng hỏa lực một cách tối đa.</p>
  <p>Và thực tế đã chứng minh sự tàn nhẫn của đám đông. Chỉ vài tuần sau khi tình hình hạ nhiệt, thị trường bật tăng mạnh mẽ. Những người đã cắt lỗ đúng đáy ngậm ngùi nhìn giá cổ phiếu VNM, FPT vượt xa mức trước khi có sự kiện. Việc mua ngược dòng đã mang lại cho DCDS mức lợi nhuận vượt trội trong nửa đầu năm.</p>`,

  // Page 5
  `<img src="/images/dcds2014_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tuy nhiên, thị trường luôn biết cách trừng phạt sự tự mãn. Nếu chúng tôi đúng ở rủi ro địa chính trị tháng 5, thì chúng tôi lại mắc một sai lầm đắt giá ở rủi ro hàng hóa toàn cầu vào nửa cuối năm 2014.</p>
  <p>Sai lầm đó mang tên <strong>Ngành Dầu Khí</strong>. Nửa đầu năm 2014, giá dầu thô thế giới neo vững chắc ở mức 100 USD/thùng. Chúng tôi đã phân bổ một tỷ trọng khá lớn vào <strong>PVD (PV Drilling)</strong> và <strong>GAS (PV Gas)</strong> với luận điểm rằng chu kỳ khai thác và giá dầu sẽ duy trì ổn định, mang lại EPS (lợi nhuận trên cổ phiếu) rất cao.</p>`,

  // Page 6
  `<img src="/images/dcds2014_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bất thình lình, từ tháng 10/2014, giá dầu thế giới sụp đổ không phanh, rơi thẳng đứng từ 100 USD xuống sát 50 USD/thùng do sự xuất hiện của dầu mỏ đá phiến (Shale Oil) từ Mỹ. Mọi mô hình dự phóng tài chính của chúng tôi cho nhóm dầu khí lập tức bị xé bỏ.</p>
  <p>Giá cổ phiếu PVD và GAS lao dốc thê thảm, kéo tụt một phần lớn thành quả rực rỡ mà chúng tôi đã cất công xây dựng từ việc bắt đáy hồi tháng 5. Việc chậm trễ cắt lỗ nhóm dầu khí là một bài học đau xót về tính chu kỳ khốc liệt của các loại hàng hóa toàn cầu.</p>`,

  // Page 7
  `<img src="/images/dcds2014_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bất chấp cú ngã ngựa ở nhóm dầu khí vào cuối năm, sự nhạy bén trong đợt hoảng loạn tháng 5 và nền tảng danh mục tiêu dùng cơ bản (FMCG) vẫn giúp quỹ trụ vững. Khép lại năm 2014, giá trị tài sản ròng (NAV) của DCDS ghi nhận mức tăng trưởng xấp xỉ <strong>+12%</strong>.</p>
  <p>Trong một năm mà cả nhà đầu tư cá nhân lẫn tổ chức đều bị vùi dập bởi chiến tranh tâm lý và sự sụp đổ của giá hàng hóa, mức lợi nhuận dương hai con số này là minh chứng rõ ràng nhất cho sức mạnh của sự kỷ luật và khả năng tự cân bằng của một quỹ mở hiện đại.</p>`,

  // Page 8
  `<img src="/images/dcds2014_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tổng kết năm 2014, chúng tôi nhận ra rằng nghề quản lý quỹ không chỉ là việc đọc hiểu các báo cáo tài chính. Ở tầng mức cao nhất, quản lý quỹ chính là <strong>Quản trị Cảm Xúc</strong>. Bạn phải đủ lạnh lùng để tách bạch tiếng ồn chính trị khỏi dòng tiền của doanh nghiệp (trong vụ tháng 5), nhưng cũng phải đủ quyết đoán để thừa nhận sai lầm khi mô hình vĩ mô thay đổi (trong vụ giá dầu).</p>
  <p>Năm 2014 đã khép lại như một cuộc tổng duyệt cuối cùng. Cơ thể của DCDS giờ đây đã chai sạn với những cú sốc. Khi chúng tôi bước vào năm 2015, một làn sóng vốn ngoại khổng lồ đang đổ về, hứa hẹn mở ra một "Kỷ nguyên Vàng" rực rỡ nhất trong lịch sử thị trường chứng khoán Việt Nam.</p>`
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

export const dcds2014Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
