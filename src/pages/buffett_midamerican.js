const html = `
<section class="page active" id="page-buffett-midamerican" data-route="/minds/buffett-midamerican" data-title="Powering the Nation">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">01 · Inner Monologues</a> · Warren Buffett
    </div>
    <h1 style="margin-bottom: 8px;">Powering the Nation</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Omaha, 1999. Bước chân vào MidAmerican Energy và kỷ nguyên của những gã khổng lồ hạ tầng.</p>

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

let midAmericanPagesRaw = [
  // Page 1
  `<img src="/images/midamerican1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Walter Scott là một người bạn thuở nhỏ của tôi. Chúng tôi lớn lên cùng nhau ở Omaha. Năm 1999, ông ấy và David Sokol đến gặp tôi với một lời đề nghị. Họ điều hành MidAmerican Energy, một công ty điện lực lớn, và họ đang tìm kiếm một đối tác có túi tiền đủ sâu để đưa công ty này ra khỏi sàn chứng khoán đại chúng.</p>
  <p>Vào cuối thập niên 90, mọi người đều đang phát điên vì cổ phiếu công nghệ. Những công ty thậm chí chưa bao giờ làm ra một đồng lợi nhuận nào lại được định giá hàng chục tỷ đô la. Trong bối cảnh đó, ngành tiện ích năng lượng (utilities) bị xem là một con khủng long chậm chạp, buồn tẻ và đáng quên.</p>`,

  // Page 2
  `<img src="/images/midamerican2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhiều thập kỷ qua, triết lý đầu tư của tôi và Charlie luôn là tìm kiếm những doanh nghiệp "vốn ít, lợi nhuận cao" như See's Candies hay Coca-Cola. Những doanh nghiệp có thể mở rộng quy mô mà không cần phải liên tục đắp thêm tiền vào nhà máy hay máy móc. Thế nhưng, MidAmerican lại là thái cực hoàn toàn ngược lại.</p>
  <p>Ngành điện lực là một cái hố đen khổng lồ hút vốn. Bạn phải xây dựng các nhà máy điện trị giá hàng tỷ đô la, kéo hàng vạn dặm đường dây cáp, và liên tục bảo trì chúng. Nó là một ngành kinh doanh cực kỳ "nặng tài sản" (asset-heavy). Tại sao tôi lại muốn dính vào một thứ như vậy?</p>`,

  // Page 3
  `<img src="/images/midamerican3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng khi tôi nhìn sâu hơn, tôi nhận ra một sức hấp dẫn chết người. Năng lượng không phải là một mặt hàng tự chọn; nó là nền tảng của nền văn minh. Người ta có thể ngừng uống nước ngọt khi hết tiền, nhưng họ không thể ngừng bật đèn sáng. Ngành này về bản chất là một thị trường độc quyền tự nhiên được nhà nước điều tiết.</p>
  <p>Chính phủ quy định giá bán điện để đảm bảo các công ty tiện ích luôn có được một mức lợi nhuận hợp lý, thường là khoảng 10-12% trên vốn chủ sở hữu (ROE). Nó giống như một trái phiếu được bảo vệ chống lạm phát, trả lãi suất cao và tồn tại vĩnh viễn.</p>`,

  // Page 4
  `<img src="/images/midamerican4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Vấn đề lớn nhất của Berkshire Hathaway lúc này là chúng tôi có quá nhiều tiền mặt từ "Float" của GEICO và General Re. Những dòng sông tiền cứ cuồn cuộn chảy về Omaha mỗi ngày, và tôi đang dần cạn kiệt những công ty tuyệt vời trên thị trường chứng khoán để mua với giá hợp lý.</p>
  <p>MidAmerican giải quyết bài toán đó một cách hoàn hảo. Thay vì lo lắng không biết cất hàng chục tỷ đô la vào đâu, ngành năng lượng cho phép chúng tôi "chôn" số tiền đó xuống đất một cách an toàn và hợp pháp, và đảm bảo rằng nó sẽ sinh sôi nảy nở ổn định qua nhiều thập kỷ.</p>`,

  // Page 5
  `<img src="/images/midamerican5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thế là tôi gật đầu. Berkshire mua cổ phần kiểm soát của MidAmerican. Nhưng bí mật thực sự nằm ở một thỏa thuận chưa từng có tiền lệ. Thông thường, các cổ đông của ngành điện lực đòi hỏi công ty phải trả cổ tức tiền mặt đều đặn hàng năm. Phố Wall yêu thích cổ tức.</p>
  <p>Nhưng tôi nói với Walter và David: "Hãy giữ lại mọi đồng xu các anh làm ra. Không có bất kỳ khoản cổ tức nào được trả về Berkshire. Hãy lấy toàn bộ lợi nhuận đó, cộng thêm tiền từ Berkshire nếu cần, và tái đầu tư vào việc xây dựng mạng lưới điện, các trang trại năng lượng mặt trời và điện gió mới."</p>`,

  // Page 6
  `<img src="/images/midamerican6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đó là một lợi thế cạnh tranh tuyệt đối. Các công ty điện lực khác không thể mở rộng mạnh mẽ vì họ phải bòn rút tiền mặt để trả cổ tức cho các cổ đông ngắn hạn. MidAmerican (sau này đổi tên thành Berkshire Hathaway Energy) thì khác. Chúng tôi giữ lại 100% lợi nhuận.</p>
  <p>Trong 20 năm tiếp theo, từ số tiền 2 tỷ đô la ban đầu, chúng tôi đã tái đầu tư hàng chục tỷ đô la. Chúng tôi đã xây dựng nên những trang trại điện gió khổng lồ kéo dài tận chân trời ở Iowa. Chúng tôi mua lại các đường ống dẫn khí đốt và công ty lưới điện ở Anh Quốc. Không ai có thể bắt kịp chúng tôi về quy mô tái đầu tư.</p>`,

  // Page 7
  `<img src="/images/midamerican7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Những tay lướt sóng trên Phố Wall trong thập niên 90 coi thường thương vụ này. Họ nghĩ lợi nhuận 11%/năm là quá nhàm chán so với việc mua cổ phiếu của một công ty dot-com có đuôi ".com". Họ không hiểu sức mạnh của lãi kép khi nó được áp dụng lên những con số khổng lồ không bị gián đoạn.</p>
  <p>MidAmerican đã dạy tôi một bài học mới: Một doanh nghiệp đòi hỏi nguồn vốn lớn không hẳn là tồi, miễn là lợi suất trên số vốn tăng thêm đó được đảm bảo hợp lý. Nó giống như việc tìm được một ngân hàng kỳ diệu, nơi bạn có thể gửi số tiền vô hạn với lãi suất 11% và không bao giờ phải rút ra.</p>`,

  // Page 8
  `<img src="/images/midamerican8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Hôm nay, khi tôi bật đèn trong văn phòng làm việc của mình, tôi biết dòng điện đó rất có thể đang được sản xuất bởi chính công ty của chúng tôi. Berkshire Hathaway đã tiến hóa. Chúng tôi không chỉ sở hữu những nhãn hiệu kẹo ngọt hay công ty bảo hiểm xe hơi nữa.</p>
  <p>Chúng tôi đã trở thành nền tảng hạ tầng cốt lõi của nền kinh tế Mỹ. Khi bạn kiểm soát những thứ cung cấp năng lượng cho hàng triệu ngôi nhà, di chuyển hàng hóa xuyên quốc gia (BNSF Railway sau này), bạn không chỉ kiếm tiền. Bạn đang thực sự vận hành nhịp đập của một cường quốc. Và điều đó, thú thực, còn vĩ đại hơn bất kỳ bảng điện tử nhấp nháy nào trên Phố Wall.</p>`
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

export const midamericanPages = midAmericanPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
