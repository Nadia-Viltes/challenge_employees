Feature: Login

    Background:
        Given I visit the employees page

    Scenario: Successful login
        Given I put a valid username and password in the Login section
        When I select the Login button
        Then the login is successful

    Scenario: Login failed - Invalid Username
        Given I put a blank username and password in the Login section
        When I select the Login button
        Then the login fails

    Scenario: Login failed - Invalid Password
        Given I put an username and blank password in the Login section
        When I select the Login button
        Then the login fails