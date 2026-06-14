const psychCh9Pages = [
  `<div class="insight-box anim-trigger fade-left">
  Thấu hiểu tâm lý tuổi vị thành niên 🧠 không chỉ là giải quyết những bão giông cảm xúc bề mặt ⛈️, mà là nắm bắt quá trình định hình bản sắc cá nhân (Identity 👤) cốt lõi – nơi những lựa chọn hôm nay sẽ trở thành nền móng cho người trưởng thành ngày mai 🌟.
</div>

<h3 class="anim-trigger fade-up">🔍 1. Học Thuyết Erikson: Bản Sắc vs. Nhầm Lẫn Vai Trò</h3>
<div class="mermaid anim-trigger fade-up">
graph LR
    A[Nhầm Lẫn Vai Trò 😵<br/>Identity Confusion] -->|Khám phá & Thử nghiệm 🔭| B{Đấu Tranh Nội Tâm ⚔️}
    B -->|Thất bại ❌| C[Mơ Hồ, Lạc Lối 🌫️]
    B -->|Thành công ✅| D((Bản Sắc Cá Nhân 👤<br/>Identity Achievement))
    
    style A fill:#ffcccc,stroke:#ff6666,stroke-width:2px
    style B fill:#fff2cc,stroke:#ffcc00,stroke-width:2px
    style C fill:#e6e6e6,stroke:#999999,stroke-width:2px,stroke-dasharray: 5 5
    style D fill:#d9ead3,stroke:#6aa84f,stroke-width:2px
</div>
<p class="anim-trigger fade-up">Theo Erikson, tuổi vị thành niên đánh dấu giai đoạn đấu tranh khốc liệt ⚔️ giữa việc tìm ra bản thân mình là ai (Identity Achievement 👤) và sự mơ hồ, bối rối về căn tính (Identity Confusion 😵).</p>

<h3 class="anim-trigger fade-up">🗂️ 2. Các Trạng Thái Bản Sắc Của James Marcia</h3>
<div class="mermaid anim-trigger fade-up">
graph TD
    A[Trạng Thái Bản Sắc 👤] --> B{Sự Khám Phá 🔭<br/>Exploration}
    B -->|Có| C{Sự Cam Kết 🤝<br/>Commitment}
    B -->|Không| D{Sự Cam Kết 🤝<br/>Commitment}
    
    C -->|Có| E[Đạt Được 🏆<br/>Achievement]
    C -->|Không| F[Trì Hoãn ⏳<br/>Moratorium]
    
    D -->|Có| G[Đóng Khung 📦<br/>Foreclosure]
    D -->|Không| H[Khuếch Tán 💨<br/>Diffusion]

    style E fill:#d9ead3,stroke:#6aa84f
    style F fill:#fff2cc,stroke:#f1c232
    style G fill:#fce5cd,stroke:#e69138
    style H fill:#f4cccc,stroke:#cc0000
</div>
<p class="anim-trigger fade-up">Marcia mở rộng học thuyết của Erikson, phân loại sự phát triển bản sắc dựa trên hai tiêu chí: <strong>Sự Khám Phá (Exploration 🔭)</strong> và <strong>Sự Cam Kết (Commitment 🤝)</strong>.</p>
<ul class="anim-trigger fade-up">
  <li><strong>💨 Khuếch Tán (Diffusion):</strong> Chưa khám phá, chưa cam kết. Trẻ trốn tránh việc đưa ra quyết định tương lai, sợ hãi áp lực trưởng thành 😰.</li>
  <li><strong>📦 Đóng Khung (Foreclosure):</strong> Đã cam kết nhưng chưa khám phá. Trẻ tiếp nhận hoàn toàn kỳ vọng từ gia đình, xã hội mà chưa từng trải nghiệm sự lựa chọn khác 🤖.</li>
  <li><strong>⏳ Trì Hoãn (Moratorium):</strong> Đang khám phá, chưa cam kết. Một giai đoạn thử nghiệm lành mạnh (thử các sở thích, tính cách, hoặc ngành nghề khác nhau 🎨).</li>
  <li><strong>🏆 Đạt Được (Achievement):</strong> Đã khám phá và đã cam kết. Tìm ra con đường phù hợp sau quá trình thử nghiệm 🌟.</li>
</ul>

<div class="tradeoff-box anim-trigger scale-in">
  <div class="tradeoff-side tradeoff-pro">
    <h4>⏳ Sự Trì Hoãn (Moratorium)</h4>
    <p><strong>Lợi ích:</strong> Cho phép thanh thiếu niên thử nghiệm nhiều vai trò 🎭, từ đó hiểu rõ đam mê thực sự. Tránh được sự hối hận hoặc khủng hoảng danh tính sâu sắc khi chạm ngưỡng 25-30 tuổi 🛡️.</p>
  </div>
  <div class="tradeoff-side tradeoff-con">
    <h4>📦 Sự Đóng Khung (Foreclosure)</h4>
    <p><strong>Rủi ro:</strong> Tạo ra cảm giác an toàn giả tạo ban đầu ⚠️. Sự lựa chọn vội vàng dựa trên kỳ vọng của người khác (như việc bị ép học nhạc vì có năng khiếu) thường dẫn đến bế tắc và thiếu động lực tự thân 📉.</p>
  </div>
</div>`,

  `<h3 class="anim-trigger fade-up">🪞 3. Tính Vị Kỷ Ở Tuổi Vị Thành Niên (Adolescent Egocentrism)</h3>
<div class="mermaid anim-trigger fade-up">
graph TD
    A((Tính Vị Kỷ 🪞<br/>Tuổi Vị Thành Niên)) --> B[Khán Giả Tưởng Tượng 👀]
    A --> C[Câu Chuyện Cá Nhân 📖]
    A --> D[Ảo Tưởng Bất Khả Chiến Bại 🦸]
    
    B --> B1(Luôn có người theo dõi 👁️)
    B --> B2(Sự cố nhỏ bị phóng đại 💥)
    
    C --> C1(Bản thân là độc nhất 🦄)
    C --> C2(Không ai hiểu mình 🤷)
    
    D --> D1(Rủi ro chỉ xảy ra với người khác 🙈)
    D --> D2(Bất chấp nguy hiểm 🎲)
    
    style A fill:#f4cccc,stroke:#cc0000
    style B fill:#fff2cc,stroke:#f1c232
    style C fill:#d9ead3,stroke:#6aa84f
    style D fill:#cfe2f3,stroke:#3d85c6
</div>
<p class="anim-trigger fade-up">Sự tập trung thái quá vào bản thân 🪞 khiến thanh thiếu niên trải qua các hiện tượng tâm lý đặc thù, làm méo tương nhận thức của họ về thực tại 🌪️:</p>

<ul class="anim-trigger fade-up">
  <li><strong>👀 Khán Giả Tưởng Tượng (Imaginary Audience):</strong> Cảm giác luôn có người theo dõi, đánh giá mình. Sự cố nhỏ bị phóng đại thành thảm họa xã hội 💥.</li>
  <li><strong>📖 Câu Chuyện Cá Nhân (Personal Fable):</strong> Tin rằng bản thân và trải nghiệm của mình là độc nhất vô nhị 🦄.</li>
  <li><strong>🦸 Ảo Tưởng Bất Khả Chiến Bại (Illusion of Invulnerability):</strong> Tin rằng những tai nạn, rủi ro như tai nạn xe hơi 🚗, nghiện ngập 🚬 sẽ chỉ xảy ra với người khác, không phải mình 🙈.</li>
</ul>

<div class="tradeoff-box anim-trigger scale-in">
  <div class="tradeoff-side tradeoff-pro">
    <h4>🔨 Phá Vỡ Ảo Tưởng Thông Qua Trải Nghiệm</h4>
    <p>Trải nghiệm thực tế hoặc việc đối mặt với hậu quả gần gũi (như một người bạn gặp sự cố 🤕) là phương pháp đau đớn nhưng mạnh mẽ và hiệu quả nhất để phá vỡ ảo tưởng bất khả chiến bại 🛡️.</p>
  </div>
  <div class="tradeoff-side tradeoff-con">
    <h4>🗣️ Giáo Dục Lý Thuyết (Cảnh báo suông)</h4>
    <p>Việc răn đe đơn thuần bằng lời nói hoặc video giáo dục hiếm khi đem lại hiệu quả thực sự ❌, vì não bộ vị thành niên vẫn tự động phân loại các rủi ro đó là chuyện của người khác 🙈.</p>
  </div>
</div>`,

  `<h3 class="anim-trigger fade-up">🧭 4. Định Hướng Nghề Nghiệp Và Học Thuyết Holland</h3>
<div class="mermaid anim-trigger fade-up">
graph TD
    H{Học Thuyết Holland 🧭<br/>RIASEC}
    H --> R[Realistic 🛠️<br/>Kỹ Thuật]
    H --> I[Investigative 🔬<br/>Nghiên Cứu]
    H --> A[Artistic 🎨<br/>Nghệ Thuật]
    H --> S[Social 🤝<br/>Xã Hội]
    H --> E[Enterprising 💼<br/>Quản Lý]
    H --> C[Conventional 🗂️<br/>Nghiệp Vụ]
    
    style H fill:#e6e6e6,stroke:#999999
    style R fill:#ffcccc
    style I fill:#ffe6cc
    style A fill:#fff2cc
    style S fill:#d9ead3
    style E fill:#cfe2f3
    style C fill:#d0e0e3
</div>
<p class="anim-trigger fade-up">John Holland đề xuất 6 kiểu tính cách nghề nghiệp: Kỹ thuật (Realistic 🛠️), Nghiên cứu (Investigative 🔬), Nghệ thuật (Artistic 🎨), Xã hội (Social 🤝), Quản lý (Enterprising 💼), và Nghiệp vụ (Conventional 🗂️). Công việc hè giúp thanh thiếu niên thử nghiệm thực tế các môi trường này để đối chiếu với tính cách bản thân 🪞.</p>

<h3 class="anim-trigger fade-up">💼 5. Thực Trạng Việc Làm Thêm Ở Tuổi Vị Thành Niên</h3>
<div class="mermaid anim-trigger fade-up">
graph LR
    A[Việc Làm Thêm 💼] -->|Dưới 15 giờ/tuần ⏱️| B(Thu nhập 💵 + Kỹ năng 🛠️)
    A -->|Trên 15 giờ/tuần ⏳| C(Căng thẳng 😰 + Giảm điểm số 📉)
    
    B --> D[Học quản lý tài chính 📊]
    B --> E[Cân bằng cuộc sống ⚖️]
    
    C --> F[Tiêu xài phung phí 💸]
    C --> G[Kiệt sức 🪫]

    style B fill:#d9ead3,stroke:#6aa84f
    style C fill:#f4cccc,stroke:#cc0000
    style D fill:#d9ead3,stroke:#6aa84f
    style F fill:#f4cccc,stroke:#cc0000
</div>
<p class="anim-trigger fade-up">Ngày nay học sinh có xu hướng làm thêm nhiều ngày trong tuần 💼. Thu nhập khả dụng lúc này thường được dùng vào mục đích giải trí 🎮 do các nhu cầu cơ bản đã được gia đình chi trả. Việc quản lý thời gian ⏱️ và tiền bạc 💵 trở thành một bài toán khó.</p>

<div class="tradeoff-box anim-trigger scale-in">
  <div class="tradeoff-side tradeoff-pro">
    <h4>💵 Kiếm Tiền Sớm (Quản lý thu nhập)</h4>
    <p>Làm việc có thể giúp thiết lập thói quen quản lý tài chính hiệu quả 📊, nhưng CHỈ KHI phụ huynh can thiệp thiết lập tài khoản tiết kiệm 🏦 (ví dụ: giữ lại 50% lương cho mục tiêu dài hạn như học đại học 🎓).</p>
  </div>
  <div class="tradeoff-side tradeoff-con">
    <h4>🪫 Làm Việc Quá Sức (>15 giờ/tuần)</h4>
    <p>Vượt quá ngưỡng 15 giờ mỗi tuần ⏳ sẽ trực tiếp làm sụt giảm điểm số trung bình 📉, tăng cường sự căng thẳng 😰, và tạo ra thói quen tiêu dùng sai lệch 💸 do có quá nhiều thu nhập khả dụng nhưng thiếu trách nhiệm chi trả sinh hoạt phí.</p>
  </div>
</div>`,

  `<h3 class="anim-trigger fade-up">🌧️ 6. Sức Khỏe Tinh Thần: Trầm Cảm Và Tự Sát</h3>
<div class="mermaid anim-trigger fade-up">
graph TD
    A[Cảm Xúc Tiêu Cực ⛈️] --> B(Nỗi buồn chán ngắn hạn - Blues 🌧️)
    A --> C(Trầm cảm - Depression 🕳️)
    
    B --> D[Phản ứng bình thường<br/>Tự phục hồi 🌱]
    C --> E[Di truyền 🧬, Thiếu Serotonin 🧪<br/>Sự điều chỉnh cảm xúc kém 📉]
    
    C --> F{Nguy cơ tự sát ⚠️}
    F -->|Nữ giới 👩| G[Tỷ lệ mắc trầm cảm cao hơn 📈]
    F -->|Nam giới 👨| H[Tỷ lệ tử vong cao hơn ✝️<br/>Do phương thức quyết liệt 💥]
    
    style B fill:#cfe2f3,stroke:#3d85c6
    style C fill:#f4cccc,stroke:#cc0000
    style H fill:#ea9999,stroke:#990000
</div>
<p class="anim-trigger fade-up">Trầm cảm (Depression 🕳️) khác biệt với những nỗi buồn chán ngắn hạn (Blues 🌧️). Nó bắt nguồn từ sự điều chỉnh cảm xúc kém 📉, di truyền (thiếu Serotonin 🧪), và niềm tin tiêu cực tột độ ⛈️. Đáng lưu ý, dù nữ giới 👩 có tỷ lệ trầm cảm cao hơn, nam giới 👨 lại có tỷ lệ tử vong do tự sát cao hơn ✝️ vì họ thường sử dụng các phương thức quyết liệt và khó vãn hồi 💥.</p>

<h3 class="anim-trigger fade-up">🚨 7. Hành Vi Phạm Tội (Delinquency)</h3>
<div class="mermaid anim-trigger fade-up">
graph LR
    A[Hành Vi Phạm Tội 🚨<br/>Delinquency] --> B(Giới hạn vị thành niên 🚧<br/>Adolescence-limited)
    A --> C(Kéo dài suốt đời 🔄<br/>Life-course persistent)
    
    B --> D[Nổi loạn nhất thời 🌪️]
    D --> E[Tự biến mất khi trưởng thành 🌱]
    
    C --> F[Xuất hiện từ rất sớm 3-5 tuổi 👶]
    F --> G[Cần nhận diện & Định hướng sớm 🆘]

    style B fill:#fff2cc,stroke:#f1c232
    style C fill:#f4cccc,stroke:#cc0000
    style E fill:#d9ead3,stroke:#6aa84f
</div>
<p class="anim-trigger fade-up">Hành vi phạm tội và chống đối xã hội ở thanh thiếu niên 🚨 phân chia thành hai quỹ đạo phát triển rất rõ ràng, đòi hỏi sự can thiệp hoàn toàn khác nhau 🛠️:</p>

<div class="tradeoff-box anim-trigger scale-in">
  <div class="tradeoff-side tradeoff-pro">
    <h4>🚧 Giới Hạn Trong Tuổi Vị Thành Niên</h4>
    <p><strong>Bản chất:</strong> Những hành vi nổi loạn nhất thời 🌪️ để thử thách giới hạn (như ăn cắp vặt một lần). Thường tự biến mất khi trẻ trưởng thành 🌱. <strong>Đánh đổi:</strong> Việc trừng phạt quá khắc nghiệt và dán nhãn tội phạm sớm ❌ có thể phản tác dụng, tước đi cơ hội để trẻ tự điều chỉnh.</p>
  </div>
  <div class="tradeoff-side tradeoff-con">
    <h4>🔄 Kéo Dài Suốt Đời (Life-course persistent)</h4>
    <p><strong>Bản chất:</strong> Biểu hiện chống đối xã hội xuất hiện từ rất sớm 👶 (3-5 tuổi) và kéo dài liên tục. <strong>Đánh đổi:</strong> Nếu bỏ qua dấu hiệu sớm, hậu quả sẽ cực kỳ nghiêm trọng 💥. Nhưng nếu được nhận diện và định hướng lại 🆘 (chuyển tư duy phạm tội sang tư duy điều tra phòng chống tội phạm 🕵️), họ có thể đóng góp cho xã hội.</p>
  </div>
</div>`
];

const psychCh9HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb"><a href="#/home">Home</a> / <a href="#/psychology">Psychology</a> / <span>Chapter 9: Socioemotional Development in Adolescence</span></div>
  <div class="article" id="bookContent"></div>
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="display:flex; align-items:center; gap:4px;">Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center;"> <span id="pageTotal"></span></div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;

export default psychCh9HTML;
export { psychCh9Pages };