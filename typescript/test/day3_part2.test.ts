import { calculateManhattenDistance } from "../src/day3_part2";
import { readFileSync } from "fs";

describe("Calculate stuff", () => {
  it("Should return 610 when given the following test data", () => {
    expect(
      calculateManhattenDistance(
        ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"],
        ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"]
      )
    ).toBe(610);
  });
  it("Should return 410 when given the following test data", () => {
    expect(
      calculateManhattenDistance(
        [
          "R98",
          "U47",
          "R26",
          "D63",
          "R33",
          "U87",
          "L62",
          "D20",
          "R33",
          "U53",
          "R51"
        ],
        ["U98", "R91", "D20", "R16", "D67", "R40", "U7", "R15", "U6", "R7"]
      )
    ).toBe(410);
  });
  it("Should return the correct value when given the following test data", () => {
    const arrayOfInputs1: string[] = readFileSync("./test/day3.txt")
      .toString()
      .split("\n")[0]
      .split(",");
    const arrayOfInputs2: string[] = readFileSync("./test/day3.txt")
      .toString()
      .split("\n")[1]
      .split(",");
    console.log(calculateManhattenDistance(arrayOfInputs1, arrayOfInputs2));
  });
});
