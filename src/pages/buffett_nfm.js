const html = `
<section class="page active" id="page-buffett-nfm" data-route="/minds/buffett-nfm" data-title="The Handshake of a Titan">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">01 · Inner Monologues</a> · Warren Buffett
    </div>
    <h1 style="margin-bottom: 8px;">The Handshake of a Titan</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Omaha, 1983. Cuộc gặp gỡ với Rose Blumkin và bài học về những nhà sáng lập cuồng tín.</p>

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

export const nfmPages = [
  // Page 1
  `<img src="/images/nfm1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thế giới kinh doanh đầy rẫy những gã đàn ông mặc suit bảnh bao, sở hữu bằng MBA từ Harvard hay Wharton, sử dụng những thuật ngữ tài chính phức tạp để che đậy sự thiếu hụt trí tuệ cốt lõi. Nhưng người quản lý xuất sắc nhất nước Mỹ, theo đánh giá của tôi, lại không phải là một trong số họ.</p>
  <p>Bà ấy tên là Rose Blumkin, hay tất cả mọi người ở Omaha đều gọi bà là "Bà B". Một người phụ nữ Do Thái nhập cư từ Nga, trốn thoát khỏi quê hương trên một chuyến tàu chở hàng, mang theo một thẻ bài đeo cổ bằng giấy báo ghi địa chỉ ở Mỹ. Khi đến đất nước này, bà không biết một chữ tiếng Anh nào. Bảy mươi năm sau, bà đã xây dựng nên cửa hàng nội thất lớn nhất Bắc Mỹ.</p>`,

  // Page 2
  `<img src="/images/nfm2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nebraska Furniture Mart (NFM) không phải là một cửa hàng bình thường. Nó là một hiện tượng. Nó là một nhà kho khổng lồ rộng hàng trăm ngàn mét vuông, nơi hàng hóa được chất cao đến tận trần nhà. Nó ồn ào, hỗn loạn, và không hề có một chút hào nhoáng nào.</p>
  <p>Tôi đã theo dõi công ty của bà B từ lâu. Triết lý kinh doanh của bà gói gọn trong đúng một câu: "Sell cheap and tell the truth" (Bán rẻ và nói sự thật). Bà ép giá các nhà cung cấp đến mức tàn nhẫn nhất, cắt giảm mọi chi phí hoạt động thừa thãi, và truyền lại toàn bộ phần tiết kiệm đó cho khách hàng. Bà chấp nhận một mức biên lợi nhuận mỏng đến mức nực cười (chỉ khoảng 10% trên giá vốn), nhưng bù lại, khối lượng hàng bán ra là vô tiền khoáng hậu.</p>`,

  // Page 3
  `<img src="/images/nfm3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Ngày 30 tháng 8 năm 1983, đúng vào sinh nhật lần thứ 53 của mình, tôi quyết định tự tặng cho bản thân một món quà. Tôi bước vào NFM, đi qua hàng ngàn dãy ghế sofa và thảm trải sàn, tiến thẳng vào văn phòng của Bà B.</p>
  <p>Lúc đó bà đã 89 tuổi. Bà đang lái một chiếc xe điện nhỏ đi dọc các lối đi, la mắng nhân viên và chào hỏi khách hàng. Bà làm việc bảy ngày một tuần. Lần duy nhất bà rời khỏi cửa hàng là để tham dự đám cưới của thành viên trong gia đình, và ngay sau đó bà lập tức quay lại làm việc vào buổi tối.</p>`,

  // Page 4
  `<img src="/images/nfm4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>"Bà B," tôi mở lời, đứng trước chiếc bàn làm việc đơn sơ của bà, "tôi muốn mua công ty của bà. Bà có muốn bán không?"</p>
  <p>Bà nhìn tôi. Một ánh mắt sắc lẹm, xuyên thấu, ánh mắt của một người đã trải qua hai cuộc chiến tranh thế giới và sự khốc liệt của cuộc đại suy thoái. Bà trả lời: "Được, tôi sẽ bán. Giá là 60 triệu đô la. Tôi không nhận cổ phiếu, chỉ lấy tiền mặt."</p>
  <p>Bà không đưa cho tôi một bản kế hoạch kinh doanh nào. Bà không có slide thuyết trình, không có những bảng dự phóng dòng tiền tương lai (DCF) vô nghĩa mà bọn chuyên gia ngân hàng đầu tư hay làm. Bà chỉ có những con số trong đầu, chính xác đến từng xu.</p>`,

  // Page 5
  `<img src="/images/nfm5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tôi gật đầu ngay lập tức. "Thỏa thuận," tôi nói. Tôi trở về văn phòng, tự tay đánh máy một bản hợp đồng mua bán dài đúng một trang giấy. Không có một đội ngũ luật sư nào tham gia. Không có bất kỳ đợt kiểm toán thực tế (due diligence) nào về hàng tồn kho hay sổ sách kế toán. Không có cam kết ràng buộc cạnh tranh phức tạp.</p>
  <p>Khi bạn giao dịch với một người như Rose Blumkin, sự liêm chính của bà ấy là bản kiểm toán tốt nhất thế giới. Nếu bà ấy nói có 100 chiếc ghế sofa trong kho, chắc chắn sẽ có đúng 100 chiếc, không thừa không thiếu.</p>`,

  // Page 6
  `<img src="/images/nfm6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tôi mang tờ hợp đồng một trang và tấm séc 60 triệu đô la quay lại NFM. Chúng tôi ký kết, bắt tay nhau. Một cái bắt tay ở Omaha đáng giá hơn vạn chữ ký trên giấy giáp ở Phố Wall. Tôi đã mua 90% cổ phần của NFM, bà và gia đình giữ lại 10% và tiếp tục điều hành.</p>
  <p>Những tay môi giới sừng sỏ ở New York sẽ cười nhạo tôi. Bỏ ra 60 triệu đô la mà không thèm đếm số thảm trong kho? Không đọc qua sổ cái kế toán? Nhưng họ không hiểu. Tôi không mua những tấm thảm hay những cái ghế. Tôi đang mua phẩm chất, sự điên cuồng và tài năng xuất chúng của một người phụ nữ 89 tuổi.</p>`,

  // Page 7
  `<img src="/images/nfm7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Con hào kinh tế (moat) của NFM không đến từ những thứ vật chất. Nếu bạn cho tôi 200 triệu đô la để cạnh tranh với bà B, tôi sẽ trả lại bạn số tiền đó và nói: "Đừng vứt tiền qua cửa sổ". Không ai có thể đánh bại bà ấy. Một mô hình chi phí thấp đến mức cực đoan, kết hợp với tinh thần phục vụ khách hàng không mệt mỏi, đã tạo ra một pháo đài bất khả xâm phạm.</p>
  <p>Đó là lúc tôi củng cố sâu sắc một nguyên tắc đầu tư cốt lõi của mình: Hãy đánh cược vào những người sáng lập cuồng tín. Hãy tìm những doanh nghiệp được điều hành bởi những người yêu công ty của họ hơn cả yêu tiền. Những người mà công việc kinh doanh chính là bức tranh nghệ thuật của cuộc đời họ.</p>`,

  // Page 8
  `<img src="/images/nfm8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Sau khi nhận được tấm séc 60 triệu đô la, bà B không nghỉ hưu. Bà không đi du lịch châu Âu hay mua một căn biệt thự ở bãi biển. Sáng hôm sau, bà vẫn lái chiếc xe điện đi tuần tra khắp cửa hàng, làm việc 7 ngày một tuần, và bà tiếp tục làm như vậy cho đến tận năm 103 tuổi.</p>
  <p>Mỗi khi những CEO của các tập đoàn khổng lồ đến Omaha xin tôi lời khuyên về cách quản lý, tôi thường chỉ tay về hướng cửa hàng nội thất khổng lồ cách đó vài dặm. "Hãy đến xem một người phụ nữ nhập cư 90 tuổi đang làm việc," tôi nói. "Đó mới là tinh hoa của kinh doanh. Và đó là lý do tại sao Berkshire Hathaway sẽ luôn lớn mạnh."</p>`
];

export default html;
