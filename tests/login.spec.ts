import { test, expect } from '@playwright/test';

test('test @login', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByPlaceholder('E-Mail Address').fill('nesa246@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('Test123$');
  await page.getByPlaceholder('Password').press('Tab');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('Last Name').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});