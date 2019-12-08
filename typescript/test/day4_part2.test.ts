import { calculatePossiblePassword, matchesCriteria } from "../src/day4_part2";

fdescribe("Find possible passwords", () => {
  it("should accept the value 112233", () => {
    expect(matchesCriteria(112233)).toBe(true);
  });
  it("should decline the value 123444", () => {
    expect(matchesCriteria(123444)).toBe(false);
  });
  it("should accept the value 111122", () => {
    expect(matchesCriteria(111122)).toBe(true);
  });
  it("should accept the value 345667", () => {
    expect(matchesCriteria(345667)).toBe(true);
  });
  it("should return the amount of possible passwords between 111121 and 111123", () => {
    expect(calculatePossiblePassword(111121, 111123)).toBe(1);
  });
  it("should return the amount of possible passwords between 367479 and 893698", () => {
    console.log(calculatePossiblePassword(367479, 893698));
    expect(calculatePossiblePassword(367479, 893698)).not.toBeNull();
  });
});
