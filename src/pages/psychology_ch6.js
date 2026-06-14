const psychCh6Pages = [
  `<div class="page-content">
    <div class="insight-box anim-trigger fade-left">
      <h3>📖 Góc Nhìn Học Thuật: Sự Phát Triển Nhận Thức</h3>
      <div class="mermaid anim-trigger fade-up">
      graph TD;
          A["Trải Nghiệm Mới 🌟"] --> B{"Phù hợp Lược Đồ cũ? 🧩"};
          B -- "Có" --> C["Đồng Hóa ➡️<br>Assimilation"];
          B -- "Không" --> D["Mất Cân Bằng 😵<br>Disequilibrium"];
          D --> E["Điều Ứng 🔄<br>Accommodation"];
          E --> F["Cân Bằng Mới ⚖️<br>New Schema"];
      </div>
      <p>Thuyết phát triển nhận thức của Jean Piaget 🧑‍🔬 không chỉ đơn thuần là sự quan sát bề ngoài, mà là một khuôn khổ học thuật sâu sắc về cách bộ não con người 🧠 xây dựng 🏗️ và tái cấu trúc thông tin 🔄.</p>
    </div>
    <h3 class="anim-trigger fade-up">🔄 1. Tiến Trình Đồng Hóa và Điều Ứng</h3>
    <div class="mermaid anim-trigger fade-up">
    graph LR;
        Schema["Lược đồ hiện tại 🧠"] --> Assimilation["Đồng Hóa: Lắp ghép thông tin 🧩"];
        Schema --> Accommodation["Điều Ứng: Tái định hình lược đồ 🔨"];
        Assimilation -.->|"Giữ nguyên"| CanBang["Sự Cân Bằng ⚖️"];
        Accommodation -.->|"Phát triển"| CanBang;
    </div>
    <p class="anim-trigger fade-up">Trẻ em 👶 không tiếp nhận thế giới một cách thụ động 😴. Khi đối mặt với thông tin mới 🌟, chúng sử dụng các lược đồ (schemas 🧠) hiện có. Quá trình <strong>Đồng hóa (Assimilation ➡️)</strong> xảy ra khi thông tin mới được lắp ghép vào lược đồ cũ 🧩. Tuy nhiên, khi thông tin mâu thuẫn ⚔️ (như một con "ngựa vằn" 🦓 không phải "ngựa" 🐎), trẻ rơi vào trạng thái <strong>Mất cân bằng nhận thức (Disequilibrium 😵)</strong>. Để lấy lại sự cân bằng, trẻ buộc phải <strong>Điều ứng (Accommodation 🔄)</strong>—tái định hình lại lược đồ của chính mình 🔨.</p>
    
    <h3 class="anim-trigger fade-up">🧱 2. Thao Tác Cụ Thể so với Thao Tác Hình Thức</h3>
    <div class="mermaid anim-trigger fade-up">
    graph TD;
        A["Giai Đoạn Phát Triển Tư Duy 🧠"] --> B["Thao Tác Cụ Thể 🧱<br>7-11 tuổi"];
        A --> C["Thao Tác Hình Thức 🌌<br>12+ tuổi"];
        B --> D("Logic vật lý ⚖️");
        B --> E("Kinh nghiệm thực tế 🛠️");
        C --> F("Tư duy trừu tượng 💭");
        C --> G("Suy luận diễn dịch 🕵️");
    </div>
    <p class="anim-trigger fade-up">Giai đoạn Thao tác Cụ thể (Concrete Operational 🧱 - từ 7 đến 11 tuổi) đánh dấu khả năng tư duy logic nhưng bị giới hạn bởi thế giới vật lý 🌍 và kinh nghiệm đã biết. Giai đoạn Thao tác Hình thức (Formal Operational 🌌) phá vỡ giới hạn đó, cho phép tư duy trừu tượng 💭, suy luận diễn dịch 🕵️ và tư duy giả định (hypothetical reasoning 🔮).</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>➡️ Đồng Hóa (Assimilation)</h4>
        <p><strong>Ưu điểm:</strong> Tiết kiệm năng lượng nhận thức 🔋, xử lý thông tin cực nhanh ⚡ nhờ dựa trên khuôn mẫu sẵn có 🧩, giúp trẻ duy trì cảm giác an toàn và cân bằng trong tâm lý ⚖️.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🔄 Điều Ứng (Accommodation)</h4>
        <p><strong>Đánh đổi:</strong> Gây ra sự khủng hoảng nhận thức tạm thời 😵 và tiêu tốn nhiều rào cản tinh thần 🚧. Tuy nhiên, đây là động cơ cốt lõi bắt buộc để sự phát triển tư duy thực thụ diễn ra 🚀.</p>
      </div>
    </div>
  </div>`,

  `<div class="page-content">
    <div class="insight-box anim-trigger fade-right">
      <h3>💻 Cơ Chế Xử Lý Thông Tin (Information Processing)</h3>
      <div class="mermaid anim-trigger fade-up">
      flowchart LR;
          Input["Đầu Vào 📥"] --> Processing["Xử Lý Thông Tin ⚙️"];
          Processing --> Storage["Lưu Trữ 💾"];
          Processing --> Retrieval["Truy Xuất 📤"];
          Storage -.-> Retrieval;
      </div>
      <p>Không giống như Piaget phân chia theo giai đoạn 🪜, lý thuyết Xử lý Thông tin xem xét nhận thức của con người như một hệ thống máy tính phức tạp 💻, nơi khả năng lưu trữ 💾 và truy xuất 📤 phát triển tuyến tính theo thời gian 📈.</p>
    </div>
    <h3 class="anim-trigger fade-up">💾 1. Các Hệ Thống Trí Nhớ Cốt Lõi</h3>
    <div class="mermaid anim-trigger fade-up">
    flowchart LR;
        A["Dữ Liệu 📥"] --> B["Trí Nhớ Giác Quan 👁️<br>Sensory Memory"];
        B -- "Chú ý 🎯" --> C["Trí Nhớ Làm Việc 🧠<br>Working Memory"];
        B -. "Không chú ý ❌" .-> Quen1["Bị lãng quên 💨"];
        C -- "Ôn tập tinh chế 🔄" --> D["Trí Nhớ Dài Hạn 🏦<br>Long-Term Memory"];
        C -. "Không ôn tập ❌" .-> Quen2["Bị lãng quên 💨"];
        D -. "Truy xuất 📤" .-> C;
    </div>
    <p class="anim-trigger fade-up">Mọi luồng dữ liệu bắt đầu tại <strong>Trí nhớ Giác quan (Sensory Memory 👁️)</strong>. Nếu được chú ý (Perception 🎯), nó chuyển sang <strong>Trí nhớ Làm việc (Working Memory 🧠)</strong>. Để thông tin chuyển vào <strong>Trí nhớ Dài hạn (Long-Term Memory 🏦)</strong>, não bộ không thể chỉ học vẹt mà cần một quá trình gọi là <em>Elaborative Rehearsal</em> (Ôn tập Tinh chế 🔄).</p>

    <svg class="ss-local-swing-svg anim-trigger svg-draw" viewBox="0 0 500 150" style="width: 100%; height: auto; max-width: 500px; display: block; margin: 20px auto;">
      <rect x="20" y="50" width="100" height="50" rx="8" fill="#e2e8f0" stroke="#3b82f6" stroke-width="3"/>
      <text x="70" y="80" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">Sensory 👁️</text>
      
      <path class="curve" d="M 120 75 L 200 75" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-ch6)"/>
      
      <rect x="200" y="50" width="100" height="50" rx="8" fill="#e2e8f0" stroke="#3b82f6" stroke-width="3"/>
      <text x="250" y="80" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">Working 🧠</text>
      
      <path class="curve" d="M 300 75 L 380 75" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-ch6)"/>
      
      <rect x="380" y="50" width="100" height="50" rx="8" fill="#e2e8f0" stroke="#3b82f6" stroke-width="3"/>
      <text x="430" y="80" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#1e293b">Long-Term 🏦</text>
      
      <defs>
        <marker id="arrow-ch6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
        </marker>
      </defs>
    </svg>

    <h3 class="anim-trigger fade-up">🤔 2. Metacognition (Nhận thức về Nhận thức)</h3>
    <div class="mermaid anim-trigger fade-up">
    mindmap
      root((Metacognition 🤔<br>Nhận Thức Về Nhận Thức))
        Điều_Khiển 🎮
          Chiến_lược_ghi_nhớ 📝
          Kiểm_soát_chú_ý 🎯
        Tự_Đánh_Giá ⚖️
          Nhận_diện_điểm_mù 🙈
          Hiểu_khả_năng_bản_thân 👤
    </div>
    <p class="anim-trigger fade-up">Một cột mốc quan trọng vào khoảng 7-8 tuổi là sự phát triển của Metacognition 🤔. Trẻ bắt đầu hiểu rằng chúng có trí nhớ 🧠 và có thể điều khiển nó bằng chiến lược 🎮. Việc tự ý thức được điểm mù trong trí nhớ của chính mình 🙈 là dấu hiệu của sự trưởng thành nhận thức cao cấp 🌟.</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🤖 Học Vẹt Máy Móc (Maintenance)</h4>
        <p><strong>Ưu điểm:</strong> Xử lý tức thời cực tốt ⚡ cho thông tin ngắn hạn (như nhớ số điện thoại tạm thời 📞). Ít tốn kém tài nguyên nhận thức 🔋.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🕸️ Ôn Tập Tinh Chế (Elaborative)</h4>
        <p><strong>Đánh đổi:</strong> Yêu cầu nỗ lực tổ chức 🗂️ (Organization) và liên kết kiến thức 🔗, chậm hơn ban đầu 🐢 nhưng tạo ra mạng lưới trí nhớ dài hạn bền vững 🏦.</p>
      </div>
    </div>
  </div>`,

  `<div class="page-content">
    <div class="insight-box anim-trigger fade-right">
      <h3>🌟 Bản Chất Trí Tuệ: Đo Lường và Đa Trí Tuệ</h3>
      <div class="mermaid anim-trigger fade-up">
      graph TD;
          A["Trí Tuệ 🧠<br>Intelligence"] --> B("Góc độ truyền thống 🏛️");
          A --> C("Góc độ hiện đại 🚀");
          B --> D["Điểm số bài kiểm tra chuẩn hóa 📝<br>IQ"];
          C --> E["Khả năng thích nghi 🌱"];
          C --> F["Đa trí tuệ 🌈"];
      </div>
      <p>Trí tuệ (Intelligence 🧠) luôn là trung tâm của các cuộc tranh luận học thuật ⚔️. Nó là khả năng thích nghi với môi trường sống 🌱, hay là điểm số tĩnh trên một bài kiểm tra chuẩn hóa 📝?</p>
    </div>
    
    <h3 class="anim-trigger fade-up">🌈 1. Thuyết Đa Trí Tuệ (Howard Gardner)</h3>
    <div class="mermaid anim-trigger fade-up">
    mindmap
      root((Đa Trí Tuệ 🌈<br>Howard Gardner))
        Âm_Nhạc 🎵
        Vận_Động 🏃
        Tương_Tác_Cá_Nhân 🤝
        Nội_Tâm 🧘
        Logic_Toán_Học 🧮
        Ngôn_Ngữ 🗣️
    </div>
    <p class="anim-trigger fade-up">Gardner bác bỏ quan điểm xem trí tuệ như một khối thống nhất (General G 🧊). Ông đưa ra giả thuyết về đa trí tuệ 🌈 dựa trên sự phát triển của các vùng não khác nhau (vận động 🏃, âm nhạc 🎵, tương tác cá nhân 🤝, nội tâm 🧘). Một cá nhân bị coi là khiếm khuyết trong trí tuệ logic 🧮 có thể là thiên tài trong cơ thể học (kinesthetics 💪).</p>

    <h3 class="anim-trigger fade-up">🔺 2. Thuyết Ba Ngôi của Sternberg (Triarchic Theory)</h3>
    <div class="mermaid anim-trigger fade-up">
    graph TD;
        A["Trí Tuệ Thích Nghi 🌱"] --> B["Phân Tích 🔍<br>Analytical"];
        A --> C["Sáng Tạo ✨<br>Creative"];
        A --> D["Thực Tiễn 🛠️<br>Practical"];
        B -.-> B1["Giải quyết vấn đề tuyến tính 📏"];
        C -.-> C1["Đột phá tư duy 🚀"];
        D -.-> D1["Xoay sở thực tế 🏃"];
    </div>
    <p class="anim-trigger fade-up">Sternberg phân chia trí tuệ thành ba trụ cột nền tảng để thích nghi thành công: <strong>Trí tuệ Phân tích (Analytical 🔍)</strong> để giải quyết vấn đề tuyến tính; <strong>Trí tuệ Sáng tạo (Creative ✨)</strong> cho sự đột phá tư duy; và <strong>Trí tuệ Thực tiễn (Practical 🛠️)</strong> hay sự khôn ngoan để xoay sở trong đời sống thực 🌍.</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🔍 Trí tuệ Phân Tích (IQ Truyền Thống)</h4>
        <p><strong>Điểm mạnh:</strong> Đo lường dễ dàng thông qua bài test chuẩn hóa 📝, thống kê rõ ràng 📊, độ tin cậy và khả năng dự báo thành tích học thuật cực cao 🎓.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🌈 Đa Trí Tuệ & Thực Tiễn</h4>
        <p><strong>Đánh đổi:</strong> Không có công cụ định lượng chính xác hoàn toàn 🤷. Dù mang tính nhân văn ❤️ và bao quát hơn, nó gặp khó khăn lớn khi đưa vào hệ thống đánh giá giáo dục diện rộng 🏫.</p>
      </div>
    </div>
  </div>`,

  `<div class="page-content">
    <div class="insight-box anim-trigger fade-left">
      <h3>📈 Đường Cong Chuẩn và Nghịch Lý Môi Trường (Nature vs. Nurture)</h3>
      <div class="mermaid anim-trigger fade-up">
      graph LR;
          DiTruyen["Di Truyền 🧬 / Tự Nhiên 🌱"] -- "Định hình 🧱" --> TranTiemNang["Giới hạn tiềm năng 📏"];
          MoiTruong["Môi Trường 🌍 / Nuôi Dưỡng 🌻"] -- "Quyết định 🎯" --> MucDoDatDuoc["Mức độ phát triển thực tế 🏆"];
          TranTiemNang -. "Tác động qua lại 🔄" .- MucDoDatDuoc;
      </div>
      <p>Di truyền 🧬 đặt ra giới hạn trần cho trí tuệ, nhưng môi trường 🌍 mới là yếu tố quyết định cá nhân đó sẽ vươn tới mức nào của giới hạn đó 🚀.</p>
    </div>

    <h3 class="anim-trigger fade-up">📊 1. Phân Bố IQ và Đường Cong Chuẩn (Normal Curve)</h3>
    <div class="mermaid anim-trigger fade-up">
    graph TD;
        A["Phân Bố IQ 📊"] --> B("Dưới 70 📉");
        A --> C("85 - 115 📏");
        A --> D("Trên 130 🚀");
        B -.-> B1["Khiếm khuyết trí tuệ 🧠❌"];
        C -.-> C1["Phạm vi bình thường<br>68% dân số 👥"];
        D -.-> D1["Xuất chúng - Gifted 🌟"];
    </div>
    <p class="anim-trigger fade-up">Bài test IQ truyền thống 📝 (Công thức: Độ tuổi tinh thần / Độ tuổi thực x 100) được biểu diễn trên một đường cong chuẩn 📈 (Mean = 100). Khoảng 68% dân số nằm trong phạm vi bình thường (85-115). IQ dưới 70 được xem là khiếm khuyết trí tuệ 🧠❌, trong khi IQ từ 130 trở lên được phân loại là xuất chúng (gifted 🌟).</p>

    <h3 class="anim-trigger fade-up">⚔️ 2. Cuộc Chiến Di Truyền Học và Đói Nghèo</h3>
    <div class="mermaid anim-trigger fade-up">
    graph TD;
        A["Phát Triển Trí Tuệ 🧠"] --> B{"Yếu tố Môi Trường 🌍"};
        B -- "Đói nghèo 🏚️" --> C["Thiếu kích thích nhận thức 🚫"];
        B -- "Can thiệp sớm 🆘" --> D["Bù đắp thâm hụt 🛠️"];
        C --> E["Đóng băng tiềm năng 🧊"];
        D --> F["Phát huy hệ số di truyền 🌟"];
    </div>
    <p class="anim-trigger fade-up">Các nghiên cứu trên cặp song sinh 👯 cho thấy trí tuệ có hệ số di truyền rất cao 🧬. Tuy nhiên, <strong>Nghèo đói (Poverty 🏚️)</strong> là rào cản môi trường lớn nhất. Trẻ em lớn lên trong môi trường thiếu kích thích nhận thức 🚫 có não bộ kém phát triển hơn 📉, bất chấp di truyền. Những chương trình can thiệp sớm 🆘 (như Head Start 🏫) là sự hỗ trợ thiết yếu để bù đắp thâm hụt môi trường 🛠️.</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🧬 Tác Động Di Truyền (Heredity)</h4>
        <p><strong>Vai trò:</strong> Cung cấp "nền móng" phần cứng của não bộ 🧠💻. Giải thích vì sao con nuôi thường có IQ tiệm cận cha mẹ ruột hơn cha mẹ nuôi 👨‍👩‍👧‍👦.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🌍 Tác Động Môi Trường (Environment)</h4>
        <p><strong>Đánh đổi:</strong> Dù nền móng di truyền tốt, nhưng không có sự tương tác 🤝, dinh dưỡng 🍲 và môi trường giáo dục 🏫, trẻ sẽ bị đóng băng tiềm năng nhận thức 🧊. Chi phí can thiệp rất cao 💸 nhưng bắt buộc ❗.</p>
      </div>
    </div>
  </div>`,

  `<div class="page-content">
    <div class="insight-box anim-trigger fade-left">
      <h3>🚧 Rào Cản Phát Triển: Nhận Diện Học Thuật Sâu</h3>
      <div class="mermaid anim-trigger fade-up">
      graph LR;
          A["Rào Cản Phát Triển 🚧"] --> B["Khiếm khuyết trí tuệ 🧠❌"];
          A --> C["Khuyết tật học tập 📚❌"];
          B -.-> B1["Tổng thể nhận thức thấp 📉"];
          C -.-> C1["Trí tuệ bình thường 🧠✅<br>nhưng gián đoạn xử lý ⚙️❌"];
      </div>
      <p>Phân biệt giữa "Khiếm khuyết trí tuệ" 🧠❌ và "Khuyết tật học tập" 📚❌ là một trong những chuẩn mực chuyên môn và học thuật bắt buộc trong tâm lý học giáo dục 🎓.</p>
    </div>

    <h3 class="anim-trigger fade-up">📚 1. Khuyết Tật Học Tập (Learning Disabilities)</h3>
    <div class="mermaid anim-trigger fade-up">
    flowchart TD;
        A["Đầu Vào Thông Tin 📥"] --> B{"Xử Lý Thông Tin ⚙️"};
        B -- "Quá tải do nhiễu 💥" --> C["Gián đoạn nhận thức 🚧"];
        B -- "Bình thường ✅" --> D["Hấp thụ kiến thức 🧽"];
        C --> E["Biểu hiện của Khuyết Tật Học Tập 📚❌"];
        E -. "Trí tuệ chung vẫn bình thường 🧠✅" .-> E;
    </div>
    <p class="anim-trigger fade-up">Một nguyên tắc cốt lõi: Để được chẩn đoán mắc khuyết tật học tập 📚❌, trẻ <strong>phải có trí tuệ ở mức bình thường hoặc cao hơn 🧠✅</strong>. Sự gián đoạn nằm ở con đường xử lý thông tin ⚙️❌. Ví dụ, Hội chứng rối loạn xử lý thính giác 👂 khiến não bộ không thể tách lọc tiếng ồn nền 🎧, dẫn đến quá tải nhận thức 💥 dù thính lực bình thường ✅.</p>

    <h3 class="anim-trigger fade-up">⚡ 2. Rối Loạn Tăng Động Giảm Chú Ý (ADHD)</h3>
    <div class="mermaid anim-trigger fade-up">
    graph TD;
        A["ADHD ⚡"] --> B["Thiếu hụt sinh học 🧬"];
        B --> C["Phát triển chậm kiểm soát xung động 🛑"];
        B --> D["Lưu lượng máu não thay đổi 🩸"];
        C --> E["Khó khăn chú ý 🎯❌ & Tăng động 🏃‍♂️💨"];
        D --> E;
    </div>
    <p class="anim-trigger fade-up">Đây không phải là vấn đề "thiếu kỷ luật" 📏❌, mà là một thiếu hụt sinh học 🧬 về lưu lượng máu 🩸 và sự phát triển chậm của khu vực kiểm soát xung động (impulse control 🛑) trong não 🧠. Can thiệp ADHD cần sự tinh vi kết hợp nhiều công cụ quản lý lâu dài 🛠️.</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🧘 Trị Liệu Hành Vi (Behavioral)</h4>
        <p><strong>Ưu điểm:</strong> Xây dựng bộ kỹ năng tự quản lý dài hạn 🛠️, điều chỉnh môi trường lớp học 🏫 giúp phát triển chức năng điều hành 🧠 mà không tạo rủi ro sinh lý ✅.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>💊 Can Thiệp Dược Lý (Medication)</h4>
        <p><strong>Đánh đổi:</strong> Giúp trẻ thiết lập sự tập trung nhanh chóng ⚡ như đeo kính 👓 để thấy rõ, nhưng đi kèm rủi ro tác dụng phụ ⚠️ và hoàn toàn không cung cấp cho trẻ "cách thức" hoặc kỹ năng tổ chức thực tiễn 🗂️❌.</p>
      </div>
    </div>
  </div>`
];

const psychCh6HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb"><a href="#/home">Home</a> / <a href="#/psychology">Psychology</a> / <span>Chapter 6: Cognitive & Physical Development in Childhood</span></div>
  <div class="article" id="bookContent"></div>
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="display:flex; align-items:center; gap:4px;">Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center;"> <span id="pageTotal"></span></div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;

export default psychCh6HTML;
export { psychCh6Pages };
