/*                 
Explanation of Test Coverage:

Positive Tests: Test scenarios where the function operates under expected inputs.

Boundary Tests: Check handling of extreme inputs and limits on the risk rating.

Negative Tests: Invalid inputs to ensure proper error handling.

Edge Cases: Inputs with similar but not exact keywords to test accuracy in keyword matching.   
*/

const { calculateRiskRating } = require("./api-02");

describe("Risk Rating API Tests", () => {
  // Coverage Type: Positive
  test("should return a risk rating of 3 for valid input with 3 keywords", () => {
    const input = {
      claim_history:
        "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes.",
    };

    const result = calculateRiskRating(input);
    expect(result).toEqual({ risk_rating: 3 });
  });

  // Coverage Type: Positive
  test("should return a risk rating of 2 for input with 2 keywords", () => {
    const input = {
      claim_history: "Crash and bump occurred.",
    };

    const result = calculateRiskRating(input);
    expect(result).toEqual({ risk_rating: 2 });
  });

  // Coverage Type: Positive
  test("should return a risk rating of 1 for input with no keywords", () => {
    const input = {
      claim_history: "No incidents reported.",
    };

    const result = calculateRiskRating(input);
    expect(result).toEqual({ risk_rating: 1 });
  });

  // Coverage Type: Boundary
  test("should return a risk rating of 5 for input with more than 5 keywords", () => {
    const input = {
      claim_history:
        "Multiple crashes and collisions! Crash, collide, smash, crash again.",
    };

    const result = calculateRiskRating(input);
    expect(result).toEqual({ risk_rating: 5 });
  });

  // Coverage Type: Boundary
  test("should return a risk rating of 1 for empty claim_history string", () => {
    const input = {
      claim_history: "",
    };

    const result = calculateRiskRating(input);
    expect(result).toEqual({ risk_rating: 1 });
  });

  // Coverage Type: Negative
  test("should return an error for input missing claim_history field", () => {
    const input = {
      invalidKey: "Crash reported",
    };

    const result = calculateRiskRating(input);
    expect(result).toEqual({
      description: "Missing required key: claim_history.",
      error: "error",
    });
  });

  // Coverage Type: Positive
  test("should return a risk rating of 5 for case-insensitive matching of repeated keywords", () => {
    const input = {
      claim_history: "crash Crash CRASH bump BUMP bump smash SMASH",
    };

    const result = calculateRiskRating(input);
    expect(result).toEqual({ risk_rating: 5 });
  });

  // Coverage Type: Negative
  test("should return an error for non-string claim_history input", () => {
    const input = {
      claim_history: 12345,
    };

    const result = calculateRiskRating(input);
    expect(result).toEqual({
      error: "error",
      description: "claim_history must be a string.",
    });
  });

  // Coverage Type: Edge Case
  test("should return a risk rating of 1 for input with similar words but no exact keyword match", () => {
    const input = {
      claim_history: "collision but no keyword match",
    };

    const result = calculateRiskRating(input);
    expect(result).toEqual({ risk_rating: 1 });
  });
});
