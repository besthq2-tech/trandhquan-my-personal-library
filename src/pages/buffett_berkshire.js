const html = `
<section class="page active" id="page-buffett" data-route="/minds/buffett-berkshire" data-title="The 12.5 Cents Betrayal">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">01 · Inner Monologues</a> · Warren Buffett
    </div>
    <h1 style="margin-bottom: 8px;">The 12.5 Cents Betrayal</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Omaha, 1964. Cuộc độc thoại nội tâm trước một sai lầm trị giá 200 tỷ đô la.</p>

    <div class="book-reader" style="max-width: 680px; margin: 0 auto; background: var(--paper); border: 1px solid var(--line); border-radius: 4px; padding: 56px 64px; position: relative; min-height: 65vh; display: flex; flex-direction: column; box-shadow: 0 10px 30px rgba(0,0,0,0.02), inset 0 0 120px rgba(255,249,240,0.5);">
      
      <div id="bookContent" class="book-content" style="flex-grow: 1; font-family: 'Times New Roman', Times, serif; font-size: 19px; line-height: 1.8; color: #2c2a28;">
        <!-- Content will be injected here -->
      </div>

      <div class="book-controls" style="display: flex; justify-content: space-between; align-items: center; margin-top: 48px; padding-top: 24px; position: relative;">
        <div style="position: absolute; top: 0; left: 30%; right: 30%; height: 1px; background: linear-gradient(90deg, transparent, var(--line-2), transparent);"></div>
        <button id="prevPageBtn" class="pill" disabled style="min-width: 120px; justify-content: center; font-family: 'Georgia', serif; font-style: italic; border: none; background: transparent; color: var(--soft); cursor: pointer;">← Trang trước</button>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--muted); text-transform: uppercase;">Trang</span>
          <input type="number" id="pageInput" min="1" max="13" value="1" style="width: 48px; text-align: center; border: 1px solid var(--line); border-radius: 4px; padding: 4px; font-family: var(--font-mono); font-size: 12px; background: transparent; color: var(--ink);">
          <span id="pageTotal" style="font-family: var(--font-mono); font-size: 11px; color: var(--muted);">/ 13</span>
        </div>
        <button id="nextPageBtn" class="pill" style="min-width: 120px; justify-content: center; font-family: 'Georgia', serif; font-style: italic; border: none; background: transparent; color: var(--ink); cursor: pointer;">Trang sau →</button>
      </div>

    </div>
  </div>
</section>
`;

export const buffettPages = [
  // Page 1
  `<img src="/images/page1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Tôi luôn tin rằng những con số không bao giờ biết nói dối. Ben Graham đã dạy tôi điều đó. Khi tôi còn là một cậu thanh niên khờ khạo rời Omaha đến New York, Ben đã mở ra cho tôi một thế giới nơi cảm xúc là thứ dịch bệnh, và toán học là vị cứu tinh duy nhất.</p>
  <p>Ngài Thị Trường là một kẻ điên rồ, sáng nắng chiều mưa, khi thì hưng phấn tột độ, lúc lại trầm cảm cùng cực. Nhưng bảng cân đối kế toán thì tĩnh lặng, bất biến và chân thực. Tôi đã xây dựng sự nghiệp của mình, thậm chí là toàn bộ triết lý sống của mình, chính xác dựa trên niềm tin lạnh lẽo đó.</p>
  <p>Mua một công ty với giá thấp hơn lượng vốn lưu động thuần của nó. Một mẩu xì gà vứt lăn lóc trên lề đường. Nó ướt sũng, bẩn thỉu, và chẳng ai thèm ngó ngàng. Nhưng nó miễn phí, và bạn vẫn có thể rít được một hơi cuối cùng. Đó là triết lý của tôi. Không yêu đương, không gắn bó. Chỉ là một giao dịch thuần túy.</p>`,
  
  // Page 2
  `<img src="/images/page2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Berkshire Hathaway là một mẩu xì gà tồi tệ. Tôi biết rất rõ điều đó.</p>
  <p>Đó là một mớ hỗn độn của những nhà máy gạch đỏ cồng kềnh ở New England, tiếng lách cách đinh tai nhức óc của những cỗ máy dệt cổ lỗ sĩ, và những xưởng bông đầy bụi bặm vương vấn mùi mồ hôi của một thời đại công nghiệp đã qua. Ngành dệt may ở miền Bắc nước Mỹ đang chết. Tiền công rẻ mạt ở miền Nam và sự trỗi dậy của các loại vải tổng hợp đang bóp nghẹt phần lợi nhuận cỏn con còn sót lại.</p>
  <p>Seabury Stanton, người đàn ông đang cố gắng chèo lái cái con tàu đắm này, là tàn dư của một thế hệ cũ. Ông ta liên tục đóng cửa các nhà máy, bán tháo thiết bị, và dùng chính số tiền thanh lý đó để mua lại cổ phiếu của công ty. Đó là lý do duy nhất tôi ở đây. Tôi đã âm thầm nhặt nhạnh cổ phiếu của họ trên thị trường với giá 7 USD, kiên nhẫn chờ đợi ngày ông ta dùng tiền của công ty để mua lại chúng với giá cao hơn.</p>`,

  // Page 3
  `<img src="/images/page3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Mọi chuyện lẽ ra đã kết thúc vô cùng êm đẹp. Đầu tháng đó, Seabury và tôi đã gặp nhau. Một cuộc trò chuyện ngắn gọn, đậm chất của những người đàn ông kinh doanh thực dụng.</p>
  <p>"Ông sẽ bán số cổ phiếu của mình với giá bao nhiêu, Warren?" ông ta hỏi tôi, ánh mắt dò xét đằng sau cặp kính viền gọng sừng.</p>
  <p>Tôi đã tính toán cẩn thận. Một con số hợp lý, đủ để mang lại một khoản lợi nhuận tuyệt vời cho những đối tác đã tin tưởng giao tiền cho tôi. "Mười một đô la rưỡi," tôi đáp, giọng điệu điềm tĩnh không chút lay động. "11.50 USD".</p>
  <p>Seabury nhìn thẳng vào mắt tôi, gật đầu. Một cái bắt tay đã được thực hiện. Giữa những người đàn ông với nhau, ở cái nước Mỹ này, một cái bắt tay đáng giá hơn bất kỳ bản hợp đồng giấy trắng mực đen nào được soạn bởi lũ luật sư. Nó là danh dự. Nó là thứ keo kết dính toàn bộ hệ thống tư bản mà tôi tôn thờ.</p>`,

  // Page 4
  `<img src="/images/page4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Và rồi, sáng nay.</p>
  <p>Tập hồ sơ và thư từ nằm lặng lẽ trên chiếc bàn làm việc bằng gỗ sồi của tôi ở Omaha. Tâm trí tôi đang lang thang ở những báo cáo tài chính phức tạp của American Express và vụ bê bối dầu salad, thì ngón tay tôi vô tình xé rách một phong bì gửi từ New Bedford, Massachusetts.</p>
  <p>Đó là bản cáo bạch chào mua công khai. Lời đề nghị chính thức bằng văn bản từ Seabury Stanton, yêu cầu mua lại cổ phần của tôi đại diện cho công ty.</p>
  <p>Tôi lướt nhanh qua những dòng chữ pháp lý nhàm chán, những cụm từ rườm rà vô nghĩa, ánh mắt dán chặt vào trang cuối để tìm kiếm con số 11.50 quen thuộc.</p>
  <p>Nhưng nó không có ở đó. Mắt tôi khựng lại. Tim tôi lỡ một nhịp, không phải vì sợ hãi, mà vì một sự ngỡ ngàng tột độ, hệt như khi bạn bước hụt một bậc cầu thang trong bóng tối.</p>`,

  // Page 5
  `<img src="/images/page5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Mười một phẩy ba bảy lăm.</p>
  <p>11 3/8 USD.</p>
  <p>Tôi chớp mắt mạnh, nhíu mày. Có lẽ tôi đã đọc nhầm. Có lẽ những con số nhỏ xíu chi chít trong hàng tá báo cáo tài chính đêm qua đã làm mắt tôi mờ đi. Nhưng không. Khi tôi đưa tờ giấy lại gần ánh đèn, con số vẫn nằm đó, đen đúa, rõ ràng và trơ trẽn.</p>
  <p>11.375 USD. Hắn ta đã bớt đi một phần tám đô la. Mười hai phẩy năm xu.</p>
  <p>Cơn thịnh nộ bùng lên trong tôi không giống bất cứ thứ cảm xúc nào tôi từng trải qua. Nó không rực rỡ và ồn ào như ngọn lửa. Nó lạnh ngắt. Một sự lạnh lẽo như băng giá chạy dọc sống lưng, đông cứng mọi dòng máu đang chảy trong huyết quản tôi. Mười hai phẩy năm xu.</p>`,

  // Page 6
  `<img src="/images/page6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Số tiền cỏn con đó chẳng thể làm tôi nghèo đi, cũng chẳng thể làm Seabury hay cái công ty sắp phá sản của hắn giàu lên. Đối với quỹ đầu tư của tôi, 12.5 xu trên mỗi cổ phiếu chỉ là một vệt nhiễu trên báo cáo cuối tháng.</p>
  <p>Nó không phải là vấn đề tiền bạc.</p>
  <p>Nó là sự sỉ nhục.</p>
  <p>Hắn ta nghĩ tôi là ai? Một gã nhà quê khờ khạo từ vùng Trung Tây dễ dàng bị qua mặt bởi một gã tinh tướng ở Bờ Đông? Hắn nghĩ rằng tôi sẽ nhìn vào sự chênh lệch vài xu đó, chép miệng cho qua, và ký vào tờ giấy bạo hành lòng tin này chỉ vì tôi vẫn có một khoản lãi kha khá?</p>`,

  // Page 7
  `<img src="/images/page7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Gã khốn kiếp đó đã nhìn thẳng vào mắt tôi, bắt tay tôi, cam kết về danh dự của một người đàn ông kinh doanh. Và bây giờ, hắn cố tình ăn bớt vài xu khốn kiếp chỉ để chứng tỏ ai mới là kẻ nắm đằng chuôi.</p>
  <p>Hắn muốn cho tôi thấy quyền lực của một CEO lão làng trước một gã môi giới chứng khoán trẻ tuổi đang nhăm nhe kiếm chác từ cái xác của công ty hắn. Hắn đang cười nhạo tôi. Tiếng cười văng vẳng từ cách Omaha cả ngàn dặm.</p>
  <p>Tôi nắm chặt tờ cáo bạch trong tay đến mức những nếp nhăn hằn sâu vào mặt giấy, vò nát con số 11.375. Hơi thở tôi trở nên dồn dập, lồng ngực phập phồng kìm nén tiếng thét.</p>`,

  // Page 8
  `<img src="/images/page8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p><em>"Bán đi, Warren."</em></p>
  <p>Giọng nói trầm ấm nhưng nghiêm khắc của Ben Graham văng vẳng trong đầu tôi, vọng về từ giảng đường đại học Columbia năm nào. <em>"Cảm xúc là kẻ thù số một của túi tiền. Cậu vẫn đang lãi lớn. Chốt lời, bỏ tiền vào túi, và đi tìm một mẩu xì gà khác. Đừng để cái tôi xen vào. Thị trường không có chỗ cho lòng tự ái."</em></p>
  <p>Lý trí của tôi gào thét đồng tình. Bán đi. Berkshire là một hố đen. Nó không có tương lai. Lợi nhuận biên mỏng như tờ giấy lộn. Nếu tôi giữ lại, tôi sẽ kẹt trong một vũng lầy. Ngành công nghiệp này đang chết dần từng ngày, và nếu tôi không thoát ra bây giờ, tôi sẽ chết chìm cùng nó.</p>`,

  // Page 9
  `<img src="/images/page9.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Tôi đứng phắt dậy, bước nhanh đến bên cửa sổ. Bầu trời Omaha hôm nay xám xịt và trĩu nặng. Trái tim và khối óc tôi đang lao vào một cuộc chiến sinh tử.</p>
  <p>"Nhưng nếu mình bán," tôi thì thầm với tấm kính lạnh ngắt, hơi thở làm mờ đi một khoảng trong suốt, "hắn sẽ thắng."</p>
  <p>Seabury sẽ ngồi trong văn phòng bọc gỗ sồi sang trọng của mình, châm một điếu xì gà đắt tiền, và mỉm cười tự mãn vì đã lừa được thằng nhóc Warren Buffett một cú đau điếng. Ý nghĩ đó làm dạ dày tôi quặn thắt lại thành một khối bạo lực. Sự khinh miệt. Sự bất tín. Nó phá vỡ mọi quy tắc về sự trung thực mà tôi đã tự hứa với bản thân khi bước chân vào thương trường tàn khốc này.</p>`,

  // Page 10
  `<img src="/images/page10.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Tôi bắt đầu đi đi lại lại quanh phòng như một con thú bị nhốt. Tôi cần một lý do. Tôi khao khát một cái cớ hợp lý để biện minh cho sự kháng cự của mình.</p>
  <p>"Tài sản cố định," tôi tự nhủ nhỏ. "Công ty có vốn lưu động rất lớn. Nếu chúng ta tái cơ cấu, nếu chúng ta cắt giảm chi phí mạnh tay hơn nữa... Nếu chúng ta thay đổi hoàn toàn ban lãnh đạo..."</p>
  <p>Một lời nói dối. Tôi tự biết rõ đó là một lời nói dối. Tôi là một nhà đầu tư, người chỉ biết đọc bảng cân đối kế toán, không phải một nhà quản lý nhà máy dệt. Tôi không biết gì về máy kéo sợi bông, về chuỗi cung ứng hay thị trường vải vóc. Tôi đang cố gắng dùng những con số để che đậy cho một quyết định hoàn toàn mang tính bốc đồng và thù hận.</p>`,

  // Page 11
  `<img src="/images/page11.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Nỗi sợ hãi bắt đầu len lỏi, lạnh lẽo như sương mù vây quanh chân. Nếu tôi sai thì sao? Tiền của đối tác... tiền của dì Alice, của bố tôi, của những người bạn đã chắt bóp cả đời để tin tưởng giao cho tôi.</p>
  <p>Liệu tôi có quyền đánh bạc tài sản của họ chỉ để thỏa mãn cơn thịnh nộ cá nhân của mình? Charlie Munger, nếu anh ấy biết tôi đang cân nhắc điều này, chắc chắn sẽ mắng tôi là một kẻ ngu ngốc vĩ đại nhất hành tinh.</p>
  <p>Đây là điều cấm kỵ tối thượng trong triết lý đầu tư của chúng tôi: Trả thù. Thị trường không bao giờ quan tâm đến cảm xúc của bạn. Bảng cân đối kế toán không biết tức giận. Nếu tôi mua thêm cổ phiếu này, tôi đang tự nguyện mua lấy một khối nợ nần và rắc rối khổng lồ chỉ vì 12.5 xu.</p>`,

  // Page 12
  `<img src="/images/page12.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Tôi quay lại bàn, nhìn xuống tờ cáo bạch. 11.375. Sự tĩnh lặng trong căn phòng trở nên ngột ngạt đến khó thở. Và rồi, bất chợt, sự sợ hãi tan biến, nhường chỗ cho một sự tĩnh lặng đến đáng sợ từ sâu thẳm tâm hồn.</p>
  <p>Một sự bướng bỉnh tột độ, một bản ngã nguyên thủy nhất bám rễ chặt vào tư duy của tôi. Có những giới hạn tuyệt đối không thể bị vượt qua. Có những bài học phải được dạy, bất kể cái giá phải trả trên phương diện tài chính là bao nhiêu.</p>
  <p>Nếu tôi nhượng bộ và bán đi hôm nay, tôi sẽ tự thỏa hiệp với lòng tự tôn của chính mình mãi mãi. Hạt giống của sự nhượng bộ sẽ nảy mầm, và tôi sẽ không bao giờ còn là kẻ kiểm soát cuộc chơi nữa.</p>`,

  // Page 13
  `<img src="/images/page13.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" /><p>Tôi nhấc ống nghe điện thoại lên, quay số nhà môi giới của mình. Bàn tay tôi hoàn toàn vững vàng, không còn một chút run rẩy. </p>
  <p>"Mua," tôi gằn từng chữ vào ống nghe, giọng tôi khô khốc và sắc lẹm như một lưỡi dao cạo. "Mua mọi cổ phiếu của Berkshire Hathaway mà anh có thể tìm thấy trên thị trường. Không bán ra một cổ phiếu nào. Mua cho đến khi tôi có đủ số phiếu để nắm quyền kiểm soát toàn bộ cái công ty chết tiệt đó."</p>
  <p>Tôi dập máy. Âm thanh khô khốc vang lên trong phòng. Xong. Tôi đã vượt qua ranh giới. Tôi đã dìm lý trí kiêu hãnh của mình xuống vũng bùn chỉ vì một phần tám đô la.</p>
  <p>Tôi vừa buộc mình vào một con tàu đắm khổng lồ. Và việc đầu tiên tôi sẽ làm khi bước lên đống đổ nát đó, là đuổi cổ Seabury Stanton ra khỏi cửa. Hắn sẽ phải trả giá bằng cả sự nghiệp của mình cho 12.5 xu đó. Còn tôi? Tôi có thể mất 20 năm tiếp theo của cuộc đời để cố gắng làm sạch cái mớ bòng bong này. Một sai lầm khủng khiếp trị giá hàng trăm tỷ đô la trong tương lai, bắt nguồn từ một khoảnh khắc bốc đồng.</p>
  <p>Nhưng ngay lúc này đây... nhìn ra bầu trời Omaha xám xịt... tôi không hề hối hận. Mười hai phẩy năm xu. Không một ai, trên thế giới này, được phép qua mặt tôi.</p>`
];

export default html;
