import { test } from '@playwright/test'

test.skip('Test 1', async ({ page }) => {

})

test('not ready yet', async ({ page }) => {
    test.fail();
})

test.fixme('Test 3', async ({ page }) => {
    // This test is marked as "fixme" and will be reported as such in the test results.
})

// to run particular tag, use command: npx playwright test annotationsAndTags --project chromium --grep "@smoke"
test('Test 4 @smoke', async ({ page }) => {
    test.slow();
})