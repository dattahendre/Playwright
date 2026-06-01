import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');
  await page.setDefaultTimeout(5000);
  await expect(page.locator('form')).toContainText('Sign Up');
  await page.getByRole('textbox', { name: 'Name' }).fill('John Doe');
  await page.getByRole('textbox', { name: 'Email' }).fill('johndoe@example.com');
  await page.getByRole('textbox', { name: 'Password must be atleast 6' }).fill('password123');
  await page.locator('div').filter({ hasText: /^Selenium$/ }).click();
  await expect(page.getByRole('heading', { name: 'State:' })).toBeVisible();
  // getting all the option texts of the dropdown and printing them
  const statedropdown = await page.locator('#state option').allTextContents();
  console.log(statedropdown);
  // print values one by one
  for (let i = 0; i < statedropdown.length; i++) {
    console.log(statedropdown[i]);
  }
  await page.locator('#state').selectOption({ label: 'Maharashtra' });
  await expect(page.getByRole('heading', { name: 'Hobbies:' })).toBeVisible();
  //getting all the options of the dropdown and printing in console
  // 1) Get all option texts (not the select text)
const hobbiesdropdown = await page.locator('#hobbies option').allTextContents();

// 2) Assert the array
await expect(hobbiesdropdown).toEqual(['Select Multiple Hobbies','Playing','Reading','Swimming','Singing','Dancing']);

// 3) Select one value
await page.locator('#hobbies').selectOption({ label: 'Reading' });
});