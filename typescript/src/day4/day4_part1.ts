export const calculatePossiblePassword = (limit1: number, limit2: number) => {
  let validPossibilites: number[] = [];
  for (let i = limit1; i < limit2; i++) {
    matchesCriteria(i) && validPossibilites.push(i);
  }
  return validPossibilites.length;
};

export const matchesCriteria = (value: number): boolean => {
  return checkIncrease(String(value)) && checkDoubleNumbers(String(value));
};

const checkIncrease = (value: string): boolean => {
  const checkValues: number[] = [0];
  let increases: boolean = true;

  value.split("").map(x => {
    checkValues.every(y => {
      return +x >= y;
    })
      ? checkValues.push(+x)
      : (increases = false);
  });
  return increases;
};

const checkDoubleNumbers = (value: string): boolean => {
  let hasDoubles: boolean = false;
  for (let index = 0; index < value.length; index++) {
    index && value[index - 1] === value[index] ? (hasDoubles = true) : null;
  }
  return hasDoubles;
};
