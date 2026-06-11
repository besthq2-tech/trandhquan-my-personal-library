const html = `
<section class="page active" id="page-buffett-pcc" data-route="/minds/buffett-pcc" data-title="The Forging of a Moat">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">01 · Inner Monologues</a> · Warren Buffett
    </div>
    <h1 style="margin-bottom: 8px;">The Forging of a Moat</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Omaha, 2016. Thâu tóm Precision Castparts và quyền lực tuyệt đối của sự hoàn hảo.</p>

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

let pccPagesRaw = [
  // Page 1
  `<img src="/images/pcc1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Khi bạn nhìn lên bầu trời và thấy một chiếc Boeing hay Airbus khổng lồ lướt qua những đám mây, bạn hiếm khi nghĩ về những mảnh kim loại nhỏ bé đang quay cuồng bên trong động cơ của chúng. Những cánh quạt turbine đó phải chịu đựng một môi trường khắc nghiệt vượt xa trí tưởng tượng của con người: nhiệt độ có thể làm tan chảy thép thông thường và áp lực ly tâm đủ sức xé toạc một chiếc xe tăng.</p>
  <p>Đó chính là vương quốc của Precision Castparts (PCC). Một công ty sản xuất công nghiệp nằm ở Portland, Oregon. Họ không sản xuất máy bay, họ rèn đúc và chế tạo những bộ phận kim loại phức tạp nhất, quan trọng nhất cho động cơ phản lực.</p>`,

  // Page 2
  `<img src="/images/pcc2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Vào đầu năm 2015, Todd Combs – một trong những nhà quản lý danh mục đầu tư của tôi tại Berkshire – bắt đầu mua cổ phiếu của PCC. Todd là một chàng trai sắc sảo. Khi cậu ấy giải thích cho tôi về mô hình kinh doanh của PCC, tôi nhận ra ngay lập tức một thứ mà tôi luôn thèm khát: Một con hào kinh tế sâu thẳm, được xây dựng không phải bằng thương hiệu, mà bằng sự sống còn.</p>
  <p>Hãy nghĩ mà xem. Nếu bạn là GE hay Rolls-Royce đang chế tạo một động cơ phản lực trị giá hàng chục triệu đô la, bạn có dám đổi nhà cung cấp cánh quạt turbine chỉ để tiết kiệm vài xu không? Tuyệt đối không. Bất kỳ một sai sót nhỏ nhất nào ở độ cao 35.000 feet đều là thảm họa. Bạn sẽ chỉ trung thành với nhà sản xuất duy nhất chưa bao giờ làm bạn thất vọng. Lòng tin ở đây không phải là một khái niệm trừu tượng; nó là ranh giới giữa sự sống và cái chết.</p>`,

  // Page 3
  `<img src="/images/pcc3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Và người đứng đầu vương quốc đó là Mark Donegan. Nếu Rose Blumkin là huyền thoại bán lẻ của Omaha, thì Mark là một bản sao nam tính, gai góc của bà trong ngành công nghiệp nặng. Ông ấy không quan tâm đến những buổi tiệc cocktail ở Phố Wall hay những cuộc phỏng vấn trên tạp chí Forbes.</p>
  <p>Mark bị ám ảnh một cách điên rồ với hiệu quả hoạt động. Ông ấy sống trên các tầng sàn nhà máy, soi xét từng quy trình đúc kim loại, cắt giảm sự lãng phí đến mức tàn nhẫn nhất. Khi bạn kết hợp một vị thế độc quyền tự nhiên của sản phẩm với một CEO có độ tập trung cao độ như tia laser, bạn có một thứ phép thuật kinh doanh.</p>`,

  // Page 4
  `<img src="/images/pcc4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tháng 7 năm 2015, Mark và tôi gặp nhau. Không cần quá nhiều những lời sáo rỗng. Tôi hiểu những gì ông ấy đang làm, và ông ấy biết Berkshire là ngôi nhà vĩnh cửu duy nhất có thể cho phép ông tiếp tục làm điều đó mà không bị gián đoạn bởi những cổ đông ngắn hạn luôn đòi hỏi báo cáo quý.</p>
  <p>Chúng tôi đã chốt thỏa thuận trị giá hơn 37 tỷ đô la tiền mặt (bao gồm cả nợ). Đó là thương vụ thâu tóm đắt đỏ nhất trong lịch sử của Berkshire Hathaway tính đến thời điểm đó. Một lần nữa, tôi lại dùng khẩu súng săn voi của mình, và lần này, tôi ngắm vào bầu trời.</p>`,

  // Page 5
  `<img src="/images/pcc5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Có những lời chỉ trích rằng tôi đã trả một cái giá quá cao, một mức thặng dư lớn so với giá thị trường. Nhưng đó là bài học từ Charlie Munger mà tôi đã khắc cốt ghi tâm từ thời mua See's Candies: "Thà mua một công ty tuyệt vời với giá hợp lý, còn hơn mua một công ty tồi tệ với giá hời."</p>
  <p>PCC không phải là một công ty bình thường. Họ cung cấp linh kiện cho gần như mọi chiếc máy bay thương mại trên toàn cầu. Miễn là con người còn muốn bay từ lục địa này sang lục địa khác, miễn là thương mại toàn cầu còn phát triển, PCC sẽ tiếp tục rèn đúc ra tiền mặt.</p>`,

  // Page 6
  `<img src="/images/pcc6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đúng là ngành hàng không mang tính chu kỳ sâu sắc. Sẽ có những năm kinh tế suy thoái, các hãng hàng không hủy đơn đặt hàng, và lợi nhuận của PCC sẽ sụt giảm. Nhưng tại Berkshire, chúng tôi có một thứ vũ khí xa xỉ mà ít tập đoàn nào có được: Chúng tôi không quan tâm đến năm sau.</p>
  <p>Chúng tôi đo lường sự thành công bằng các thập kỷ. Tôi không mua PCC cho những gì nó sẽ làm vào năm 2016 hay 2018. Tôi mua nó vì tôi biết nó sẽ ở đâu vào năm 2040 và 2050.</p>`,

  // Page 7
  `<img src="/images/pcc7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thương vụ PCC là một mảnh ghép hoàn hảo, đánh dấu sự tiến hóa tột bậc của Berkshire Hathaway. Hãy nhìn vào những gì chúng tôi đang sở hữu lúc này. Chúng tôi có GEICO và Gen Re cung cấp nguồn vốn khổng lồ. Chúng tôi có MidAmerican cung cấp năng lượng cho đất nước. Chúng tôi có BNSF Railway vận chuyển hàng hóa xuyên lục địa.</p>
  <p>Và giờ đây, với Precision Castparts, chúng tôi tham gia vào việc vận hành bầu trời. Chúng tôi đã chuyển từ việc nhặt nhạnh những "mẩu xì gà hút dở" thành việc sở hữu chính hệ thống cơ sở hạ tầng duy trì sự vận hành của nước Mỹ và thế giới.</p>`,

  // Page 8
  `<img src="/images/pcc8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Chiều hôm nay, tôi vừa đi dạo quanh Omaha vừa ngước nhìn những vệt khói trắng kéo dài trên nền trời xanh thẳm của một chiếc phi cơ bay ngang qua. Ở độ cao mười ngàn mét, bên trong những khối động cơ rực lửa đó, là những mảnh ghép kim loại mang dấu ấn của Mark Donegan.</p>
  <p>Tôi mỉm cười. Nó không chỉ là kim loại. Nó là sự hoàn hảo. Nó là lòng tin. Và đối với Berkshire Hathaway, nó là minh chứng rõ ràng nhất cho việc: Khi bạn đầu tư vào những giá trị cốt lõi không thể thay thế, thời gian sẽ luôn là người bạn vĩ đại nhất của bạn.</p>`
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

export const pccPages = pccPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
