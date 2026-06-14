const fs = require('fs');
for (let i = 2; i <= 12; i++) {
  const path = 'C:/Users/Windows 10 21H1/.gemini/antigravity/scratch/trandhquan-personal-library/src/pages/cognitive_ch' + i + '.js';
  let content = fs.readFileSync(path, 'utf-8');
  content = content.replace(/\\\`/g, '`');
  fs.writeFileSync(path, content, 'utf-8');
}
console.log('Fixed');
