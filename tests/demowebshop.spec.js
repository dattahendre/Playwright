const { test, expect } = require('@playwright/test');


test("Login to Demo Web Shop", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await expect(page.locator("//strong[@class='poll-display-text']")).toBeVisible();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    //click poor radio button
    await page.locator("//input[@id='pollanswers-2']").click();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    //click on vote button
    await page.getByRole('button', { name: 'Vote' }).click();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    //verify the message after voting
    await expect(page.locator("//div[@class='poll-vote-error']")).toHaveText("Only registered users can vote.");
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    //click on computers category
    // By accessible name (link text)
    await page.locator("(//a[normalize-space()='Computers'])[1]").click();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    // Click the first visible "Desktops" link under Computers
await page.getByRole('link', { name: 'Desktops' }).first().click();
await page.screenshot({ path: 'screenshot.png', fullPage: true });    
//click on add to card 
    await page.locator("(//input[@value='Add to cart'])[1]").click();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    //enter computer quantity
    await page.locator("//input[@id='addtocart_72_EnteredQuantity']").click();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await page.locator("//input[@id='addtocart_72_EnteredQuantity']").fill("2");
    //click on add to cart button
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await page.locator("//input[@id='add-to-cart-button-72']").click();
    //verift the message after adding to cart
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await expect(page.getByText('The product has been added to your shopping cart', { exact: true })).toBeVisible();
    
    //adding static wait for 3 seconds to wait for the cart to update
    await page.waitForTimeout(3000);
    //verift total vaule in shopping cart
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await expect(page.locator('span').filter({ hasText: '800.00' }).first()).toBeVisible();
    
    await page.screenshot({ path: 'screenshot.png', fullPage: true });;//click on shopping cart
    
    
    await page.locator("(//input[@id='add-to-cart-button-72'])[1]").click();
// pause the test to see the result
await page.screenshot({ path: 'screenshot.png', fullPage: true });
   // await page.pause();

});