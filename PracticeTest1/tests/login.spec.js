import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {

    await page.goto('https://demo.applitools.com');
    await page.pause()
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('Apurva')
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123')

    await page.waitForSelector('text=Sign in', { timeout: 4000 })
    await expect(page.locator('text=Sign in')).toHaveCount(1)
    await page.getByRole('link', { name: 'Sign in' }).click()
})

test.only('Login demo test 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.locator('[placeholder="Username"]').fill('Admin')
    await page.locator('[placeholder="Password"]').fill('admin123')
    await page.locator('button:has-text("Login")').click()
    await page.getByText('manda user').click()
    await page.getByText('Logout').click();

})