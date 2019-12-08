import { readFileSync } from "fs";
import { intcodeInterpreterWithOutput } from "../../src/day2/day2_part2";

describe("day 2 part 2", () => {
  it("should generate have output 19690720 when given the input file", () => {
    const arrayOfInputs: number[] = readFileSync("./test/day2.txt")
      .toString()
      .split(",")
      .map(Number);
    expect(intcodeInterpreterWithOutput(arrayOfInputs, 19690720)).not.toBeNull;
  });
});
