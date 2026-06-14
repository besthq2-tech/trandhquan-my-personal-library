const investingCh10Pages = [
`<div class="insight-box anim-trigger fade-left">
  <p><strong>📖 Arbitrage Pricing Theory and Multifactor Models</strong> đang trong quá trình xây dựng nội dung chi tiết. Hãy quay lại sau nhé!</p>
</div>`
];

const investingCh10HTML = `
<div class="article-wrap" style="display: block;">
  <div class="breadcrumb"><a href="#/home">Home</a> / <a href="#/investing">Investing</a> / <span>Chapter 10: Arbitrage Pricing Theory and Multifactor Models</span></div>
  <div class="article" id="bookContent"></div>
  <div class="cs-plot-nav" style="margin-top: 24px; justify-content: center; gap: 16px;">
    <button class="button" id="prevPageBtn">← Previous</button>
    <div style="display:flex; align-items:center; gap:4px;">Page <input type="number" id="pageInput" min="1" style="width: 40px; text-align: center;"> <span id="pageTotal"></span></div>
    <button class="button primary" id="nextPageBtn">Next →</button>
  </div>
</div>
`;

export default investingCh10HTML;
export { investingCh10Pages };
