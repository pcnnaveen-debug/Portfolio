import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
    page.on('requestfailed', request => {
        console.log(`REQUEST FAILED: ${request.url()} - ${request.failure().errorText}`);
    });
    page.on('response', response => {
        if (!response.ok()) {
            console.log(`RESPONSE ERROR: ${response.url()} - ${response.status()}`);
        }
    });

    console.log('Navigating...');
    await page.goto('https://pcnnaveen-debug.github.io/Portfolio/', { waitUntil: 'networkidle0' });

    await page.screenshot({ path: 'screenshot.png' });
    console.log('Screenshot saved to screenshot.png');

    await browser.close();
})();
