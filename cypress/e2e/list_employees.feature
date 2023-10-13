Feature: List Employees

    Background:
        Given I visit the employees page

    Scenario: Validate employee information
        When I expand all the collapse employees in the table
        When I select the ramdon employee
        When I select the View selected data button
        Then I view in the list the information of the selected employee: First name and city of origin

    Scenario: Validate information all employees
        When I expand all the collapse employees in the table
        When I select all employees from the table
        When I select the View selected data button
        Then I view in the list the information of the selected employee: First name and city of origin

    Scenario: Validate that deselected employees are not displayed in the list
        When I select all employees from the table
        When I select the View selected data button
        When I deselect all employee from the table
        When I select the View selected data button
        Then I see the employee data list empty
