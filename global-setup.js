const { chromium } = require('@playwright/test');

module.exports = async config => {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(baseURL);
  await page.locator('[formcontrolname="username"]').fill('auto.sa');
  await page.locator('[formcontrolname="password"]').fill('Ex3lon');
  await page.locator('[type="submit"]').click();
  await page.context().storageState({ path: storageState });
  await browser.close();
};