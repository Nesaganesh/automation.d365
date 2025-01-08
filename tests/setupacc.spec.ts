import { test, expect } from '@playwright/test';

test('test @addaddress', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");
  await expect(page).toHaveURL(/.*playground.*/);
  
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Nesa');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Ganesh');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('E-Mail').fill('nesa246@gmail.com');
  await page.getByPlaceholder('E-Mail').press('Tab');
  await page.getByPlaceholder('Telephone').fill('07741843819');
  await page.getByPlaceholder('Telephone').press('Tab');
  await page.getByPlaceholder('Password', { exact: true }).fill('Test123$');
  await page.getByPlaceholder('Password', { exact: true }).press('Tab');
  await page.getByPlaceholder('Password Confirm').fill('Test123$');
  await page.getByText('I have read and agree to the').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});