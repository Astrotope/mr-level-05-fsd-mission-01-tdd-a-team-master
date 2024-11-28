/**
 * Function to perform Banker's Rounding on a monetary value to two decimal places.
 * @param {number} amount - The monetary value to round.
 * @returns {number} - The rounded value to two decimal places following Banker's Rounding rules.
 */

// [DW] Could maybe change this function name to something shorter like "bankersRoundingRule" but otherwise the comment above helps explain. [Complete][CM]
function bankersRoundingRule(amount) {
  const factor = 100; // To scale for two decimal places
  const scaledAmount = amount * factor;
  const floored = Math.floor(scaledAmount);
  const remainder = scaledAmount - floored;

  if (remainder > 0.5) {
      return (floored + 1) / factor;
  } else if (remainder < 0.5) {
      return floored / factor;
  } else {
      // If exactly halfway, check if floored is even
      if (floored % 2 === 0) {
          return floored / factor; // Already even
      } else {
          return (floored + 1) / factor; // Make it even
      }
  }
}

/**
 * Parses a currency value into a float.
 * Handles both string inputs with currency formatting and numeric inputs directly.
 * Always returns a float, even if an integer is provided.
 * Removes non-numeric characters such as currency symbols and thousands separators for strings.
 *
 * @param {string|number} value - The currency value to parse (e.g., "$6,614", 12345, 12345.67).
 * @returns {number} - The parsed numeric value as a float.
 * @throws {Error} - Throws an error if the input is neither a string nor a number.
 */
function parseCurrency(value) {
  if (typeof value === 'number') {
      // Convert numeric inputs to float explicitly
      return parseFloat(value.toFixed(10)); // toFixed ensures it’s a float even for integers
  }

  if (typeof value !== 'string') {
      throw new Error('Input must be a string or a number.');
  }

  // [DW] Good comment to help understand what this is doing, 0-9 I understand but maybe comment why "-+e". [Complete][CM]
  // The '+e' are included as valid charater so that I can use scientific notation '1e+365' for one of my test cases, testing large values.
  // The other character are just to make sure I get a valide number '0123456789.-'
  // Filter valid characters and join back into a string
  const sanitizedValue = [...value]
      .filter((char) => '0123456789.-+e'.includes(char))
      .join('');

  return parseFloat(sanitizedValue);
}

/**
 * Function to generate insurance quote
 * @param {Object} input - The input JSON containing car_value and risk_rating
 * @param {number} input.car_value - The value of the car
 * @param {number} input.risk_rating - The risk rating for the insurance
 * @returns {Object} - The output JSON containing monthly_premium and yearly_premium
 */
function generateQuote(input) {


  console.log("Received input:", input); // For debugging when wrapped in express.js so we can check what is passed in from the frontend

  // Check if input is null, undefined, or not an object
  if (!input || typeof input !== "object") {
      return { error: "Input is null, undefined, or not a valid object. It must be a valid JSON object" };
  }

  // Destructure the input
  const { car_value, risk_rating } = input; // Destructure the JSON input.

  // Check if required keys are missing
  if (car_value === undefined && risk_rating === undefined) {
    return { error: "Missing required keys: car_value and risk_rating" };
  }
  if (car_value === undefined) {
    return { error: "Missing required key: car_value" };
  }
  if (risk_rating === undefined) {
    return { error: "Missing required key: risk_rating" };
  }

  console.log("Received car_value:", car_value); // For debugging when wrapped in express.js
  console.log("Received risk_rating:", risk_rating);  // For debugging when wrapped in express.js

  // Parse the inputs to numbers
  const parsedCarValue = parseCurrency(car_value);
  const parsedRiskRating = parseInt(risk_rating);

  // Check for NaN after parsing
  if (isNaN(parsedCarValue)) {
    console.log('Invalid car value. Car value must be a number.');
    return { error: "Invalid car value. Car value must be a number." };
  }

  if (isNaN(parsedRiskRating)) {
    console.error('Invalid risk rating. Risk rating must be an integer between 1 and 5.');
    return { error: "Invalid risk rating. Risk rating must be an integer between 1 and 5." };
  }

  console.log("parsedCarValue:", parsedCarValue); // For debugging when wrapped in express.js
  console.log("parsedRiskRating:", parsedRiskRating);  // For debugging when wrapped in express.js

  // Validate inputs
  if (typeof parsedCarValue !== "number" || parsedCarValue <= 0) {
    return { error: "Invalid car value. Car value must be a positive number greater than 0." };
  }
  if (typeof parsedRiskRating !== "number" || parsedRiskRating <= 0 || parsedRiskRating > 5) {
    return { error: "Invalid risk rating. Risk rating must be an integer between 1 and 5." };
  }

  // [DW] Maybe mention why the use of integer 12 is there.
  // Business rule logic: Premium calculations with bankers rounding
  const yearly_premium = bankersRoundingRule((parsedCarValue * parsedRiskRating) / 100.0);
  const monthly_premium = bankersRoundingRule(yearly_premium / 12);

  // Define reusable rounding function
  const roundToTwoDecimals = (value) => parseFloat(value.toFixed(2));

  // Round premiums to 2 decimal places and return output in JSON format
  return {
    monthly_premium: roundToTwoDecimals(monthly_premium),
    yearly_premium: roundToTwoDecimals(yearly_premium),
  };
}

module.exports = generateQuote;
