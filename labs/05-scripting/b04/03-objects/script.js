import promptSync from "prompt-sync";
const prompt = promptSync();
const number = prompt("How many? ");
console.log(number);

function readStudents() {
  return Array.from({ length: 5 }).map(() => {
    // const student = {};
    // student.name = prompt("Name: ");
    // student.gender = prompt("Gender: ");
    // return student;

    return {
      name: prompt("Name: "),
      gender: Number(prompt("Gender: ")),
      age: Math.random() * (35 - 17) + 17,
      grade: Math.random() * (100 - 0) + 0,
    };
  });
}

// const students = readStudents();
// console.log(students);

const students = [
  { name: "John", gender: "Male", grade: 85, age: 23 },
  { name: "Jane", gender: "Female", grade: 77, age: 31 },
  { name: "Dohn", gender: "Male", grade: 92, age: 29 },
  { name: "Fane", gender: "Female", grade: 63, age: 20 },
  { name: "Xohn", gender: "Male", grade: 54, age: 22 },
];
