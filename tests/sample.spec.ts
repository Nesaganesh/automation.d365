import { test, expect } from '@playwright/test';

// Define a function to navigate to the "Get started" page
async function navigateToGetStarted(page) {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
}

test.describe('Playwright website tests', () => {
  test('homepage has Playwright in title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    await navigateToGetStarted(page);
  });

  // test('search for text', async ({ page }) => {
  //   await page.goto('https://playwright.dev/');
  //   await page.fill('input[type="search"]', 'test');
  //   await expect(page.locator('text="Test"')).toContainText('Test');
  // });
});