const fs = require('fs');

const files = [
  'C:\\\\Users\\\\Windows 10 21H1\\\\.gemini\\\\antigravity\\\\scratch\\\\trandhquan-personal-library\\\\src\\\\pages\\\\buffett_geico.js',
  'C:\\\\Users\\\\Windows 10 21H1\\\\.gemini\\\\antigravity\\\\scratch\\\\trandhquan-personal-library\\\\src\\\\pages\\\\buffett_gen_re.js'
];

files.forEach(path => {
  if (fs.existsSync(path)) {
    let content = fs.readFileSync(path, 'utf8');
    // Replace literal backslash-backtick with just backtick
    content = content.replace(/\\`/g, '`');
    fs.writeFileSync(path, content, 'utf8');
    console.log('Fixed syntax error in', path);
  }
});
