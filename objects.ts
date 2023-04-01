const profile = {
  name: "jogn",
  age: 26,
  coords: { lat: 29, lng: 234 },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name, coords }: { age: number; name: string; coords: object } = profile;

// const {
//   coords: { lat, lng },
// }: { coords: { lat: number; lng: number } } = profile;

const {
  coords: { lat, lng },
} = profile;
