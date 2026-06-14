const fs = require('fs');
const files = fs.readdirSync('./src/pages').filter(f => f.startsWith('psychology_ch') && f.endsWith('.js'));
files.forEach(f => {
  const p = './src/pages/' + f;
  let code = fs.readFileSync(p, 'utf8');
  code = code.replace('<div class="article-wrap">', '<div class="article-wrap" style="display: block;">');
  fs.writeFileSync(p, code);
  console.log('Fixed ' + f);
});
