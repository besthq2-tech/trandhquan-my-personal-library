const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('dist/index.html', 'utf-8');

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  url: "http://localhost:3000/#/psychology",
  virtualConsole: new (require('jsdom').VirtualConsole)()
});

dom.window.localStorage.setItem('library_authenticated', 'true');

dom.virtualConsole.on("error", (err) => {
  console.error("JSDOM ERROR:", err.message, err.stack);
});
dom.virtualConsole.on("log", (msg) => {
  console.log("JSDOM LOG:", msg);
});
dom.virtualConsole.on("jsdomError", (err) => {
  console.error("JSDOM FATAL:", err.message, err.detail);
});

setTimeout(() => {
  console.log("Body length:", dom.window.document.body.innerHTML.length);
  if (dom.window.document.body.innerHTML.includes('pageContainer')) {
    console.log('pageContainer found');
  } else {
    console.log('pageContainer NOT found');
  }
  process.exit(0);
}, 2000);
