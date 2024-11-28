# Test Cases for API_03


### Combined Test Cases (40 Total)

| **Test Case #** | **Purpose**                                      | **Input** (car_value, risk_rating)                     | **Expected Output** (monthly_premium, yearly_premium, or error)         |
|------------------|--------------------------------------------------|--------------------------------------------------------|-------------------------------------------------------------------------|
| 1                | Main use case, valid inputs                     | { "car_value": 6614, "risk_rating": 5 }                | { "monthly_premium": 27.50, "yearly_premium": 330.00 }                 |
| 2                | Minimum risk rating                             | { "car_value": 10000, "risk_rating": 1 }               | { "monthly_premium": 8.33, "yearly_premium": 100.00 }                  |
| 3                | Maximum risk rating                             | { "car_value": 20000, "risk_rating": 5 }               | { "monthly_premium": 83.33, "yearly_premium": 1000.00 }                |
| 4                | Edge case, risk_rating = 0                      | { "car_value": 15000, "risk_rating": 0 }               | { "error": "risk_rating was outside the allowed range of 1 through 5" }|
| 5                | Edge case, risk_rating = 6                      | { "car_value": 15000, "risk_rating": 6 }               | { "error": "risk_rating was outside the allowed range of 1 through 5" }|
| 6                | Invalid JSON (semi-colons instead of commas)    | { "car_value": 6614; "risk_rating": 5 }                | { "error": "Invalid JSON format" }                                     |
| 7                | Non-numeric car_value                           | { "car_value": "ten thousand", "risk_rating": 3 }      | { "error": "car_value must be a numeric value" }                       |
| 8                | Non-numeric risk_rating                         | { "car_value": 20000, "risk_rating": "high" }          | { "error": "risk_rating must be a numeric value" }                     |
| 9                | car_value = 0                                   | { "car_value": 0, "risk_rating": 3 }                   | { "monthly_premium": 0.00, "yearly_premium": 0.00 }                    |
| 10               | Negative car_value                              | { "car_value": -5000, "risk_rating": 2 }               | { "error": "car_value cannot be negative" }                            |
| 11               | Rounding check, half-to-even (bankers' rounding)| { "car_value": 1255, "risk_rating": 5 }                | { "monthly_premium": 5.23, "yearly_premium": 62.75 }                   |
| 12               | Rounding check, exact half                      | { "car_value": 2525, "risk_rating": 2 }                | { "monthly_premium": 4.21, "yearly_premium": 50.50 }                   |
| 13               | Valid input, string car_value with "$"          | { "car_value": "$6,614", "risk_rating": 5 }            | { "monthly_premium": 27.50, "yearly_premium": 330.00 }                 |
| 14               | Edge case, very large car_value                 | { "car_value": 1000000, "risk_rating": 5 }             | { "monthly_premium": 4166.67, "yearly_premium": 50000.00 }             |
| 15               | Risk rating as decimal value                    | { "car_value": 10000, "risk_rating": 1.5 }             | { "monthly_premium": 12.50, "yearly_premium": 150.00 }                 |
| 16               | Decimal car_value input                         | { "car_value": 15000.99, "risk_rating": 3 }            | { "monthly_premium": 37.50, "yearly_premium": 450.00 }                 |
| 17               | car_value as string without "$"                 | { "car_value": "6614", "risk_rating": 5 }              | { "monthly_premium": 27.50, "yearly_premium": 330.00 }                 |
| 18               | Ensure error message specifies risk_rating issue| { "car_value": 6614, "risk_rating": 10 }               | { "error": "risk_rating was outside the allowed range of 1 through 5" }|
| 19               | Ensure error message specifies car_value issue  | { "car_value": "invalid", "risk_rating": 5 }           | { "error": "car_value must be a numeric value" }                       |
| 20               | car_value as float string with "$"              | { "car_value": "$15000.99", "risk_rating": 4 }         | { "monthly_premium": 50.00, "yearly_premium": 600.00 }                 |
| 21               | Check rounding differences in last month        | { "car_value": 3333, "risk_rating": 3 }                | { "monthly_premium": 8.33 for 11 months, 8.37 last month }             |
| 22               | Ensure rounding up for consistency              | { "car_value": 10000, "risk_rating": 2 }               | { "monthly_premium": 16.67, "yearly_premium": 200.00 }                 |
| 23               | Smallest possible valid inputs                  | { "car_value": 1, "risk_rating": 1 }                   | { "monthly_premium": 0.01, "yearly_premium": 0.01 }                    |
| 24               | Largest valid inputs                            | { "car_value": 999999, "risk_rating": 5 }              | { "monthly_premium": 41666.67, "yearly_premium": 500000.00 }           |
| 25               | Input with extra unexpected field               | { "car_value": 5000, "risk_rating": 3, "extra": true } | { "monthly_premium": 12.50, "yearly_premium": 150.00 }                 |
| 26               | Invalid JSON format (missing quotes)            | { car_value: 5000, risk_rating: 3 }                    | { "error": "Invalid JSON format" }                                     |
| 27               | car_value as negative string                    | { "car_value": "-10000", "risk_rating": 2 }            | { "error": "car_value cannot be negative" }                            |
| 28               | Boundary condition for rounding up              | { "car_value": 12500, "risk_rating": 2 }               | { "monthly_premium": 20.83, "yearly_premium": 250.00 }                 |
| 29               | Zero risk_rating                                | { "car_value": 5000, "risk_rating": 0 }                | { "error": "risk_rating was outside the allowed range of 1 through 5" }|
| 30               | Fractional car_value                            | { "car_value": 1234.56, "risk_rating": 3 }             | { "monthly_premium": 3.09, "yearly_premium": 37.04 }                   |
| 31               | String risk_rating                              | { "car_value": 5000, "risk_rating": "3" }              | { "monthly_premium": 12.50, "yearly_premium": 150.00 }                 |
| 32               | Negative risk_rating                            | { "car_value": 5000, "risk_rating": -3 }               | { "error": "risk_rating was outside the allowed range of 1 through 5" }|
| 33               | Missing car_value                               | { "risk_rating": 3 }                                   | { "error": "car_value is required" }                                   |
| 34               | Missing risk_rating                             | { "car_value": 5000 }                                  | { "error": "risk_rating is required" }                                 |
| 35               | Empty JSON input                                | { }                                                    | { "error": "car_value and risk_rating are required" }                  |
| 36               | Rounding check for large values                 | { "car_value": 123456, "risk_rating": 5 }              | { "monthly_premium": 5140.00, "yearly_premium": 61680.00 }             |
| 37               | Large input with formatting                     | { "car_value": "$1,234,567", "risk_rating": 4 }        | { "monthly_premium": 41152.23, "yearly_premium": 493826.67 }           |
| 38               | Valid input, no formatting                      | { "car_value": 6614, "risk_rating": 3 }                | { "monthly_premium": 16.54, "yearly_premium": 198.50 }                 |
| 39               | Risk rating edge: decimal 1.1                   | { "car_value": 10000, "risk_rating": 1.1 }             | { "monthly_premium": 9.17, "yearly_premium": 110.00 }                  |
| 40               | Valid input with whitespace                     | { "car_value": " 6614 ", "risk_rating": 3 }            | { "monthly_premium": 16.54, "yearly_premium": 198.50 }                 |

---

### Test Cases by Category

### **1. Main Use Case and Valid Inputs**

| **Test Case #** | **Purpose**                                      | **Input** (car_value, risk_rating)                     | **Expected Output** (monthly_premium, yearly_premium, or error)         |
|------------------|--------------------------------------------------|--------------------------------------------------------|-------------------------------------------------------------------------|
| 1                | Main use case, valid inputs                     | { "car_value": 6614, "risk_rating": 5 }                | { "monthly_premium": 27.50, "yearly_premium": 330.00 }                 |
| 3                | Maximum risk rating                             | { "car_value": 20000, "risk_rating": 5 }               | { "monthly_premium": 83.33, "yearly_premium": 1000.00 }                |
| 13               | Valid input, string car_value with "$"          | { "car_value": "$6,614", "risk_rating": 5 }            | { "monthly_premium": 27.50, "yearly_premium": 330.00 }                 |
| 17               | car_value as string without "$"                 | { "car_value": "6614", "risk_rating": 5 }              | { "monthly_premium": 27.50, "yearly_premium": 330.00 }                 |
| 15               | Risk rating as decimal value                    | { "car_value": 10000, "risk_rating": 1.5 }             | { "monthly_premium": 12.50, "yearly_premium": 150.00 }                 |
| 20               | car_value as float string with "$"              | { "car_value": "$15000.99", "risk_rating": 4 }         | { "monthly_premium": 50.00, "yearly_premium": 600.00 }                 |
| 38               | Valid input, no formatting                      | { "car_value": 6614, "risk_rating": 3 }                | { "monthly_premium": 16.54, "yearly_premium": 198.50 }                 |
| 40               | Valid input with whitespace                     | { "car_value": " 6614 ", "risk_rating": 3 }            | { "monthly_premium": 16.54, "yearly_premium": 198.50 }                 |

---

### **2. Invalid Inputs and Edge Cases**

| **Test Case #** | **Purpose**                                      | **Input** (car_value, risk_rating)                     | **Expected Output** (monthly_premium, yearly_premium, or error)         |
|------------------|--------------------------------------------------|--------------------------------------------------------|-------------------------------------------------------------------------|
| 4                | Edge case, risk_rating = 0                      | { "car_value": 15000, "risk_rating": 0 }               | { "error": "risk_rating was outside the allowed range of 1 through 5" }|
| 5                | Edge case, risk_rating = 6                      | { "car_value": 15000, "risk_rating": 6 }               | { "error": "risk_rating was outside the allowed range of 1 through 5" }|
| 6                | Invalid JSON (semi-colons instead of commas)    | { "car_value": 6614; "risk_rating": 5 }                | { "error": "Invalid JSON format" }                                     |
| 7                | Non-numeric car_value                           | { "car_value": "ten thousand", "risk_rating": 3 }      | { "error": "car_value must be a numeric value" }                       |
| 8                | Non-numeric risk_rating                         | { "car_value": 20000, "risk_rating": "high" }          | { "error": "risk_rating must be a numeric value" }                     |
| 10               | Negative car_value                              | { "car_value": -5000, "risk_rating": 2 }               | { "error": "car_value cannot be negative" }                            |
| 18               | Ensure error message specifies risk_rating issue| { "car_value": 6614, "risk_rating": 10 }               | { "error": "risk_rating was outside the allowed range of 1 through 5" }|
| 19               | Ensure error message specifies car_value issue  | { "car_value": "invalid", "risk_rating": 5 }           | { "error": "car_value must be a numeric value" }                       |
| 29               | Zero risk_rating                                | { "car_value": 5000, "risk_rating": 0 }                | { "error": "risk_rating was outside the allowed range of 1 through 5" }|
| 32               | Negative risk_rating                            | { "car_value": 5000, "risk_rating": -3 }               | { "error": "risk_rating was outside the allowed range of 1 through 5" }|
| 33               | Missing car_value                               | { "risk_rating": 3 }                                   | { "error": "car_value is required" }                                   |
| 34               | Missing risk_rating                             | { "car_value": 5000 }                                  | { "error": "risk_rating is required" }                                 |
| 35               | Empty JSON input                                | { }                                                    | { "error": "car_value and risk_rating are required" }                  |
| 27               | car_value as negative string                    | { "car_value": "-10000", "risk_rating": 2 }            | { "error": "car_value cannot be negative" }                            |

---

### **3. Boundary Testing**

| **Test Case #** | **Purpose**                                      | **Input** (car_value, risk_rating)                     | **Expected Output** (monthly_premium, yearly_premium, or error)         |
|------------------|--------------------------------------------------|--------------------------------------------------------|-------------------------------------------------------------------------|
| 9                | car_value = 0                                   | { "car_value": 0, "risk_rating": 3 }                   | { "monthly_premium": 0.00, "yearly_premium": 0.00 }                    |
| 23               | Smallest possible valid inputs                  | { "car_value": 1, "risk_rating": 1 }                   | { "monthly_premium": 0.01, "yearly_premium": 0.01 }                    |
| 14               | Edge case, very large car_value                 | { "car_value": 1000000, "risk_rating": 5 }             | { "monthly_premium": 4166.67, "yearly_premium": 50000.00 }             |
| 24               | Largest valid inputs                            | { "car_value": 999999, "risk_rating": 5 }              | { "monthly_premium": 41666.67, "yearly_premium": 500000.00 }           |
| 28               | Boundary condition for rounding up              | { "car_value": 12500, "risk_rating": 2 }               | { "monthly_premium": 20.83, "yearly_premium": 250.00 }                 |
| 36               | Rounding check for large values                 | { "car_value": 123456, "risk_rating": 5 }              | { "monthly_premium": 5140.00, "yearly_premium": 61680.00 }             |

---

### **4. Rounding and Format Testing**

| **Test Case #** | **Purpose**                                      | **Input** (car_value, risk_rating)                     | **Expected Output** (monthly_premium, yearly_premium, or error)         |
|------------------|--------------------------------------------------|--------------------------------------------------------|-------------------------------------------------------------------------|
| 11               | Rounding check, half-to-even (bankers' rounding)| { "car_value": 1255, "risk_rating": 5 }                | { "monthly_premium": 5.23, "yearly_premium": 62.75 }                   |
| 12               | Rounding check, exact half                      | { "car_value": 2525, "risk_rating": 2 }                | { "monthly_premium": 4.21, "yearly_premium": 50.50 }                   |
| 21               | Check rounding differences in last month        | { "car_value": 3333, "risk_rating": 3 }                | { "monthly_premium": 8.33 for 11 months, 8.37 last month }             |
| 22               | Ensure rounding up for consistency              | { "car_value": 10000, "risk_rating": 2 }               | { "monthly_premium": 16.67, "yearly_premium": 200.00 }                 |
| 30               | Fractional car_value                            | { "car_value": 1234.56, "risk_rating": 3 }             | { "monthly_premium": 3.09, "yearly_premium": 37.04 }                   |

---

### **5. Large Input and Formatting**

| **Test Case #** | **Purpose**                                      | **Input** (car_value, risk_rating)                     | **Expected Output** (monthly_premium, yearly_premium, or error)         |
|------------------|--------------------------------------------------|--------------------------------------------------------|-------------------------------------------------------------------------|
| 14               | Edge case, very large car_value                 | { "car_value": 1000000, "risk_rating": 5 }             | { "monthly_premium": 4166.67, "yearly_premium": 50000.00 }             |
| 37               | Testing large strings (quotes removed)          | { "car_value": "1000000000", "risk_rating": 5 }         | { "monthly_premium": 4166666.67, "yearly_premium": 50000000.00 }       |

---

### **6. Miscellaneous Tests**

| **Test Case #** | **Purpose**                                      | **Input** (car_value, risk_rating)                     | **Expected Output** (monthly_premium, yearly_premium, or error)         |
|------------------|--------------------------------------------------|--------------------------------------------------------|-------------------------------------------------------------------------|
| 25               | Testing negative car_value format               | { "car_value": "-10000", "risk_rating": 2 }            | { "error": "car_value cannot be negative" }                            |
| 26               | Empty string for risk_rating                     | { "car_value": 20000, "risk_rating": "" }              | { "error": "risk_rating is required" }                                 |

