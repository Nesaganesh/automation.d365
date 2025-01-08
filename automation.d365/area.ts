import {expect, Locator, Page} from '@playwright/test';


export async function changeArea(page: Page, name: string): Promise<void> {

    await page.locator("#areaSwitcherId").click();
    //await expect(page.getByLabel(name), `Area ${name} not found`).toBeVisible();

    await page.getByText(name, {exact: true}).click();
    await expect(page.getByText(name), 'Area not changed').toBeVisible();

    await page.waitForTimeout(5000);
}