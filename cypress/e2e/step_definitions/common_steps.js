import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the employees page", () => {
    cy.visit("/employees.html");
});
