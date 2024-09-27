import { test, expect } from '@playwright/test';



test('flipkart_login_page_test', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
  
    //open login page
    await page.locator("//span[text()='Login']").click();
    await expect(page.url()).toContain('login');
    console.log('Login page opened successfully');
  
    //create an account
    await page.locator('[class="azBkHf"]').click();
    await expect(page.url()).toContain('signup');
    console.log('Signup page opened successfully');

    //invalid mobile number
    await page.locator('input[class="r4vIwl BV+Dqf"]').fill('930393');
    await page.locator('button[class="QqFHMw twnTnD _7Pd1Fp"]').click();
    await expect(page.locator('[class="llBOFA"]')).toContainText('Please enter a valid Mobile number');
    console.log('Invalid mobile number test passed');

   //existing user button
    await page.locator('a[class="QqFHMw twnTnD OD+dVw"] span').click();
    await expect(page.url()).toContain('login');
    console.log('Login page opened successfully');
    
    //login with mobile number
    // await page.locator('input[class="r4vIwl BV+Dqf"]').fill('9099192993');
    // await page.locator('button[class="QqFHMw twnTnD _7Pd1Fp"]').click();
    // console.log('mobile number test passed');
    //{becouse of limited otp this test case is skipped the token is alredy used }
});
// npx playwright test login_signup_test.spec.js