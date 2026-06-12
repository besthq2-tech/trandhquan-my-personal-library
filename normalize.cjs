const fs = require('fs');
const path = 'C:\\\\Users\\\\Windows 10 21H1\\\\.gemini\\\\antigravity\\\\scratch\\\\trandhquan-personal-library\\\\src\\\\pages\\\\buffett_berkshire.js';
let content = fs.readFileSync(path, 'utf8');
content = content.normalize('NFC');
fs.writeFileSync(path, content, 'utf8');
console.log('Normalized to NFC');
