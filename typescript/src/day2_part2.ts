export const intcodeInterpreter = (opcodes: number[]): number[] => {
  let array = [...opcodes];
  for (let index = 0; index < array.length; index += 4) {
    switch (array[index]) {
      case 1:
        array[array[index + 3]] =
          array[array[index + 1]] + array[array[index + 2]];
        break;
      case 2:
        array[array[index + 3]] =
          array[array[index + 1]] * array[array[index + 2]];
        break;
      case 99:
        return array;
    }
  }
};

export const intcodeInterpreterWithOutput = (
  opcodes: number[],
  output: number
): number => {
  for (let noun = 0; noun < 100; noun++) {
    for (let verb = 0; verb < 100; verb++) {
      opcodes[1] = noun;
      opcodes[2] = verb;
      const generatedOutput = intcodeInterpreter(opcodes)[0];
      if (generatedOutput == output) {
        return 100 * noun + verb;
      }
    }
  }
};
