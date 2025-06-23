import { test, expect, chromium } from '@playwright/test'

test('slow motion video recording', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('');
    await context.close();
})