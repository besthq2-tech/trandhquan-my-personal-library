const fs = require('fs');
const path = 'C:\\\\Users\\\\Windows 10 21H1\\\\.gemini\\\\antigravity\\\\scratch\\\\trandhquan-personal-library\\\\src\\\\pages\\\\buffett_berkshire.js';
let content = fs.readFileSync(path, 'utf8');

const imgStyle = 'style="width: 100%; max-height: 240px; object-fit: cover; filter: grayscale(100%) contrast(1.2); border-radius: 4px; margin-bottom: 24px;"';

for (let i = 1; i <= 13; i++) {
  const marker = `// Page ${i}\n  \``;
  const replacement = `// Page ${i}\n  \`<img src="/images/page${i}.png" ${imgStyle} />`;
  content = content.replace(marker, replacement);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Added images to pages');
