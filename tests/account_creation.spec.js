import { test, expect } from '@playwright/test';

// test('account_creation_test', async ({ browser }) => {
//     const context = await browser.newContext();
//     const page = await context.newPage();
//     await page.goto('https://www.flipkart.com/');


//     await page.locator("//span[text()='Login']").click();
//     await expect(page.url()).toContain('login');
//     console.log('Login page opened successfully');

//     await page.locator('input[class="r4vIwl BV+Dqf"]').fill('ENTER YOUR MOBILE NUMBER');
//     await page.locator('button[class="QqFHMw twnTnD _7Pd1Fp"]').click();
//     console.log('mobile number test passed');
//     await page.pause();
//     await page.waitForLoadState("networkidle");
//     await context.storageState({ path: 'auth.json' });
// });

test('account_creation_test', async ({ browser }) => {

    const context = await browser.newContext({ storageState: 'auth.json' });
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');


    // creating account
    await page.locator('[class="_1TOQfO"]').first().hover();
    await page.locator('a[title="My Profile"] li[class="AT0fUR"]').click();
    await page.waitForLoadState("networkidle");
    await page.locator('.PbekyG.xrBehW').click();
    await page.locator('.xUWkem').click();
    await page.locator('input[name="firstName"]').fill('');
    await page.locator('input[name="lastName"]').fill('');
    await page.locator('input[name="firstName"]').fill('John');
    await page.locator('input[name="lastName"]').fill('Doe');
    await page.locator('.QqFHMw.aMODL0').click();
    await page.locator('label[for="Male"] div[class="qsHXPi"]').click();     

    
    // adding address   

    await page.locator('.PbekyG').nth(1).click();
    await expect(page.locator('.hoaQwc')).toHaveText('No Addresses found in your account!');
    await page.locator('.QqFHMw.qrx0s9.M5XAsp').click();
    await page.locator('input[name="phone"]').fill('9756321480');
    await page.locator('input[name="name"]').fill('john doe');
    await page.locator('input[name="pincode"]').fill('394101');
    await page.locator('input[name="addressLine2"]').fill('xyz building');
    await page.locator('textarea[name="addressLine1"]').fill('hfguewu oihefuih euihfuiehui uehfuiewghui');
    await page.locator('label[for="WORK"] div[class="qsHXPi"]').click(); 
    await page.locator('.QqFHMw.SUn3yL.gRwfg7._7Pd1Fp').click(); 




});

//npx playwright test account_creation.spec.js