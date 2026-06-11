const html = `
<section class="page active" id="page-buffett-aftermath" data-route="/minds/buffett-aftermath" data-title="The Textile Trap">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">
      <a href="#/minds" style="color: var(--soft); text-decoration: none; transition: color 0.2s ease;" onmouseover="this.style.color='var(--ink)'" onmouseout="this.style.color='var(--soft)'">01 · Inner Monologues</a> · Warren Buffett
    </div>
    <h1 style="margin-bottom: 8px;">The Textile Trap</h1>
    <p class="section-desc" style="margin-bottom: 32px;">Omaha, 1965-1985. Vũng lầy dệt may và sự ra đời của một đế chế.</p>

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

export const aftermathPages = [
  // Page 1
  `<img src="/images/aftermath1.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Tháng 5 năm 1965. Tôi cuối cùng cũng ngồi trên chiếc ghế chủ tịch của Berkshire Hathaway. Cảm giác chiến thắng thật say sưa nhưng cũng thật trống rỗng. Seabury Stanton đã ra đi, đúng như tôi dự tính. Tôi đã dồn ông ta vào chân tường, ép ông ta phải từ chức bằng chính số cổ phiếu mà tôi đã mua bằng cơn thịnh nộ vì 12.5 xu.</p>
  <p>Nhưng khi những lời chúc mừng nhạt dần, tiếng vang của sự im lặng trong văn phòng bắt đầu làm tôi ớn lạnh. Tôi nhìn xuống bàn tay mình, đôi bàn tay vừa ký những tấm séc khổng lồ để thâu tóm một công ty dệt may ở New Bedford. Tôi đã trở thành chủ nhân của một đống gạch vụn và những cỗ máy già cỗi.</p>`,

  // Page 2
  `<img src="/images/aftermath2.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Thực tế tàn khốc bắt đầu hiện rõ. Mỗi lần bước vào xưởng dệt, tiếng ồn đinh tai nhức óc của hàng ngàn khung cửi đập vào màng nhĩ tôi như một lời chế nhạo. Bụi bông bay lơ lửng trong không khí, bám vào bộ vest của tôi, đặc quánh mùi của sự suy tàn.</p>
  <p>Tôi đã đưa Ken Chace lên làm quản lý mới. Ken là một người xuất sắc, tận tụy và trung thực. Anh ấy làm mọi thứ hoàn hảo. Nhưng sự thật là, bạn không thể thay đổi dòng chảy của lịch sử bằng một nhà quản lý giỏi. Lợi thế cạnh tranh của miền Nam với lao động rẻ mạt, và sự xâm nhập của vải ngoại nhập, đang nghiền nát chúng tôi. Chúng tôi đang cố gắng tát nước ra khỏi một chiếc thuyền bị thủng đáy.</p>`,

  // Page 3
  `<img src="/images/aftermath3.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Rồi đến vấn đề về chi tiêu vốn (CAPEX). Đó là một cái bẫy kinh hoàng. Ken bước vào văn phòng tôi với những bản kế hoạch đầu tư máy móc mới. "Warren," anh ấy nói, "nếu chúng ta mua dàn máy dệt này, chúng ta có thể giảm chi phí sản xuất xuống một chút."</p>
  <p>Nhưng khi tôi nhìn vào những con số, tôi nhận ra một sự thật cay đắng: chúng tôi phải bỏ ra hàng triệu đô la không phải để kiếm thêm tiền, mà chỉ để... tồn tại. Lợi nhuận biên sẽ lại bị ép xuống bởi các đối thủ cũng mua dàn máy tương tự. Chúng tôi bị mắc kẹt trên một chiếc máy chạy bộ, phải chạy thục mạng chỉ để không bị văng ra khỏi guồng quay.</p>`,

  // Page 4
  `<img src="/images/aftermath4.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Những năm tháng đó, tôi học được một bài học đắt giá nhất trong đời đầu tư của mình, một bài học mà Ben Graham chưa từng nhấn mạnh đủ: <em>Khi một người quản lý có tiếng là xuất sắc tham gia vào một doanh nghiệp có tiếng là tồi tệ kinh niên, thì chính danh tiếng của doanh nghiệp mới là thứ được giữ lại.</em></p>
  <p>Dù tôi và Ken có cố gắng vắt óc thế nào, dệt may vẫn là dệt may. Lợi nhuận trên vốn (ROE) luôn ở mức thảm hại. Tiền của các đối tác của tôi đang bị giam lỏng trong một khối tài sản khổng lồ không sinh lời. Sự dằn vặt của quyết định bốc đồng năm 1964 giờ đây trở thành một gánh nặng hiện hữu mỗi ngày tôi thức dậy.</p>`,

  // Page 5
  `<img src="/images/aftermath5.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Nhưng tôi không thể bỏ cuộc. Tôi quá cứng đầu, hoặc quá tự ái để thừa nhận thất bại và thanh lý công ty. Cần có một lối thoát. Một lối thoát không yêu cầu tôi phải sửa chữa chiếc thuyền rách này.</p>
  <p>Tôi nhận ra rằng điều thông minh nhất nên làm khi bạn thấy mình đang ở trong một cái hố, là ngừng đào. Tôi không thể làm cho dệt may sinh lời, nhưng cái xác của nó vẫn tạo ra một lượng tiền mặt nhỏ lẻ giọt. Thay vì tái đầu tư số tiền đó vào máy dệt, tôi quyết định sẽ rút nó ra, và chuyển nó vào một nơi khác. Một nơi có kinh tế cơ bản vĩ đại hơn.</p>`,

  // Page 6
  `<img src="/images/aftermath6.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Năm 1967, cơ hội đó xuất hiện. Jack Ringwalt, một gã kỳ dị nhưng cực kỳ sắc bén, muốn bán công ty bảo hiểm National Indemnity của mình. Chỉ mất 15 phút thương lượng, tôi đã đồng ý mua lại nó với giá 8.6 triệu đô la.</p>
  <p>Bảo hiểm là một ngành kinh doanh tuyệt diệu. Khách hàng trả tiền trước cho bạn, và bạn chỉ phải bồi thường rất lâu sau đó. Khoảng thời gian ở giữa, bạn có một đống tiền mặt khổng lồ không lãi suất — chúng tôi gọi nó là "Float". Nó giống như một phép màu. Thay vì cần vốn để hoạt động như xưởng dệt, bảo hiểm lại tự bơm vốn cho tôi.</p>`,

  // Page 7
  `<img src="/images/aftermath7.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đó là khoảnh khắc tái sinh. Tôi dùng chính dòng tiền khô cằn của nhà máy dệt Berkshire Hathaway để thâu tóm National Indemnity, và rồi dùng nguồn "float" dồi dào của National Indemnity để mua các doanh nghiệp tuyệt vời khác. See's Candies, GEICO, Washington Post.</p>
  <p>Tôi đã biến cái vỏ bọc rỗng tuếch của một công ty dệt may đang hấp hối thành một cỗ máy phân bổ vốn khổng lồ. Mọi thứ được xây dựng trên một sai lầm chết người.</p>`,

  // Page 8
  `<img src="/images/aftermath8.png" style="width: 100%; height: auto; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;" />
  <p>Đến năm 1985, sau 20 năm vật lộn, tôi đành phải đóng cửa hoàn toàn các hoạt động dệt may của Berkshire Hathaway. Một cái chết đã được báo trước từ lâu. Không còn tiếng máy ồn ào. Không còn bụi bông. Chỉ còn lại cái tên: Berkshire Hathaway.</p>
  <p>Hôm nay, khi nhìn lại, tôi nhận ra sự trớ trêu của số phận. Nếu Seabury Stanton không lừa tôi 12.5 xu, tôi đã chốt lời, bước đi, và có lẽ tôi đã tiếp tục tìm kiếm những mẩu xì gà nhỏ bé khác dưới một cái tên vô danh nào đó.</p>
  <p>Chính sự sỉ nhục đó, cơn giận dữ phi lý trí đó, đã ném tôi vào vũng lầy dệt may, buộc tôi phải tiến hóa, buộc tôi phải tìm ra sức mạnh của "float". Bài học đắt giá nhất, lại là viên gạch nền móng vĩ đại nhất của toàn bộ đế chế này.</p>`
];

export default html;
