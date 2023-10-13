# Challenge Employees
This project was created under a framework with Cypress, Cucumber and JavaScript. I applied the POM.

## Installation 
Make sure you have [Node.js](https://nodejs.org/) installed on your system, version 16 or higher, before starting.
To install all the necessary dependencies, run the following command:
```bash
npm install
```
IMPORTANT:
Before running the tests, you should initialize the server on port 2000 using the following command. Ensure that this port is available for use; otherwise, it will initialize on another port, and the tests will not work.
```bash
npm run server
```
Execute the following command to run all automated tests:
```bash
npm run cy:test
```

## Structure
Inside the Cypres > E2E folder you can find the step_definitions folder. Here you will find the assertions and the logic of the steps.
Also, inside the Cypres > E2E you can find the files .feature extension. These are the scenarios created in Gherkin.
On the other hand, in the Cypress folder you can find pages folder. Here you will find the objects that represent the pages.

```bash
├ cypress
│   ├─ e2e
│       └─ step_definitions
│   ├─ fixtures
│   ├─ pages
│   └ support
├ others
│   ├─ Defect-reports.pdf
│   ├─ Test-and-strategy-plan-agile.pdf
│   ├─ Test-design.pdf
│   └ Test-results.pdf
├ cypress.config.js
├ employees.html
├ package-lock.json
└ package.json
```

## Other files
In the project you will find the other folder with the following files:

-Test-and-strategy-plan-agile

-Test-design

-Test-results

-Defect-reports

IMPORTANT:
There are some tests that will fail because there are errors in the website that need to be fixed according to the expected results.

## Answer about the activity

Questions number 3:
Do you agree with the acceptance criteria? What are you missing? Put one example. 

-I do not agree with the acceptance criteria as I believe they are not correctly detailed.
```bash
Login:
-The system should allow the user to log in correctly using their credentials.
-If the users credentials are incorrect I should receive an error message. Example:   The user or password is incorrect.
-After login, the user should be redirected to the home page or to a specific location.

Employees List:
-When an employee is selected the selected city of origin should be displayed in the list.
-City of origin information should be required.
-If no employee is selected, no city information is displayed.
```

## Definition
At employees.html the following client requirement has been implemented:
- The possibility to see the city of origin of the selected employees in a list.

# Task
Define and implement the tests you think are necessary for the technology you prefer.
