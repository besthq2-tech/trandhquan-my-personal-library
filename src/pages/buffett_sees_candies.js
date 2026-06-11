const html = `
<section class="page active" id="page-buffett-sees" data-route="/minds/buffett-sees-candies" data-title="The Sweet Paradigm Shift">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">01 · Inner Monologues</a> · Warren Buffett
    </div>
    <h1 style="margin-bottom: 8px;">The Sweet Paradigm Shift</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Omaha, 1972. Sự thức tỉnh từ những viên kẹo See's Candies.</p>

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

export const seesPages = [
  // Page 1
  `<img src="/images/sees1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Charlie Munger là một người kỳ lạ. Lần đầu tiên chúng tôi gặp nhau, tôi nhận ra ngay anh ấy có một bộ óc tuyệt vời, nhưng cách anh ấy nhìn nhận thế giới đầu tư lại trái ngược hoàn toàn với những gì tôi được học. Tôi là tín đồ ngoan đạo của Ben Graham, miệt mài bới móc trong những đống rác tài chính để tìm kiếm "những mẩu xì gà hút dở".</p>
  <p>Nhưng Charlie thì khác. Anh ấy thường mỉm cười nhếch mép khi thấy tôi mua một công ty sản xuất cối xay gió ọp ẹp hay một nhà máy dệt đang hấp hối chỉ vì giá của nó thấp hơn giá trị sổ sách. "Warren," anh ấy thường nói bằng cái giọng đều đều nhưng sắc bén, "cậu không thể xây dựng một đế chế vĩ đại bằng cách thu nhặt những cái xác thối."</p>`,

  // Page 2
  `<img src="/images/sees2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 1972, cơ hội đưa triết lý của Charlie vào thực tiễn gõ cửa. See's Candies, một chuỗi cửa hàng bán kẹo chocolate cao cấp ở California, đang được rao bán. Họ đòi mức giá 30 triệu đô la. Khi tôi nhìn vào bảng cân đối kế toán của họ, tim tôi như ngừng đập. Tài sản hữu hình của họ chỉ có 8 triệu đô la!</p>
  <p>Mọi bản năng của một môn đồ phái Graham trong tôi gào thét báo động. Trả 30 triệu đô la cho 8 triệu đô la tài sản? Điều đó thật điên rồ. Đó là dị giáo. Tôi đang bị yêu cầu trả tiền cho "lợi thế thương mại" (goodwill) – một thứ vô hình, không thể cầm nắm, thứ mà Ben Graham luôn coi là không khí. Lòng tự tôn của tôi từ chối một giao dịch có vẻ đắt đỏ như vậy.</p>`,

  // Page 3
  `<img src="/images/sees3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng Charlie và tôi đã bay đến California để tự mình nếm thử thứ chocolate đó. Sự thật là, tôi chẳng phân biệt được kẹo chocolate này với kẹo chocolate khác. Nhưng điều tôi có thể phân biệt được, là dòng người xếp hàng dài bên ngoài các cửa hàng See's vào dịp Giáng sinh và Valentine.</p>
  <p>Tôi bắt đầu nói chuyện với khách hàng. Họ không mua kẹo, họ mua kỷ niệm. Họ mua sự bảo chứng tình yêu. See's Candies không nằm ở những cỗ máy trộn đường trong nhà máy, mà nằm trong tâm trí của hàng triệu người dân California. Lần đầu tiên, tôi lờ mờ nhận ra cái gọi là "lợi thế thương mại kinh tế" (economic goodwill).</p>`,

  // Page 4
  `<img src="/images/sees4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tôi giam mình trong phòng khách sạn, vật lộn với những con số. Một cuộc nội chiến dữ dội diễn ra trong tâm trí. Tôi phải trả giá gấp 3 lần giá trị sổ sách. Nỗi sợ hãi của việc mua hớ bóp nghẹt tôi. Nếu thương hiệu này mất đi sức hút? Nếu tôi đang trả tiền cho một ảo ảnh?</p>
  <p>Tôi nâng mức giá lên 25 triệu đô la, và kiên quyết không trả thêm một xu nào. Thậm chí nếu người bán đòi 25.1 triệu, tôi cũng sẽ bỏ đi. Sự bướng bỉnh về giá cả - tàn dư cuối cùng của triết lý Graham - vẫn đang trói buộc tôi. May mắn thay cho tôi, người bán đã đồng ý ở mức 25 triệu.</p>`,

  // Page 5
  `<img src="/images/sees5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ngay sau khi mua, tôi bắt đầu nhận ra sự kỳ diệu thực sự của See's Candies: Sức mạnh định giá (Pricing power). Ngày Valentine, một chàng trai bước vào cửa hàng mua kẹo tặng bạn gái. Cậu ta không thể nói: "Em yêu, anh rất yêu em, nhưng hộp kẹo See's Candies này đắt hơn 1 đô la so với năm ngoái, nên anh đã mua cho em nhãn hiệu rẻ tiền này".</p>
  <p>Không ai làm thế cả. See's Candies sở hữu một không gian độc quyền trong tâm trí khách hàng. Chúng tôi có thể tăng giá vào ngày 26 tháng 12 hàng năm, và không ai quan tâm. Khối lượng bán ra không hề giảm. Nó là một cỗ máy in tiền hoàn hảo không cần đến nhiều vốn tái đầu tư, hoàn toàn trái ngược với cái vũng lầy dệt may Berkshire Hathaway trước kia.</p>`,

  // Page 6
  `<img src="/images/sees6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Mỗi năm trôi qua, See's Candies kiếm được nhiều tiền hơn. Nhưng điều tuyệt vời nhất là doanh nghiệp này không cần thêm vốn để tăng trưởng. Lợi nhuận không bị mắc kẹt lại trong các cỗ máy như nhà máy dệt. Tiền mặt chảy tràn ra ngoài, sạch sẽ và tự do.</p>
  <p>Và tôi đã dùng dòng suối tiền mặt ngọt ngào đó để mua hàng chục doanh nghiệp khác. Sự tăng trưởng của Berkshire Hathaway không được tài trợ bởi những khung cửi công nghiệp, mà được tài trợ bởi từng hộp chocolate đậu phộng và kẹo dẻo được bán ra trong suốt mấy chục năm. Đó là cỗ máy sinh lời kỳ diệu nhất mà tôi từng chứng kiến.</p>`,

  // Page 7
  `<img src="/images/sees7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>See's Candies không chỉ mang lại cho tôi hàng tỷ đô la. Nó đã mang lại cho tôi một đôi mắt mới. Nhờ có nó, tôi mới có can đảm trả giá cao hơn để mua lại Coca-Cola, mua lại Apple sau này. Nó là cầu nối để tôi bước khỏi cái bóng của Ben Graham và bước vào ánh sáng của Charlie Munger.</p>
  <p>Đôi khi tôi rùng mình khi nghĩ lại: Nếu năm 1972 người bán kiên quyết đòi 25.1 triệu đô la thay vì 25 triệu, tôi đã quay lưng bước đi vì sự cố chấp ngu ngốc của một gã học việc phái giá trị.</p>`,

  // Page 8
  `<img src="/images/sees8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sự thức tỉnh vĩ đại nhất của cuộc đời tôi, bài học cuối cùng để hoàn thiện triết lý đầu tư của Berkshire Hathaway, không đến từ một cuốn sách giáo khoa phức tạp ở Phố Wall. Nó đến từ những viên kẹo ngọt ở California.</p>
  <p>Đó là ngày tôi khắc sâu một chân lý mới vào linh hồn mình: <em>Thà mua một công ty tuyệt vời với một mức giá công bằng, còn hơn là mua một công ty tồi tệ với một mức giá tuyệt vời.</em> Những mẩu xì gà đã cháy tàn. Kỷ nguyên của những công ty vĩ đại đã bắt đầu.</p>`
];

export default html;
