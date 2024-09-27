import { test, expect } from '@playwright/test';


test('Order_placing_test', async ({ browser }) => {

    const context = await browser.newContext({ storageState: 'auth.json' });
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');

    
    await page.locator('[class="Pke_EE"]').fill('mens shirt');
    await page.locator('[class="_2iLD__"]').click();
    await page.waitForLoadState("networkidle");
    
    const product = await page.locator('[class="WKTcLC BwBZTg"]').allInnerTexts();
    console.log(product);
    const targetProduct = 'Men Slim Fit Solid Spread Collar Casual Shirt';
    
    let newPage;
    for (let i = 0; i < product.length; i++) {
        if (product[i] === targetProduct) {
            const [newPageHandle] = await Promise.all([
                context.waitForEvent('page'),
                page.locator('[class="WKTcLC BwBZTg"]:has-text("Men Slim Fit Solid Spread Collar Casual Shirt")').nth(1).click()
            ]);
            newPage = newPageHandle;
            console.log('Product found successfully');
            break;
        }
    }

    // Ensure newPage is defined before proceeding
    if (!newPage) {
        throw new Error('Product not found or new page did not open');
    }

    // Wait for the new page to load
    await newPage.waitForLoadState('load');

    console.log("Product Price : ", await newPage.locator('.Nx9bqj.CxhGGd').allInnerTexts());
    await expect(newPage.locator('.VU-ZEz')).toContainText(targetProduct);

    await newPage.locator('[class="CDDksN zmLe5G dpZEpc"]').nth(1).click();
    await newPage.waitForLoadState('load');
    
    await newPage.locator('[class="QqFHMw vslbG+ In9uk2"]').click();
    await newPage.waitForLoadState('load');
    
    await newPage.locator('button[class="QqFHMw zA2EfJ _7Pd1Fp"] span').click();
    await newPage.waitForLoadState('load');
});
// npx playwright test tests/order_placing.spec.js  