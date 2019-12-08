export const calculateManhattenDistance = (
  wire1Input: string[],
  wire2Input: string[]
) => {
  let wire1: number[][] = [[0, 0]];
  let wire2: number[][] = [[0, 0]];
  wire1Input.forEach(move => applyNextStep(wire1, move));
  wire2Input.forEach(move => applyNextStep(wire2, move));
  let clashes = calculateClashes(wire1, wire2);
  clashes.shift();
  return Math.min(...clashes);
};

const applyNextStep = (wire: number[][], input: string) => {
  const direction = input[0];
  const steps = +input.slice(1);
  const startPosition = wire[wire.length - 1];
  switch (direction) {
    case "U":
      for (let index = 1; index <= steps; index++) {
        wire.push([startPosition[0] + index, startPosition[1]]);
      }
      break;
    case "D":
      for (let index = 1; index <= steps; index++) {
        wire.push([startPosition[0] - index, startPosition[1]]);
      }
      break;
    case "R":
      for (let index = 1; index <= steps; index++) {
        wire.push([startPosition[0], startPosition[1] + index]);
      }
      break;
    case "L":
      for (let index = 1; index <= steps; index++) {
        wire.push([startPosition[0], startPosition[1] - index]);
      }
      break;
  }
};

const calculateClashes = (wire1: number[][], wire2: number[][]): number[] => {
  let clashes: number[] = [];
  for (let x = 0; x < wire1.length; x++) {
    for (let y = 0; y < wire2.length; y++) {
      if (wire1[x][0] === wire2[y][0] && wire1[x][1] === wire2[y][1]) {
        clashes.push(Math.abs(wire1[x][0]) + Math.abs(wire1[x][1]));
      }
    }
  }
  return clashes;
};
