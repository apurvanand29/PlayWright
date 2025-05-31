const { test, expect } = require('@playwright/test')

test('My first PlayWright test', async ({ page }) => {
    await page.goto('https://github.com/apurvanand29/')
    await expect(page).toHaveTitle('apurvanand29 (Apurva Anand) · GitHub')
})