const { test, expect } = require('@playwright/test')

test.skip("my first playwright test", async function ({ page }) {

    expect(22).toBe(22);
    
})

test.skip("my second playwright test", async function ({ page }) {
    expect("datta").toContain("datta");

})

test("my 3rd test", async function({page}){

await page.goto("https://www.google.com/")
const title = await page.title();
const url = await page.url();
console.log("The google page  is:"+title);
console.log("The google page URL is:"+url);
await expect(page).toHaveTitle(title);

})