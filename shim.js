global.window = { location: { hash: '#/psychology' }, addEventListener: () => {} };
global.document = { 
  body: { innerHTML: '', classList: { remove: () => {} } }, 
  querySelectorAll: () => [], 
  getElementById: () => null, 
  addEventListener: () => {} 
};
global.localStorage = { getItem: () => 'true', setItem: () => {} };
global.requestAnimationFrame = () => {};
global.cancelAnimationFrame = () => {};
global.Math.random = () => 0.5;

import('./src/main.js').then(() => {
  console.log("BODY HTML LENGTH:", global.document.body.innerHTML.length);
}).catch(e => {
  console.error("IMPORT ERROR:", e.message);
  console.error(e.stack);
});
