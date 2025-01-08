import {test, expect} from '@playwright/test';
import { changeArea } from '../../automation.d365/area';


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