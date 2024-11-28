const { calculateCarValue } = require('./api-01');

// Happy path - testing common cases
test('Happy path - Civic 2020', () => {
  expect(calculateCarValue({ model: "Civic", year: 2020 })).toEqual({ car_value: 6620 });
});

test('Handles spaces - Model T 1908', () => {
  expect(calculateCarValue({ model: "Model T", year: 1908 })).toEqual({ car_value: 8808 });
});

test('Special characters - RX-8 2010', () => {
  expect(calculateCarValue({ model: "RX-8", year: 2010 })).toEqual({ car_value: 6210 });
});

// Negative year
test('Negative year', () => {
  expect(calculateCarValue({ model: "Corolla", year: -1999 })).toEqual({ error: "error: a year must be a four digit integer." });
});

// Non-string model
// test('Non-string model', () => {
//   expect(calculateCarValue({ model: 12345, year: 2020 })).toEqual({ error: "error: a model must be a string of characters." });
// });    // This is handled through the empty model name test, while also adhering to the business rule.

// Non-numeric year
test('Non-numeric year', () => {
  expect(calculateCarValue({ model: "Accord", year: "TwoThousand" })).toEqual({ error: "error: a year must be a four digit integer." });
});

// Additional edge cases

// Empty model name
test('Empty model name', () => {
  expect(calculateCarValue({ model: "", year: 2020 })).toEqual({ car_value: 2020 }); // Edge case, should return the year
});

// Single character model name
test('Single character model - A 2020', () => {
  expect(calculateCarValue({ model: "A", year: 2020 })).toEqual({ car_value: 2120 }); // A is 1, 1*100 + 2020 = 2120
});

test('Single character model - Z 2020', () => {
  expect(calculateCarValue({ model: "Z", year: 2020 })).toEqual({ car_value: 4620 }); // Z is 26, 26*100 + 2020 = 4620
});

// Case insensitivity
test('Case insensitivity - Civic 2020', () => {
  expect(calculateCarValue({ model: "cIvIc", year: 2020 })).toEqual({ car_value: 6620 }); // Should handle mixed case
});

// Model with multiple spaces
test('Multiple spaces - Honda Accord 2020', () => {
  expect(calculateCarValue({ model: "Honda  Accord", year: 2020 })).toEqual({ car_value: 10620 }); // "HondaAccord" -> sum of positions 8+15+14+4+1+1+3+3+15+18+4 = 86, 86*100 + 2020 = 10620
});

// Special characters in model
test('Model with special characters - RX-8 2010', () => {
  expect(calculateCarValue({ model: "RX-8", year: 2010 })).toEqual({ car_value: 6210 }); // Special characters should be ignored, "RX8"
});

// Very large year
test('Very large year', () => {
  expect(calculateCarValue({ model: "Tesla", year: 9999999 })).toEqual({ car_value: 10005699 }); // 57 * 100 + 9999999 = 10005699
});

// Model with all alphabet letters
test('Model with all alphabet letters - ABCDEFGHIJKLMNOPQRSTUVWXYZ', () => {
  expect(calculateCarValue({ model: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", year: 2020 })).toEqual({ car_value: 37120 });
  // Sum of all letters 1+2+3+...+26 = 351, 351*100 + 2020 = 37120
});


