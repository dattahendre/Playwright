const { test, expect } = require('@playwright/test');

test('Border test case', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/');
    const title = await page.title();
    console.log("The page title is: " + title);
    //click on forms link
    await page.getByRole('link', { name: 'Forms' }).click();
    //click on form layout link
    await page.getByRole('link', { name: 'Form Layouts' }).click();
    //click on datepikcker link
    await page.getByRole('link', { name: 'Datepicker' }).click();
    
    //click on first calender
    await page.getByPlaceholder('Form Picker').click();
    //select date from calender
    //await page.getByRole('option', { name: '15' }).click();
    
    await page.locator('(//div[@class="cell-content"][normalize-space()="15"])[1]').click();
    //date picker with range
    await page.getByPlaceholder('Range Picker').click();

    await page.locator('(//div[@class="cell-content"][normalize-space()="25"])[1]').click();
    //min max date picker
    await page.getByPlaceholder('Min Max Picker').click();
    await page.locator('(//div[@class="cell-content"][normalize-space()="6"])[1]').click();
    // click on user profile icon
    //await page.getByRole('button', { name: 'Nick Jones' }).click();
    await page.locator('(//div[@class="user-container"])').click();
    //click on logout button
    //await page.getByRole('link', { name: 'Log out' }).click();
    await page.getByTitle('Log out').click();
    // close the browser after test case execution
    await page.close();
});
