import { intcodeInterpreter } from "../src/day2_part1";
import { readFileSync } from "fs";

describe("Intcode interpreter", () => {
  it("should return 3500,9,10,70,2,3,11,0,99,30,40,50 when given 1,9,10,3,2,3,11,0,99,30,40,50", () => {
    expect(
      intcodeInterpreter([1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50])
    ).toEqual([3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]);
  });
  it("should return 2,0,0,0,99 when given 1,0,0,0,99", () => {
    expect(intcodeInterpreter([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
  });
  it("should return 2,3,0,6,99 when given 2,3,0,3,99", () => {
    expect(intcodeInterpreter([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
  });
  it("should return 2,4,4,5,99,9801 when given 2,4,4,5,99,0", () => {
    expect(intcodeInterpreter([2, 4, 4, 5, 99, 0])).toEqual([
      2,
      4,
      4,
      5,
      99,
      9801
    ]);
  });
  it("should return 30,1,1,4,2,5,6,0,99 when given 1,1,1,4,99,5,6,0,99", () => {
    expect(intcodeInterpreter([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([
      30,
      1,
      1,
      4,
      2,
      5,
      6,
      0,
      99
    ]);
  });
  it("should return the puzzle input solution", () => {
    const arrayOfInputs: number[] = readFileSync("./test/day2.txt")
      .toString()
      .split(",")
      .map(Number);
    console.log(arrayOfInputs);
    expect(true);
    console.log(intcodeInterpreter(arrayOfInputs));
  });
});
