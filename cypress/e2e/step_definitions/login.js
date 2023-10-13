import loginPage from "../../pages/loginPage";
import listEmployeesPage from "../../pages/listEmployeesPage"
import { When, Then } from "@badeball/cypress-cucumber-preprocessor"

const usernameLogin = "NadiaViltes"
const passwordLogin = "Test123"

When("I put a valid username and password in the Login section", () => {
    loginPage.getUserNameLoginField().type(usernameLogin).should("have.value", usernameLogin);
    loginPage.getPasswordLoginField().type(passwordLogin).should("have.value", passwordLogin);
});

When("I select the Login button", () => {
    loginPage.getLoginButton().click()
});

Then("the login is successful", () => {
    listEmployeesPage.getTableEmployees().should('be.visible');
});

When("I put a blank username and password in the Login section", () => {
    loginPage.getPasswordLoginField().type(passwordLogin).should("have.value", passwordLogin);
});

When("I put an username and blank password in the Login section", () => {
    loginPage.getUserNameLoginField().type(usernameLogin).should("have.value", usernameLogin);
});

Then("the login fails", () => {
    listEmployeesPage.getTableEmployees().should('not.be.visible');
});
