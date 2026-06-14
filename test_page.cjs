const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
    page.on('requestfailed', request => {
      console.log('REQUEST FAILED:', request.url(), request.failure().errorText);
    });

    console.log("Navigating to setup local storage");
    await page.goto('http://[::1]:3000/', { waitUntil: 'networkidle0' });
    await page.evaluate(() => localStorage.setItem('library_authenticated', 'true'));

    console.log("Navigating to http://[::1]:3000/#/psychology");
    await page.goto('http://[::1]:3000/#/psychology', { waitUntil: 'networkidle0', timeout: 10000 });
    
    const bodyHTML = await page.evaluate(() => document.body.innerHTML);
    if (!bodyHTML.includes('pageContainer')) {
      console.log('body does NOT contain pageContainer. Body length:', bodyHTML.length);
    } else {
      console.log('pageContainer found. The layout is rendered.');
    }

    await browser.close();
  } catch(e) {
    console.error(e);
  }
})();
