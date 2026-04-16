import {test, expect} from '@playwright/test';
//Navigate to orangehrm login page


//Enter username and password and click on login button
test('Enter username and password and click on login button', async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.screenshot({ path: 'D:\\Swamini\\Playwright\\screenshot\\login-success.png' });
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.screenshot({ path: 'D:\\Swamini\\Playwright\\screenshot\\login-dashboard.png' });
  await page.pause();
});