import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');
  await expect(page.getByRole('link', { name: 'Playground' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Modal & Overlays' })).toBeVisible();
  await page.getByRole('link', { name: 'Modal & Overlays' }).click();
  await expect(page.getByRole('link', { name: 'Window' })).toBeVisible();
  await page.getByRole('link', { name: 'Window' }).click();
  await expect(page.getByText('Window Form', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Open window form' }).click();
  await page.getByRole('textbox', { name: 'Subject:' }).click();
  await page.getByRole('textbox', { name: 'Subject:' }).fill('english');
  await page.getByRole('textbox', { name: 'Text:' }).click();
  await page.getByRole('textbox', { name: 'Text:' }).fill('math');
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  await page.locator('div').filter({ hasText: 'Nick Jones' }).nth(3).click();
  await page.getByTitle('Log out').click();
  // close the browser after test case execution
  await page.close();
});