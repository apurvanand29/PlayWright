exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByLabel('Username')
        this.passwordInput = page.getByLabel('Password')
        this.loginButton = page.getByRole('button', { name: ' Login' })
    }

    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    // created onemethod for login instead of atomic actions
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}