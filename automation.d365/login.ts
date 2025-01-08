import {Page} from "@playwright/test";


export async function login(page: Page, orgUrl?: string, username?: string, password?: string): Promise<void> {

    if(!orgUrl || !username || !password) {
        throw new Error('Please provide the required environment variables');
    }

    await page.goto(orgUrl);

    // enter username
    await page.fill('input[name="loginfmt"]', username);
    await page.click('input[type="submit"]');

    // Wait for password field to be visible
    await page.waitForSelector('input[name="passwd"]', {state: 'visible'});

    // enter password
    await page.fill('input[name="passwd"]', password);
    await page.click('input[type="submit"]');

    // Wait for the page to load

    // Handle MFA
    const staySignedInButton = page.locator('text="Yes"');
    if(await staySignedInButton.isVisible()) {
        await staySignedInButton.click();
        await page.waitForNavigation();
    }
}