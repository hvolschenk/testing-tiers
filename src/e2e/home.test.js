import puppeteer from 'puppeteer';

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('http://0.0.0.0:9999/home', { waitUntil: 'networkidle2' });
});

afterAll(async () => {
  await browser.close();
});

test('Loads the home page title correctly', async () => {
  const html = await page.$eval('[data-qa="home-page-title"]', element => element.innerHTML);

  expect(html).toBe('Home');
}, 16000);

test('Loads the home page intro paragraph correctly', async () => {
  const html = await page.$eval('[data-qa="home-page-intro-text"]', element => element.innerHTML);

  expect(html).toBe('Hendrik is cool');
}, 16000);
