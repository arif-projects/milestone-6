const numbers = [20, 30, 50, 3, 6, 70, 80];

const largeNumbers = numbers.filter((number) => number > 30);
const evenNumbers = numbers.filter((x) => x % 2 == 0);
console.log(evenNumbers);

//object example

const products = [
  { type: "Phone", Name: "Nokia", price: 2000 },
  { type: "Mac", Name: "LG", price: 20000 },
  { type: "Notebook", Name: "Samgsung", price: 52000 },
  { type: "tab", Name: "iPhone", price: 20000 },
];

const smallPrice = products.filter((product) => product.price < 4000);
console.log(smallPrice);
