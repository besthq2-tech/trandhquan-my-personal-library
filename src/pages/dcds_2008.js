const html = `
<section class="page active" id="page-dcds-2008" data-route="/minds/dcds-2008" data-title="The Abyss">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2008
    </div>
    <h1 style="margin-bottom: 8px;">The Abyss</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2008. Thảm họa kép từ lạm phát đình đốn và khủng hoảng tài chính toàn cầu. Trả giá đắt vì ôm nhóm ngân hàng.</p>

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
  `<img src="/images/dcds2008_1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2008 là một năm mà bất cứ ai làm nghề tài chính tại Việt Nam cũng muốn xóa khỏi ký ức. Đó không phải là một đợt điều chỉnh (correction), đó là sự sụp đổ toàn diện (collapse). Nó giống như việc bạn đang khiêu vũ trên đỉnh tòa nhà chọc trời thì bất ngờ một cơn động đất giật sập toàn bộ móng.</p>
  <p>Thảm họa bắt đầu không phải từ Phố Wall, mà từ chính nội tại nền kinh tế Việt Nam. Lạm phát bùng nổ lên mức phi mã 23%. Ngân hàng Nhà nước buộc phải đạp phanh gấp bằng cách tăng lãi suất cơ bản liên tục. Lãi suất cho vay trên thị trường nhảy vọt lên mức 21%, thậm chí 25%/năm. Mạch máu tín dụng nuôi dưỡng nền kinh tế bị cắt đứt đột ngột.</p>`,

  // Page 2
  `<img src="/images/dcds2008_2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Điều tồi tệ nhất là Việt Nam lại phải đối mặt với một cú đấm bồi từ bên ngoài: Cuộc khủng hoảng tài chính toàn cầu bắt nguồn từ sự sụp đổ của Lehman Brothers. Dòng tiền ngoại - vốn là động lực chính kéo thị trường đi lên trong giai đoạn 2006-2007 - bắt đầu tháo chạy ồ ạt để cứu lấy chính mình ở quê nhà.</p>
  <p>Thị trường chứng khoán Việt Nam rơi tự do. Chỉ số VN-Index bốc hơi hơn 70%, từ vùng đỉnh 1.170 điểm xuống còn khoảng 315 điểm. Hàng ngàn tài khoản bị giải chấp (margin call) mỗi ngày. Bảng điện tử bị bao trùm bởi một màu xanh lơ tuyệt vọng của giá sàn.</p>`,

  // Page 3
  `<img src="/images/dcds2008_3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Trong bối cảnh hỗn loạn đó, bạn không thể nói về "cổ phiếu thành công". Thành công duy nhất của các nhà quản lý quỹ trong năm 2008 là giữ được tiền mặt và không bị ngân hàng gọi tên giải chấp. May mắn thay, cấu trúc quỹ đại chúng của VF1 hoàn toàn cấm việc sử dụng đòn bẩy tài chính (margin). Điều đó đã cứu chúng tôi khỏi việc bị ép bán (forced selling) ở đáy.</p>
  <p>Nhưng không sử dụng đòn bẩy không có nghĩa là chúng tôi miễn nhiễm với sát thương. Khi thị trường sụp đổ, các mô hình định giá DCF hay P/E trở nên hoàn toàn vô nghĩa. Mọi tài sản, dù là kim cương hay rác rưởi, đều bị bán tháo không thương tiếc để thu tiền mặt.</p>`,

  // Page 4
  `<img src="/images/dcds2008_4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sai lầm chí mạng nhất của chúng tôi trong giai đoạn này là sự chậm trễ trong việc xả hàng nhóm cổ phiếu Tài chính và Ngân hàng. Chúng tôi đã ôm một tỷ trọng lớn các cổ phiếu ngân hàng trên cả sàn niêm yết và thị trường OTC (như STB, ACB). Luận điểm trước đó của chúng tôi là các ngân hàng sẽ tiếp tục tăng trưởng mạnh nhờ tín dụng tiêu dùng và bán lẻ.</p>
  <p>Nhưng chúng tôi đã đánh giá quá thấp sự tàn phá của mức lãi suất 25%/năm lên bảng cân đối kế toán của ngân hàng. Khi doanh nghiệp phá sản vì lãi suất cao, nợ xấu hệ thống lập tức tăng vọt. Cổ phiếu ngân hàng, từ chỗ là "cỗ máy in tiền", bỗng trở thành những "hố đen" hút mất vốn của quỹ.</p>`,

  // Page 5
  `<img src="/images/dcds2008_5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Việc bán các cổ phiếu ngân hàng trên thị trường OTC lúc này gần như là điều bất khả thi. Thanh khoản hoàn toàn đóng băng. Một cổ phiếu ngân hàng (chưa lên sàn) từng được tranh nhau mua với giá 100.000 VNĐ, nay rao bán với giá 20.000 VNĐ cũng không có người đoái hoài. Bạn đang ôm một khối tài sản trên giấy mà không thể chuyển hóa thành tiền.</p>
  <p>Đây là hậu quả trực tiếp của lòng tham trong giai đoạn siêu bong bóng. Chúng tôi đã phải ghi nhận những khoản lỗ từ chênh lệch giá chưa thực hiện (unrealized losses) lên tới hàng ngàn tỷ đồng.</p>`,

  // Page 6
  `<img src="/images/dcds2008_6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Trong năm 2008, những cuộc điện thoại từ khách hàng là một nỗi ám ảnh. Nhà đầu tư hoảng loạn, tức giận, và đôi khi là tuyệt vọng. Thị giá chứng chỉ quỹ VF1 trên sàn HOSE sụt giảm mạnh mẽ, rớt xuống thấp hơn rất nhiều so với Giá trị Tài sản Ròng (NAV). Mức chiết khấu khổng lồ này khiến nỗi đau của các cổ đông càng bị khoét sâu.</p>
  <p>Chúng tôi phải liên tục tổ chức các buổi gặp gỡ, gửi thư giải trình. Thông điệp duy nhất có thể đưa ra lúc đó là: "Quỹ không dùng đòn bẩy. Danh mục của chúng ta vẫn bao gồm những doanh nghiệp đầu ngành như VNM, FPT. Lãi suất không thể ở mức 25% mãi mãi. Bán tháo lúc này là tự cắt đứt cơ hội phục hồi".</p>`,

  // Page 7
  `<img src="/images/dcds2008_7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Kết thúc năm 2008, bảng thành tích của quỹ là một màu đỏ thẫm. <strong>Giá trị Tài sản Ròng (NAV) của VF1 sụt giảm tới -52,6%</strong>. Tổng tài sản lùi sâu về mức 1.697 tỷ đồng. Quỹ báo lỗ và không thể chia cổ tức.</p>
  <p>Mặc dù mức giảm -52,6% của NAV vẫn nhẹ hơn so với mức giảm hơn -70% của VN-Index (cho thấy khả năng phòng thủ tương đối của danh mục đầu tư cơ bản so với thị trường chung), nhưng đó hoàn toàn không phải là điều đáng tự hào. Nó là một cú tát tỉnh người về sự nghiệt ngã của chu kỳ kinh tế.</p>`,

  // Page 8
  `<img src="/images/dcds2008_8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đứng nhìn biểu đồ VN-Index rơi tự do từ 1.170 xuống sát 300, tôi nhận ra bài học lớn nhất trong nghề đầu tư: <strong>Đừng bao giờ chiến đấu chống lại Ngân hàng Trung ương</strong>. Khi vĩ mô xoay trục và lãi suất bị đẩy lên mức cắt cổ, không một cổ phiếu xuất sắc nào có thể trụ vững.</p>
  <p>Năm 2008 đã thiêu rụi thành quả của nhiều năm trước đó. Nhưng từ trong đống tro tàn của sự hoảng loạn, những doanh nghiệp yếu kém đã bị loại bỏ, và những doanh nghiệp tốt bị bán tống bán tháo xuống mức giá rẻ không tưởng. Chúng tôi gạt bỏ sự tuyệt vọng, rà soát lại danh mục, và chuẩn bị đạn dược. Vì lịch sử luôn chứng minh: Đáy của khủng hoảng chính là nơi sản sinh ra những tỷ suất lợi nhuận vĩ đại nhất.</p>`
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

export const dcds2008Pages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
