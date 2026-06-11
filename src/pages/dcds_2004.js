const html = `
<section class="page active" id="page-dcds-2004" data-route="/minds/dcds-2004" data-title="The Genesis of a Market">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds/dcds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">DCDS</a> · 2004
    </div>
    <h1 style="margin-bottom: 8px;">The Genesis of a Market</h1>
    <p class="section-desc" style="margin-bottom: 32px;">TP.HCM, 2004. Sự ra đời của quỹ đại chúng đầu tiên tại Việt Nam (VF1/DCDS) giữa vô vàn hoài nghi.</p>

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
  <p>Thành phố Hồ Chí Minh đầu những năm 2000 là một công trường khổng lồ đầy bụi bặm, tiếng ồn và sự sống sục sôi. Những luồng xe máy cuồn cuộn trên đường phố như một dòng sông không bao giờ ngủ. Không khí đặc quánh mùi của cơ hội và sự chuyển mình. Nền kinh tế Việt Nam đang mở cửa, vươn mình khỏi chiếc kén chật hẹp để đón nhận dòng vốn toàn cầu.</p>
  <p>Thế nhưng, thị trường chứng khoán - cái phong vũ biểu của nền kinh tế - lại mới chỉ như một đứa trẻ chập chững biết đi. Trung tâm Giao dịch Chứng khoán ra đời năm 2000, và trên tấm bảng điện tử nhấp nháy thưa thớt ấy, người ta chỉ đếm được lèo tèo vài cái tên như REE hay SAM. Một thị trường sơ khai, bé nhỏ, thiếu thanh khoản và tràn ngập sự dè dặt.</p>`,

  // Page 2
  `<img src="/images/dcds2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhóm chúng tôi tại Dragon Capital đã ở đây từ giữa thập niên 90. Chúng tôi đã thấy được tiềm năng phi thường của đất nước này. Chúng tôi đã gọi vốn từ nước ngoài, đầu tư vào các doanh nghiệp nhà nước cổ phần hóa. Nhưng có một điều khiến chúng tôi trăn trở tột độ: Tại sao người dân Việt Nam lại đứng ngoài sự thịnh vượng của chính đất nước họ?</p>
  <p>Người dân chỉ quen mua vàng, tích trữ đô la, hoặc buôn đất. Khái niệm "đầu tư chứng khoán" nghe giống như một thứ cờ bạc xa xỉ của giới tinh hoa. Khái niệm "ủy thác tiền cho người khác đầu tư hộ" (quỹ đại chúng) lại càng giống một câu chuyện khoa học viễn tưởng.</p>`,

  // Page 3
  `<img src="/images/dcds3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Và thế là ý tưởng về VF1 (Quỹ Đầu tư Chứng khoán Doanh nghiệp Hàng đầu Việt Nam - tiền thân của DCDS) ra đời. Mục tiêu rất hoang đường vào thời điểm đó: Tạo ra quỹ đại chúng đầu tiên của Việt Nam, huy động vốn trực tiếp từ những người dân bình thường, và dùng số tiền đó để mua cổ phần của các doanh nghiệp tốt nhất.</p>
  <p>Nhưng ý tưởng thì rẻ mạt. Hành trình biến nó thành hiện thực giống như việc đi mở đường xuyên qua rừng rậm bằng tay không. Chưa có hành lang pháp lý hoàn chỉnh cho quỹ đại chúng. Chưa có khái niệm "công ty quản lý quỹ" được định nghĩa rõ ràng. Chúng tôi phải ngồi hàng tuần liền với các quan chức Ủy ban Chứng khoán, giải thích, tranh luận, và cùng nhau viết lên những dòng quy định đầu tiên.</p>`,

  // Page 4
  `<img src="/images/dcds4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự hoài nghi đến từ mọi phía. Các ngân hàng không hiểu chúng tôi đang bán cái gì. Báo chí đặt câu hỏi: "Làm sao đảm bảo rằng các anh không ôm tiền bỏ trốn?". Người dân thì lắc đầu: "Tiền của tôi, tôi phải tự giữ. Tại sao tôi phải trả phí để các anh đem đi mua những tờ giấy lộn trên cái sàn giao dịch đó?".</p>
  <p>Tôi nhớ những buổi hội thảo giới thiệu (roadshow) vắng hoe. Những ánh mắt nghi ngờ nhìn chúng tôi như những kẻ bán thuốc dạo. Huy động vốn là một công việc bào mòn thể xác và tinh thần. Chúng tôi đang bán một thứ không thể nhìn thấy, không thể sờ thấy: Chúng tôi đang bán "Niềm tin" vào tương lai của thị trường vốn Việt Nam.</p>`,

  // Page 5
  `<img src="/images/dcds5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Mùa xuân năm 2004. Sau vô vàn nỗ lực đập đá phá đường, giấy phép cuối cùng cũng được cấp. VF1 chính thức ra mắt, với quy mô huy động mục tiêu là 300 tỷ đồng (khoảng gần 20 triệu USD lúc bấy giờ). Nghe có vẻ nhỏ bé so với các quỹ tỷ đô trên thế giới, nhưng ở Việt Nam năm 2004, đó là một con số khổng lồ.</p>
  <p>May mắn thay, cũng chính vào lúc này, nhận thức của một bộ phận nhà đầu tư trong nước đã bắt đầu nhúc nhích. Những thương vụ cổ phần hóa thành công đã tạo ra một tầng lớp có tiền mặt nhàn rỗi. Và sức hút của một "chuyên gia ngoại" mang kinh nghiệm quốc tế đến đầu tư tại thị trường nội địa đã phát huy tác dụng. Chúng tôi huy động thành công.</p>`,

  // Page 6
  `<img src="/images/dcds6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tiếng chuông gõ khai trương giao dịch của chứng chỉ quỹ VF1 trên sàn HOSE vang lên, tiếng kim loại lanh lảnh đánh dấu một kỷ nguyên mới. Lần đầu tiên, một bà nội trợ, một nhân viên văn phòng, với vài triệu đồng trong tay, có thể thông qua chúng tôi để gián tiếp sở hữu một phần của Vinamilk, của REE, của những doanh nghiệp trụ cột đất nước.</p>
  <p>Nhưng năm đầu tiên không hề là một câu chuyện cổ tích êm đềm. Giải ngân 300 tỷ đồng vào một thị trường mà một phiên giao dịch cả sàn chỉ có vài chục tỷ đồng là một bài toán đau đầu. Mua quá nhanh, chúng tôi sẽ đẩy giá lên trời. Mua quá chậm, tiền mặt sẽ nằm chết trong ngân hàng và làm giảm hiệu suất sinh lời.</p>`,

  // Page 7
  `<img src="/images/dcds7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Bảng điện tử những năm đó biến động một cách hoang dại. Không có biên độ hẹp, không có sự bảo vệ của các cơ chế ngắt mạch hiện đại. Đầu tư lúc này đòi hỏi một thần kinh thép và một sự kiên định tuyệt đối vào phương pháp đầu tư giá trị căn bản. Chúng tôi lục lọi những báo cáo tài chính đánh máy bằng giấy than, chúng tôi đi thăm từng nhà máy, đếm từng xe tải chở hàng.</p>
  <p>Chúng tôi phải giáo dục thị trường. Chúng tôi phải giải thích với các nhà đầu tư đang hoảng loạn gọi điện đến văn phòng rằng tại sao giá chứng chỉ quỹ (NAV) lại giảm trong ngắn hạn, và tại sao việc nắm giữ doanh nghiệp tốt trong 3-5 năm lại là cách sinh lời duy nhất đúng đắn.</p>`,

  // Page 8
  `<img src="/images/dcds8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Cuối năm 2004, khi nhìn lại danh mục đầu tư đầu tiên đã bắt đầu đơm hoa kết trái, tôi đứng bên cửa sổ văn phòng nhìn xuống dòng xe máy vẫn đang ngược xuôi không dứt. Cảm giác lúc đó không phải là sự tự mãn của kẻ kiếm được tiền. Đó là sự nhẹ nhõm và tự hào của những người thợ xây vừa đặt xong viên gạch móng đầu tiên cho một tòa cao ốc.</p>
  <p>VF1 (sau này là DCDS) không chỉ là một quỹ đầu tư. Nó là một bài kiểm tra lòng tin. Lòng tin rằng người dân Việt Nam có thể học cách làm chủ tư bản, lòng tin rằng các doanh nghiệp trong nước sẽ lớn mạnh thành các tập đoàn tỷ đô, và lòng tin rằng, từ xuất phát điểm lầy lội đầy hoài nghi ấy, một thị trường vốn khổng lồ đang thực sự vươn mình thức giấc.</p>`
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

export const dcdsPages = dcdsPagesRaw.map(page => {
  let normalized = page.normalize('NFC');
  for (const [nfd, nfc] of Object.entries(nfdMap)) {
    normalized = normalized.split(nfd).join(nfc);
  }
  return normalized;
});

export default html;
