const fs = require('fs');
const path = 'C:/Users/Windows 10 21H1/.gemini/antigravity/scratch/trandhquan-personal-library/src/pages';
const files = fs.readdirSync(path);
files.forEach(file => {
  if (file.endsWith('.js')) {
    const p = path + '/' + file;
    let c = fs.readFileSync(p, 'utf-8');
    if (c.includes('\\`')) {
      fs.writeFileSync(p, c.replace(/\\`/g, '`'));
      console.log('Fixed ' + file);
    }
  }
});
