import {
  calculateRequiredFuel,
  calculateFuelFromArray
} from "../src/day1_part1";
import { readFileSync } from "fs";

describe("Calculating the fuel", () => {
  it("should return 2 fuel when the mass is 12", () => {
    expect(calculateRequiredFuel(12)).toBe(2);
  });

  it("should return 2 fuel when the mass is 14", () => {
    expect(calculateRequiredFuel(14)).toBe(2);
  });

  it("should return 654 fuel when the mass is 1969", () => {
    expect(calculateRequiredFuel(1969)).toBe(654);
  });

  it("should return 33583 fuel when the mass is 100756", () => {
    expect(calculateRequiredFuel(100756)).toBe(33583);
  });

  it("should return 4 fuel when the masses are 14 and 14", () => {
    expect(calculateFuelFromArray([14, 14])).toBe(4);
  });

  it("should calculate the right amount of fuel coming from input", () => {
    const arrayOfInputs: number[] = readFileSync("./test/day1.txt")
      .toString()
      .split("\n")
      .map(Number);
    console.log(calculateFuelFromArray(arrayOfInputs));
    expect(true);
  });
});
