import {
  calculatePossiblePassword,
  matchesCriteria
} from "../../src/day4/day4_part1";

describe("Find possible passwords", () => {
  it("should accept the value 111111", () => {
    expect(matchesCriteria(111111)).toBe(true);
  });
  it("should accept the value 111123", () => {
    expect(matchesCriteria(111123)).toBe(true);
  });
  it("should accept the value 22", () => {
    expect(matchesCriteria(22)).toBe(true);
  });
  it("should decline the value 434486", () => {
    expect(matchesCriteria(434486)).toBe(false);
  });
  it("should decline the value 223450", () => {
    expect(matchesCriteria(223450)).toBe(false);
  });
  it("should decline the value 123789", () => {
    expect(matchesCriteria(123789)).toBe(false);
  });
  it("should return the amount of possible passwords between 367479 and 893698", () => {
    expect(calculatePossiblePassword(367479, 893698)).not.toBeNull();
  });
});
