import os

out_dir = r"C:\Users\Windows 10 21H1\.gemini\antigravity\scratch\trandhquan-personal-library\src\pages"

titles = {
    1: "The Investment Environment",
    2: "Asset Classes and Financial Instruments",
    3: "How Securities Are Traded",
    4: "Mutual Funds and Other Investment Companies",
    5: "Risk, Return, and the Historical Record",
    6: "Capital Allocation to Risky Assets",
    7: "Optimal Risky Portfolios",
    8: "Index Models",
    9: "The Capital Asset Pricing Model",
    10: "Arbitrage Pricing Theory and Multifactor Models",
    11: "The Efficient Market Hypothesis",
    12: "Behavioral Finance and Technical Analysis",
    13: "Empirical Evidence on Security Returns",
    14: "Bond Prices and Yields",
    15: "The Term Structure of Interest Rates",
    16: "Managing Bond Portfolios",
    17: "Macroeconomic and Industry Analysis",
    18: "Equity Valuation Models",
    19: "Financial Statement Analysis",
    20: "Options Markets: Introduction",
    21: "Option Valuation",
    22: "Futures Markets",
    23: "Futures, Swaps, and Risk Management",
    24: "Portfolio Performance Evaluation",
    25: "International Diversification",
    26: "Hedge Funds",
    27: "The Theory of Active Portfolio Management",
    28: "Investment Policy and the Framework of the CFA Institute"
}

template = """const investingCh{ch_num}Pages = [
`<div class="insight-box anim-trigger fade-left">
  <p><strong>📖 {title}</strong> đang trong quá trình xây dựng nội dung chi tiết. Hãy quay lại sau nhé!</p>
</div>`
];

const investingCh{ch_num}HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb"><a href="#/home">Home</a> / <a href="#/investing">Investing</a> / <span>Chapter {ch_num}: {title}</span></div>
  <div class="article" id="bookContent"></div>
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="display:flex; align-items:center; gap:4px;">Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center;"> <span id="pageTotal"></span></div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;

export default investingCh{ch_num}HTML;
export {{ investingCh{ch_num}Pages }};
"""

for i in range(1, 29):
    file_path = os.path.join(out_dir, f"investing_ch{i}.js")
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(template.format(ch_num=i, title=titles[i]))

print("Generated 28 chapters.")
