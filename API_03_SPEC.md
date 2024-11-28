# API 3. Convert "Car Value" and "Risk Rating" to a "Quote"

---

### Input/Output Specification

- **Input:** 
  - This API takes 2 parameters as input in JSON format that includes - the "car value" (e.g. $6,614) and "risk rating" of the driver between 1 to 5 (e.g. 5 meaning high risk).
- **Output:** 
  - The output is a JSON format with the suggested monthly and yearly premium for the insurance policy, such as "$50", "$614,".

---

### Input/Output Format Specification


| INPUT                           | OUTPUT                                      | ERROR OUTPUT                |
|---------------------------------|---------------------------------------------|-----------------------------|
| { car_value: 6614; risk_rating: 5} | { monthly_premium: 27.5; yearly_premium: 330} | { error: "there is an error"} | 

---

### Business Rules

#### Yearly Premium
- Yearly premium is calculated by car_value multiplied by driver rating divided by 100.
  - For example, 
    - Car value of $6,614 and driver rating of 5, the yearly premium will be $6,614 * 5 / 100 = $330.

### Monthly Premium
- The monthly premium is the yearly premium divided by 12.
  - For example,
    - The monthly premium in this example will be $300 /12 = $27.5.

### Error Output
- If input values are not valid, return an error.
  - For example,
    - "there is an error"

---

# Developer Notes (These should be checked with the Product Owner):

- The Input and Output examples have incorrectly formated JSON with ';' separator instead of ',' separator.
  - Input:
    - Spec: { car_value: 6614; risk_rating: 5}
    - Correct: { car_value: 6614, risk_rating: 5}
  - Output:
    - Spec: { monthly_premium: 27.5; yearly_premium: 330}
    - Correct: { monthly_premium: 27.5, yearly_premium: 330}

- No specification is made for the rounding of the dollar values of outputs. I suggest the following spec.
  - Bankers Rounding: 
    - Round to two decimal places: Monetary values are usually rounded to the nearest cent (e.g., $0.01).
    - If the digit after the cent is less than 5, round down:
      - Example: $10.124 → $10.12.
    - If the digit after the cent is greater than 5, round up:
      - Example: $10.126 → $10.13.
    - If the digit after the cent is exactly 5, round to the nearest even number:
      - Example: $10.125 → $10.12 (nearest even number is 12).
      - Example: $10.135 → $10.14 (nearest even number is 14).
  - Financial Compliance: Many accounting systems and regulations recommend or require the bankers rounding method.

- The example error output in the example is uninformative, and will make it hard to track down faults with the API in production, which will impact the customer experience.
  - I suggest the error message specifies the exact reason the API call failed. So the frontend can give an informative response, as to why the API call failed.
    - For example;
      - risk_range > 5 or risk_range < 1 
        - error message { error: "the risk_rating was outside the allowed range of 1 though 5"}

- It is not clear if the risk_rating should be an integer value, or a decimal value.

- It is not clear if the car_value should be a string or decimal/integer or allow for both. Two different examples of car_value are given. 
  - 6614 which could be an integer or decimal. I am assuming decimal in this case, as it is money.
  - "$6,614" which is a string, and need to be converted, for the purpose of calculation.

- There is also confusion about the output values, monthly_premium and yearly_premium, as these are both shown as string values, and decimal values
  - 27.5 which is a decimal
  - "$614," which is a string of unclear numerical value.

- Should the monthly_premium be rounded-up to make sure it equals or exceeds the yearly premium.
  - This is one common practice.
  - Another common practice, is to make-up the difference between the monthly_premium * 12, and the yearly_premium by adding the difference to a specific month.
  - The rounding-up approach is the closest to the specification.
- We assume this API only handles one currency, New Zealand dollars, so we will expect the $ symbol only. Is this what the product owner wants?



