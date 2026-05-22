import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the application's login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  // Focus the Username field
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  // Enter the username
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  // Focus the Password field
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  // Enter the password
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });

  // Submit the login form
  await page.getByRole('button', { name: 'Login' }).click();
await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  // Open the global Search box and type 'Admin'
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  await page.getByRole('textbox', { name: 'Search' }).fill('Admin');

  // Navigate to the 'Admin' section from search results
  await page.getByRole('link', { name: 'Admin' }).click();
await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  // Interact with the second textbox on the page (likely a filter input)
  await page.getByRole('textbox').nth(1).click();
  // Apply text filter value
  await page.getByRole('textbox').nth(1).fill('Admin');
await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });

  // Open the first dropdown and select the 'Admin' role
  await page.getByText('-- Select --').first().click();
  await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  await page.getByRole('option', { name: 'Admin' }).click();
await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  // Use the autocomplete/hint field to search for a specific user
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('Eric ');
  await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  // Choose the suggested user from the autocomplete list
  await page.getByRole('option', { name: 'Eric akhil Cantona' }).click();
  await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });

  // Change status filter to 'Enabled'
  await page.getByText('-- Select --').click();
  await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  await page.getByRole('listbox').getByText('Enabled').click();
await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  // Apply search with the selected filters
  await page.getByRole('button', { name: 'Search' }).click();
await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  // Select the result that matches 'Eric Cantona'
  await page.locator('span').filter({ hasText: 'Eric Cantona' }).click();
await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
  // Open the user menu and log out
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.screenshot({ path: 'screenshot/my-snapshot.png', fullPage: true });
});