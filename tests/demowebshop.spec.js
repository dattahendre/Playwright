const { test, expect } = require('@playwright/test');


test("Login to Demo Web Shop", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await expect(page.locator("//strong[@class='poll-display-text']")).toBeVisible();
    //click poor radio button
    await page.locator("//input[@id='pollanswers-2']").click();
    //click on vote button
    await page.getByRole('button', { name: 'Vote' }).click();
    //verify the message after voting
    await expect(page.locator("//div[@class='poll-vote-error']")).toHaveText("Only registered users can vote.");
    //click on computers category
    // By accessible name (link text)
    await page.locator("(//a[normalize-space()='Computers'])[1]").click();
    
    // Click the first visible "Desktops" link under Computers
await page.getByRole('link', { name: 'Desktops' }).first().click();
    //click on add to card 
    await page.locator("(//input[@value='Add to cart'])[1]").click();
    //enter computer quantity
    await page.locator("//input[@id='addtocart_72_EnteredQuantity']").click();
    await page.locator("//input[@id='addtocart_72_EnteredQuantity']").fill("2");
    //click on add to cart button
    await page.locator("//input[@id='add-to-cart-button-72']").click();
    await page.getByText('The product has been added to your shopping cart', { exact: true }).toBeVisible();
    //verift total vaule in shopping cart
    await page.locator('span').filter({ hasText: '800.00' }).first();
    //click on shopping cart
    await page.locator("(//input[@id='add-to-cart-button-72'])[1]").click();
   

});