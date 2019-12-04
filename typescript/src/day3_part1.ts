export const calculateManhattenDistance = (
  wire1Input: string[],
  wire2Input: string[]
) => {
  let wire1: number[] = [0, 0];
  let wire2: number[] = [0, 0];

  for (let index = 0; index < wire1Input.length; index++) {
    for (let index = 0; index < wire2Input.length; index++) {
      applyNextStep(wire1, wire1Input[index]);
      applyNextStep(wire2, wire2Input[index]);
      checkClash(wire1, wire2);
    }
  }
};

const applyNextStep = (wire: number[], input: string) => {
  const direction = input[0];
  const steps = +input.slice(1);
  switch (direction) {
    case "U":
      wire[0] = wire[0] + steps;
      break;
    case "D":
      wire[0] = wire[0] - steps;
      break;
    case "R":
      wire[1] = wire[1] + steps;
      break;
    case "L":
      wire[1] = wire[1] - steps;
      break;
  }
};

const checkClash = (wire1: number[], wire2: number[]) => {
  return wire1[0] === wire2[0] && wire1[1] === wire2[1];
};
