const dring = { color: "brown", carbonated: true, sugar: 40 };

const popsi = ["bronw", true, 40]; // => this is an array
const coca: [string, boolean, number] = ["black", true, 45];

type Drink = [string, boolean, number]; // a type alias => a reusable types

const fanta: Drink = ["orange", true, 50];
