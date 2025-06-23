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
    // if test is marked as slow, it will be reported as such in the test results and the timeout for the test will be tripled.
    test.slow();
})