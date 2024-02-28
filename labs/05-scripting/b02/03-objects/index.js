import promptSync from "prompt-sync";
const prompt = promptSync();

// const count = prompt("How many? ");
// console.log(count);

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
      age: Math.round(17 + Math.random() * (35 - 17)),
      grade: Math.round(0 + Math.random() * (100 - 0)),
    };
  });

  return students;
}

// const students = readStudents(2);
// console.log(students);

// console.log(students);

const students = [
  { name: "John", gender: "Male", grade: 85, age: 23 },
  { name: "Jane", gender: "Female", grade: 77, age: 31 },
  { name: "Dohn", gender: "Male", grade: 92, age: 29 },
  { name: "Fane", gender: "Female", grade: 63, age: 20 },
  { name: "Xohn", gender: "Male", grade: 54, age: 22 },
];

const youngest = students.reduce((acc, val) => (acc.age < val.age ? acc : val));
console.log(youngest);

const oldest = students.reduce((acc, val) => (acc.age > val.age ? acc : val));
console.log(oldest);

const averageAge =
  students.map((s) => s.age).reduce((acc, val) => acc + val) / students.length;
console.log(averageAge);

const sortedAges = students.map((s) => s.age).sort((a, b) => a - b);
sortedAges.push(40);
console.log(sortedAges);
const medianAge =
  sortedAges.length % 2
    ? sortedAges[Math.floor(sortedAges.length / 2)]
    : (sortedAges[Math.floor(sortedAges.length / 2) - 1] +
        sortedAges[Math.floor(sortedAges.length / 2)]) /
      2;
console.log(medianAge);

const averageGrade =
  students.map((s) => s.grade).reduce((acc, val) => acc + val) /
  students.length;
console.log(averageGrade);

const varianceGrade =
  students
    .map((s) => s.grade)
    .reduce((acc, val) => acc + Math.pow(val - averageGrade, 2)) /
  students.length;
console.log(varianceGrade);

const maleStudents = students.filter((s) => s.gender === "Male");
const femaleStudents = students.filter((s) => s.gender === "Female");
console.log(maleStudents);
console.log(femaleStudents);

const averageMaleGrade =
  students
    .filter((s) => s.gender === "Male")
    .map((s) => s.grade)
    .reduce((acc, val) => acc + val) / students.length;

const sortedNameAsc = Array.from(students).sort((a, b) =>
  a.name < b.name ? -1 : a.name > b.name ? +1 : 0
);
console.log(sortedNameAsc);
const sortedNameDes = Array.from(students).sort((a, b) =>
  a.name < b.name ? +1 : a.name > b.name ? -1 : 0
);
console.log(sortedNameDes);

const highestGrade = students
  .map((s) => s.grade)
  .reduce((acc, val) => (acc > val ? acc : val));
const studentHighestGrade = students.filter((s) => s.grade === highestGrade);
console.log(studentHighestGrade);

const femaleHighestGrade = students
  .filter((s) => s.gender === "Female")
  .map((s) => s.grade)
  .reduce((acc, val) => (acc > val ? acc : val));
const femaleStudentHighestGrade = students
  .filter((s) => s.gender === "Female")
  .filter((s) => s.grade === femaleHighestGrade);
const femaleStudentHighestGrade2 = students.filter(
  (s) => s.gender === "Female" && s.grade === highestGrade
);
console.log(femaleStudentHighestGrade);

const anyFailingStudent = students.filter((s) => s.grade < 60).length !== 0;
const anyFailingStudent2 = students.reduce(
  (acc, val) => acc || val.grade < 60,
  false
);
const anyFailingStudent3 = students
  .map((s) => s.grade < 60)
  .reduce((acc, val) => acc || val, false);
const anyFailingStudent4 = students.some((s) => s.grade < 60);

console.log(anyFailingStudent);
console.log(anyFailingStudent2);
console.log(anyFailingStudent3);
console.log(anyFailingStudent4);

const studentWithStatus = students.map((s) => ({
  ...s,
  passed: s.grade >= 60,
}));
console.log(studentWithStatus);
