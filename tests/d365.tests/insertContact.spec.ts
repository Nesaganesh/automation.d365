import {test, expect} from '@playwright/test';
import { changeArea } from '../../automation.d365/area';
import { getRandomName, getRandomEmail } from '../../Utils/randomData';


test.use({storageState: 'storage-state.json'});

test('Login to Dynamics 365 @d365test', async ({page}) => {

    page.waitForTimeout(5000);
    const orgUrl = process.env.DYN365_ORGURL;
    if (!orgUrl) {
        throw new Error('ORG_URL is not set');
    }
    test.slow();
    await page.goto(orgUrl);
    page.waitForTimeout(5000);
    await changeArea(page, "App Settings");

});

test('Login to Dynamics 365 and go to Sales Insights settings @d365test', async ({page}) => {

    page.waitForTimeout(5000);
    const orgUrl = process.env.DYN365_ORGURL;
    if (!orgUrl) {
        throw new Error('ORG_URL is not set');
    }
    test.slow();
    await page.goto(orgUrl);
    page.waitForTimeout(5000);
    await changeArea(page, "Sales Insights settings");

});


test('Add new contact @d365testNewContact @d365test', async ({page}) => {

    page.waitForTimeout(5000);
    const orgUrl = process.env.DYN365_ORGURL;
    if (!orgUrl) {
        throw new Error('ORG_URL is not set');
    }
    await page.goto(orgUrl);

    await page.click('#sitemap-entity-Contact');
    await page.waitForTimeout(5000);
    
    // Generate random name and email
    const randomName = getRandomName();
    const randomEmail = getRandomEmail();

    await page.getByLabel('New', { exact: true }).click();
    await page.getByLabel('First Name').click();
    await page.getByLabel('First Name').fill(randomName);
    await page.getByLabel('Last Name').fill('NesaTest');
    await page.getByLabel('Job Title').fill('CEO');
    await page.getByLabel('Email').fill(randomEmail);
    await page.getByLabel('Mobile Phone').click();
    await page.getByPlaceholder('Provide a telephone number').fill('4564666');
    await page.getByLabel('Save & Close').click();
    await page.waitForTimeout(10000);
});

