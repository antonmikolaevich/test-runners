# Automated Testing Mentoring Advanced - Report Portal

This is an automated testing framework using WebdriverIO, Mocha, Chai, and Page Object Model (POM). It's designed to test Report Portal application.


## Getting Started

Follow these instructions to set up the testing framework and start writing automated tests.

### Prerequisites

Make sure you have Node.js and npm installed on your system. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository:

2. Install the project dependencies:
   `npm install`

### Running Tests

`npm test`

### Running Tests

To check your code for linting errors, you can run:
`npm run lint`

To automatically fix linting errors (where possible), you can run:
`npm run lint:fix`

## Test Reports

Test results will be reported in the console by default. You can also use the wdio-html-nice-reporter package to generate HTML test reports.

## Environment Variables

Sensitive data like usernames and passwords should be stored as environment variables. You can create an .env file in the project root and set your environment variables there. Refer to the dotenv documentation for more details.

## Project Structure

The project follows the Page Object Model (POM) design pattern for organizing test code. You can find page objects in the pageobjects directory and test spec files in the test directory.

## Built With

WebdriverIO - WebDriver test framework for Node.js
Mocha - JavaScript test framework
Chai - Assertion library
eslint - JavaScript linting utility
wdio-html-nice-reporter - HTML test reporter

## License

This project is licensed under the ISC License - see the LICENSE file for details.
