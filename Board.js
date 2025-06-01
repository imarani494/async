const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: "Broadway"
    }
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: "Sunsets Boulevard"
    }
  }
];
const result = people.map(({ name, address: { city, street } }) =>
  `${name} lives in ${city} on ${street}`
);
console.log(result);
