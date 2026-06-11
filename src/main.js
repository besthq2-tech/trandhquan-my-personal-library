import homeHTML from './pages/home.js';

const correctPassword = '231197';

// Check if authenticated
if (localStorage.getItem('library_authenticated') === 'true') {
  initApp();
} else {
  showLoginGate();
}

function showLoginGate() {
  const gateHTML = `
    <div class="gate-screen">
      <div class="gate-card">
        <div class="gate-header">
          <div class="gate-icon">🔒</div>
          <h2 class="gate-title">Private Archive</h2>
          <p class="gate-desc">Tran Duc Hong Quan's Personal Library.<br>Enter the access key to unlock.</p>
        </div>
        <div class="gate-input-wrapper">
          <input type="password" id="gatePassword" class="gate-input" placeholder="••••••" autofocus />
          <div class="gate-error" id="gateError"></div>
        </div>
        <button id="gateUnlockBtn" class="button primary" style="width:100%; justify-content:center; padding:10px; font-weight:700;">Unlock Library</button>
      </div>
    </div>
  `;
  document.body.innerHTML = gateHTML;

  const passwordInput = document.getElementById('gatePassword');
  const unlockBtn = document.getElementById('gateUnlockBtn');
  const errorDiv = document.getElementById('gateError');

  function tryUnlock() {
    const entered = passwordInput.value.trim();
    if (entered === correctPassword) {
      localStorage.setItem('library_authenticated', 'true');
      initApp();
    } else {
      errorDiv.textContent = 'Invalid access key. Decryption failed.';
      passwordInput.value = '';
      passwordInput.focus();
    }
  }

  unlockBtn.addEventListener('click', tryUnlock);
  passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      tryUnlock();
    }
  });
}

function initApp() {
  // Application Layout Template
  const layoutHTML = `
  <div class="app">
    <aside class="sidebar">
      <div class="mobile-row">
        <div class="mobile-title">Hong Quan <span>Personal Library</span></div>
        <button class="menu-btn" id="menuBtn" aria-expanded="false">Menu</button>
      </div>

      <section class="brand">
        <div class="eyebrow"><span class="pulse"></span>hongquan.library</div>
        <h1><span>Hong Quan</span><br>Library</h1>
        <p>A library of everything my mind create</p>
      </section>

      <label class="search">
        <span aria-hidden="true">&#9094;</span>
        <input
          id="searchInput"
          type="search"
          placeholder="Search books, papers, topics..."
          autocomplete="off"
        >
      </label>

      <nav class="nav" id="sideNav" aria-label="Main navigation">
        <a class="nav-link active" href="#/home" data-link-route="/home">
          <span class="nav-index">00</span><span>Preface</span>
        </a>
        
        <details open class="nav-section">
          <summary><span>Quick Navigation</span><span class="chev">⌄</span></summary>
          <div class="nav-children">
            <a class="nav-link" href="#/home" data-link-route="/home">
              <span class="nav-index">01</span><span>Home / Preface</span>
            </a>
            <a class="nav-link" href="https://trandhquan-my-personal-vlsi-design-notebook.vercel.app/" target="_blank" rel="noopener">
              <span class="nav-index">02</span><span>VLSI Notebook ↗</span>
            </a>
            <a class="nav-link" href="https://github.com/besthq2-tech/Quan-Tran-public-finance-research" target="_blank" rel="noopener">
              <span class="nav-index">03</span><span>Finance Research ↗</span>
            </a>
          </div>
        </details>
      </nav>

      <section class="ground-rules">
        <h3>Ground Rules</h3>
        <p>A library of everything my mind create. Public-safe intuition only.</p>
        <button id="lockLibraryBtn" class="pill" style="margin-top: 14px; width: 100%; border-color: var(--line-2); font-size: 10px; font-family: var(--font-mono); font-weight:700;">Lock Library</button>
      </section>
    </aside>

    <main class="main">
      <div class="topbar">
        <div class="topbar-inner">
          <code class="crumb" id="crumb">/ home</code>
          <div class="actions top-actions">
            <a class="pill" href="#/home">Preface</a>
            <a class="pill" href="https://trandhquan-my-personal-vlsi-design-notebook.vercel.app/" target="_blank" rel="noopener">VLSI Design</a>
            <a class="pill" href="https://github.com/besthq2-tech/Quan-Tran-public-finance-research" target="_blank" rel="noopener">Finance</a>
          </div>
        </div>
      </div>
      <div id="pageContainer"></div>
    </main>
  </div>
  `;

  // Inject base shell
  document.body.innerHTML = layoutHTML;

  const routes = {
    '/home': homeHTML
  };

  // Routing logic
  function handleRouting() {
    let hash = window.location.hash.replace(/^#/, '');
    if (!hash || hash === '/' || hash === '') {
      hash = '/home';
      window.location.hash = '#/home';
    }

    // Update navbar active states
    document.querySelectorAll('[data-link-route]').forEach(el => {
      el.classList.toggle('active', el.getAttribute('data-link-route') === hash);
    });

    const crumb = document.getElementById('crumb');
    if (crumb) {
      crumb.textContent = hash === '/home' ? '/ home' : hash;
    }

    const container = document.getElementById('pageContainer');
    if (container) {
      if (routes[hash]) {
        container.innerHTML = routes[hash];
        // Mount canvas if on home
        if (hash === '/home') {
          initEyeCanvas();
        }
      } else {
        container.innerHTML = `
          <div class="page-shell">
            <h1>404</h1>
            <p class="lede">Page not found.</p>
            <a class="button primary" href="#/home">Back to Preface</a>
          </div>
        `;
      }
    }

    // Close mobile drawer on routing
    document.body.classList.remove('menu-open');
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  }

  // Mobile hamburger drawer toggle
  const menuBtn = document.getElementById('menuBtn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('menu-open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Search Filter functionality
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.card, .collection-card');
      
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  // Lock library button click
  const lockBtn = document.getElementById('lockLibraryBtn');
  if (lockBtn) {
    lockBtn.addEventListener('click', () => {
      localStorage.removeItem('library_authenticated');
      window.location.reload();
    });
  }

  // Animated Eye Diagram Canvas (terracotta / teal theme)
  let cancelCanvasAnimation = null;

  function initEyeCanvas() {
    if (cancelCanvasAnimation) cancelCanvasAnimation();

    const canvas = document.getElementById('eyeCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const width = Math.max(300, rect.width);
      canvas.width = width * dpr;
      canvas.height = 180 * dpr; // Custom height for clean fit
      canvas.style.height = '180px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw() {
      const w = canvas.clientWidth || 300;
      const h = 180;
      ctx.clearRect(0, 0, w, h);

      // Draw background paper grid
      ctx.fillStyle = 'rgba(253, 252, 248, 0.8)';
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = 'rgba(207, 198, 184, 0.2)';
      ctx.lineWidth = 1;

      // Grid lines
      for (let x = 0; x <= w; x += w / 8) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y <= h; y += h / 6) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw waves
      const period = w / 3.14;
      const bits = [0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1];
      
      for (let p = 0; p < 20; p++) {
        const opacity = 0.05 + (p % 4) * 0.015;
        ctx.strokeStyle = `rgba(184, 58, 34, ${opacity})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();

        const phase = (t * 0.4 + p * 12.3) % period;
        const noise = () => (Math.random() - 0.5) * 4;

        bits.forEach((bit, i) => {
          const xPos = i * period - phase;
          const targetY = bit ? h * 0.25 + noise() : h * 0.75 + noise();
          const prevY = i ? (bits[i - 1] ? h * 0.25 : h * 0.75) + noise() : targetY;

          if (i === 0) {
            ctx.moveTo(xPos, targetY);
          } else {
            ctx.lineTo(xPos - 8 + noise(), prevY);
            ctx.bezierCurveTo(xPos - 2, prevY, xPos + 2, targetY, xPos + 10, targetY);
          }
          ctx.lineTo(xPos + period, targetY);
        });
        ctx.stroke();
      }

      t += 1;
      animationFrameId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener('resize', resize);
    draw();

    cancelCanvasAnimation = () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }

  // Start router
  window.addEventListener('hashchange', handleRouting);
  handleRouting();
}
