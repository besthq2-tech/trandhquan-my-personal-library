const investingIndexHTML = `
<div class="page-shell">
  <header class="section-header">
    <div class="eyebrow" style="color: #F59E0B;">COURSE SYLLABUS</div>
    <h1 style="font-size: 3rem; margin-bottom: 0.5rem;">Bodie's Investments</h1>
    <p class="lede" style="max-width: 600px;">A comprehensive journey through modern finance, portfolio theory, asset pricing, and derivative markets. Based on Bodie, Kane, and Marcus, 10th Edition.</p>
  </header>
  
  <!-- PART I -->
  <h2 style="margin-top: 3rem; font-family: var(--font-ui); font-size: 1.5rem; border-bottom: 1px solid var(--line-2); padding-bottom: 10px;">PART I: Elements of Investments</h2>
  <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 1.5rem;">
    <a href="#/investing/ch1" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🌍</span>
      <h3 style="margin:0; font-size:1.1rem; color: #4ECDC4;">CH1: The Investment Environment</h3>
    </a>
    <a href="#/investing/ch2" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">📜</span>
      <h3 style="margin:0; font-size:1.1rem; color: #4ECDC4;">CH2: Asset Classes & Financial Instruments</h3>
    </a>
    <a href="#/investing/ch3" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🏛️</span>
      <h3 style="margin:0; font-size:1.1rem; color: #4ECDC4;">CH3: How Securities Are Traded</h3>
    </a>
    <a href="#/investing/ch4" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🏦</span>
      <h3 style="margin:0; font-size:1.1rem; color: #4ECDC4;">CH4: Mutual Funds & Investment Companies</h3>
    </a>
  </div>

  <!-- PART II -->
  <h2 style="margin-top: 3rem; font-family: var(--font-ui); font-size: 1.5rem; border-bottom: 1px solid var(--line-2); padding-bottom: 10px;">PART II: Portfolio Theory and Practice</h2>
  <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 1.5rem;">
    <a href="#/investing/ch5" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">📈</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FFD3B6;">CH5: Risk, Return, and Historical Record</h3>
    </a>
    <a href="#/investing/ch6" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">⚖️</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FFD3B6;">CH6: Capital Allocation to Risky Assets</h3>
    </a>
    <a href="#/investing/ch7" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🎯</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FFD3B6;">CH7: Optimal Risky Portfolios</h3>
    </a>
    <a href="#/investing/ch8" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">📊</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FFD3B6;">CH8: Index Models</h3>
    </a>
  </div>

  <!-- PART III -->
  <h2 style="margin-top: 3rem; font-family: var(--font-ui); font-size: 1.5rem; border-bottom: 1px solid var(--line-2); padding-bottom: 10px;">PART III: Equilibrium in Capital Markets</h2>
  <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 1.5rem;">
    <a href="#/investing/ch9" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🧮</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FCBAD3;">CH9: The Capital Asset Pricing Model</h3>
    </a>
    <a href="#/investing/ch10" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🎛️</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FCBAD3;">CH10: Arbitrage Pricing Theory</h3>
    </a>
    <a href="#/investing/ch11" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🚀</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FCBAD3;">CH11: The Efficient Market Hypothesis</h3>
    </a>
    <a href="#/investing/ch12" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🧠</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FCBAD3;">CH12: Behavioral Finance & Technical Analysis</h3>
    </a>
    <a href="#/investing/ch13" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🔬</span>
      <h3 style="margin:0; font-size:1.1rem; color: #FCBAD3;">CH13: Empirical Evidence on Security Returns</h3>
    </a>
  </div>

  <!-- PART IV -->
  <h2 style="margin-top: 3rem; font-family: var(--font-ui); font-size: 1.5rem; border-bottom: 1px solid var(--line-2); padding-bottom: 10px;">PART IV: Fixed-Income Securities</h2>
  <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 1.5rem;">
    <a href="#/investing/ch14" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">💸</span>
      <h3 style="margin:0; font-size:1.1rem; color: #00B8A9;">CH14: Bond Prices and Yields</h3>
    </a>
    <a href="#/investing/ch15" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">📉</span>
      <h3 style="margin:0; font-size:1.1rem; color: #00B8A9;">CH15: The Term Structure of Interest Rates</h3>
    </a>
    <a href="#/investing/ch16" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">💼</span>
      <h3 style="margin:0; font-size:1.1rem; color: #00B8A9;">CH16: Managing Bond Portfolios</h3>
    </a>
  </div>

  <!-- PART V -->
  <h2 style="margin-top: 3rem; font-family: var(--font-ui); font-size: 1.5rem; border-bottom: 1px solid var(--line-2); padding-bottom: 10px;">PART V: Security Analysis</h2>
  <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 1.5rem;">
    <a href="#/investing/ch17" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🏭</span>
      <h3 style="margin:0; font-size:1.1rem; color: #3B82F6;">CH17: Macroeconomic and Industry Analysis</h3>
    </a>
    <a href="#/investing/ch18" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">💎</span>
      <h3 style="margin:0; font-size:1.1rem; color: #3B82F6;">CH18: Equity Valuation Models</h3>
    </a>
    <a href="#/investing/ch19" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🧾</span>
      <h3 style="margin:0; font-size:1.1rem; color: #3B82F6;">CH19: Financial Statement Analysis</h3>
    </a>
  </div>

  <!-- PART VI -->
  <h2 style="margin-top: 3rem; font-family: var(--font-ui); font-size: 1.5rem; border-bottom: 1px solid var(--line-2); padding-bottom: 10px;">PART VI: Options, Futures, and Other Derivatives</h2>
  <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 1.5rem;">
    <a href="#/investing/ch20" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🎟️</span>
      <h3 style="margin:0; font-size:1.1rem; color: #EC4899;">CH20: Options Markets: Introduction</h3>
    </a>
    <a href="#/investing/ch21" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🧮</span>
      <h3 style="margin:0; font-size:1.1rem; color: #EC4899;">CH21: Option Valuation</h3>
    </a>
    <a href="#/investing/ch22" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🔮</span>
      <h3 style="margin:0; font-size:1.1rem; color: #EC4899;">CH22: Futures Markets</h3>
    </a>
    <a href="#/investing/ch23" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🔀</span>
      <h3 style="margin:0; font-size:1.1rem; color: #EC4899;">CH23: Futures, Swaps, and Risk Management</h3>
    </a>
  </div>

  <!-- PART VII -->
  <h2 style="margin-top: 3rem; font-family: var(--font-ui); font-size: 1.5rem; border-bottom: 1px solid var(--line-2); padding-bottom: 10px;">PART VII: Applied Portfolio Management</h2>
  <div class="grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-top: 1.5rem;">
    <a href="#/investing/ch24" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🏅</span>
      <h3 style="margin:0; font-size:1.1rem; color: #14B8A6;">CH24: Portfolio Performance Evaluation</h3>
    </a>
    <a href="#/investing/ch25" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🌐</span>
      <h3 style="margin:0; font-size:1.1rem; color: #14B8A6;">CH25: International Diversification</h3>
    </a>
    <a href="#/investing/ch26" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🛡️</span>
      <h3 style="margin:0; font-size:1.1rem; color: #14B8A6;">CH26: Hedge Funds</h3>
    </a>
    <a href="#/investing/ch27" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">🧠</span>
      <h3 style="margin:0; font-size:1.1rem; color: #14B8A6;">CH27: Active Portfolio Management</h3>
    </a>
    <a href="#/investing/ch28" class="collection-card" style="background: linear-gradient(145deg, var(--bg-card), var(--bg-base)); color: var(--text-1); border-radius: 12px; padding: 20px; text-decoration: none; display: flex; flex-direction: column; gap: 10px; border: 1px solid var(--line-2); transition: transform 0.3s ease, box-shadow 0.3s ease;">
      <span style="font-size: 2rem;">📋</span>
      <h3 style="margin:0; font-size:1.1rem; color: #14B8A6;">CH28: Investment Policy (CFA Framework)</h3>
    </a>
  </div>
</div>
`;

export default investingIndexHTML;
