# QA Test Plan: Myntra E-Commerce Platform
**Document Title**: `Rice_Pot_Myntra_QA_TestPlan.md`  
**Application Under Test (AUT)**: [Myntra E-Commerce Platform](https://www.myntra.com/)  
**Author**: QA Engineer (4.2 Years Experience — Web/Mobile & Payment/Fintech Testing)  
**Domain**: E-commerce, Fashion, Retail & Online Payments  
**Test Framework Pattern**: RICE-POT Generic QA Specification (Profile B)  
**Execution Status**: Planned (Not Executed)  

---

## 1. Objective
The primary objective of this Test Plan is to validate the functionality, reliability, and transactional integrity of three critical workflows on the Myntra web platform:
1. **User Authentication & Session Management (Login)**: Ensuring secure, valid access, negative credential handling, and graceful session termination.
2. **Product Discovery (Search)**: Verifying product search accuracy, keyword combinations, edge cases, and graceful degradation for unavailable inventory.
3. **Payment Gateway & Checkout Lifecycle**: Validating transaction processing across multiple payment channels (UPI, Cards, NetBanking, Wallets), handling interruptions, network timeouts, failure retries, and duplicate payment prevention.

---

## 2. Scope

### In Scope
* **Authentication (REQ-01 to REQ-04)**:
  * Standard Email + Password authentication flows.
  * Empty field boundary checks and field validations.
  * Invalid credentials and security boundary handling.
  * User logout and invalidation of authenticated state.
  * Session retention, back-button, and browser refresh behavior.
* **Product Search (REQ-05 to REQ-08)**:
  * Single, partial, and multi-keyword queries (brand, category, product type).
  * Special characters, alphanumeric terms, leading/trailing whitespaces.
  * Empty search submission and long search strings.
  * "No products found" zero-result state handling.
* **Payment Processing (REQ-09 to REQ-13)**:
  * Full Payment Suite: UPI (Intent/QR), Credit/Debit Cards, NetBanking, and Digital Wallets.
  * Transaction states: Initiated, Pending, Successful, Failed, User-Cancelled, and Timed-Out.
  * Edge cases: Mid-transaction browser refresh, network disconnect, back-navigation, double-clicking "Pay Now".
  * Order status synchronization and reconciliation against payment states.
  * Refund initiation and low-value refundable transaction checks.

---

## 3. Out of Scope
* Direct testing of third-party payment gateway internal source code or bank core banking systems.
* Load, stress, and high-concurrency volume performance testing.
* Penetration testing, vulnerability assessments, and formal PCI-DSS compliance certification.
* Non-refundable high-value financial transactions.
* Native iOS / Android mobile applications (this plan focuses on the Desktop/Mobile Web interface).
* Internal Myntra warehouse inventory management, supply chain ERP, and logistics fulfillment APIs.
* Automation script execution (Playwright + JavaScript automation is currently an exploratory learning area and not part of the manual sign-off gate).

---

## 4. Requirements Specification

| Requirement ID | Module | Requirement Description | Source |
| :--- | :--- | :--- | :--- |
| **REQ-01** | Login | A user with valid credentials can authenticate successfully. | *Provided Requirement* |
| **REQ-02** | Login | Incorrect credentials must not authenticate the user. | *Provided Requirement* |
| **REQ-03** | Login | Required login fields must be validated when submitted empty. | *Provided Requirement* |
| **REQ-04** | Login | A logged-in user can log out and should no longer have access to authenticated functionality. | *Provided Requirement* |
| **REQ-05** | Search | User can search for a product using a valid product keyword. | *Provided Requirement* |
| **REQ-06** | Search | Invalid or unavailable search keywords should not incorrectly display unrelated products as exact matches. | *Provided Requirement* |
| **REQ-07** | Search | Empty search input should be handled appropriately without causing an application error. | *Provided Requirement* |
| **REQ-08** | Search | Search should support valid combinations of words, such as product name, category, brand, or other supported search terms. | *Provided Requirement* |
| **REQ-09** | Payment | A user can complete payment successfully using a supported payment method. | *Provided Requirement* |
| **REQ-10** | Payment | A failed payment must not incorrectly create a successful order. | *Provided Requirement* |
| **REQ-11** | Payment | If payment is interrupted or cancelled, the transaction/order status must be handled correctly. | *Provided Requirement* |
| **REQ-12** | Payment | A successful payment should result in the appropriate order/payment status. | *Provided Requirement* |
| **REQ-13** | Payment | The system should prevent duplicate order/payment creation when the user retries or refreshes after a transaction. | *Provided Requirement* |

---

## 5. Test Strategy
A risk-based, requirement-driven manual testing methodology is employed:
* **Requirement-Based Verification**: Direct 1:1 mapping of test scenarios to REQ-01 through REQ-13.
* **Fintech & Payment Risk Focus**: Specialized scrutiny on payment status transitions (`Initiated` → `Pending` → `Success`/`Failure`), order state integrity, idempotent transaction IDs, and webhook/polling synchronization.
* **Exploratory & Edge-Case Testing**: Simulating real-world disruptions (network throttling, page reload during bank redirection, dual-tab checkout).
* **Defect Isolation**: Utilizing Chrome DevTools (Network tab HTTP status codes, payload inspection, Console error logs) and Postman for API transaction inspection.

---

## 6. Test Types

* **Functional Testing**: Verifying that features operate strictly according to acceptance criteria.
* **Negative & Boundary Testing**: Testing invalid inputs, empty states, expired credentials, and payment declines.
* **Integration Testing**: Verifying data handshakes between Myntra checkout, payment aggregators (e.g., Razorpay/PayU/Juspay), and order management.
* **End-to-End (E2E) Transaction Testing**: Traversing the full user journey: Login → Search → Add to Bag → Checkout → Payment → Order Confirmation.
* **Cross-Browser & Responsive Testing**: Chrome (latest), Mozilla Firefox, Apple Safari, and Edge on Desktop; Safari and Chrome on Mobile Viewport.
* **Interruption & Resiliency Testing**: Testing browser back, refresh, network disconnection, and tab closure during the payment critical window.

---

## 7. Test Scenarios Overview
A total of **38 comprehensive test scenarios** are detailed across Login (8), Product Search (10), Payment Gateway (14), and End-to-End User Journeys (6).

---

## 8. Requirement Coverage Matrix

| Requirement ID | Requirement Summary | Test Scenario ID | Test Type | Priority | Expected Outcome |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **REQ-01** | Valid user authentication | `TC_LOG_01` | Positive Functional | High (P1) | User successfully authenticates, session created, redirected to homepage/dashboard. |
| **REQ-02** | Invalid credentials rejection | `TC_LOG_02`, `TC_LOG_03` | Negative Functional | High (P1) | Authentication rejected, clear error displayed, user remains unauthenticated. |
| **REQ-03** | Empty field validation | `TC_LOG_04` | Boundary / Negative | Medium (P2) | Inline validation triggers on empty email/password; form submission blocked. |
| **REQ-04** | Logout & session termination | `TC_LOG_05`, `TC_LOG_06` | Functional / Security | High (P1) | Session cleared, authenticated pages inaccessible via browser back button. |
| **REQ-05** | Valid product search | `TC_SRC_01`, `TC_SRC_02` | Positive Functional | High (P1) | Search results grid displays relevant product cards matching search query. |
| **REQ-06** | Unavailable/invalid search keyword | `TC_SRC_04`, `TC_SRC_05` | Negative / Edge Case | Medium (P2) | Zero-results screen with clear messaging ("We couldn't find any matches"); no crash. |
| **REQ-07** | Empty search handling | `TC_SRC_06` | Boundary | Medium (P2) | Empty search either remains on current page or prompts user to enter text; no 500 error. |
| **REQ-08** | Multi-keyword combinations | `TC_SRC_03`, `TC_SRC_07` | Positive Functional | High (P1) | Results correctly filtered by Brand + Category + Gender attributes. |
| **REQ-09** | Successful payment completion | `TC_PAY_01`, `TC_PAY_02`, `TC_PAY_03`, `TC_PAY_04` | Positive Integration | Critical (P0) | Payment gateway captures funds, returns success token, order confirmed. |
| **REQ-10** | Failed payment order isolation | `TC_PAY_05`, `TC_PAY_06` | Negative Integration | Critical (P0) | Payment decline triggers retry option; no confirmed order placed; cart intact. |
| **REQ-11** | Interrupted/cancelled payment | `TC_PAY_07`, `TC_PAY_08`, `TC_PAY_09` | Interruption / Recovery | Critical (P0) | Order marked 'Payment Pending' or 'Cancelled'; no false confirmation. |
| **REQ-12** | Status synchronization | `TC_PAY_10`, `TC_PAY_11` | End-to-End / Data Integrity | Critical (P0) | Payment state ('SUCCESS') and Order state ('CONFIRMED') match 100%. |
| **REQ-13** | Duplicate payment prevention | `TC_PAY_12`, `TC_PAY_13` | Resiliency / Edge Case | Critical (P0) | Double-click or refresh produces idempotent request; single transaction billed. |

---

## 9. Login Test Scenarios (Email + Password Focus)

| Scenario ID | Test Scenario Description | Preconditions | Test Steps | Expected Result | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `TC_LOG_01` | Verify successful login with registered email and valid password | User has registered Myntra account with verified email | 1. Navigate to Login page.<br>2. Enter registered email.<br>3. Enter valid password.<br>4. Click Login. | User is logged in, profile icon displays username, redirected to destination. | P1 |
| `TC_LOG_02` | Verify login failure with registered email and incorrect password | Registered account exists | 1. Enter valid email.<br>2. Enter wrong password.<br>3. Click Login. | Login fails; message displayed: *"Incorrect password"* or generic auth error; password cleared. | P1 |
| `TC_LOG_03` | Verify login with non-existent / unregistered email | Email address not in database | 1. Enter unregistered email `fake_myntra_test@domain.com`.<br>2. Enter dummy password.<br>3. Click Login. | Error message displayed indicating account not found or prompt to sign up. | P1 |
| `TC_LOG_04` | Verify form validation when email and password fields are submitted empty | On Login page | 1. Leave email empty.<br>2. Leave password empty.<br>3. Click Submit/Login. | Validation indicators displayed on both fields; form submission blocked. | P2 |
| `TC_LOG_05` | Verify user logout and session invalidation | User is logged in | 1. Hover on Profile.<br>2. Click Logout.<br>3. Observe state. | User logged out; profile icon resets to default; auth cookies/tokens removed. | P1 |
| `TC_LOG_06` | Verify security boundary when navigating back after logout | User logged out | 1. Log out successfully.<br>2. Click Browser Back button. | Authenticated views (Orders/Wishlist) do not display cached sensitive data; redirects to login. | P1 |
| `TC_LOG_07` | Verify password masking and toggle visibility | On Login page | 1. Type password `SecurePass123`.<br>2. Inspect masking.<br>3. Click 'Show' icon. | Text is masked as bullets by default; reveals plaintext when toggled. | P3 |
| `TC_LOG_08` | Verify multiple consecutive failed login attempts | Registered account | 1. Enter valid email.<br>2. Enter incorrect password 5 consecutive times. | System triggers CAPTCHA or temporary account lockout with clear alert. | P2 |

---

## 10. Product Search Test Scenarios

| Scenario ID | Test Scenario Description | Test Input | Expected Result | Priority |
| :--- | :--- | :--- | :--- | :--- |
| `TC_SRC_01` | Single valid keyword search | `"Shoes"` | Grid displays relevant footwear products; breadcrumb reflects "Shoes". | P1 |
| `TC_SRC_02` | Brand-specific search | `"Nike"` | All top results belong to Brand = Nike; brand filter auto-selected. | P1 |
| `TC_SRC_03` | Multi-attribute search (Brand + Gender + Category) | `"Puma Men Running Shoes"` | Results strictly match all three attributes; relevant filters applied. | P1 |
| `TC_SRC_04` | Random non-existent keyword | `"xyzabcpqr123499"` | Zero results page: *"We couldn't find any matches!"* with suggestions. | P2 |
| `TC_SRC_05` | Special characters input | `"!@#$%^&*()_+{}[]"` | Handled sanitarily without 500 server error; shows zero results or ignores symbols. | P2 |
| `TC_SRC_06` | Empty search submission | `""` (Empty string + Enter) | Focus remains in search bar or retains current page; no application crash. | P2 |
| `TC_SRC_07` | Search with leading and trailing whitespaces | `"   Casual Shirts   "` | Whitespaces trimmed; results match "Casual Shirts". | P2 |
| `TC_SRC_08` | Case-insensitive search validation | `"jeans"` vs `"JEANS"` vs `"JeAnS"` | Identical count and list of search results returned across all case variations. | P3 |
| `TC_SRC_09` | Auto-complete suggestion selection | Type `"Kurt"` → click `"Kurta Men"` | Directs straight to the selected auto-suggestion results page. | P2 |
| `TC_SRC_10` | Extremely long search query (Boundary) | 250+ character string | Input capped or truncated gracefully; returns zero results without breaking layout. | P3 |

---

## 11. Payment Gateway Test Scenarios (Full Suite)

### Detailed Payment State Transition Table

| Scenario ID | Scenario | Payment State | Expected Order State | Expected Payment State | Risk / Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `TC_PAY_01` | UPI Intent / QR Payment Success | Gateway Captured | `CONFIRMED` | `CAPTURED / SUCCESS` | High (P0) |
| `TC_PAY_02` | Credit/Debit Card with 3D Secure OTP Success | Bank Approved & Captured | `CONFIRMED` | `CAPTURED / SUCCESS` | High (P0) |
| `TC_PAY_03` | NetBanking Authentication & Debit Success | Bank Settlement Received | `CONFIRMED` | `CAPTURED / SUCCESS` | High (P0) |
| `TC_PAY_04` | Digital Wallet (Paytm/AmazonPay) Debit Success | Wallet Deducted | `CONFIRMED` | `CAPTURED / SUCCESS` | High (P0) |
| `TC_PAY_05` | Card Declined due to Insufficient Funds / Invalid CVV | Declined / Refused | `PAYMENT_FAILED` | `FAILED` | High (P0) |
| `TC_PAY_06` | Incorrect OTP entered on 3D Secure Page | OTP Failed | `PAYMENT_FAILED` | `FAILED` | High (P0) |
| `TC_PAY_07` | User Clicks "Cancel" on Payment Gateway Screen | User Cancelled | `CANCELLED` | `CANCELLED` | Critical (P0) |
| `TC_PAY_08` | Payment Gateway Timeout (No response within 300s) | Gateway Expired | `EXPIRED / FAILED` | `TIMEOUT` | Critical (P0) |
| `TC_PAY_09` | Network Interruption during 3D Secure processing | Incomplete / Dropped | `PAYMENT_PENDING` | `UNKNOWN / PENDING` | Critical (P0) |
| `TC_PAY_10` | Money debited from user account but Gateway webhook delayed | Delayed Settlement | `PENDING_VERIFICATION` | `PENDING` | Critical (P0) |
| `TC_PAY_11` | Payment Retry after initial failure | Declined then Approved | `CONFIRMED` | `SUCCESS` | High (P1) |
| `TC_PAY_12` | Double-click on "Pay Now" button | Idempotent Check | `CONFIRMED` (Single) | `CAPTURED` (Single) | Critical (P0) |
| `TC_PAY_13` | Browser Refresh (F5) during payment processing | Page Reloaded | Retains state / prompts avoid reload | Handled idempotently | Critical (P0) |
| `TC_PAY_14` | Post-purchase immediate order cancellation (Refund flow) | Initiated Refund | `CANCELLED` | `REFUND_INITIATED` | High (P1) |

---

## 12. End-to-End (E2E) Transaction Scenarios

* **`TC_E2E_01` — Happy Path Purchase Flow (UPI)**:
  1. Log in with registered email/password.
  2. Search for `"Formal Socks"` (low-value item).
  3. Select product, select size, click "Add to Bag".
  4. Proceed to Bag → Proceed to Checkout.
  5. Select existing delivery address.
  6. Choose UPI payment method → Complete transaction.
  7. **Verification**: Order confirmation page renders with Order ID; SMS/email confirmation received; payment debited once.
  8. Trigger immediate post-order cancellation to initiate refund.

* **`TC_E2E_02` — Payment Failure & Successful Retry Flow**:
  1. Add product to Bag and proceed to Payment.
  2. Choose Card payment; enter test card with incorrect expiry date/OTP.
  3. Observe Payment Failure page: *"Your payment could not be processed"*.
  4. Verify Shopping Bag remains intact with items reserved.
  5. Click "Retry Payment" → Select UPI → Complete transaction successfully.
  6. **Verification**: Single order created; only second transaction billed.

* **`TC_E2E_03` — User Aborts at Gateway**:
  1. Navigate to Payment screen with cart total.
  2. Select NetBanking (SBI / HDFC) → Redirect to bank landing page.
  3. Click "Cancel & Return to Merchant".
  4. **Verification**: Redirected back to Myntra Payment options; clear alert displayed; cart items preserved; no confirmed order placed.

---

## 13. Test Data Strategy

> [!CAUTION]
> **Production Safety Protocols**: Because live production was selected for exploratory/smoke verification, testing must be restricted to low-value items (< ₹150) that have eligible instant-cancellation and refund policies.

* **User Accounts**: Pre-registered test user account with verified email address and pre-configured shipping address.
* **Search Terms**:
  * Positive: `"Roadster T-Shirt"`, `"Shoes"`, `"Puma Black Bag"`.
  * Negative: `"nonexistentitem9999"`, `"><script>alert(1)</script>"`.
* **Payment Inputs**:
  * Live personal UPI ID / Card enabled for small transactions.
  * Exact simulated decline inputs for testing front-end validation (e.g., 15-digit card number, past expiry date).

---

## 14. Test Environment Specification

* **Target URL**: [https://www.myntra.com/](https://www.myntra.com/)
* **Environment Tier**: Live Production (Exploratory / Smoke Mode)
* **Client Configurations**:
  * Desktop: Chrome 122+ (macOS Sonoma / Windows 11), Safari 17+.
  * DevTools: Network throttling set to "Slow 3G" for timeout and interruption tests.
* **Missing Prerequisites (Requiring Product Confirmation)**:
  * Internal payment gateway merchant sandbox credentials (not provided).
  * Direct access to order management and payment reconciliation databases (not provided).
  * Backend API swagger/Postman collections for direct order query (not provided).

---

## 15. Entry Criteria

* Target production URL [myntra.com](https://www.myntra.com/) is live and operational (HTTP 200).
* Test user account credentials (Email & Password) are active and verified.
* Test device has internet access and latest versions of Google Chrome and Safari installed.
* Test payment method with nominal balance (low-value verification) is prepared.
* Jira test repository / defect tracking board is initialized.

---

## 16. Exit Criteria

* 100% of planned in-scope test scenarios (`TC_LOG_01` through `TC_LOG_08`, `TC_SRC_01` through `TC_SRC_10`, `TC_PAY_01` through `TC_PAY_14`) are executed and logged.
* Zero unresolved Critical (P0) or High (P1) defects related to data corruption, duplicate charges, or session hijacking.
* All low-value test orders are successfully cancelled and verified in `REFUND_INITIATED` status.
* Requirement traceability matrix shows 100% test coverage against REQ-01 through REQ-13.
* Final QA Test Summary Report submitted to stakeholders.

---

## 17. Risks and Dependencies

| Risk Item | Impact | Likelihood | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **Testing in Production Environment** | High | High | Restrict transactions to lowest available price points; cancel order immediately post-verification to ensure instant refund. |
| **OTP/CAPTCHA Interception on Live Web** | Medium | High | Use registered test accounts with pre-authenticated sessions or manual OTP entry by tester. |
| **Payment Gateway Webhook Delays** | High | Medium | Allow up to 15-minute polling window before logging false positive status mismatch defects. |
| **Absence of Backend Database Access** | Medium | High | Validate order and transaction status through UI Order Details and browser Network DevTools response payloads. |

---

## 18. Assumptions

1. The live Myntra platform supports standard Email + Password authentication for existing users with established passwords.
2. Orders placed on live production can be cancelled within 10 minutes of placement for a 100% refund to the original payment source.
3. The browser DevTools Network tab accurately captures REST API payloads exchanged with Myntra checkout microservices.
4. Third-party payment gateways comply with standard RBI 2-factor authentication guidelines.

---

## 19. Defect Management Workflow

* **Tool**: Jira Software
* **Defect Classification**:
  * **Critical (Blocker - P0)**: Duplicate payment deduction, security breach, application crash on payment redirection, order created on failed payment.
  * **Major (P1)**: Valid search returns 500 error, valid login fails, payment retry button broken.
  * **Minor (P2)**: UI alignment flaw on payment method list, typo in error message, search suggestion lag.
* **Defect Life Cycle**: `New` → `Open` → `In Progress` → `Fixed` → `Retested` → `Closed`.
* **Required Evidence**: Exact Steps to Reproduce, Expected vs Actual Behavior, Network tab HAR file or screenshot, Console log dump.

---

## 20. Deliverables

1. **Test Plan Document**: [`Rice_Pot_Myntra_QA_TestPlan.md`](file:///Users/sridevi/Documents/Pwl/00_Chapter_Prompt_Eng/TestPlan/Rice_Pot_Myntra_QA_TestPlan.md) (this document).
2. **Requirement Traceability Matrix (RTM)**: Mapped in Section 8.
3. **Execution Test Run Log**: Documenting status of each test case once executed.
4. **Jira Defect Log**: Listing any identified bugs with logs and evidence.
5. **QA Sign-Off Summary Report**: Delivered upon meeting all Exit Criteria.
