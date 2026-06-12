const fs = require('fs');
const path = 'C:\\\\Users\\\\Windows 10 21H1\\\\.gemini\\\\antigravity\\\\scratch\\\\trandhquan-personal-library\\\\src\\\\pages\\\\buffett_berkshire.js';
let content = fs.readFileSync(path, 'utf8');

// Remove justify and letter-spacing, use a safer serif font stack that handles Vietnamese perfectly
content = content.replace(
  /font-family:\s*'Georgia',\s*'Times New Roman',\s*serif;\s*font-size:\s*18px;\s*line-height:\s*2\.1;\s*color:\s*#2c2a28;\s*text-align:\s*justify;\s*letter-spacing:\s*0\.01em;/g,
  "font-family: 'Times New Roman', Times, serif; font-size: 19px; line-height: 1.8; color: #2c2a28;"
);

// Force strict NFC normalization again just in case
content = content.normalize('NFC');

// Also manually fix common NFD patterns if normalize failed
const nfdMap = {
  'à': 'à', 'á': 'á', 'ả': 'ả', 'ã': 'ã', 'ạ': 'ạ',
  'ằ': 'ằ', 'ắ': 'ắ', 'ẳ': 'ẳ', 'ẵ': 'ẵ', 'ặ': 'ặ',
  'ầ': 'ầ', 'ấ': 'ấ', 'ẩ': 'ẩ', 'ẫ': 'ẫ', 'ậ': 'ậ',
  'è': 'è', 'é': 'é', 'ẻ': 'ẻ', 'ẽ': 'ẽ', 'ẹ': 'ẹ',
  'ề': 'ề', 'ế': 'ế', 'ể': 'ể', 'ễ': 'ễ', 'ệ': 'ệ',
  'ì': 'ì', 'í': 'í', 'ỉ': 'ỉ', 'ĩ': 'ĩ', 'ị': 'ị',
  'ò': 'ò', 'ó': 'ó', 'ỏ': 'ỏ', 'õ': 'õ', 'ọ': 'ọ',
  'ồ': 'ồ', 'ố': 'ố', 'ổ': 'ổ', 'ỗ': 'ỗ', 'ộ': 'ộ',
  'ờ': 'ờ', 'ớ': 'ớ', 'ở': 'ở', 'ỡ': 'ỡ', 'ợ': 'ợ',
  'ù': 'ù', 'ú': 'ú', 'ủ': 'ủ', 'ũ': 'ũ', 'ụ': 'ụ',
  'ừ': 'ừ', 'ứ': 'ứ', 'ử': 'ử', 'ữ': 'ữ', 'ự': 'ự',
  'ỳ': 'ỳ', 'ý': 'ý', 'ỷ': 'ỷ', 'ỹ': 'ỹ', 'ỵ': 'ỵ'
};

for (const [nfd, nfc] of Object.entries(nfdMap)) {
  content = content.split(nfd).join(nfc);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed styling and forced NFC normalization');
