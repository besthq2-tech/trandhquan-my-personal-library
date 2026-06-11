const html = `
<section class="page active" id="page-buffett-alleghany" data-route="/minds/buffett-alleghany" data-title="The Echoes of Patience">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">01 · Inner Monologues</a> · Warren Buffett
    </div>
    <h1 style="margin-bottom: 8px;">The Echoes of Patience</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Omaha, 2022. Thâu tóm Alleghany Corporation và quyền lực của việc chờ đợi suốt 60 năm.</p>

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

let alleghanyPagesRaw = [
  // Page 1
  `<img src="/images/alleghany1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thế giới ngoài kia đang chuyển động với tốc độ chóng mặt. Năm 2022, mọi người bàn tán về tiền điện tử, về các quỹ ETF đổi mới sáng tạo, và những công ty công nghệ chưa bao giờ có lãi nhưng được định giá hằng trăm tỷ đô la. Bảng điện tử nhấp nháy liên hồi, các kênh truyền hình tài chính gào thét mỗi ngày. Còn tôi? Ở tuổi 91, tôi vẫn ngồi trong văn phòng ở Omaha, đọc những bản báo cáo thường niên in trên giấy.</p>
  <p>Và tôi đã đọc báo cáo của Alleghany Corporation suốt 60 năm qua. Vâng, sáu thập kỷ. Kể từ khi tôi còn là một chàng trai trẻ ở New York, tôi đã theo dõi họ. Bạn không thể hiểu một doanh nghiệp chỉ bằng cách nhìn vào biểu đồ giá cổ phiếu của nó trong sáu tháng. Bạn hiểu nó bằng cách nhìn cách nó phản ứng qua sáu cuộc suy thoái.</p>`,

  // Page 2
  `<img src="/images/alleghany2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Vào một tối tháng Ba năm 2022, tôi bay đến New York và ăn tối cùng Joe Brandon. Joe không phải là người xa lạ. Cậu ấy từng là học trò của tôi, từng điều hành General Re cho Berkshire Hathaway một cách xuất sắc vào đầu những năm 2000. Bây giờ, Joe đang là CEO của Alleghany.</p>
  <p>Bữa tối đó không giống một cuộc đàm phán thâu tóm thù địch chớp nhoáng trên Phố Wall. Nó giống một cuộc hội ngộ của những người lính già. Chúng tôi nói về bảo hiểm, về rủi ro, về những nguyên lý cốt lõi không bao giờ thay đổi. Cuối bữa ăn, tôi đưa ra một mức giá: 848.02 đô la cho mỗi cổ phiếu. Không phải 850. Tôi không tin vào những con số làm tròn. Nó phải là con số chính xác dựa trên giá trị nội tại.</p>`,

  // Page 3
  `<img src="/images/alleghany3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Alleghany thường được giới tài chính gọi là một "Berkshire thu nhỏ". Họ hoạt động dựa trên cùng một nguyên lý mà tôi đã xây dựng nên đế chế của mình: Mảng kinh doanh cốt lõi là bảo hiểm nhân thọ và tài sản, tạo ra một nguồn tiền "Float" ổn định. Và họ dùng nguồn Float đó để mua lại và nắm giữ các doanh nghiệp công nghiệp, đồ chơi, thép (thông qua Alleghany Capital).</p>
  <p>Thâu tóm Alleghany giống như việc tìm thấy một mảnh ghép puzzle được cắt chính xác bằng laser để khớp vào một lỗ hổng trong lâu đài của chúng tôi. Văn hóa của họ, sự thận trọng của họ, và sự hiểu biết về rủi ro của họ hoàn toàn đồng điệu với Berkshire.</p>`,

  // Page 4
  `<img src="/images/alleghany4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Có một điều khiến giới truyền thông luôn chế nhạo tôi trong nhiều năm trước đó: Berkshire đang ngồi trên đống tiền mặt khổng lồ, hơn 140 tỷ đô la. Họ bảo tôi đã mất đi sự nhạy bén, bảo tôi nhát gan khi không lao vào những "kỳ lân công nghệ" đang tăng giá phi mã. Họ không hiểu sức mạnh của sự kiên nhẫn.</p>
  <p>Bạn không vung gậy vào những quả bóng ngoài vùng tấn công chỉ vì khán giả đang la ó. Bạn chờ đợi. Tiền mặt không phải là rác rưởi như nhiều người lầm tưởng, tiền mặt là một quyền chọn vô hạn. Và khi Alleghany xuất hiện, tôi có thể ngay lập tức viết một tấm séc 11.6 tỷ đô la tiền mặt mà không cần phải đi gõ cửa bất kỳ ngân hàng nào để vay nợ.</p>`,

  // Page 5
  `<img src="/images/alleghany5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 2022 là một năm khắc nghiệt. Lãi suất bắt đầu tăng mạnh, các bong bóng tài sản bắt đầu xì hơi. Tiền điện tử sụp đổ, những cổ phiếu được định giá bằng "tầm nhìn" bốc hơi hàng nghìn tỷ đô la giá trị. Những người từng cười nhạo những doanh nghiệp "cổ lỗ sĩ" đột nhiên thức tỉnh trong một cơn ác mộng.</p>
  <p>Giữa cơn bão đó, Berkshire Hathaway làm gì? Chúng tôi quay trở về với cội nguồn. Chúng tôi mua bảo hiểm. Chúng tôi mua dòng tiền tự do. Chúng tôi mua thứ rủi ro có thể tính toán toán học. Alleghany là một pháo đài phòng thủ vững chắc giữa lúc cả thế giới đang tìm chỗ nấp.</p>`,

  // Page 6
  `<img src="/images/alleghany6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Một điểm khiến tôi cực kỳ yên tâm trong thương vụ này chính là Joe Brandon. Trong bảo hiểm, tin tưởng người cầm lái là điều quan trọng nhất. Nếu một CEO bảo hiểm muốn tăng trưởng ảo, ông ta có thể hạ thấp tiêu chuẩn đánh giá rủi ro, nhận về hàng loạt hợp đồng tồi tệ để lấy doanh thu ngay lập tức, và để lại một quả bom hẹn giờ cho người kế nhiệm 5 năm sau.</p>
  <p>Nhưng Joe là người của tôi. Cậu ấy hiểu rằng "không làm gì cả" thà tốt hơn là nhận một rủi ro ngu ngốc. Đưa Joe trở lại dưới mái nhà Berkshire giống như việc đón một vị tướng quân tài ba trở về để trấn giữ một mảng tường thành trọng yếu.</p>`,

  // Page 7
  `<img src="/images/alleghany7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Với 11.6 tỷ đô la, Alleghany không phải là thương vụ lớn nhất của Berkshire, nhưng nó mang tính biểu tượng sâu sắc. Nó chứng minh rằng nguyên lý lãi kép và sự kỷ luật vẫn hoạt động ở thế kỷ 21 y hệt như nó đã từng ở thế kỷ 20. Bản chất con người không thay đổi. Nỗi sợ hãi và lòng tham không thay đổi.</p>
  <p>Thương vụ được chốt lại chỉ sau vài tuần, không có sự can thiệp của hàng tá ngân hàng đầu tư tính phí cắt cổ, không có những trò chơi truyền thông. Đơn giản là hai bên biết rõ giá trị của nhau và đi đến một cái bắt tay.</p>`,

  // Page 8
  `<img src="/images/alleghany8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chiều nay, khi gấp tờ báo Wall Street Journal lại, tôi nhìn ra ngoài khung cửa sổ tĩnh lặng của Omaha. Người ta thường hỏi bí quyết đầu tư của tôi là gì. Tôi mỉm cười. Bí quyết nằm ở chỗ tôi đã đọc báo cáo của Alleghany từ thời Tổng thống Kennedy còn tại vị, và tôi đã chờ đợi đến tận nhiệm kỳ của Tổng thống Biden mới ra tay mua nó.</p>
  <p>Thời gian là kẻ thù của những doanh nghiệp tầm thường, nhưng là người bạn tuyệt vời của những doanh nghiệp vĩ đại. Và đối với một nhà đầu tư, thời gian, sự tĩnh lặng và khả năng nói "Không" hàng nghìn lần chính là tài sản quý giá nhất trên đời.</p>`
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

export const alleghanyPages = alleghanyPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
