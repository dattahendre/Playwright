import { test, expect } from '@playwright/test';

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
});