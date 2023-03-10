const numbers = [2, 4, 6, 8, 10];

const output = [];
for (number of numbers) {
  const double = number * 2;
  output.push(double);
}

// console.log(output);

function getDouble(num) {
  const output = [];
  for (number of numbers) {
    const double = number * 2;
    output.push(double);
  }
  return output;
}

const result = getDouble(numbers);
console.log(result);

// map er kaj

const doubleIt = (num) => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map((num) => num * 2);
const makeDoubleDirect2 = numbers.map((x) => x * 2);

console.log(makeDouble);
console.log(makeDoubleDirect2);

const fiveTimes = [2, 3, 4, 5].map((x) => x * 5);
console.log(fiveTimes);
