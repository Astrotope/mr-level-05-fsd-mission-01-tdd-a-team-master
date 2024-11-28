## (1) ToDo Test Suites Created and Passing...

```bash
npm test

> feature-api-03@0.0.1 test
> jest

 PASS  ./api-03.test.js
  Turners Car Auctions - Insurance API Upgrade (Main Use Case and Valid Inputs)
    ✎ todo Main use case, valid inputs
    ✎ todo Maximum risk rating
    ✎ todo Valid input, string car_value with '$'
    ✎ todo car_value as string without '$'
    ✎ todo Risk rating as decimal value
    ✎ todo car_value as float string with '$'
    ✎ todo Valid input, no formatting
    ✎ todo Valid input with whitespace
  Turners Car Auctions - Insurance API Upgrade (Invalid Inputs and Edge Cases)
    ✎ todo Edge case, risk_rating = 0
    ✎ todo Edge case, risk_rating = 6
    ✎ todo Invalid JSON (semi-colons instead of commas)
    ✎ todo Non-numeric car_value
    ✎ todo Non-numeric risk_rating
    ✎ todo Negative car_value
    ✎ todo Ensure error message specifies risk_rating issue
    ✎ todo Ensure error message specifies car_value issue
    ✎ todo Zero risk_rating
    ✎ todo Negative risk_rating
    ✎ todo Missing car_value
    ✎ todo Missing risk_rating
    ✎ todo Empty JSON input
    ✎ todo car_value as negative string
  Turners Car Auctions - Insurance API Upgrade (Boundary Testing)
    ✎ todo car_value = 0
    ✎ todo Smallest possible valid inputs
    ✎ todo Edge case, very large car_value
    ✎ todo Largest valid inputs
    ✎ todo Boundary condition for rounding up
  Turners Car Auctions - Insurance API Upgrade (Rounding and Format Testing)
    ✎ todo Rounding check, half-to-even (bankers' rounding)
    ✎ todo Rounding check, exact half
    ✎ todo Check rounding differences in last month
    ✎ todo Ensure rounding up for consistency
    ✎ todo Fractional car_value
  Turners Car Auctions - Insurance API Upgrade (Large Input and Formatting)
    ✎ todo Edge case, very large car_value
    ✎ todo Testing large strings (quotes removed)
  Turners Car Auctions - Insurance API Upgrade (Miscellaneous Tests)
    ✎ todo Testing negative car_value format
    ✎ todo Empty string for risk_rating

Test Suites: 1 passed, 1 total
Tests:       36 todo, 36 total
Snapshots:   0 total
Time:        0.498 s
Ran all test suites.
```

## (2) First test case written and fails.

```bash
> jest

 FAIL  ./api-03.test.js
  Turners Car Auctions - Insurance API Upgrade (Main Use Case and Valid Inputs)
    ✕ Main use case, valid inputs (1 ms)
    ✎ todo Maximum risk rating
    ✎ todo Valid input, string car_value with '$'
    ✎ todo car_value as string without '$'
    ✎ todo Risk rating as decimal value
    ✎ todo car_value as float string with '$'
    ✎ todo Valid input, no formatting
    ✎ todo Valid input with whitespace
  Turners Car Auctions - Insurance API Upgrade (Invalid Inputs and Edge Cases)
    ✎ todo Edge case, risk_rating = 0
    ✎ todo Edge case, risk_rating = 6
    ✎ todo Invalid JSON (semi-colons instead of commas)
    ✎ todo Non-numeric car_value
    ✎ todo Non-numeric risk_rating
    ✎ todo Negative car_value
    ✎ todo Ensure error message specifies risk_rating issue
    ✎ todo Ensure error message specifies car_value issue
    ✎ todo Zero risk_rating
    ✎ todo Negative risk_rating
    ✎ todo Missing car_value
    ✎ todo Missing risk_rating
    ✎ todo Empty JSON input
    ✎ todo car_value as negative string
  Turners Car Auctions - Insurance API Upgrade (Boundary Testing)
    ✎ todo car_value = 0
    ✎ todo Smallest possible valid inputs
    ✎ todo Edge case, very large car_value
    ✎ todo Largest valid inputs
    ✎ todo Boundary condition for rounding up
  Turners Car Auctions - Insurance API Upgrade (Rounding and Format Testing)
    ✎ todo Rounding check, half-to-even (bankers' rounding)
    ✎ todo Rounding check, exact half
    ✎ todo Check rounding differences in last month
    ✎ todo Ensure rounding up for consistency
    ✎ todo Fractional car_value
  Turners Car Auctions - Insurance API Upgrade (Large Input and Formatting)
    ✎ todo Edge case, very large car_value
    ✎ todo Testing large strings (quotes removed)
  Turners Car Auctions - Insurance API Upgrade (Miscellaneous Tests)
    ✎ todo Testing negative car_value format
    ✎ todo Empty string for risk_rating

  ● Turners Car Auctions - Insurance API Upgrade (Main Use Case and Valid Inputs) › Main use case, valid inputs

    ReferenceError: generateQuote is not defined

       6 |     const input = { car_value: 6614, risk_rating: 5 };
       7 |     const expectedOutput = { monthly_premium: 27.5, yearly_premium: 330.0 };
    >  8 |     const result = generateQuote(input);
         |                    ^
       9 |     expect(result).toEqual(expectedOutput);
      10 |   });
      11 |

      at Object.generateQuote (api-03.test.js:8:20)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 35 todo, 36 total
Snapshots:   0 total
Time:        0.858 s, estimated 1 s
Ran all test suites.
```

## (3) Wrote function shell for api-03.js that returns null. Test fails as expected.

```bash
npm test                                                                                                                                                                                             ─╯

> feature-api-03@0.0.1 test
> jest

 FAIL  ./api-03.test.js
  Turners Car Auctions - Insurance API Upgrade (Main Use Case and Valid Inputs)
    ✕ Main use case, valid inputs (6 ms)
    ✎ todo Maximum risk rating
    ✎ todo Valid input, string car_value with '$'
    ✎ todo car_value as string without '$'
    ✎ todo Risk rating as decimal value
    ✎ todo car_value as float string with '$'
    ✎ todo Valid input, no formatting
    ✎ todo Valid input with whitespace
  Turners Car Auctions - Insurance API Upgrade (Invalid Inputs and Edge Cases)
    ✎ todo Edge case, risk_rating = 0
    ✎ todo Edge case, risk_rating = 6
    ✎ todo Invalid JSON (semi-colons instead of commas)
    ✎ todo Non-numeric car_value
    ✎ todo Non-numeric risk_rating
    ✎ todo Negative car_value
    ✎ todo Ensure error message specifies risk_rating issue
    ✎ todo Ensure error message specifies car_value issue
    ✎ todo Zero risk_rating
    ✎ todo Negative risk_rating
    ✎ todo Missing car_value
    ✎ todo Missing risk_rating
    ✎ todo Empty JSON input
    ✎ todo car_value as negative string
  Turners Car Auctions - Insurance API Upgrade (Boundary Testing)
    ✎ todo car_value = 0
    ✎ todo Smallest possible valid inputs
    ✎ todo Edge case, very large car_value
    ✎ todo Largest valid inputs
    ✎ todo Boundary condition for rounding up
  Turners Car Auctions - Insurance API Upgrade (Rounding and Format Testing)
    ✎ todo Rounding check, half-to-even (bankers' rounding)
    ✎ todo Rounding check, exact half
    ✎ todo Check rounding differences in last month
    ✎ todo Ensure rounding up for consistency
    ✎ todo Fractional car_value
  Turners Car Auctions - Insurance API Upgrade (Large Input and Formatting)
    ✎ todo Edge case, very large car_value
    ✎ todo Testing large strings (quotes removed)
  Turners Car Auctions - Insurance API Upgrade (Miscellaneous Tests)
    ✎ todo Testing negative car_value format
    ✎ todo Empty string for risk_rating

  ● Turners Car Auctions - Insurance API Upgrade (Main Use Case and Valid Inputs) › Main use case, valid inputs

    expect(received).toEqual(expected) // deep equality

    - Expected  - 2
    + Received  + 2

      Object {
    -   "monthly_premium": 27.5,
    -   "yearly_premium": 330,
    +   "monthly_premium": null,
    +   "yearly_premium": null,
      }

       9 |     const expectedOutput = { monthly_premium: 27.5, yearly_premium: 330.0 };
      10 |     const result = generateQuote(input);
    > 11 |     expect(result).toEqual(expectedOutput);
         |                    ^
      12 |   });
      13 |
      14 |   // Test case #3 - Maximum risk rating

      at Object.toEqual (api-03.test.js:11:20)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 35 todo, 36 total
Snapshots:   0 total
Time:        0.898 s, estimated 1 s
Ran all test suites.
```

## (4) With business logic implemented for generateQuote(), test fails due to rounding differences.

```bash
npm test                                                                                                                                                                                             ─╯

> feature-api-03@0.0.1 test
> jest

 FAIL  ./api-03.test.js
  Turners Car Auctions - Insurance API Upgrade (Main Use Case and Valid Inputs)
    ✕ Main use case, valid inputs (7 ms)
    ✎ todo Maximum risk rating
    ✎ todo Valid input, string car_value with '$'
    ✎ todo car_value as string without '$'
    ✎ todo Risk rating as decimal value
    ✎ todo car_value as float string with '$'
    ✎ todo Valid input, no formatting
    ✎ todo Valid input with whitespace
  Turners Car Auctions - Insurance API Upgrade (Invalid Inputs and Edge Cases)
    ✎ todo Edge case, risk_rating = 0
    ✎ todo Edge case, risk_rating = 6
    ✎ todo Invalid JSON (semi-colons instead of commas)
    ✎ todo Non-numeric car_value
    ✎ todo Non-numeric risk_rating
    ✎ todo Negative car_value
    ✎ todo Ensure error message specifies risk_rating issue
    ✎ todo Ensure error message specifies car_value issue
    ✎ todo Zero risk_rating
    ✎ todo Negative risk_rating
    ✎ todo Missing car_value
    ✎ todo Missing risk_rating
    ✎ todo Empty JSON input
    ✎ todo car_value as negative string
  Turners Car Auctions - Insurance API Upgrade (Boundary Testing)
    ✎ todo car_value = 0
    ✎ todo Smallest possible valid inputs
    ✎ todo Edge case, very large car_value
    ✎ todo Largest valid inputs
    ✎ todo Boundary condition for rounding up
  Turners Car Auctions - Insurance API Upgrade (Rounding and Format Testing)
    ✎ todo Rounding check, half-to-even (bankers' rounding)
    ✎ todo Rounding check, exact half
    ✎ todo Check rounding differences in last month
    ✎ todo Ensure rounding up for consistency
    ✎ todo Fractional car_value
  Turners Car Auctions - Insurance API Upgrade (Large Input and Formatting)
    ✎ todo Edge case, very large car_value
    ✎ todo Testing large strings (quotes removed)
  Turners Car Auctions - Insurance API Upgrade (Miscellaneous Tests)
    ✎ todo Testing negative car_value format
    ✎ todo Empty string for risk_rating

  ● Turners Car Auctions - Insurance API Upgrade (Main Use Case and Valid Inputs) › Main use case, valid inputs

    expect(received).toEqual(expected) // deep equality

    - Expected  - 2
    + Received  + 2

      Object {
    -   "monthly_premium": 27.5,
    -   "yearly_premium": 330,
    +   "monthly_premium": 27.558333333333334,
    +   "yearly_premium": 330.7,
      }

       9 |     const expectedOutput = { monthly_premium: 27.5, yearly_premium: 330.0 };
      10 |     const result = generateQuote(input);
    > 11 |     expect(result).toEqual(expectedOutput);
         |                    ^
      12 |   });
      13 |
      14 |   // Test case #3 - Maximum risk rating

      at Object.toEqual (api-03.test.js:11:20)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 35 todo, 36 total
Snapshots:   0 total
Time:        0.889 s, estimated 1 s
Ran all test suites.
```

## (5) Updated business logic to include rounding in api-03.js, and changed expected values to rounded values in api-03.test.js test case 1

```bash
npm test                                                                                                                                                                                             ─╯

> feature-api-03@0.0.1 test
> jest

 PASS  ./api-03.test.js
  Turners Car Auctions - Insurance API Upgrade (Main Use Case and Valid Inputs)
    ✓ Main use case, valid inputs (11 ms)
    ✎ todo Maximum risk rating
    ✎ todo Valid input, string car_value with '$'
    ✎ todo car_value as string without '$'
    ✎ todo Risk rating as decimal value
    ✎ todo car_value as float string with '$'
    ✎ todo Valid input, no formatting
    ✎ todo Valid input with whitespace
  Turners Car Auctions - Insurance API Upgrade (Invalid Inputs and Edge Cases)
    ✎ todo Edge case, risk_rating = 0
    ✎ todo Edge case, risk_rating = 6
    ✎ todo Invalid JSON (semi-colons instead of commas)
    ✎ todo Non-numeric car_value
    ✎ todo Non-numeric risk_rating
    ✎ todo Negative car_value
    ✎ todo Ensure error message specifies risk_rating issue
    ✎ todo Ensure error message specifies car_value issue
    ✎ todo Zero risk_rating
    ✎ todo Negative risk_rating
    ✎ todo Missing car_value
    ✎ todo Missing risk_rating
    ✎ todo Empty JSON input
    ✎ todo car_value as negative string
  Turners Car Auctions - Insurance API Upgrade (Boundary Testing)
    ✎ todo car_value = 0
    ✎ todo Smallest possible valid inputs
    ✎ todo Edge case, very large car_value
    ✎ todo Largest valid inputs
    ✎ todo Boundary condition for rounding up
  Turners Car Auctions - Insurance API Upgrade (Rounding and Format Testing)
    ✎ todo Rounding check, half-to-even (bankers' rounding)
    ✎ todo Rounding check, exact half
    ✎ todo Check rounding differences in last month
    ✎ todo Ensure rounding up for consistency
    ✎ todo Fractional car_value
  Turners Car Auctions - Insurance API Upgrade (Large Input and Formatting)
    ✎ todo Edge case, very large car_value
    ✎ todo Testing large strings (quotes removed)
  Turners Car Auctions - Insurance API Upgrade (Miscellaneous Tests)
    ✎ todo Testing negative car_value format
    ✎ todo Empty string for risk_rating

Test Suites: 1 passed, 1 total
Tests:       35 todo, 1 passed, 36 total
Snapshots:   0 total
Time:        2.798 s
Ran all test suites.
```

