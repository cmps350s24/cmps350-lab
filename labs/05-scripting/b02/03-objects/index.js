import promptSync from "prompt-sync";
const prompt = promptSync();

const count = prompt("How many? ");
console.log(count);

// const person = {
//   name: "Dane Doe",
//   age: 21,
// };

// console.log(person.age);
// console.log(person.name);
// person.weight = 65;
// console.log(person.weight);

// console.error(Math.random());

function readStudents(numberOfStudents = 5) {
  const students = Array.from({ length: numberOfStudents }).map(() => {
    // const name = prompt("Name? ");
    // const gender = prompt("Gender? ");
    // const student = { name, gender };

    return {
      name: prompt("Name? "),
      gender: prompt("Gender? "),
    };
  });

  return students;
}

const students = readStudents();

// console.log(students);

const students = [
  { name: "John", gender: "Male", grade: 85, age: 23 },
  { name: "Jane", gender: "Female", grade: 77, age: 31 },
  { name: "Dohn", gender: "Male", grade: 92, age: 29 },
  { name: "Fane", gender: "Female", grade: 63, age: 20 },
  { name: "Xohn", gender: "Male", grade: 54, age: 22 },
];
