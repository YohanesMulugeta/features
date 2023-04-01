const carMakers = ["ford", "toyota", "chevy"];
const cars = [["f150"], ["corolla"]]; // => :string[][]

// Help with inference when extracting values
const car = carMakers[0]; // car var is infered with string
const myCar = cars.pop();

// prevent incompatebli values
// cars.push(100); // => throws error cause it doesn't accept a number
cars.push(["lala"]);

// get help from typescript by auto completing the methods that blong to the rype
carMakers.map((car): string => {
  return car.toUpperCase();
});

// FELEXIBLE ARRAYS
const importantDates: (Date | string)[] = [new Date()];
importantDates.push("2020-30-10");
const [dateOfDate] = importantDates;
