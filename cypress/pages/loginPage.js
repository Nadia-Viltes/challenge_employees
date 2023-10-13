class loginPage {

    elements = {
        formLogin: () => cy.get("#form"),
        userNameLoginField: (parent) => parent.find("[type='text']"),
        passwordLoginField: (parent) => parent.get("[type='password']"),
        loginButton: (parent) => parent.get("[type='submit']"),
    }

    getFormLogin() {
        return this.elements.formLogin();
    }

    getUserNameLoginField() {
        const form = this.getFormLogin(); // parent
        return this.elements.userNameLoginField(form);
    }

    getPasswordLoginField() {
        const form = this.getFormLogin();
        return this.elements.passwordLoginField(form);
    }

    getLoginButton() {
        const form = this.getFormLogin();
        return this.elements.loginButton(form);
    }

}
export default new loginPage();