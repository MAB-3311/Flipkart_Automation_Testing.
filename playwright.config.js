const {devices} = require('@playwright/test');
const { trace } = require('console');

const config = {

   testDir: './tests',
   timeout: 30*1000,
   expect: {
    timeout: 5000
   },
   reporter: [["line"], ["allure-playwright"]],
   

   use: {
    browserName: 'chromium',
    headless: true, 
    ignoreHTTPSErrors: true,
    screenshot: "on",
    video: "on",
    trace: "on"
  },
};
module.exports = config;