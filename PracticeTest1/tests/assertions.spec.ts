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

    //check if element is visible on the webpage
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    //check if element is enabled on the webpage
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    //check if element has specific text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    await expect.soft(page.locator('text=The Kitchen')).toHaveText('The Kitchen1')
})