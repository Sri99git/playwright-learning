# JavaScript Keywords and Identifiers — Simple Understanding

## One-line idea

**Keywords** are words JavaScript already owns; **identifiers** are names *you* create for your own things (variables, functions, etc.).

## The analogy — think of a country's laws vs. names

- **Keywords** are like **traffic signs** — they have a fixed, reserved meaning. You can't rename a "STOP" sign to mean something else; it always means stop.
- **Identifiers** are like **names of people** — you choose them, but there are a few rules (you can't name a child "123", for example).
- JavaScript is the **government** that decides which words are reserved and which naming rules are allowed.

## What is an identifier?

An **identifier** is simply a name you give to things you create in your code:

- Variables → `let age = 25;`
- Functions → `function greet() { ... }`
- Constants → `const PI = 3.14;`

### The 5 rules for naming identifiers

1. Must start with a **letter** (`a`–`z`, `A`–`Z`), **underscore** (`_`), or **dollar sign** (`$`).
2. The rest can be **letters, digits (0–9), underscore, or dollar sign**.
3. Cannot start with a **digit**.
4. Cannot be a **reserved word** (keyword).
5. Cannot contain **spaces** or special characters like `-`, `@`, `#`, `.` etc.

### Valid vs invalid examples

```js
// ✅ Valid identifiers
let name = "Alice";
let age = 30;
let _private = "hidden";
let $price = 100;
let firstName = "John";     // camelCase is the JS convention

// ❌ Invalid identifiers
let 1name = "nope";         // starts with a digit
let first-name = "nope";    // contains a hyphen
let first name = "nope";    // contains a space
let my@email = "nope";      // contains a special character
```

### Case sensitivity

Identifiers are **case-sensitive**: `name`, `Name`, and `NAME` are three different things.

```js
let name = "Alice";
let Name = "Bob";
let NAME = "Carol";

console.log(name); // "Alice"
console.log(Name); // "Bob"
console.log(NAME); // "Carol"
```

### Good naming habits

- Use **camelCase** for variables and functions → `firstName`, `getUserById`.
- Use **PascalCase** for classes → `UserAccount`.
- Use **UPPER_SNAKE_CASE** for constants → `MAX_RETRIES`.
- Make names **meaningful** — `totalPrice` is better than `x`.

## What is a keyword?

A **keyword** is a word that JavaScript has reserved for its own syntax. You **cannot** use it as an identifier.

### Common keywords you'll use daily

| Keyword | What it does |
| --- | --- |
| `let` / `const` / `var` | Declare variables |
| `if` / `else` | Make decisions |
| `for` / `while` / `do` | Create loops |
| `function` | Define a function |
| `return` | Send a value back from a function |
| `class` | Define a class |
| `new` | Create an object from a class |
| `import` / `export` | Share code between files |
| `try` / `catch` / `finally` | Handle errors |
| `typeof` | Check the type of a value |
| `this` | Refer to the current object |
| `true` / `false` / `null` | Literal values (also reserved) |

### The full keyword list

```js
break      case       catch      class      const      continue
debugger   default    delete     do         else       export
extends    false      finally    for        function   if
import     in         instanceof let        new        null
return     super      switch     this       throw      true
try        typeof     var        void       while      with
yield
```

> `true`, `false`, and `null` are technically **literals**, not keywords, but they are reserved — you still can't use them as names.

### Why this trips people up

```js
let class = "math";   // ❌ SyntaxError — `class` is a keyword
let new = 10;         // ❌ SyntaxError — `new` is a keyword
let return = true;    // ❌ SyntaxError — `return` is a keyword

// But these are fine — `class` is not part of the name
let className = "math";
let newUser = "Alice";
```

## Keywords vs identifiers — side by side

| | Keyword | Identifier |
| --- | --- | --- |
| **Who creates it?** | JavaScript (fixed) | You (your choice) |
| **Can it be renamed?** | No | Yes |
| **Meaning** | Fixed, built-in | Whatever you define |
| **Example** | `let`, `if`, `function` | `age`, `greet`, `totalPrice` |

## Why this matters for Playwright

- You write identifiers constantly in test code: locators like `const loginButton = page.locator("#login");` — if you accidentally name one `delete`, `new`, or `return`, the test file fails before it even runs.
- Picking clear, consistent names (`submitButton`, `errorMessage`) makes your tests readable and easier to debug when a selector breaks.
- Understanding `const` (won't change) vs `let` (can change) helps you write stable, predictable test scripts.