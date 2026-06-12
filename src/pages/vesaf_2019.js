const html = `
<section class="page active" id="page-vesaf-2019" data-route="/minds/vesaf-2019" data-title="The Stock Picker's Market">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2019
    </div>
    <h1 style="margin-bottom: 8px;">The Stock Picker's Market</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2019. Thị trường đi ngang buồn ngủ, nhưng là thiên đường của kẻ đãi cát tìm vàng. VESAF tỏa sáng nhờ KDH, MWG và FPT.</p>

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
  <p>Nếu bạn nhìn vào biểu đồ VN-Index năm 2019, đó là một đường nằm ngang buồn tẻ. Chỉ số lình xình quanh mốc 950 - 1.000 điểm suốt 12 tháng. Thanh khoản khô kiệt, không có dòng tiền mới nào chảy vào. Đây là lúc những nhà đầu cơ lướt sóng cảm thấy chán nản và rời bỏ cuộc chơi.</p>
  <p>Nhưng đối với đội ngũ VinaCapital, thị trường Sideways (đi ngang) luôn là "The Stock Picker's Market" - Thị trường của những kẻ chọn lọc cổ phiếu. Khi nước rút, bạn mới biết ai đang bơi trần. Và khi chỉ số không tăng, bạn mới thấy doanh nghiệp nào thực sự tạo ra giá trị.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Luận điểm của VESAF năm 2019 là truy tìm sự tăng trưởng độc lập với chu kỳ vĩ mô. Chúng tôi tập trung vào những cổ phiếu có "Catalyst" (yếu tố xúc tác) riêng biệt. Một trong những thương vụ thành công nhất năm đó là <strong>Khang Điền (KDH)</strong>.</p>
  <p>Giữa lúc ngành bất động sản chật vật với pháp lý, KDH lại nổi lên như một hòn đá tảng với quỹ đất sạch ở khu Đông TP.HCM, pháp lý minh bạch và tỷ lệ nợ vay thấp. Chúng tôi gom mạnh KDH ở vùng giá rẻ, và cổ phiếu này đã lầm lũi đi lên suốt cả năm, đóng góp đáng kể vào NAV.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thương vụ thứ hai là <strong>Thế Giới Di Động (MWG)</strong>. Năm 2019, thị trường lo ngại rằng mảng điện thoại đã bão hòa. Nhưng phân tích độc lập của VinaCapital chỉ ra rằng mảng Điện Máy Xanh đang vươn lên nuốt trọn thị phần của các đối thủ truyền thống nhỏ lẻ.</p>
  <p>Đồng thời, Bách Hóa Xanh bắt đầu chạm ngưỡng hòa vốn ở cấp độ cửa hàng (Store-level EBITDA). VESAF nắm chặt MWG, bất chấp những nhịp rũ bỏ của thị trường, và tận hưởng trọn vẹn nhịp tăng giá kéo dài của "vua bán lẻ".</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Và dĩ nhiên, không thể không nhắc đến <strong>FPT</strong>. Năm 2019 đánh dấu một bước ngoặt của tập đoàn này: Họ quyết định thoái vốn khỏi mảng bán lẻ và phân phối (FPT Retail, Synnex FPT) để dồn toàn lực biến thành một công ty Công nghệ và Viễn thông thuần túy.</p>
  <p>Sự tập trung này lập tức phản ánh vào biên lợi nhuận. Lợi nhuận từ xuất khẩu phần mềm tăng vọt. Mức định giá P/E 10x của FPT trở nên quá rẻ rúng. VESAF gia tăng tỷ trọng, biến FPT thành Top Holdings (Mã chiếm tỷ trọng lớn nhất) trong danh mục.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Một điểm đặc biệt trong triết lý của VESAF là tính kỷ luật (Discipline). Trong một thị trường buồn ngủ, rất dễ bị cám dỗ bởi những "đội lái" vẽ ra những câu chuyện sáp nhập ảo tưởng để thổi giá cổ phiếu rác.</p>
  <p>Mỗi tuần, Ủy ban Đầu tư của VinaCapital đều ngồi lại để rà soát danh mục. Bất kỳ công ty nào có dấu hiệu suy giảm về quản trị công ty (Corporate Governance) hoặc dòng tiền mờ ám đều bị loại bỏ ngay lập tức, dù đồ thị kỹ thuật có đẹp đến đâu.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự phân hóa của thị trường trong năm 2019 cực kỳ khốc liệt. Trong khi các cổ phiếu dầu khí, ngân hàng, và bất động sản đầu cơ "nằm bẹp" vì thiếu vắng dòng tiền, thì các cổ phiếu có nền tảng cơ bản tốt mà VESAF lựa chọn lại liên tục vượt đỉnh lịch sử.</p>
  <p>Đây là năm chứng minh rõ nét nhất sự khác biệt giữa "Đầu tư" và "Đầu cơ". Đầu cơ cần có sóng (Trend) để kiếm tiền. Còn đầu tư Giá trị chỉ cần doanh nghiệp làm ăn có lãi và chia cổ tức đều đặn.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2019, VN-Index chỉ nhích lên vỏn vẹn +7,6%, một con số đủ để bù lạm phát. Tuy nhiên, quỹ VESAF đã xuất sắc đạt mức lợi nhuận <strong>+9,2%</strong>, đánh bại hoàn toàn chỉ số tham chiếu.</p>
  <p>Chính trong những năm tháng đi ngang nhàm chán này, nền móng vững chắc của VESAF được củng cố. Các nhà đầu tư ủy thác bắt đầu nhận ra rằng, VinaCapital không chỉ bảo vệ tiền của họ trong bão táp (2018), mà còn biết cách vắt ra lợi nhuận ngay cả khi thị trường khô hạn (2019).</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tháng 12/2019, các bản tin quốc tế bắt đầu nhắc đến những ca viêm phổi lạ xuất hiện tại Vũ Hán, Trung Quốc. Không một ai trong giới tài chính, kể cả những bộ óc vĩ đại nhất ở Phố Wall, mường tượng được thảm họa sắp xảy ra.</p>
  <p>Năm 2020 sắp đến, mang theo một Thiên nga đen rùng rợn nhất trong một thế kỷ qua. Và VESAF sẽ phải đối mặt với thử thách chưa từng có, đòi hỏi một cú "Pivot" (Xoay trục) quyết liệt định hình lại toàn bộ cuộc chơi.</p>`
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

export const vesaf2019Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
