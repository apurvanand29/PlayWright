import { test } from '@playwright/test'

test.skip('Test 1', async ({ page }) => {

})

test('not ready yet', async ({ page }) => {
    test.fail();
})