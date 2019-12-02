export const intcodeInterpreter = (opcodes: number[]): number[] => {
  for (let index = 0; index < opcodes.length; index += 4) {
    switch (opcodes[index]) {
      case 1:
        opcodes[opcodes[index + 3]] =
          opcodes[opcodes[index + 1]] + opcodes[opcodes[index + 2]];
        break;
      case 2:
        opcodes[opcodes[index + 3]] =
          opcodes[opcodes[index + 1]] * opcodes[opcodes[index + 2]];
        break;
      case 99:
        return opcodes;
    }
  }
};
