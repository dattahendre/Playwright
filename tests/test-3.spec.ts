import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await expect(page.getByRole('link', { name: 'Tricentis Demo Web Shop' })).toBeVisible();
  await page.getByRole('link', { name: 'Computers' }).first().click();
  await page.getByRole('link', { name: 'Desktops' }).first().click();
  await expect(page.getByRole('link', { name: 'Desktop PC with CDRW', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Electronics' }).first()).toBeVisible();
  
  await page.getByRole('link', { name: 'Electronics' }).first().click();
  await page.getByRole('link', { name: 'Cell phones', description: 'Show products in category Cell phones', exact: true }).click();
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.getByRole('link', { name: 'Shopping cart (1)' }).click();
});