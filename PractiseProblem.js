const multiply = (num1, num2, num3) => {
  const multi = num1 * num2 * num3;
  return multi;
};

const result = multiply(3, 2, 5);

console.log(result);

const string = `I am a web developer.
I love code
i love to eat biriyni`;
console.log(string);

const add = (num1, num2 = 0) => {
  const sum = num1 + num2;
  return sum;
};

const res = add(60);
console.log(res);
