const add = (a: number, b: number): number => {
  return a + b;
};

// Never depend on the the inference of TypeScript on infering what is returned from a function
const subtract = (a: number, b: number) => {
  // this thinks that we are not returning value
  a - b;
};

const subtractAnot = (a: number, b: number): number => a - b;

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

// DESTRUCTURING
const forcast = {
  date: new Date(),
  weather: "sunny",
};

const logWether = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date + " " + weather);
};
