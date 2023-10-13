import listEmployeesPage from "../../pages/listEmployeesPage"
import { When, Then } from "@badeball/cypress-cucumber-preprocessor"

When("I expand all the collapse employees in the table", () => {
    listEmployeesPage.expandAll()
});

When("I select the ramdon employee", () => {
    listEmployeesPage.getRowGridEmployees().its('length').then((rowCount) => {
        const randomIndex = Math.floor(Math.random() * rowCount);
        cy.log(`Cantidad de filas: ${rowCount}`);
        cy.log(`Índice aleatorio: ${randomIndex}`);
        listEmployeesPage.getCheckboxByRowIndex(randomIndex).click()
    })
});

When("I select the View selected data button", () => {
    listEmployeesPage.getButtonViewData().click()
});

Then("I view in the list the information of the selected employee: First name and city of origin", () => {
    listEmployeesPage.getSelectedRows().each((row, index, list) => {
        const firstColumn = 0;
        const lastColum = 3;
        listEmployeesPage.getCellRowByCheckBoxAndIndex(cy.wrap(row), firstColumn).invoke("text").as("firstName");
        listEmployeesPage.getCellRowByCheckBoxAndIndex(cy.wrap(row), lastColum).invoke("text").as("city");
        cy.get("@firstName").then((firstName) => {
            cy.get("@city").then((city) => {
                listEmployeesPage.getElementsByIndex(index).should("have.text", `${firstName} is from ${city}`);
            });
        });
    });
});

When("I select all employees from the table", () => {
    listEmployeesPage.selectAllCheckBox()
});

When("I deselect all employee from the table", () => {
    listEmployeesPage.deselectAllCheckBox()
});

Then("I see the employee data list empty", () => {
    listEmployeesPage.getElementsInArea().should('not.exist')
});
