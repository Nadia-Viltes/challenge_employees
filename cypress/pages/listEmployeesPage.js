class listEmployees {

    elements = {
        tableEmployees: () => cy.get('#treeGrid'),
        gridEmployees: () => cy.get('#tabletreeGrid'),
        rowGridEmployees: (parent) => parent.find("tr[role=row]"),
        fieldsGridEmployees: (parent) => parent.find('td'),
        checkbox: () => cy.get('tr .jqx-tree-grid-checkbox'),
        checked: (parent) => parent.find(".jqx-checkbox-check-checked"),
        buttonViewData: () => cy.get('#btn'),
        textArea: () => cy.get('#listBoxSelected'),
        elementsInArea: (parent) => parent.find(".jqx-listitem-element")
    }

    getTableEmployees() {
        return this.elements.tableEmployees();
    }

    getContentTableEmployees() {
        return this.elements.gridEmployees();
    }

    getButtonViewData() {
        return this.elements.buttonViewData();
    }

    getTextArea() {
        return this.elements.textArea();
    }

    getElementsInArea() {
        const textAerea = this.elements.textArea()
        return this.elements.elementsInArea(textAerea);
    }

    getRowGridEmployees() {
        const grid = this.elements.gridEmployees()
        return this.elements.rowGridEmployees(grid)
    }

    getSelectedRows() {
        const grid = this.elements.gridEmployees()
        return this.elements.checked(grid);
    }

    getFieldsGridEmployees() {
        const table = this.elements.rowGridEmployees()
        return this.elements.fieldsGridEmployees(table)
    }

    getCheckboxByRowIndex(rowIndex) {
        return this.elements.checkbox(this.getTableEmployees()).eq(rowIndex);
    }

    getCellRowByCheckBoxAndIndex(checkbox, index) {
        return checkbox.parents("tr[role=row]").find("td").eq(index);
    }

    selectAllCheckBox() {
        this.getRowGridEmployees().each((row, index, list) => {
            const rowContainsDiv = this.elements.checked(Cypress.$(row)).length === 0;
            if (rowContainsDiv) {
                this.getCheckboxByRowIndex(index).click();
            }
        });
    }

    deselectAllCheckBox() {
        this.getRowGridEmployees().each((row, index, list) => {
            const rowContainsDiv = this.elements.checked(Cypress.$(row)).length > 0;
            if (rowContainsDiv) {
                this.getCheckboxByRowIndex(index).click();
            }
        });
    }

    expandAll() {
        this.elements
            .tableEmployees()
            .find("span[class*='jqx-icon-arrow']")
            .each((icon, index, list) => {
                if (icon.hasClass("jqx-icon-arrow-right")) {
                    cy.wrap(icon).click();
                }
            });
    }

    getElementsByIndex(index) {
        return this.getElementsInArea().eq(index);
    }

}
export default new listEmployees();
