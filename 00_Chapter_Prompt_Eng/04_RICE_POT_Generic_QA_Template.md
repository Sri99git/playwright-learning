# R — ROLE

Manual QA Engineer with 4.2 years of experience in web and mobile application testing, primarily in payment/fintech applications.

Experienced in functional, regression, smoke, sanity, integration, end-to-end, UAT, exploratory, UI/UX, cross-browser, mobile, API testing using Postman, basic SQL/database validation, Jira defect management, and Agile/Scrum practices.

Experienced in testing payment gateways, payment channels, transaction flows, payment status, success/failure scenarios, and end-to-end payment integrations.

Currently learning JavaScript and Playwright for test automation.

# I — INSTRUCTIONS

Create a QA test plan for the Myntra website using Profile B.

The test plan should cover the following three key areas:

1. Login / Authentication
2. Product Search
3. Payment Gateway / Payment Flow

Show the plan first, ask one question at a time, obtain plan approval, and explain each major step.

Map test coverage to the provided requirements and clearly identify any requirements, business rules, test data, environments, payment methods, or expected behaviors that are not provided.

For payment testing, cover positive, negative, boundary, failure, retry, interruption, transaction-status, and end-to-end scenarios.

Propose measurable entry and exit criteria for review.

Do not invent Myntra requirements, UI behavior, error messages, API responses, payment gateway behavior, locators, test data, transaction IDs, or expected results.

Clearly distinguish between:

* Provided requirements
* Observed behavior
* Assumptions
* Planned test scenarios
* Executed test results

# C — CONTEXT

Application: Myntra — e-commerce website.

Website: [Myntra](https://www.myntra.com/?utm_source=chatgpt.com)

Domain: E-commerce, fashion, lifestyle, online shopping.

Features under test:

* Login / Authentication
* Product Search
* Shopping Bag / Cart
* Checkout
* Payment Gateway / Payment Flow

## Login areas

Potential QA coverage:

* Valid login
* Invalid login credentials
* Empty fields
* Incorrect password
* Invalid/unregistered account
* Password visibility
* Login/logout
* Session handling
* Navigation after login
* Browser refresh/back-button behavior
* Multiple login attempts
* Error-message validation
* Cross-browser behavior

## Product Search areas

Potential QA coverage:

* Valid product search
* Partial keyword
* Multiple keywords
* Category search
* Brand search
* Invalid/unavailable keyword
* Empty search
* Special characters
* Numbers
* Leading/trailing spaces
* Case variations
* Long search input
* Search from different pages
* Search result relevance
* UI/UX behavior
* Cross-browser behavior

## Payment Gateway areas

Potential QA coverage:

* Successful payment
* Failed payment
* Cancelled payment
* Payment timeout
* Invalid/failed transaction
* Payment retry
* User closes payment window
* Browser refresh during payment
* Network interruption during payment
* Duplicate payment prevention
* Payment deducted but order not confirmed
* Payment successful but order status not updated
* Order creation after successful payment
* Transaction status validation
* Payment failure followed by retry
* Back navigation during payment
* Different supported payment methods
* Payment confirmation
* Refund initiation where applicable
* API/payment-status validation using Postman where applicable

Sample requirements for this exercise:

### Login Requirements

REQ-01: A user with valid credentials can authenticate successfully.

REQ-02: Incorrect credentials must not authenticate the user.

REQ-03: Required login fields must be validated when submitted empty.

REQ-04: A logged-in user can log out and should no longer have access to authenticated functionality.

### Search Requirements

REQ-05: User can search for a product using a valid product keyword.

REQ-06: Invalid or unavailable search keywords should not incorrectly display unrelated products as exact matches.

REQ-07: Empty search input should be handled appropriately without causing an application error.

REQ-08: Search should support valid combinations of words, such as product name, category, brand, or other supported search terms.

### Payment Requirements

REQ-09: A user can complete payment successfully using a supported payment method.

REQ-10: A failed payment must not incorrectly create a successful order.

REQ-11: If payment is interrupted or cancelled, the transaction/order status must be handled correctly.

REQ-12: A successful payment should result in the appropriate order/payment status.

REQ-13: The system should prevent duplicate order/payment creation when the user retries or refreshes after a transaction.

Environment, test accounts, supported browsers, supported payment methods, test cards, payment gateway sandbox details, API specifications, database access, performance targets, accessibility requirements, exact error messages, and transaction-status rules: Not provided.

# E — EXAMPLE

Coverage row:

REQ-02 | Incorrect login credentials | Negative functional testing | User remains unauthenticated | Synthetic test account

REQ-05 | Valid product keyword | Positive functional testing | Relevant products should be displayed | "Women Dress"

REQ-10 | Failed payment | Negative integration testing | Payment should not result in an incorrectly confirmed order | Synthetic payment test data

REQ-12 | Successful payment | Positive end-to-end testing | Appropriate payment/order status should be recorded | Approved test payment method

REQ-13 | Retry/refresh after payment | Edge-case / transaction testing | Duplicate payment/order should not be created | Synthetic transaction

Examples are illustrative test scenarios only and do not represent verified current Myntra behavior.

# P — PARAMETERS

Task: Test Plan.

## In scope

### Login

* REQ-01 through REQ-04
* Functional testing
* Negative testing
* Session/logout testing
* UI/UX validation
* Regression testing
* Cross-browser testing

### Product Search

* REQ-05 through REQ-08
* Positive testing
* Negative testing
* Boundary testing
* Edge-case testing
* Functional testing
* Regression testing
* UI/UX validation
* Cross-browser testing

### Payment

* REQ-09 through REQ-13
* Functional testing
* Integration testing
* End-to-end testing
* Positive and negative payment scenarios
* Transaction-status validation
* Failure and retry scenarios
* Payment interruption scenarios
* Duplicate transaction/order validation
* API validation using Postman where applicable
* Database validation only if database access is provided

## Out of scope

* Payment gateway implementation/code testing
* Performance/load testing
* Security/penetration testing
* PCI-DSS compliance testing
* Accessibility certification
* Automation implementation
* Internal Myntra systems not exposed through the provided application
* Real financial transactions
* Production payment testing

## Testing approach

* Manual testing
* Risk-based testing
* Requirement-based testing
* Integration testing
* End-to-end testing
* Exploratory testing where appropriate
* Boundary-value analysis
* Negative testing
* Regression testing

## Tools

* Browser DevTools
* Jira
* Postman
* MySQL Workbench if database access is available
* BrowserStack where applicable

## Test data

Use synthetic/test data unless valid test credentials and payment sandbox data are explicitly provided.

Do not use real card numbers, banking credentials, or real financial transactions.

Workflow: Guided.

Plan approval: Required.

Checkpoints: Each major step.

Quality criteria:

* 100% of in-scope requirements have mapped test coverage.
* All critical login, checkout, and payment scenarios are covered.
* No unresolved Critical/Blocker defects for release approval.
* All planned critical scenarios are executed before sign-off.
* Failed scenarios have documented defects or approved explanations.
* Payment/order status mismatches are treated as high-priority risks.
* Entry and exit criteria remain explicit and measurable.

# O — OUTPUT

Produce one Markdown QA test plan using Profile B's sections.

Include:

1. Objective
2. Scope
3. Out of Scope
4. Requirements
5. Test Strategy
6. Test Types
7. Test Scenarios
8. Requirement Coverage Matrix
9. Login Test Scenarios
10. Product Search Test Scenarios
11. Payment Gateway Test Scenarios
12. End-to-End Transaction Scenarios
13. Test Data
14. Environment
15. Entry Criteria
16. Exit Criteria
17. Risks and Dependencies
18. Assumptions
19. Defect Management
20. Deliverables

Include a requirement coverage table with:

Requirement ID | Requirement | Test Scenario | Test Type | Priority | Expected Outcome

For payment scenarios, additionally include:

Scenario | Payment State | Expected Order State | Expected Payment State | Risk/Priority

Clearly identify any payment behavior that requires confirmation from product/business requirements.

Keep missing prerequisites, assumptions, and proposed thresholds clearly identified.

Do not claim that a test has passed or failed unless it has actually been executed.

# T — TONE

Technical, precise, practical, and easy to understand.

Write at a level appropriate for a QA Engineer with 4.2 years of experience.

The output should be readable by QA engineers, developers, product managers, and interviewers.

Use practical real-world QA terminology.

Give special attention to payment transaction lifecycle, failure handling, reconciliation/status mismatch, and end-to-end validation.

Do not exaggerate automation expertise. Automation should be treated as a learning area using JavaScript and Playwright.
