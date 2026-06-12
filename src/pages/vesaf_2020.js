const html = `
<section class="page active" id="page-vesaf-2020" data-route="/minds/vesaf-2020" data-title="Đảo chiều đại dịch">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/vesaf" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">VESAF</a> · 2020
    </div>
    <h1 style="margin-bottom: 8px;">Đảo chiều đại dịch</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Giữa nỗi hoảng loạn tột độ của COVID-19, VESAF nhìn thấy cơ hội ngàn năm có một để định hình lại danh mục với những mức giá rẻ không tưởng.</p>

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
  <p>Tháng 3/2020. Bản tin buổi sáng của VinaCapital không nói về tỷ giá hay lãi suất, mà nói về số ca nhiễm COVID-19 và lệnh phong tỏa Vũ Hán. Rất nhanh sau đó, "Thiên Nga Đen" chính thức giáng đòn xuống thị trường chứng khoán Việt Nam.</p>
  <p>Chỉ trong vài tuần ngắn ngủi, VN-Index bốc hơi hơn 30% giá trị, rơi thẳng đứng xuống mốc 650 điểm. Cảnh tượng la liệt lệnh bán sàn trắng bên mua diễn ra mỗi ngày. Các quỹ ngoại kích hoạt lệnh Margin Call và bán tháo bất chấp giá nào. Một nỗi sợ hãi tột cùng bao trùm lấy thị trường.</p>`,

  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng trong phòng họp của VESAF, sự bình tĩnh được đặt lên hàng đầu. Đội ngũ quản lý lật lại bài học kinh điển của Warren Buffett: "Hãy tham lam khi người khác sợ hãi".</p>
  <p>Vấn đề là, tham lam vào cái gì? Giữa lúc chuỗi cung ứng đứt gãy và tiêu dùng đóng băng, chúng tôi nhận ra đây là đợt "Reset" (Thiết lập lại) vĩ đại nhất của thập kỷ. Hàng loạt doanh nghiệp hàng đầu (Blue-chips và Mid-caps) đang bị bán với mức giá rẻ mạt đến mức phi lý, chỉ tương đương giá trị thanh lý tài sản.</p>`,

  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Quyết định xoay trục (Pivot) mang tính lịch sử được đưa ra: Tận dụng tiền mặt dự trữ, mạnh tay giải ngân vào các ngành công nghiệp cốt lõi và xuất khẩu - những lĩnh vực sẽ hưởng lợi lớn nhất khi thế giới mở cửa trở lại hoặc gián đoạn nguồn cung.</p>
  <p>Cái tên đầu tiên được đưa vào tầm ngắm mạnh mẽ là <strong>Hóa Chất Đức Giang (DGC)</strong>. Khi dịch bệnh bùng phát, nhu cầu chất bán dẫn và chất khử trùng toàn cầu tăng vọt, trong khi nguồn cung phốt pho vàng từ Trung Quốc bị gián đoạn. VESAF đã gom DGC với một mức định giá siêu rẻ.</p>`,

  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tiếp đó là <strong>Hòa Phát (HPG)</strong>. Dự án Dung Quất đang ở giai đoạn hái quả ngọt, nhưng thị trường lại bán tháo HPG vì lo ngại bất động sản đóng băng. Chúng tôi hiểu rằng, lợi thế chi phí thấp của HPG sẽ giúp họ đè bẹp các đối thủ trong lúc khó khăn nhất và gia tăng thị phần mạnh mẽ.</p>
  <p>Việc gom mua những cổ phiếu chu kỳ ở ngay vùng đáy hoảng loạn đòi hỏi một thần kinh thép. Bạn phải sẵn sàng chấp nhận việc NAV tiếp tục đỏ thêm 5-10% trước khi nó chạm đáy thật sự.</p>`,

  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đến giữa năm 2020, điều kỳ diệu bắt đầu. Các ngân hàng trung ương toàn cầu, đi đầu là Fed, ồ ạt bơm tiền cứu nền kinh tế. Tiền rẻ ngập tràn hệ thống tài chính. Lãi suất tại Việt Nam cũng hạ xuống mức thấp kỷ lục.</p>
  <p>Dòng tiền F0 (nhà đầu tư cá nhân mới) bắt đầu cuồn cuộn chảy vào thị trường chứng khoán. Những mỏ vàng mà VESAF đã âm thầm đào đắp trong suốt tháng 3 và tháng 4 bắt đầu phát nổ.</p>`,

  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>DGC liên tục thiết lập các đỉnh cao mới khi giá phốt pho thế giới lập kỷ lục. HPG trở thành "Cổ phiếu quốc dân" kéo chỉ số đi lên. <strong>FPT</strong> và <strong>MWG</strong> nhanh chóng phục hồi lại mức giá trước dịch khi chứng minh được sự kiên cường trong mô hình kinh doanh.</p>
  <p>Chúng tôi bắt đầu hái quả ngọt. Việc không hoảng loạn và bám sát giá trị nội tại đã biến cuộc khủng hoảng COVID-19 từ một thảm họa trở thành bệ phóng vĩ đại cho quỹ.</p>`,

  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khép lại năm 2020 đầy biến động, VN-Index phục hồi thần kỳ và kết năm với mức tăng +14,9%. Nhưng đó chưa là gì so với VESAF.</p>
  <p>Quỹ ghi nhận tỷ suất lợi nhuận bùng nổ <strong>+25,6%</strong>. Khoảng cách Outperform (Hiệu suất vượt trội) khổng lồ này khẳng định vị thế của VinaCapital như một trong những "tay chơi" sắc bén nhất trên thị trường trong việc nhận diện điểm uốn của chu kỳ vĩ mô.</p>`,

  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2020 đóng lại trong sự phấn khích tột độ của giới đầu tư toàn cầu. Dòng tiền rẻ vẫn đang chảy xiết, và thị trường chứng khoán Việt Nam chuẩn bị bước vào một cơn điên rồ (Euphoria) chưa từng có.</p>
  <p>Tại văn phòng VinaCapital, mọi người cụng ly chúc mừng. Nhưng trong ánh mắt của các Giám đốc danh mục, có một ngọn lửa tham vọng lớn hơn: Bệ phóng đã được thiết lập xong. Năm 2021 sắp tới sẽ không chỉ là một năm thành công, mà phải là một năm đi vào huyền thoại.</p>`
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

export const vesaf2020Pages = pagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
});

export default html;
