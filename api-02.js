function calculateRiskRating(input) {

  // Debugging log for received input
  console.log("Received input:", input); // [HS] Consider removing or disabling debugging logs in production for cleaner output.

  // Validate input: check if null, undefined, or not an object
  if (!input || typeof input !== "object") {
    // [HS] Good job handling invalid input. This ensures robustness.
    return {
      error: "error",
      description: "Input is null, undefined, or not a valid object. It must be a valid JSON object.",
    };
  }

  // Destructure the input
  const { claim_history } = input;

  // Check if required key is missing
  if (claim_history === undefined) {
    // [HS] Comprehensive error handling for missing keys. Well done.
    return {
      error: "error",
      description: "Missing required key: claim_history.",
    };
  }

  // Validate that claim_history is a string
  if (typeof claim_history !== "string") {
    // [HS] Correctly checking data types, which helps prevent runtime errors.
    return {
      error: "error",
      description: "claim_history must be a string.",
    };
  }

  // Convert the claim history to lowercase and count keywords
  const keywords = ["collide", "crash", "scratch", "bump", "smash"];
  const text = claim_history.toLowerCase(); // [HS] Good use of `toLowerCase()` to ensure case-insensitivity.
  let riskCount = 0;

  keywords.forEach((keyword) => {
    const regex = new RegExp(keyword, "g"); // [HS] Using a global regex is effective for counting occurrences.
    const matches = text.match(regex);
    if (matches) {
      riskCount += matches.length; // [HS] Great job adding the count of matches to `riskCount`.

    }
  });

  // Risk rating must be between 1 and 5
  const riskRating = Math.min(Math.max(riskCount, 1), 5);

  // [HS] Smart use of `Math.min` and `Math.max` to ensure the risk rating is within the desired range.

  console.log("Calculated risk rating:", riskRating); // Debugging log for risk rating

  return { risk_rating: riskRating }; // [HS] The return structure is clear and concise.
}

module.exports = { calculateRiskRating }; // [HS] Proper use of `module.exports` for reusability in other files.



