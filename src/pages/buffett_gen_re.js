const html = `
<section class="page active" id="page-buffett-genre" data-route="/minds/buffett-gen-re" data-title="Writing Policies for the End of the World">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">01 · Inner Monologues</a> · Warren Buffett
    </div>
    <h1 style="margin-bottom: 8px;">Writing Policies for the End of the World</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Omaha, 1998. Thương vụ General Re và bước ngoặt trở thành pháo đài tài chính toàn cầu.</p>

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

let genrePagesRaw = [
  // Page 1
  `<img src="/images/genre1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 1998, thị trường chứng khoán Mỹ đang trong cơn say sưa tột độ. Bong bóng dot-com đang phình to, và mọi người trên Phố Wall đều cư xử như thể cây cối có thể mọc dài tới tận trời xanh. Cổ phiếu của Berkshire Hathaway cũng không ngoại lệ, nó đang được giao dịch ở mức giá mà ngay cả tôi cũng cảm thấy hơi ngột ngạt.</p>
  <p>Tôi hiếm khi phát hành thêm cổ phiếu Berkshire. Đối với tôi, mỗi cổ phiếu A giống như một mảnh linh hồn của công ty, một thứ tài sản quý giá không bao giờ được phép mang ra pha loãng một cách phù phiếm. Nhưng khi một thứ gì đó được định giá rất cao, điều khôn ngoan nhất là dùng nó như một loại tiền tệ để mua một thứ khác có giá trị thực chất vững bền hơn.</p>`,

  // Page 2
  `<img src="/images/genre2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đó là lý do đưa tôi đến với General Reinsurance (General Re). Nếu GEICO là chiếc khiên bảo vệ những tài xế gia đình trên đường cao tốc, thì General Re là một con quái vật hoàn toàn khác. Nó là công ty tái bảo hiểm lớn nhất nước Mỹ. Nó không bán bảo hiểm cho người dân. Nó bán bảo hiểm cho các công ty bảo hiểm khác.</p>
  <p>Đó là một ngành kinh doanh kỳ lạ và tĩnh lặng. Bạn thu về hàng tỷ đô la tiền phí bảo hiểm, và có thể trong suốt mười năm, bầu trời vẫn trong xanh. Bảng cân đối kế toán của bạn phình to ra với một lượng "Float" khổng lồ. Và rồi, một buổi sáng thức dậy, một trận động đất mạnh 8 độ Richter xé toạc California, hoặc một siêu bão san phẳng Florida.</p>`,

  // Page 3
  `<img src="/images/genre3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi những thảm họa "siêu cấp" (super-catastrophes) đó xảy ra, các công ty bảo hiểm nhỏ lẻ sẽ bị quét sạch. Họ không đủ tiền để đền bù. Đó là lúc họ tìm đến các công ty tái bảo hiểm như General Re. Chúng tôi là người hứng chịu cú sốc cuối cùng của hệ thống. Chúng tôi viết những tờ séc đền bù trị giá hàng chục tỷ đô la.</p>
  <p>Để tồn tại trong ngành này, bạn không chỉ cần giỏi toán. Bạn cần một thứ mà không một đối thủ cạnh tranh nào trên thế giới có được: Khả năng chịu đựng đau đớn tài chính tuyệt đối. Bạn phải sở hữu một Pháo đài Tài chính không thể bị xuyên thủng.</p>`,

  // Page 4
  `<img src="/images/genre4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Giá chào mua là 22 tỷ đô la, trả hoàn toàn bằng cổ phiếu Berkshire Hathaway. Đây là thương vụ lớn nhất trong lịch sử của chúng tôi. Khi tôi xem xét các con số, tôi không chỉ nhìn vào lợi nhuận biên hiện tại. Tôi nhìn vào ngọn núi "Float" khổng lồ - khoảng 15 tỷ đô la tiền mặt - mà General Re sẽ mang lại.</p>
  <p>Mười lăm tỷ đô la tiền mặt miễn phí, đổ thẳng vào kho bạc của Berkshire. Nếu tôi có thể mang số tiền đó đi đầu tư vào những doanh nghiệp tuyệt vời với lợi suất 15% hoặc 20%, thì lợi ích mang lại sẽ làm lu mờ mọi chi phí rủi ro.</p>`,

  // Page 5
  `<img src="/images/genre5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng quyết định này mang theo một gánh nặng tâm lý sâu sắc. Tôi nhớ mình đã đứng bên cửa sổ văn phòng ở Kiewit Plaza, nhìn ra đường phố Omaha vắng lặng. Nếu mua General Re, Berkshire sẽ không còn là một công ty đầu tư khổng lồ nữa. Chúng tôi sẽ bước qua một ranh giới vô hình.</p>
  <p>Chúng tôi sẽ trở thành người bảo lãnh cho những sự kiện tồi tệ nhất có thể xảy ra trên Trái Đất. Chúng tôi đang thực sự bán những bản hợp đồng bảo hiểm cho "ngày tận thế". Nếu một cơn bão cấp 5 đánh thẳng vào Miami, hoặc nếu một thảm họa tàn khốc giáng xuống New York... tiếng điện thoại reo đầu tiên sẽ là gọi cho tôi.</p>`,

  // Page 6
  `<img src="/images/genre6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Lý trí mách bảo tôi rằng mô hình rủi ro của General Re có những lỗ hổng. Họ có những bộ phận phái sinh (derivatives) phức tạp mà Charlie Munger thường gọi là "vũ khí hủy diệt hàng loạt về tài chính". Họ có những văn hóa quản lý lỏng lẻo hơn tôi nghĩ. Sẽ có máu chảy. Sẽ có những khoản lỗ lên đến hàng tỷ đô la trong tương lai chờ đợi chúng tôi.</p>
  <p>Và thực tế sau này đã chứng minh điều đó. Cuộc khủng hoảng 11/9, những vụ bê bối kế toán, những cơn bão kỷ lục. Mua General Re giống như việc nuốt trọn một con trăn khổng lồ, nó đau đớn và suýt làm chúng tôi nghẹt thở trong những năm đầu tiên.</p>`,

  // Page 7
  `<img src="/images/genre7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng vào khoảnh khắc năm 1998 đó, tôi biết mình phải nhấn nút. Bởi vì tôi nhìn xa hơn những thập kỷ rắc rối trước mắt. Tôi nhìn thấy bức tranh hoàn chỉnh của một cỗ máy lãi kép vĩnh cửu. Để Berkshire Hathaway tồn tại qua hàng thế kỷ, nó phải trở thành thứ mà không ai khác có thể sao chép.</p>
  <p>Bất cứ ai cũng có thể mở một quỹ đầu tư. Nhưng không ai, không một ai trên hành tinh này, có đủ lượng vốn vô hạn, sự điềm tĩnh và kỷ luật sắt đá để viết một tờ séc bồi thường 5 tỷ đô la vào ngày mai mà không hề chớp mắt. General Re sẽ cho chúng tôi quy mô đó.</p>`,

  // Page 8
  `<img src="/images/genre8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi chữ ký cuối cùng được đặt xuống, và 22 tỷ đô la cổ phiếu được chuyển giao, tôi tựa lưng vào ghế. Từ một gã thanh niên lang thang thu nhặt những mẩu xì gà dệt may rẻ rúng, giờ đây tôi đã nắm trong tay một đế chế gánh vác rủi ro của toàn cầu.</p>
  <p>Bầu trời Omaha vẫn trong xanh tĩnh lặng. Nhưng ở một nơi nào đó trên thế giới, một cơn bão đang hình thành. Và khi cơn bão đó đổ bộ, cuốn trôi đi mọi sự ảo tưởng của thị trường tài chính, Berkshire Hathaway sẽ đứng đó, vững chãi như một pháo đài bằng đá nguyên khối. Đó không chỉ là một thương vụ. Đó là sự chuyển mình trở thành một Titan thực sự.</p>`
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

export const genrePages = genrePagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
