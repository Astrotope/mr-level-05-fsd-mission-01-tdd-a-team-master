function calculateCarValue(input) {
 
  console.log("Received input:", input); // For debugging when wrapped in express.js so we can check what is passed in from the frontend

  // [CM] Check that the input isn't null, or undefined, or not a valid object. [Complete][HS]
  // [CM] Use descriptive error messages. [Complete][HS]

  // Check if input is null, undefined, or not an object
  if (!input || typeof input !== "object") {
      return { error: "error", description: "Input is null, undefined, or not a valid object. It must be a valid JSON object" };
  }

  // Destructure the input
  const { model, year } = input; // Destructure the JSON input. We assume the object has two keys, how do we handle if only one key, or an empty JSON object is sent.

 // [CM] Check keys are actually in destructured JSON [Complete][HS]

  // Check if required keys are missing
  if (model === undefined || year === undefined) {
      return { error: "error", description: "Missing required keys: model or year" };
  }

  console.log("Received model:", model); // For debugging when wrapped in express.js
  console.log("Received year:", year);  // For debugging when wrapped in express.js

  // [CM] parse the inputs into the required type, string, float, int to make sure they are of the correct type. [Complete][HS] 
  // Parse the inputs to numbers
  const parsedModel = String(model); // Make sure the string is a string. It really shouldn't be anything else.
  const parsedYear = parseInt(year); // Or parseFloat for decimal numbers. JSON coming from an API call will always be a string.
 
  // Validate inputs
  if (typeof parsedModel !== "string") {
    return { error: "error: a model must be a string of characters." };
  }
  if (isNaN(parsedYear) || parsedYear < 0) {
    return { error: "error: a year must be a four digit integer." };
  }

  // Clean the model: remove non-alphabetic characters using a regular expression(REGEX)
  const cleanedModel = parsedModel.replace(/[^a-zA-Z]/g, "");
  // console.log("Cleaned Model:", cleanedModel); // Log cleaned model

  // [CM] 64 is possibly a magic number. But I think your comment covers this. [Complete][HS] 
  // Calculate sum of alphabet positions
  const charValueSum = cleanedModel // This is called method chaining
    .toUpperCase()
    .split("")
    //sum is the accumulator|char is the current value
    .reduce((sum, char) => {
      const charValue = char.charCodeAt(0) - 64; // .charCodeAt(0) is referring to the ASCII value char eg. Uppercaseletters(A-Z) have values from 65-90. So, -64 will bring A-Z values to 1-26.
      // console.log(`Character: ${char}, Value: ${charValue}`); // Log each character's position value
      return sum + charValue;
    }, 0); // 0 is the initial value for the .reduce() method.

  // console.log("Character Value Sum:", charValueSum); // Log total sum of positions
 
  // Calculate car value
  const carValue = charValueSum * 100 + parsedYear;
  // console.log("Car Value before adding year:", charValueSum * 100); // Log car value before adding the year
  // console.log("Final Car Value:", carValue); // Log final car value

  return { car_value: carValue };
}
 
// Export the function for testing
module.exports = { calculateCarValue };
