import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

// Read the JSON file
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'data/address.json'), 'utf-8'));

test('test', async ({ page }) => {
    
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
  
    await page.getByPlaceholder('E-Mail Address').fill('nesa246@gmail.com');
    await page.getByPlaceholder('Password').fill('Test123$');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: ' Modify your address book' }).click();

  for (const user of data) {
    
    await page.getByRole('link', { name: 'New Address' }).click();
    await page.getByPlaceholder('First Name').fill(user.firstName);
    await page.getByPlaceholder('Last Name').fill(user.lastName);
    await page.getByPlaceholder('Company').fill(user.company);
    await page.getByPlaceholder('Address 1').fill(user.address1);
    await page.getByPlaceholder('Address 2').fill(user.address2);
    await page.getByPlaceholder('City').fill(user.city);
    await page.getByPlaceholder('Post Code').fill(user.postCode);
    await page.getByLabel('Region / State').selectOption(user.region);
    await page.getByRole('button', { name: 'Continue' }).click();    
  }
  await page.hover("//a[@data-toggle='dropdown']//span[contains(., 'My account')]");
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});