const { test, expect } = require('@playwright/test');

test('Border test case', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/');
    const title = await page.title();
    console.log("The page title is: " + title);
    //click on forms link
    await page.getByRole('link', { name: 'Forms' }).click();
    //click on form layout link
    await page.getByRole('link', { name: 'Form Layouts' }).click();
    //click on datepicker
    //await page.getByTitle('Datepicker').click();
    //click on first calender
    //await page.getByPlaceholder('Form Picker').click();
    //select date from calender
    //await page.getByRole('option', { name: '15' }).click();
    await page.waitForTimeout(6000);
    //await page.locator('(//div[@class="cell-content"][normalize-space()="2"])[1]').click();
    //click on check box check me out
    await page.getByRole('checkbox', { name: 'Check me out' }).check({force:true});
    //click on Remember me check box
    await page.getByRole('checkbox', { name: 'Remember me' }).check({force:true});
});
