import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // veify the title of the page
  await expect(page).toHaveTitle(/OrangeHRM/);
  //click on username to fill data
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin',{delay:2000});
  //click on password to fill data
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123',{delay:2000});
  await page.getByRole('button', { name: 'Login' }).click();

  //await expect(page).toHaveURL(/.*dashboard.*/);
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Admin',{delay:2000});
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('listbox').getByText('Admin').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('table')).toContainText('Admin');
await page.getByRole('img', { name: 'profile picture' }).click();
  //await page.locator('span').filter({ hasText: 'manda user' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await expect(page.getByRole('heading')).toContainText('Login');

});