import puppeteer from 'puppeteer';
import { PuppeteerScreenRecorder } from 'puppeteer-screen-recorder';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const recorder = new PuppeteerScreenRecorder(page);
  // Navigate the page to a URL
  await page.goto('https://plink-rebuild.webflow.io/');

  // Set screen size
  await page.setViewport({width: 1080, height: 768});
  await recorder.start('demo.mp4');

  await new Promise((resolve) => {
    setTimeout(() => resolve(null), 5000);
  })
  // Type into search box
  // Wait and click on first result

  // Locate the ful
  // Print the full title
  await recorder.stop();

  await browser.close();
})();