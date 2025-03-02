# Playwright Automation Exercise

This project is an automated testing framework built using Playwright for API and end-to-end (E2E) testing of a web application. API tests test fetching, updating, deleting, and creating users using an API(https://reqres.in/api). Web tests includes test flows for user registration, login, and adding an item to the cart from a web page (https://www.automationexercise.com/).


## Table of Contents

- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [key Features](#key-features)

## Running Tests

To use this project, you can run the Playwright tests using the following command:

```bash
npx playwright test
```

To run tests using UI. run the following command:
```bash
npx playwright test --ui
```

To run a specific test file, use:

```bash
npx playwright test -g <test_name>
```

## Project Structure

The project structure is as follows:

```
/Playwright-Automation-Exercise
├── src/                        # Project source code
│   ├── tests/                  # Automated tests (Web & API)
│   ├── pages/                  # Page Object Model (POM) implementation
│   ├── workFlows/              # User flows
│   ├── utils/                  # Reusable utility functions
├── playwright.config.ts        # Playwright configuration file
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration file
└── README.md                   # Project documentation
```

## key Features
Page Object Model (POM) – Keeps tests modular and maintainable.
Reusable UI Actions – Centralized common actions like clicking and form filling.
Assertions & Validations – Ensures UI elements and values are as expected