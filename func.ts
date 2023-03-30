const add = (a: number, b: number): number => {
  return a + b;
};

// Never depend on the the inference of TypeScript on infering what is returned from a function
const subtract = (a: number, b: number) => {
  // this thinks that we are not returning value
  a - b;
};

const subtractAnot = (a: number, b: number): number => a - b;
