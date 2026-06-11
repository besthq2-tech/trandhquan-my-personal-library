export default `
<section class="page active" id="page-home" data-route="/home" data-title="Preface">
  <div class="page-shell">
    <div class="page-kicker" style="margin-top: 10px;">00 · preface</div>
    <h1 style="margin-bottom: 24px;">Preface</h1>

    <div class="about-grid" style="display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 28px; margin-bottom: 40px;">
      <!-- Left Column: Preface & Philosophy -->
      <div style="display: grid; gap: 20px;">
        <div class="about-box" style="border: 1px solid var(--line); border-radius: var(--radius); background: var(--paper); padding: 28px; display: grid; gap: 16px;">
          <h2 style="font-family: var(--font-ui); font-size: 20px; font-weight: 800; color: var(--ink); margin: 0; letter-spacing: -0.02em;">Preface</h2>
          <p style="font-size: 15px; line-height: 1.8; color: var(--soft); margin: 0;">
            Hello! I’m <strong style="color: var(--ink);">Quan</strong>, an analog designer based in Ho Chi Minh City. Since 2019, my day-to-day work has revolved around high-speed Die-to-Die communication and custom IC designs.
          </p>
          <p style="font-size: 15px; line-height: 1.8; color: var(--soft); margin: 0;">
            This library acts as my digital bookshelf and personal notebook collection. It holds everything my mind creates — ranging from deep technical reads on circuit design, collections of academic papers, to personal insights on finance, market analysis, and wealth accumulation models.
          </p>
        </div>

        <div class="about-box" style="border: 1px solid var(--line); border-radius: var(--radius); background: var(--paper); padding: 28px; display: grid; gap: 16px;">
          <h2 style="font-family: var(--font-ui); font-size: 20px; font-weight: 800; color: var(--ink); margin: 0; letter-spacing: -0.02em;">Why does this library exist?</h2>
          <p style="font-size: 15px; line-height: 1.8; color: var(--soft); margin: 0;">
            Our brains are excellent for processing information but terrible at storing it. Over the years, I've compiled textbooks, papers, and personal summaries to prevent knowledge decay.
          </p>
          <p style="font-size: 15px; line-height: 1.8; color: var(--soft); margin: 0; border-left: 3px solid var(--accent); padding-left: 16px; font-style: italic;">
            "A library of everything my mind create" — this is my commitment to writing down structured, visualized insights that bridge complex technical designs and financial intuition.
          </p>
          <p style="font-size: 15px; line-height: 1.8; color: var(--soft); margin: 0;">
            This web app acts as my central repository, pulling together resources from my other notebooks, making them easily searchable and shareable.
          </p>
        </div>
      </div>

      <!-- Right Column: Canvas, Profile & Contact -->
      <div style="display: grid; gap: 14px; align-content: start;">
        <!-- Animated Eye Panel -->
        <div class="eye-panel" style="margin-bottom: 8px;">
          <div class="terminal-bar">
            <div class="dot"></div>
            <span>rx_data_eye_diagram.log</span>
          </div>
          <canvas id="eyeCanvas"></canvas>
          <div class="eye-metrics">
            <div class="metric">
              <b>32.0</b>
              <span>Gbps PAM4</span>
            </div>
            <div class="metric">
              <b>14.2</b>
              <span>mV Eye Height</span>
            </div>
            <div class="metric">
              <b>0.18</b>
              <span>UI Jitter</span>
            </div>
          </div>
        </div>

        <!-- Profile Photo -->
        <div class="about-box" style="border: 1px solid var(--line); border-radius: var(--radius); background: var(--paper); padding: 8px; justify-self: start; max-width: 200px; display: grid; justify-items: center;">
          <img src="/avatar.png" alt="Tran Duc Hong Quan" style="display: block; width: 100%; height: auto; border-radius: calc(var(--radius) - 4px);" />
        </div>

        <div class="about-box" style="border: 1px solid var(--line); border-radius: var(--radius); background: var(--paper); padding: 24px; display: grid; gap: 16px; max-width: 360px; justify-self: start;">
          <div class="mini-label" style="font-family: var(--font-mono); font-size: 9px; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); margin: 0;">Contact</div>
          <p style="font-size: 14px; color: var(--soft); margin: 0; line-height: 1.6;">If something here was useful, or wrong, or both — I'd genuinely like to know.</p>
          
          <div style="display: grid; gap: 10px;">
            <a href="mailto:trandhquan@gmail.com" style="display: flex; align-items: center; gap: 12px; border: 1px solid var(--line); border-radius: var(--radius); padding: 14px; background: var(--paper-2); transition: border-color .15s ease; color: var(--ink); text-decoration: none;" onmouseover="this.style.borderColor='var(--accent)'" onmouseout="this.style.borderColor='var(--line)'">
              <span style="font-size: 20px; opacity: .8; color: var(--accent);">✉</span>
              <div>
                <div style="font-size: 9px; font-family: var(--font-mono); color: var(--muted); letter-spacing: .12em; text-transform: uppercase; margin-bottom: 2px;">Email</div>
                <div style="font-size: 14px; color: var(--cyan); font-weight: 600;">trandhquan@gmail.com</div>
              </div>
            </a>
            
            <a href="https://www.linkedin.com/in/h%E1%BB%93ng-qu%C3%A2n-6a0962196" target="_blank" rel="noopener" style="display: flex; align-items: center; gap: 12px; border: 1px solid var(--line); border-radius: var(--radius); padding: 14px; background: var(--paper-2); transition: border-color .15s ease; color: var(--ink); text-decoration: none;" onmouseover="this.style.borderColor='var(--cyan)'" onmouseout="this.style.borderColor='var(--line)'">
              <span style="font-size: 20px; opacity: .8; color: var(--cyan);">in</span>
              <div>
                <div style="font-size: 9px; font-family: var(--font-mono); color: var(--muted); letter-spacing: .12em; text-transform: uppercase; margin-bottom: 2px;">LinkedIn</div>
                <div style="font-size: 14px; color: var(--cyan); font-weight: 600;">LinkedIn Profile</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- ─── OTHER NOTEBOOKS & BLOGS ─── -->
    <section class="section" style="margin-top: 40px;">
      <div class="section-head">
        <div>
          <div class="mini-label">My Projects</div>
          <h2 class="section-title">Other Notebooks.</h2>
          <p class="section-desc">Explore my specialized notebooks and active blogs across different domains.</p>
        </div>
      </div>
      <div class="collection-grid">
        <a class="collection-card" href="https://trandhquan-my-personal-vlsi-design-notebook.vercel.app/" target="_blank" rel="noopener">
          <span style="color: var(--accent);">VLSI</span>
          <h3>VLSI Design Notebook</h3>
          <p>An intuitive realization of design insights, circuit drawings, and transient simulations of high-speed SerDes blocks (equalizers, oscillators, CDRs).</p>
        </a>
        <a class="collection-card" href="https://github.com/besthq2-tech/Quan-Tran-public-finance-research" target="_blank" rel="noopener">
          <span style="color: var(--cyan);">Finance</span>
          <h3>Personal Finance Research</h3>
          <p>Public financial research, ETF fund analyses, long-term asset models, and wealth accumulation tracking notebooks.</p>
        </a>
        <a class="collection-card" href="https://github.com/besthq2-tech/Qu-n-Tr-n-public-financial-data" target="_blank" rel="noopener">
          <span style="color: var(--green);">Data</span>
          <h3>Public Financial Data</h3>
          <p>Aggregated dataset repository for long-term investments, mutual funds, asset tracking, and quantitative modeling.</p>
        </a>
      </div>
    </section>

    <!-- ─── RECENT ACQUISITIONS ─── -->
    <section class="section" style="margin-top: 56px;">
      <div class="section-head">
        <div>
          <div class="mini-label">Catalog</div>
          <h2 class="section-title">Recent Books & Papers.</h2>
          <p class="section-desc">Key literature, notes, and references I'm currently studying or revisiting.</p>
        </div>
      </div>
      <div class="grid two">
        <div class="card note-card" style="cursor: default;">
          <div class="card-meta"><b>BOOK</b><span>Microelectronics</span></div>
          <h3>Design of Analog CMOS Integrated Circuits</h3>
          <p>By Behzad Razavi. My primary reference for small-signal analysis, single-stage amp modeling, and operational transconductance amplifiers.</p>
          <div class="tag-row"><span>analog</span> <span>cmos</span> <span>design</span></div>
        </div>

        <div class="card note-card" style="cursor: default;">
          <div class="card-meta"><b>BOOK</b><span>High-Speed SerDes</span></div>
          <h3>Design of Integrated Circuits for Optical Communications</h3>
          <p>By Behzad Razavi. Study notes on transimpedance amplifiers, limiting amplifiers, clock and data recovery circuits.</p>
          <div class="tag-row"><span>optical</span> <span>tia</span> <span>cdr</span></div>
        </div>
      </div>
    </section>
  </div>
</section>
`;
