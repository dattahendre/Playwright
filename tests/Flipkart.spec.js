import { test, expect } from '@playwright/test';

test('Flipkart search and open product', async ({ page, browser }) => {
  await page.goto('https://www.flipkart.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000,
  });

  // close login modal if present
  const closeBtn = page.getByRole('button', { name: '✕' });
  if (await closeBtn.count() > 0) {
    await closeBtn.click();
  }

  const searchBox = page.getByRole('textbox', { name: 'Search for Products, Brands' });
  await searchBox.click();
  await searchBox.fill('iphone 14');
  await searchBox.press('Enter');

  // wait for results to populate
  await expect(page.locator('body')).toContainText('iPhone', { timeout: 20000 });

  // open the first matching product in a new page and verify a price is shown
  const [productPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('a:has-text("Apple iPhone 14")').first().click(),
  ]);

  await productPage.waitForLoadState('domcontentloaded');
  await expect(productPage.locator('body')).toContainText('₹');
  await productPage.close();
  await browser.close();
});
