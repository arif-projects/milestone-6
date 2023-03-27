const products = [
  { type: "Phone", Name: "Nokia", price: 2000 },
  { type: "Mac", Name: "LG", price: 20000 },
  { type: "Notebook", Name: "Samgsung", price: 52000 },
  { type: "tab", Name: "iPhone", price: 20000 },
];

const notebook = products.find((pro) => pro.type == "Notebook");
console.log(notebook);
