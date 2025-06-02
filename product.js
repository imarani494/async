const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 3000 }
];

function processProduct(products) {
 
  const productNames = products.map(product => product.name);

  
  products.forEach(product => {
    const message = product.price > 50
      ? `${product.name} is above $50`
      : `${product.name} is below $50`;
    console.log(message);
  });

  return productNames;
}

processProduct(products);
