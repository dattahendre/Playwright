import { test, expect } from '@playwright/test';

test('Verify error message for invalid login', async ({ page }) => {
  // Navigate to the OrangeHRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  // verify the login form is visible on the page
  await expect(page.getByPlaceholder('Username')).toBeVisible();
  // Attempt to log in with invalid credentials
  //enter username
  await page.getByPlaceholder('Username').fill('Admin',{delay:8000});
  //enter password
  await page.getByPlaceholder('Password').fill('invalid_password',{delay:5000});
  //click login button
  await page.getByRole('button', { name: 'Login' }).click();
  //store error message in a variable
  const errorMessage = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent();
  //print error message in console
  console.log("Error message displayed:", errorMessage);
  //assert the error message is correct
  await expect(page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")).toHaveText('Invalid credentials');
  //validate error message part of the string
  await expect(errorMessage.includes('Invalid')).toBeTruthy();
  //validate exact error message
  await expect(errorMessage).toBe('Invalid credentials');
  //another way to validate exact error message
  await expect(errorMessage==='Invalid credentials').toBeTruthy();
});