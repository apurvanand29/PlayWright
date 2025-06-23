import { test } from '@playwright/test'

test.skip('Test 1', async ({ page }) => {

})

test('not ready yet', async ({ page }) => {
    test.fail();
})

test.fixme('Test 3', async ({ page }) => {
    // This test is marked as "fixme" and will be reported as such in the test results.
})


test.slow('Test 4', async ({ page }) => {