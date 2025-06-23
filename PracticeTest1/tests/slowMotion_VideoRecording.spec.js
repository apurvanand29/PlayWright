import { test, expect, chromium } from '@playwright/test'

test('slow motion video recording', async () => {
    const browser = await chromium.launch({ slowMo: 500, headless: false });
    const context = await browser.newContext({ recordVideo: { dir: 'videos/', size: { width: 800, height: 600 } } });
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    await page.locator('button:has-text("Login")').click()
    await context.close();
})