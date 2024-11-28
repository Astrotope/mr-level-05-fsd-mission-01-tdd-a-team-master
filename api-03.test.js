const generateQuote = require('./api-03'); // Import the generateQuote API to test.

describe("Turners Car Auctions - Insurance API Upgrade (Main Use Case and Valid Inputs)", () => {

  // Test case #1
  test('Main use case, valid inputs', () => {
    const input = { car_value: 6614, risk_rating: 5 };
    const expectedOutput = { monthly_premium: 27.56, yearly_premium: 330.70 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #3
  test('Maximum risk rating', () => {
    const input = { car_value: 20000, risk_rating: 5 };
    const expectedOutput = { monthly_premium: 83.33, yearly_premium: 1000.00 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #13
  test("Valid input, string car_value with '$'", () => {
    const input = { car_value: "$6,614", risk_rating: 5 };
    const expectedOutput = { monthly_premium: 27.56, yearly_premium: 330.70 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #17
  test("car_value as string without '$'", () => {
    const input = { car_value: "6,614", risk_rating: 5 };
    const expectedOutput = { monthly_premium: 27.56, yearly_premium: 330.70 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #15
  test("Risk rating as decimal value", () => {
    const input = { car_value: "10000", risk_rating: "1.5" };
    const expectedOutput = { monthly_premium: 8.33, yearly_premium: 100.00 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #20
  test("car_value as float string with '$'", () => {
    const input = { car_value: "$15000.99", risk_rating: "4" };
    const expectedOutput = { monthly_premium: 50.00, yearly_premium: 600.04 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #38
  test("Valid input, no formatting", () => {
    const input = { car_value: 6614, risk_rating: "3" };
    const expectedOutput = { monthly_premium: 16.54, yearly_premium: 198.42 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #40
  test("Valid input with whitespace", () => {
    const input = { car_value: " 6614", risk_rating: "3" };
    const expectedOutput = { monthly_premium: 16.54, yearly_premium: 198.42 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

});

describe("Turners Car Auctions - Insurance API Upgrade (Invalid Inputs and Edge Cases)", () => {

  // Test case #4
  test("Edge case, risk_rating = 0", () => {
    const input = { car_value: 15000, risk_rating: 0 };
    const expectedOutput = { error: "Invalid risk rating. Risk rating must be an integer between 1 and 5." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #5
  test("Edge case, risk_rating = 6", () => {
    const input = { car_value: 15000, risk_rating: 6 };
    const expectedOutput = { error: "Invalid risk rating. Risk rating must be an integer between 1 and 5." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #6
  test("Valid JSON with commas, and quoted keys", () => {
    const input = { "car_value": "6614", "risk_rating": "5" };
    const expectedOutput = { monthly_premium: 27.56, yearly_premium: 330.70 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #7
  test("Non-numeric car_value", () => {
    const input = { "car_value": "ten thousand", "risk_rating": "3" };
    const expectedOutput = { error: "Invalid car value. Car value must be a number." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #8
  test("Non-numeric risk_rating", () => {
    const input = { "car_value": "20000", "risk_rating": "high" };
    const expectedOutput = { error: "Invalid risk rating. Risk rating must be an integer between 1 and 5." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #10
  test("Negative car_value", () => {
    const input = { "car_value": "-5000", "risk_rating": "2" };
    const expectedOutput = { error: "Invalid car value. Car value must be a positive number greater than 0." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #18
  test("Ensure error message specifies risk_rating issue", () => {
    const input = { "car_value": "6614", "risk_rating": "10" };
    const expectedOutput = { error: "Invalid risk rating. Risk rating must be an integer between 1 and 5." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #19
  test("Ensure error message specifies car_value issue", () => {
    const input = { "car_value": "invalid", "risk_rating": 5 };
    const expectedOutput = { "error": "Invalid car value. Car value must be a number." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #29
  test("Zero risk_rating", () => {
    const input = { "car_value": 5000, "risk_rating": 0 };
    const expectedOutput = { "error": "Invalid risk rating. Risk rating must be an integer between 1 and 5." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #32
  test("Negative risk_rating", () => {
    const input = { "car_value": 5000, "risk_rating": -3 };
    const expectedOutput = { "error": "Invalid risk rating. Risk rating must be an integer between 1 and 5." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #33
  test("Missing car_value", () => {
    const input = { "risk_rating": 3 };
    const expectedOutput = { "error": "Missing required key: car_value" };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #34
  test("Missing risk_rating", () => {
    const input = { "car_value": 5000 };
    const expectedOutput = { "error": "Missing required key: risk_rating" };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #35
  test("Empty JSON input", () => {
    const input = { };
    const expectedOutput = { "error": "Missing required keys: car_value and risk_rating" };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #27
  test("car_value as negative string", () => {
    const input = { "car_value": "-10000", "risk_rating": 2 };
    const expectedOutput = { "error": "Invalid car value. Car value must be a positive number greater than 0." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

});

describe("Turners Car Auctions - Insurance API Upgrade (Boundary Testing)", () => {

  // Test case #9
  test("car_value = 0.01 smallest possible without being zero", () => {
    const input = { "car_value": 0.01, "risk_rating": 5 };
    const expectedOutput = { "monthly_premium": 0.00, "yearly_premium": 0.00 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #23
  test("Smallest possible valid inputs", () => {
    const input = { "car_value": 0.01, "risk_rating": 1 };
    const expectedOutput = { "monthly_premium": 0.00, "yearly_premium": 0.00 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #14
  test("Edge case, largest car_value", () => {
    // The largest representable number in JavaScript
    const largestFloatString = String(Number.MAX_VALUE);
    console.log(largestFloatString);
    const input = { "car_value": largestFloatString, "risk_rating": 5 };
    const expectedOutput = { "monthly_premium": Infinity, "yearly_premium": Infinity };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #24
  test("Large valid inputs", () => {
    const input = { "car_value": 999999, "risk_rating": 5 };
    const expectedOutput = { "monthly_premium": 4166.66, "yearly_premium": 49999.95 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #28
  test("Boundary condition for rounding up", () => {
    const input = { "car_value": 12500, "risk_rating": 2 };
    const expectedOutput = { "monthly_premium": 20.83, "yearly_premium": 250.00 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

});

describe("Turners Car Auctions - Insurance API Upgrade (Rounding and Format Testing)", () => {

  // Test case #11
  test("Rounding check, half-to-even (bankers' rounding)", () => {
    const input = { "car_value": 1255, "risk_rating": 5 };
    const expectedOutput = { "monthly_premium": 5.23, "yearly_premium": 62.75 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #12
  test("Rounding check, exact half", () => {
    const input = { "car_value": 2525, "risk_rating": 2 };
    const expectedOutput = { "monthly_premium": 4.21, "yearly_premium": 50.50 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #21
  test("Check rounding differences in last month", () => {
    const input = { "car_value": 3333, "risk_rating": 3 };
    const expectedOutput = { "monthly_premium": 8.33, "yearly_premium": 99.99 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #22
  test("Ensure rounding up for consistency", () => {
    const input = { "car_value": 10000, "risk_rating": 2 };
    const expectedOutput = { "monthly_premium": 16.67, "yearly_premium": 200.00 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #30
  test("Fractional car_value", () => {
    const input = { "car_value": 1234.56, "risk_rating": 3 };
    const expectedOutput = { "monthly_premium": 3.09, "yearly_premium": 37.04 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

});

describe("Turners Car Auctions - Insurance API Upgrade (Large Input and Formatting)", () => {

  // Test case #14
  test("Edge case, very large car_value", () => {
    const input = { "car_value": 1000000, "risk_rating": 5 };
    const expectedOutput = { "monthly_premium": 4166.67, "yearly_premium": 50000.00 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #37
  test("Testing large strings (quotes removed)", () => {
    const input = { "car_value": "1000000000", "risk_rating": 5 };
    const expectedOutput = { "monthly_premium": 4166666.67, "yearly_premium": 50000000.00 };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

});

describe("Turners Car Auctions - Insurance API Upgrade (Miscellaneous Tests)", () => {

  // Test case #25
  test("Testing negative car_value format", () => {
    const input = { "car_value": "-10000", "risk_rating": 2 };
    const expectedOutput = { "error": "Invalid car value. Car value must be a positive number greater than 0." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #26
  test("Empty string for risk_rating", () => {
    const input = { "car_value": 20000, "risk_rating": "" };
    const expectedOutput = { "error": "Invalid risk rating. Risk rating must be an integer between 1 and 5." };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

});

describe("Turners Car Auctions - Insurance API Upgrade (Invalid Input Types)", () => {

  // Test case #41
  test("Empty object input", () => {
    const input = {};
    const expectedOutput = { "error": "Missing required keys: car_value and risk_rating" };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #42
  test("Null input", () => {
    const input = null;
    const expectedOutput = { "error": "Input is null, undefined, or not a valid object. It must be a valid JSON object" };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #43
  test("Undefined input", () => {
    const input = undefined;
    const expectedOutput = { "error": "Input is null, undefined, or not a valid object. It must be a valid JSON object" };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #44
  test("Array input", () => {
    const input = [1, 2, 3];
    const expectedOutput = { "error": "Missing required keys: car_value and risk_rating" };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

  // Test case #45
  test("Non-JSON object input", () => {
    const input = new Date();  // Date object is not a plain JSON object
    const expectedOutput = { "error": "Missing required keys: car_value and risk_rating" };
    const result = generateQuote(input);
    expect(result).toEqual(expectedOutput);
  });

})
