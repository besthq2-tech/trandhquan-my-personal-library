const psychCh1Pages = [
  // PAGE 1: The Themes of Development
  `
  <div class="article-head anim-trigger fade-up">
    <h1><span class="pulse"></span> Overview of Human Development 🌱</h1>
    <p class="lede">Chúng ta thay đổi như thế nào theo thời gian ⏳? Đâu là động lực thực sự đằng sau sự phát triển của con người từ lúc lọt lòng 👶 đến khi nhắm mắt xuôi tay 🧓?</p>
  </div>
  
  <div class="article-body">
    <div class="insight-box anim-trigger fade-left">
      <p><strong>📖 Câu chuyện mở đầu:</strong> Hãy tưởng tượng bạn gặp lại một người bạn cũ hồi 5 tuổi 👦. Bây giờ người đó 25 tuổi 👨. Sự thay đổi không chỉ ở thể chất 🏃, mà còn ở cách họ suy nghĩ 🤔, phản ứng xã hội 🤝. Khoa học phát triển (Developmental Science) nghiên cứu chính xác quỹ đạo thay đổi này đa chiều (multi-directional 🛤️).</p>
    </div>

    <h3 class="anim-trigger fade-up">⚔️ 3 Luồng Tranh Luận Cốt Lõi (The Core Debates)</h3>
    <div class="mermaid anim-trigger fade-up">
    graph TD;
      A[Các Luồng Tranh Luận Cốt Lõi ⚖️<br>Trong Khoa Học Phát Triển] --> B(Nguồn Gốc 🌱);
      A --> C(Tiến Trình 📈);
      A --> D(Phạm Vi 🌍);
      
      B --> B1[Nature 🧬<br>Bẩm sinh, Di truyền];
      B --> B2[Nurture 🌻<br>Môi trường, Nuôi dưỡng];
      B1 -. Ngoại di truyền học 🔬<br>Epigenetics .- B2;
      
      C --> C1[Continuity 📈<br>Liên tục, Tích lũy];
      C --> C2[Discontinuity 🪜<br>Gián đoạn, Từng giai đoạn];
      
      D --> D1[Universal 🌍<br>Phổ quát, Chung cho loài người];
      D --> D2[Context-Specific 🏘️<br>Đặc thù ngữ cảnh, Văn hóa];
    </div>
    <p class="anim-trigger fade-up">Bất kỳ nhà tâm lý học nào khi nghiên cứu sự phát triển cũng phải đối mặt với 3 bài toán đánh đổi (trade-offs ⚖️) mang tính nền tảng:</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🧬 1. Nature (Bẩm sinh)</h4>
        <p>Di truyền học, DNA, các yếu tố sinh học được lập trình sẵn. <em>Ví dụ:</em> IQ cơ bản 🧠, khí chất bẩm sinh (temperament 👶).</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🌻 Nurture (Môi trường)</h4>
        <p>Sự nuôi dưỡng, giáo dục, văn hóa, và trải nghiệm sống. <em>Ví dụ:</em> Bạn có vào được trường chuyên hay không do nỗ lực 📚 và sự đầu tư của gia đình 👨‍👩‍👧‍👦.</p>
      </div>
    </div>
    <p class="anim-trigger fade-up"><em>💡 Chuyên môn:</em> Ngày nay, không ai phủ nhận một trong hai. Phương pháp chuyên môn là <strong>Epigenetics (Ngoại di truyền học 🔬)</strong> - nghiên cứu cách môi trường "bật" 🟢 hoặc "tắt" 🔴 các gene cụ thể (Nature x Nurture interaction 🤝).</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>📈 2. Continuity (Liên tục)</h4>
        <p>Sự phát triển là một dốc thoai thoải, trơn tru. <em>Ví dụ:</em> Sự phát triển thể chất của trẻ em (cao lên từng centimet mỗi ngày 📏).</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🪜 Discontinuity (Gián đoạn)</h4>
        <p>Sự phát triển nhảy vọt theo từng "giai đoạn" (stages). <em>Ví dụ:</em> Tuổi dậy thì 🌋, hoặc các giai đoạn khủng hoảng tâm lý của Erikson 🌀.</p>
      </div>
    </div>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🌍 3. Universal (Phổ quát)</h4>
        <p>Tất cả mọi người đều trải qua các mốc giống nhau (vd: trẻ em đều mọc răng 🦷, học bò trước khi đi 🚼).</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🏘️ Context-Specific (Đặc thù ngữ cảnh)</h4>
        <p>Phát triển phụ thuộc mạnh vào văn hóa 🏺. <em>Ví dụ:</em> Trẻ em Mỹ học đếm tiền lúc lớp 2 💵, nhưng trẻ em ở một số chợ Nam Á biết tính tiền từ lúc 5 tuổi 🪙.</p>
      </div>
    </div>
  </div>
  `,

  // PAGE 2: Psychoanalytic & Psychosocial
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🛋️ Sự trỗi dậy của Phân Tâm Học & Tâm Lý Xã Hội</h3>
    <div class="mermaid anim-trigger fade-up">
    graph LR;
      A[Lý Thuyết Tâm Động Học 🌪️<br>Psychodynamic] --> B[Phân Tâm Học 🛋️<br>Freud];
      A --> C[Tâm Lý Xã Hội 🤝<br>Erikson];
      
      B --> B1(Động lực: Bản năng & Vô thức 👻);
      B --> B2(Giai đoạn: Dừng lại ở Tuổi thơ 👶);
      B --> B3(Cấu trúc: ID, EGO, SUPEREGO ⚖️);
      
      C --> C1(Động lực: Môi trường Xã hội 👥);
      C --> C2(Giai đoạn: Kéo dài Suốt đời ⏳);
      C --> C3(Cơ chế: Khủng hoảng Tâm lý - Crisis 💥);
      
      B2 -. Chuyển dịch mô hình 🔄 .-> C2;
    </div>
    <p class="anim-trigger fade-up">Trước Sigmund Freud, tâm lý học thường chỉ bị nhốt trong phòng thí nghiệm hàn lâm 🔬 hoặc bệnh viện tâm thần 🏥. Freud đã mang tâm lý học ra "ánh sáng" đời thực ☀️.</p>

    <div class="ss-grid">
      <div class="ss-card anim-trigger fade-left">
        <div class="ss-card-head">
          <h4>🧊 Mô hình Tảng băng trôi của Freud</h4>
          <span class="mini">Psychoanalysis 🛋️</span>
        </div>
        <div class="ss-card-body">
          <svg class="ss-local-swing-svg anim-trigger svg-draw" viewBox="0 0 200 200">
            <path class="curve" d="M 10 100 Q 50 100 100 100 T 190 100" stroke-width="2" stroke="#cfc6b8" stroke-dasharray="0" />
            <path class="curve large" d="M 60 100 L 100 40 L 140 100 Z" fill="none" />
            <path class="curve small" d="M 40 100 L 100 180 L 160 100 Z" fill="none" stroke-dasharray="10 5" />
            <text x="80" y="80" class="label-large" font-size="14">EGO</text>
            <text x="80" y="140" class="label-small" font-size="14">ID / SUPEREGO</text>
            <text x="10" y="90" font-size="10" fill="#7f786e">Mặt nước (Conscious)</text>
          </svg>
          <p class="ss-caption"><strong>ID (Bản năng 😈)</strong> khao khát khoái cảm (Pleasure principle). <strong>EGO (Bản ngã 😐)</strong> cân bằng thực tế (Reality principle). <strong>SUPEREGO (Siêu ngã 😇)</strong> là đạo đức. Sự xung đột giữa ID (muốn ngủ nướng 😴) và EGO (phải dậy đi làm 👔) tạo ra hành vi.</p>
        </div>
      </div>
      
      <div class="ss-card anim-trigger fade-right">
        <div class="ss-card-head">
          <h4>🌀 Erik Erikson & 8 Giai đoạn</h4>
          <span class="mini">Psychosocial 🤝</span>
        </div>
        <div class="ss-card-body">
          <p class="ss-caption">Erikson (học trò của Freud) nhận ra: Sự phát triển không dừng lại ở tuổi thơ (như Freud nghĩ 👶), mà kéo dài <strong>suốt đời ⏳</strong>. Mỗi giai đoạn là một <strong>Khủng hoảng (Crisis 💥)</strong> cần giải quyết.</p>
          <ul class="curve-bullets">
            <li><strong>0-1.5T:</strong> Trust vs Mistrust (Tin tưởng hay Bất an 🍼)</li>
            <li><strong>Tuổi Teen:</strong> Identity vs Role Confusion (Tôi là ai? hay Lạc lối 🧑‍🎤)</li>
            <li><strong>Tuổi 20-30:</strong> Intimacy vs Isolation (Gắn kết hay Cô lập 💞)</li>
            <li><strong>Tuổi Già:</strong> Integrity vs Despair (Mãn nguyện hay Tuyệt vọng 🧓)</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="insight-box anim-trigger fade-up">
      <p><strong>⚔️ Học thuật & Trade-off:</strong> Thuyết Freud ngày nay bị chỉ trích vì <em>không thể kiểm chứng bằng thực nghiệm (unfalsifiable ❌)</em>. Bạn không thể "đo lường" ID hay EGO bằng máy MRI 🧲. Tuy nhiên, Erikson lại mang tính ứng dụng cực cao trong Y học và Điều dưỡng 🏥, vì nó cung cấp framework để hiểu bệnh nhân ở từng độ tuổi đang đối mặt với nỗi sợ gì 😨.</p>
    </div>
  </div>
  `,

  // PAGE 3: Cognitive Development: Piaget vs Vygotsky
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🧠 Cognitive Development: Cuộc chiến của Nhận Thức</h3>
    <div class="mermaid anim-trigger fade-up">
    graph TD;
      A[Sự Phát Triển Nhận Thức 🧠<br>Cognitive Development] --> B[Jean Piaget 🔬<br>Thuyết Cấu Trúc Nhận Thức];
      A --> C[Lev Vygotsky 🤝<br>Thuyết Văn Hóa - Xã Hội];
      
      B --> B1(Hình ảnh: Nhà Khoa Học Đơn Độc 🧑‍🔬);
      B --> B2(Cơ chế: Tự tương tác với Vật lý 🧱);
      B --> B3(Quy luật: Phát triển xảy ra TRƯỚC khi Học 📈);
      
      C --> C1(Hình ảnh: Người Học Việc 🧑‍🔧);
      C --> C2(Cơ chế: Tương tác Xã hội & Scaffolding 🏗️);
      C --> C3(Quy luật: Học tập dẫn dắt sự Phát triển 📚);
      C2 --> C4(Vùng Phát Triển Gần - ZPD 🎯);
    </div>
    <p class="anim-trigger fade-up">Làm sao một đứa trẻ từ chỗ không biết gì 🤷 trở thành người biết giải tích 🧮? Hai gã khổng lồ Piaget và Vygotsky có góc nhìn hoàn toàn đối lập (nhưng bù trừ cho nhau ⚖️).</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🔬 Jean Piaget (Thuyết Cấu trúc)</h4>
        <p>Trẻ em là những <strong>"Nhà khoa học đơn độc" 🧑‍🔬</strong>. Chúng tự tương tác với vật lý ⚽, thử sai để phát triển Não (Development 🧠) -> Dẫn đến Học (Learning 📚).</p>
        <div class="pz-chip" style="margin-top: 8px">Development precedes Learning 📈</div>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🤝 Lev Vygotsky (Thuyết Văn hóa-Xã hội)</h4>
        <p>Trẻ em là <strong>"Người học việc" 🧑‍🔧</strong>. Chúng học từ xã hội (giáo viên 🧑‍🏫, bạn bè giỏi hơn 👥). Học (Learning 📚) -> Kéo theo sự Phát triển (Development 🧠).</p>
        <div class="pz-chip" style="margin-top: 8px">Learning precedes Development 📚</div>
      </div>
    </div>

    <div class="ss-card anim-trigger fade-up" style="margin-top: 20px;">
      <div class="ss-card-head">
        <h4>🎯 Vùng Phát Triển Gần (ZPD - Zone of Proximal Development)</h4>
        <span class="mini">Vygotsky Concept 🤝</span>
      </div>
      <div class="ss-card-body" style="text-align: center;">
        <svg class="ss-local-swing-svg anim-trigger svg-draw" viewBox="0 0 300 150" style="max-width: 400px; margin: 0 auto;">
          <circle cx="150" cy="75" r="60" fill="none" stroke="#cfc6b8" stroke-dasharray="5 5" />
          <circle cx="150" cy="75" r="40" fill="none" stroke="#28c840" stroke-width="2" />
          <circle cx="150" cy="75" r="20" fill="#28c840" />
          <text x="150" y="78" font-size="8" fill="#fff" text-anchor="middle">Tự làm 🟢</text>
          <text x="150" y="50" font-size="10" fill="#28c840" text-anchor="middle" font-weight="bold">ZPD (Cần MKO giúp 🤝)</text>
          <text x="150" y="25" font-size="10" fill="#ff5f57" text-anchor="middle">Không thể làm được 🔴</text>
        </svg>
        <p class="ss-caption" style="margin-top: 12px;">MKO (More Knowledgeable Other 🎓) là người biết nhiều hơn. ZPD là khoảng trống giữa "những gì trẻ tự làm được" 🟢 và "những gì trẻ không thể làm" 🔴. Giáo dục hiệu quả nằm ở việc <strong>scaffolding (bắc giàn giáo 🏗️)</strong> ngay trong vùng ZPD này.</p>
      </div>
    </div>

    <div class="insight-box anim-trigger fade-left">
      <p><strong>💡 Ứng dụng Lâm sàng:</strong> Trong phục hồi chức năng (Occupational Therapy 🏥), ZPD cực kỳ quan trọng. Bệnh nhân cụt chân 🦿 không thể tự đi (Ngoài ZPD 🔴). Nhưng họ có thể tự lắp chân giả (Tự làm 🟢). Bác sĩ sẽ đỡ họ tập đi những bước đầu tiên 🚶 -> Đây chính là can thiệp vào ZPD 🎯.</p>
    </div>
  </div>
  `,

  // PAGE 4: Ecological Systems Theory
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🌍 Thuyết Hệ Sinh Thái (Bronfenbrenner)</h3>
    <div class="mermaid anim-trigger fade-up">
    graph TD;
      A((Cá nhân 👤<br>Khí chất, Sinh học)) --- B[Microsystem 🏡<br>Gia đình, Bạn bè];
      B --- C[Mesosystem 🔗<br>Tương tác giữa các Micros];
      C --- D[Exosystem 🏢<br>Chính sách, Nơi làm việc của Bố Mẹ];
      D --- E[Macrosystem 🌐<br>Văn hóa, Lịch sử, Kinh tế];
      
      style A fill:#0e7490,color:#fff;
      style B fill:#28c840,color:#fff;
      style C fill:#febc2e,color:#000;
      style D fill:#ff5f57,color:#fff;
      style E fill:#cfc6b8,color:#000;
    </div>
    <p class="anim-trigger fade-up">Urie Bronfenbrenner tin rằng bạn không thể tách một đứa trẻ ra khỏi môi trường 🌳 và đặt nó vào lồng kính 🧫 để nghiên cứu. Sự phát triển là kết quả tương tác của nhiều lớp hệ thống đan xen 🕸️.</p>

    <div class="ss-card anim-trigger scale-in">
      <div class="ss-card-head">
        <h4>🪐 Mô hình 5 Hệ thống (Ecological Systems)</h4>
      </div>
      <div class="ss-card-body">
        <svg class="ss-local-swing-svg anim-trigger svg-draw" viewBox="0 0 300 300" style="max-width: 400px; margin: 0 auto; display: block;">
          <!-- Macrosystem -->
          <circle cx="150" cy="150" r="140" fill="none" stroke="#ff5f57" stroke-width="2" />
          <text x="150" y="25" font-size="12" fill="#ff5f57" text-anchor="middle" font-weight="bold">Macrosystem (Văn hóa, Lịch sử 🌐)</text>
          
          <!-- Exosystem -->
          <circle cx="150" cy="150" r="105" fill="none" stroke="#febc2e" stroke-width="2" />
          <text x="150" y="60" font-size="12" fill="#febc2e" text-anchor="middle" font-weight="bold">Exosystem (Chính sách, Truyền thông 🏢)</text>

          <!-- Mesosystem -->
          <circle cx="150" cy="150" r="70" fill="none" stroke="#28c840" stroke-width="2" />
          <text x="150" y="95" font-size="11" fill="#28c840" text-anchor="middle" font-weight="bold">Mesosystem (Tương tác Micros 🔗)</text>

          <!-- Microsystem -->
          <circle cx="150" cy="150" r="40" fill="none" stroke="#0e7490" stroke-width="2" />
          <text x="150" y="125" font-size="10" fill="#0e7490" text-anchor="middle" font-weight="bold">Microsystem 🏡</text>

          <!-- Individual -->
          <circle cx="150" cy="150" r="15" fill="#0c0d14" />
          <text x="150" y="153" font-size="8" fill="#fff" text-anchor="middle">You 👤</text>
        </svg>
      </div>
    </div>

    <div class="insight-box anim-trigger fade-up">
      <p><strong>📖 Storytelling: Hiệu ứng cánh bướm trong giáo dục 🦋</strong><br>
      Tại sao học sinh ở hạt Brevard County lại có đến 3 người lọt vào Dàn nhạc giao hưởng bang 🎻 trong khi Miami rộng lớn chỉ có 1? <br><br>
      Theo Bronfenbrenner: Ở tầng <strong>Macrosystem 🌐</strong> (Lịch sử nghiên cứu), người ta phát hiện âm nhạc phát triển não bộ 🧠. Dẫn đến tầng <strong>Exosystem 🏢</strong> (Chính sách), chính quyền quyết định tài trợ mạnh 💰 cho giáo dục âm nhạc. Điều này ép xuống <strong>Microsystem 🏡</strong> (Trường học), nơi đứa trẻ được học violin từ lớp 1 👧🎻. Cuối cùng, sự tương tác này tạo ra thần đồng 🌟. Đứa trẻ không tự nhiên giỏi, nó là sản phẩm của một hệ thống sinh thái hoàn hảo 🌳.</p>
    </div>
  </div>
  `,

  // PAGE 5: Research Methods & The Ultimate Trade-off
  `
  <div class="article-body">
    <h3 class="anim-trigger fade-up">🔬 Nghiên cứu Khoa Học: Đánh đổi lớn nhất (The Ultimate Trade-off)</h3>
    <div class="mermaid anim-trigger fade-up">
    graph LR;
      A[Đo Lường Tâm Lý 📏] --> B(Reliability 🎯<br>Độ Tin Cậy);
      A --> C(Validity ✅<br>Độ Giá Trị);
      
      B --> B1[Tính Nhất Quán 🔄];
      B --> B2[Đo nhiều lần ra cùng kết quả 📊];
      
      C --> C1[Tính Chính Xác 🏹];
      C --> C2[Đo đúng bản chất khái niệm 💡];
      
      B2 -. Thiếu Validity ❌ .-> C2;
    </div>
    <p class="anim-trigger fade-up">Tâm lý học là một môn khoa học 🔬. Một lý thuyết (Theory) không phải là "suy đoán" (Hypothesis 💭). Nó phải được chứng minh bằng dữ liệu 📊 (Reliability & Validity).</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>🎯 Reliability (Độ tin cậy)</h4>
        <p>Tính nhất quán 🔄. Bạn thi SAT 3 lần đều được 1000 điểm 📝. Đo đi đo lại vẫn ra kết quả đó.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>✅ Validity (Độ giá trị)</h4>
        <p>Đo đúng cái cần đo 🏹. Bắt cá thi leo cây 🐟🌳 thì bài kiểm tra leo cây rất Reliable (cá luôn trượt ❌), nhưng KHÔNG Valid (vì leo cây không đo lường được trí thông minh của cá 🧠❌).</p>
      </div>
    </div>

    <h4 class="anim-trigger fade-up" style="margin-top: 30px;">⏱️ Phương Pháp Nghiên Cứu Tuổi Đời</h4>
    <div class="mermaid anim-trigger fade-up">
    graph TD;
      A[Nghiên Cứu Tuổi Đời ⏳] --> B[Nghiên Cứu Dọc 📏<br>Longitudinal];
      A --> C[Nghiên Cứu Chéo 🔀<br>Cross-Sectional];
      A --> D[Thiết Kế Tuần Tự 🔄<br>Sequential Design];
      
      B --> B1(1 Nhóm tuổi 👥<br>Theo dõi nhiều năm 🗓️);
      B1 --> B2(Ưu: Thấy rõ quỹ đạo cá nhân 📈);
      B1 --> B3(Nhược: Đắt 💸, Lâu 🐢, Hao hụt mẫu 📉);
      
      C --> C1(Nhiều Nhóm tuổi 👨‍👦‍👦<br>Đo lường 1 thời điểm ⏱️);
      C1 --> C2(Ưu: Nhanh ⚡, Rẻ 💰);
      C1 --> C3(Nhược: Hiệu ứng thế hệ - Cohort Effect 👨‍🦳👦);
      
      D --> D1(Nhiều Nhóm tuổi 👨‍👦‍👦<br>Theo dõi nhiều năm 🗓️);
      D1 --> D2(Kết hợp ưu điểm cả hai ✅);
      D1 --> D3(Loại trừ Cohort Effect 🛡️);
    </div>
    <p class="anim-trigger fade-up">Làm sao để biết trí nhớ của con người thay đổi thế nào từ 20 tuổi đến 80 tuổi 🧑‍🦱➡️🧓? Các nhà nghiên cứu phải đối mặt với một Trade-off sinh tử ⚖️ về tiền bạc 💰 và độ chính xác 🎯.</p>

    <div class="tradeoff-box anim-trigger scale-in">
      <div class="tradeoff-side tradeoff-pro">
        <h4>📏 1. Longitudinal Study (Nghiên cứu dọc)</h4>
        <p><strong>Cách làm:</strong> Bắt 1 nhóm người 20 tuổi 🧑‍🦱, theo dõi họ trong 60 năm liên tục 🗓️ cho đến khi họ 80 tuổi 🧓.<br>
        <strong>Ưu điểm:</strong> Thấy được quỹ đạo thay đổi thực sự của từng cá nhân 📈.<br>
        <strong>Trade-off (Nhược điểm):</strong> Cực kỳ đắt đỏ 💸, tốn 60 năm 🐢 để có kết quả, rủi ro người tham gia bỏ cuộc (attrition 📉) hoặc qua đời trước khi nghiên cứu xong 🪦.</p>
      </div>
      <div class="tradeoff-side tradeoff-con">
        <h4>🔀 2. Cross-Sectional Study (Nghiên cứu chéo)</h4>
        <p><strong>Cách làm:</strong> Lấy ngay hôm nay 1 nhóm 20 tuổi 🧑‍🦱, 1 nhóm 40 tuổi 👨, 1 nhóm 80 tuổi 🧓 và test trí nhớ của họ cùng một lúc ⏱️.<br>
        <strong>Ưu điểm:</strong> Nhanh gọn ⚡, rẻ tiền 💰, có kết quả xuất bản ngay 📄.<br>
        <strong>Trade-off (Nhược điểm):</strong> Bị dính <em>Hiệu ứng thế hệ (Cohort Effect 👨‍🦳👦)</em>. Nhóm 80 tuổi trí nhớ kém có thể không phải do tuổi già 🧓, mà do thế hệ của họ sinh ra thời chiến tranh 💣, thiếu dinh dưỡng 🍲 và ít đi học 🏫 hơn nhóm 20 tuổi thời nay.</p>
      </div>
    </div>

    <div class="insight-box anim-trigger fade-up">
      <p><strong>🎯 Phương pháp chuyên môn tối ưu: Sequential Design (Thiết kế tuần tự 🔄)</strong><br>
      Để giải quyết Trade-off trên ⚖️, khoa học hiện đại dùng "Thiết kế tuần tự". Bắt đầu với một nghiên cứu chéo (nhiều nhóm tuổi 👨‍👦‍👦), sau đó theo dõi TẤT CẢ các nhóm đó theo chiều dọc 📏 trong vài năm. Vừa tiết kiệm thời gian ⏱️ hơn Longitudinal, vừa loại trừ được Cohort Effect 🛡️ của Cross-sectional.</p>
    </div>
    
    <div style="margin-top: 40px; text-align: center;">
      <a class="button primary" href="#/psychology">Hoàn thành Chương 1 & Trở về Index 🏠</a>
    </div>
  </div>
  `
];

const psychCh1HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb">
    <a href="#/home">Home</a> / 
    <a href="#/psychology">Psychology</a> / 
    <span>Chapter 1: Human Development</span>
  </div>
  
  <div class="article" id="bookContent">
    <!-- Pages will be injected here by initBookPagination -->
  </div>
  
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="font-family: var(--font-mono); font-size: 12px; color: var(--muted); display: flex; align-items: center; gap: 4px;">
      Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center; border: 1px solid var(--line); border-radius: 4px; padding: 2px; background: var(--paper);"> <span id="pageTotal"></span>
    </div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;

export default psychCh1HTML;
export { psychCh1Pages };
