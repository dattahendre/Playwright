//require('@playwright/test') we given path in package.json file so we can directly import test and expect from '@playwright/test'
//const{test,expect} is for test case creation and assertion
const{test,expect}=require('@playwright/test')
//write test case with test function and give name to test case and pass async function with page as parameter
test("Tricentis sample test case",async function ({page}){
    //navigate to tricentis page
    await page.goto('https://www.tricentis.com/');

    //check get started button is visible on the page
    await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    
    //store element text into variable using textContent()
    const value = await page.getByRole('link', { name: 'Get started' }).textContent();
    console.log("Value of link text is:", value);
    //click on close button of pop up
    await page.getByRole('button', { name: 'Close' }).click();
    //click on get started button
    await page.getByRole('link', { name: 'Get started' }).click();
    //verify heading text
    await page.goto('https://www.tricentis.com/software-testing-tool-trial-demo');
    await page.getByRole('heading', { name: 'Intelligent test automation' }).click();
    await page.getByText('Cloud-based and flexibly').click();
    await page.getByRole('link', { name: 'Free trial' }).first().click();
    await page.getByRole('heading', { name: 'Tricentis Tosca trial' }).click();
    //verify heading text
    await expect(page.getByRole('heading', { name: 'Request your trial of Tosca today' })).toBeVisible();
    //select checkbox
    await page.locator('#emailOptin').check();
    //verify link text
    await expect(page.getByRole('link', { name: 'AI Solutions Product-Specific Terms' })).toBeVisible();
   // await expect(page.getByRole('heading', { name: 'Cloud-based and flexibly deployed test automation for optimized end-to-end testing of all your applications.' })).toBeVisible();
   // close browser after test case execution
   await page.close();
    
});
