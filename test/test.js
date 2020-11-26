const puppeteer = require('puppeteer');
const startServer = require('./globalSetup');
const stopServer = require('./globalTeardown');

let browser;
let page;
beforeAll(async () => {
  await startServer();
  browser = await puppeteer.launch();
  page = await browser.newPage();
  await page.goto('http://127.0.0.1:3000');
});

describe('on page load', () => {
  test('Click copy btn.', async () => {
    let alertMsg = ''; // 存储弹窗信息
    // 监听弹窗，可以是是alert、confirm、prompt任意一种
    await page.on('dialog', async (dialog) => {
      alertMsg = dialog.message(); // 获取弹框内的信息
      await dialog.dismiss(); // 关闭弹窗
    });
    await page.click('#test'); // 点击按钮
    expect(alertMsg).toBe('success !'); // 设置测试预期结果。
  }, 6000);
});

afterAll(async () => {
  await browser.close();
  await stopServer();
});
