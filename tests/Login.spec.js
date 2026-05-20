import { test, expect } from '@playwright/test';

// Force a clean context to ensure you are on the login page
test.use({ storageState: { cookies: [], origins: [] } });

test('Enter username and password and click on login button', async ({ page }) => {
  // Navigate to the OrangeHRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  // Fill the username field
  await page.getByPlaceholder('Username').fill('Admin');

  // Fill the password field
  await page.getByPlaceholder('Password').fill('admin123');

  // Take a screenshot after entering credentials
  await page.screenshot({ path: 'screenshot/login-success.png' });

  // Click the Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify the Dashboard heading is visible after login
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  //verify the URL after login
  const currentURL = await page.url();
  console.log("Current URL after login:", currentURL);
  await expect(page).toHaveURL(currentURL);
  //await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

  // Take a screenshot of the dashboard
  await page.screenshot({ path: 'screenshot/login-dashboard.png' });

  // Find the Search input field
  const searchInput = page.getByPlaceholder('Search');

  // Click the Search input to focus it
  await searchInput.click();

  // Enter the search term 'Admin'
  await searchInput.fill('Admin');

  // Click the Admin link from the search results
  await page.getByRole('link', { name: /Admin/i }).click();

  await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
  //enter username in search box
//
const usernameInput = page.locator('input[class*="oxd-input"]').nth(1); // First input in the search form
await usernameInput.click();
await usernameInput.fill('Admin');
  
 // Click to open dropdown
 //await page.locator('//div[contains(@class,"oxd-select-text oxd-select-text--active")]').first().click();
  await page.getByText('-- Select --').first().click();
 
// Click the dropdown option "Admin" (inside the listbox)
await page.getByRole('option', { name: 'Admin' }).click();
//enter the employee name in search box
await page.getByPlaceholder('Type for hints...').click();
await page.getByPlaceholder('Type for hints...').fill('manda akhil user',{delay:1500});
//wait for the dropdown options to appear
await page.waitForTimeout(4000);
//slect user from dropdown
await page.getByRole('option', { name: 'manda akhil user' }).first().click();

  await page.screenshot({ path: 'screenshot/login-search-admin.png' });
 //click on user pfofile icon for logout
 await page.locator('//*[name()="svg" and @class="oxd-userdropdown-icon"]').click();   


  await page.pause();
});