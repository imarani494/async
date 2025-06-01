const profile = {
  name: "Charlie",
  age: 28,
  address: {
    city: "Los Angeles",
    zipCode: "90001",
    country: "USA"
  }
};

const update = {
  age: 30,
  address: {
    city: "San Francisco",
    zipCode: "94109"
  }
};
const merged = {
  ...profile,
  ...update,
  address: {
    ...profile.address,
    ...update.address
  }
};

console.log(merged);
