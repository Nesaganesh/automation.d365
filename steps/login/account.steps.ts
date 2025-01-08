const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, Page } = require('@playwright/test');
const { chromium } = require('playwright');

let page;

Given('I navigate to the registration page', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});

When('I fill in the registration form', async () => {
  await page.getByPlaceholder('First Name').fill('Nesa');
  await page.getByPlaceholder('Last Name').fill('Ganesh');
  await page.getByPlaceholder('E-Mail').fill('nesa246@gmail.com');
  await page.getByPlaceholder('Telephone').fill('07741843819');
  await page.getByPlaceholder('Password', { exact: true }).fill('Test123$');
  await page.getByPlaceholder('Password Confirm').fill('Test123$');
  await page.getByText('I have read and agree to the').click();
});

When('I submit the form', async () => {
  await page.getByRole('button', { name: 'Continue' }).click();
});

Then('I should see the account dashboard', async () => {
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
  await expect(page).toHaveURL(/.*account.*/);
});