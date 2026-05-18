const{test,expect} = require('@playwright/test')

    test("Google page sample test case",async function ({page}){
        await page.goto("https://www.google.com/")
        //assigen wait for page load
        waitUntill:'load';
        //wait for 5 seconds
        timeout:'5000';
        await expect(page).toHaveTitle("Google");
        //click on AI mode
        await page.getByText('AI Mode', { exact: true }).click()
        //click on search box
        await page.getByRole('combobox', { name: 'Search' }).click();
        await expect(page).toHaveTitle("Google");
        //pause the browser
 

// Basic: by class (works in most modern browsers / drivers)
const plusIconFirst = page.locator('//*[name()="svg" and @class="EQxvpc m4l7Cf"]').first();
plusIconFirst.click();

})
