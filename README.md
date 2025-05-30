# Playwright Automation framework (Page object model)

This framework is designed to be used as a boilerplate template to start automation testing quickly for any web application. The page object model is used to structure the test.

## Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)
- [VS Code](https://code.visualstudio.com/)

## Installation

Prerequisites:
NodeJS 14(or above)

- Clone the repo using the below URL
https://github.com/codedtun/wynnAutomationTest
- Navigate to the folder and install npm packages using:
```bash
- npm install
```

- Install Playwright browsers
```bash
- npx @playwright/test install
```

## Usage

- Run all the spec files present in the "./tests" directory by using the below command
```bash
npx playwright test
```
- Run specific spec file
```bash
npx playwright test tests/{specfile_name.ts}
```

- To generate allure report 
```bash
npx playwright show-report
npx run test:reporter 
npx run open:allure-report
```
