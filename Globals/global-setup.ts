import { chromium, FullConfig } from "@playwright/test";
import * as dotenv from 'dotenv';
import { login } from "../automation.d365/login";


dotenv.config();
const authfile = '/storage-state/storageState.json';    

async function globalSetup(config: FullConfig): Promise<void> {


    const orgUrl = process.env.DYN365_ORGURL;
    const username = process.env.DYN365_USERNAME;
    const password = process.env.DYN365_PASSWORD;

    const {storageState} = config.projects[0].use;
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();

    await login(page, orgUrl, username, password);

    // save the storage state to a file
    await page.context().storageState({ path: storageState as string });
    await browser.close();

}export default globalSetup;