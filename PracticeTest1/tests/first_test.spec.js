// This is a Playwright test file to navigates to a GitHub profile and checks the title of the page
// const is used to import the Playwright testing library, test is used to define a test case, and expect is used for assertions.
// require is used to import the Playwright testing library.
const { test, expect } = require('@playwright/test')

let context
let page
test.beforeAll(async ({ browser }) => {
    // Create a new browser context before all tests
    context = await browser.newContext()

    await context.tracing.start({ screenshots: true, snapshots: true })
    // Create a new page in the context
    page = await context.newPage()
})

test.afterAll(async () => {
    await context.tracing.stop({ path: 'trace.zip' })
})

// Define a test case named 'My first PlayWright test'
// test takes two parameters: a description of the test and an async function that contains the test logic.
// async function is used to allow the use of await within the function
// page is an object provided by Playwright that represents a single tab in the browser
test('My first PlayWright test', async () => {

    // Navigate to the specified URL
    await page.goto('https://github.com/apurvanand29/')
    await expect(page).toHaveTitle('apurvanand29 (Apurva Anand) · GitHub')



})