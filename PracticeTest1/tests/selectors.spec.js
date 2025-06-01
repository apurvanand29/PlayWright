import { test, expect } from '@playwright/test'

test('Selectors Test', async ({ page }) => {

    await page.goto('https://saucedemo.com/')
    await page.pause()

    // Using CSS selector to select the username input field
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison')
    await page.locator('#login-button').click()
    //using text
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()
})