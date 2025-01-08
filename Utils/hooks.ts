import {test} from '@playwright/test';
import * as fs from 'fs';

const failedTests: string[] = [];   

test.afterEach(async ({ page }, testInfo) => {

    if(testInfo.status !== testInfo.expectedStatus) {

        console.log(`Test ${testInfo.title}`);
        await page.screenshot({ path: `screenshots/${testInfo.title}-failed.png` });    }
});

test.afterAll(async ({}, testInfo) => {
    fs.writeFileSync('failedTests.json', JSON.stringify(failedTests, null, 2));
}); 

