const student = {
  name: "Mohammad Arif",
  age: 25,
  dept: "cse",
  marks: {
    algorithm: 65,
    math: 10,
    dld: 45,
    database: 65,
  },
};

const name = student.name;
//1st niyom
const database = student.marks.database;

//second niyom
const mathNumber = "math";
const number2 = student.marks[mathNumber];
console.log(number2);
