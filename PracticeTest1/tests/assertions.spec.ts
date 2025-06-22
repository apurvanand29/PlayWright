import { test, expect } from '@playwright/test';

test('Assertions', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com')
    await page.pause()
    //Assertions
    //check if text is present on the webpage
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)

    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click()
    }

})