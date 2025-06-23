import { test } from '@playwright/test'

// Annotations: skip, fixme, fail, slow, skip conditionally, only, etc.
// Tags: smoke, regression, etc.
// You can use annotations and tags to categorize and manage your tests effectively.
test.skip('Test 1', async ({ page }) => {

})

test('not ready yet', async ({ page }) => {
    test.fail();
})

test.fixme('Test 3', async ({ page }) => {
    // This test is marked as "fixme" and will be reported as such in the test results.
})

// to run particular tag, use command: npx playwright test annotationsAndTags --project chromium --grep "@smoke"
// if you want to skip a tag, you can use the --grep-invert command: npx playwright test annotationsAndTags --project chromium --grep-invert "@smoke"
test('Test 4 @smoke', async ({ page }) => {
    // if test is marked as slow, it will be reported as such in the test results and the timeout for the test will be tripled.
    test.slow();
})