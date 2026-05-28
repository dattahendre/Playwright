//require('@playwright/test') we given path in package.json file so we can directly import test and expect from '@playwright/test'
//const{test,expect} is for test case creation and assertion
const{test,expect}=require('@playwright/test')
//write test case with test function and give name to test case and pass async function with page as parameter
test("Tricentis sample test case",async function ({page}){
    //navigate to tricentis page
    await page.goto("https://www.tricentis.com/")   

    //check get started button is visible on the page
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    
    //store element text into variable using textContent()
    const value = await page.getByRole('link', { name: 'Get started' }).textContent();
    console.log("Value of link text is:", value);
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
    
});
