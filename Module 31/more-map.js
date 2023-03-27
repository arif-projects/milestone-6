const friends = ["Sandman", "Simon Rally", "Youri", "Cpt. Price", "Nikolai"];

const firstLatter = friends.map((name) => name[0]);
console.log(firstLatter);

const length = friends.map((x) => x.length);
console.log(length);

const products = [
  { type: "Phone", Name: "Nokia", price: 2000 },
  { type: "Mac", Name: "LG", price: 20000 },
  { type: "Notebook", Name: "Samgsung", price: 52000 },
  { type: "tab", Name: "iPhone", price: 20000 },
];

const price = products.map((product) => product.price);
console.log(price);
