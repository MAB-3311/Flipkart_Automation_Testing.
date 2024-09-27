import { test, expect } from '@playwright/test';
test.describe.parallel('Flipkart Tests', () => {
//browser open test
test('flipkart_browser_test', async ({ browser }) => {

  //open the browser
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.flipkart.com/');

  //close the popup
  try {
    // Wait for the popup to appear (adjust timeout as needed)
    const closeButton = await page.waitForSelector('button._30XB9F', { timeout: 500 });
    if (closeButton) {
      await closeButton.click();
      console.log('Popup closed successfully');
    }
  } catch (error) {
    console.log('No popup appeared');
  }

  //get the title of the page
  const title = await page.title();
  console.log('Page title:', title);

});
//cart page test
test('flipkart_cart_page_test', async ({ page }) => {

  await page.goto('https://www.flipkart.com/');

  //open cart page
  await page.locator('[class="_3RX0a-"]').click();
  await expect(page.locator('[class="s2gOFd"]')).toContainText('Missing Cart items?');
  await expect(page.locator('[class="orqM3-"]')).toContainText('Login to see the items you added previously');
  console.log('Cart page opened successfully');


});
//search bar test
test('flipkart_searchBar_test', async ({ page }) => {

  await page.goto('https://www.flipkart.com/');

  //search for iphone 15
  await page.locator('[class="Pke_EE"]').fill('iPhone 15');
  await page.locator('[class="_2iLD__"]').click();
  await expect(page.locator('[class="KzDlHZ"]').first()).toContainText('iPhone 15');
  console.log('Search for iPhone 15 is successful');

});
//section and filter test
test('section_and_filter_test', async ({ page }) => {

  await page.goto('https://www.flipkart.com/');

  await page.locator('[class="_2puWtW _3a3qyb"]').nth(2).hover();
  await page.locator('[class="_1BJVlg _11MZbx"]').click();
  await page.locator('[class="aOfogh"]').click();
  await page.locator('[class="uWfXeF"]').nth(1).click();
  await page.locator('[class="fxf7w6 rgHxCQ"]').nth(1).click();
  await page.locator('[class="XqNaEv"]').nth(0).click();
  await page.locator('[title="4★ & above"]').click();
  console.log(await page.locator('[class="syl9yP"]').allInnerTexts());
  console.log('Filter applied successfully');
});

test('Ads_page_test', async ({ page }) => {

  await page.goto('https://www.flipkart.com/');
  await page.locator('img[alt="Image"][src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/8aee35501ae3a18b.png?q=20"]').click();
});
});
// npx playwright test home_page.spec.js
