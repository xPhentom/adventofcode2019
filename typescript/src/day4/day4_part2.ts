export const calculatePossiblePassword = (limit1: number, limit2: number) => {
  let validPossibilites: number[] = [];
  for (let i = limit1; i < limit2; i++) {
    if (matchesCriteria(i)) {
      validPossibilites.push(i);
    }
  }
  return validPossibilites.length;
};

export const matchesCriteria = (value: number): boolean => {
  return checkIncrease(String(value)) && checkDoubleNumbers(String(value));
};

const checkIncrease = (value: string): boolean => {
  const values = value.split("");
  for (let index = 0; index < values.length; index++) {
    if (values[index - 1] && values[index - 1] > values[index]) {
      return false;
    }
  }
  return true;
};

const checkDoubleNumbers = (value: string): boolean => {
  let doubles: Map<number, number> = new Map();
  for (let index = 0; index < value.length; index++) {
    if (index && value[index - 1] === value[index]) {
      doubles.get(+value[index])
        ? doubles.set(+value[index], doubles.get(+value[index]) + 1)
        : doubles.set(+value[index], 2);
    }
  }
  return mapHasDoublesAsPairs(doubles);
};

const mapHasDoublesAsPairs = (map: Map<number, number>): boolean => {
  let values = map.values();
  let value;
  do {
    value = values.next().value;
    if (value == 2) {
      return true;
    }
  } while (value);
  return false;
};
