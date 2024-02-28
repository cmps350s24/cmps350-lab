import promptSync from "prompt-sync";
const prompt = promptSync();
// const number = prompt("How many? ");
// console.log(number);

// const numbers = [];
// input 4 numbers
// for (let count = 0; count < 4; count += 1) {
//   numbers.push(prompt("Number #" + count + ": "));
// }
// console.log(numbers);

// console.log(Object.keys(Array.from({ length: 5 })));

function readStudents(numberOfStudents = 5) {
  return Array.from({ length: numberOfStudents }).map(() => {
    // numbers[ind] = prompt("Number #" + ind + ": ");

    return {
      name: prompt("Name: "),
      gender: prompt("Gender: "),
      age: Math.floor(17 + Math.random() * (35 - 17 + 1)),
      grade: Math.floor(0 + Math.random() * (100 - 0 + 1)),
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
const youngestStudent2 = students.reduce((a, v) => {
  if (a.age < v.age) {
    return a;
  } else {
    return v;
  }
});

const youngestStudent = students.reduce((a, v) => (a.age < v.age ? a : v));
console.log(youngestStudent);

const oldestStudent = students.reduce((a, v) => (a.age > v.age ? a : v));
console.log(oldestStudent);

const averageStudentAge =
  students.map((s) => s.age).reduce((a, v) => a + v) / students.length;
console.log(averageStudentAge);

// const copyStudents = [...students];
// const copyStudents = Array.from(students);
// const copyStudents = students.map(s => s);
const sortedStudentAges = students.map((s) => s.age).sort((a, b) => a - b);
const medianStudentAge =
  sortedStudentAges.length % 2
    ? sortedStudentAges[Math.floor(sortedStudentAges.length / 2)]
    : (sortedStudentAges[sortedStudentAges.length / 2 - 1] +
        sortedStudentAges[sortedStudentAges.length / 2]) /
      2;
console.log(medianStudentAge);

const averageGrade =
  students.map((s) => s.grade).reduce((a, v) => a + v) / students.length;
console.log(averageGrade);

const varianceGrade =
  students
    .map((s) => s.grade)
    .reduce((a, v) => a + Math.pow(v - averageGrade, 2)) / students.length;
console.log(varianceGrade);

const femaleStudents = students.filter((s) => s.gender === "Female");
console.log(femaleStudents);

const maleStudents = students.filter((s) => s.gender === "Male");
console.log(maleStudents);

const maleGrades = maleStudents.map((s) => s.grade);
const maleAverageGrade = maleGrades.reduce((a, v) => a + v) / maleGrades.length;
console.log(maleAverageGrade);

const studentsNameAsc = Array.from(students).sort((a, b) =>
  a.name < b.name ? -1 : a.name > b.name ? 1 : 0
);
console.log(studentsNameAsc);

const studentsGradeDesc = Array.from(students).sort(
  (a, b) => b.grade - a.grade
);
console.log(studentsGradeDesc);

const highestGrade = students
  .map((s) => s.grade)
  .reduce((a, v) => (a > v ? a : v));
// .reduce(Math.max);
const studentHighestGrade = students.filter((s) => s.grade === highestGrade);
console.log(studentHighestGrade);

const femaleHighestGrade = students
  .filter((s) => s.gender === "Female")
  .map((s) => s.grade)
  .reduce((a, v) => (a > v ? a : v));
const studentFemaleHighestGrade = students
  .filter((s) => s.gender === "Female")
  .filter((s) => s.grade === highestGrade);
// .filter((s) => s.gender === "Female" && s.grade === highestGrade)
console.log(studentFemaleHighestGrade);

const anyFailingStudents = students.filter((s) => s.grade < 60).length > 0;
const anyFailingStudents2 = students.reduce((a, s) => s.grade < 60 || a, false);
const anyFailingStudents3 = students
  .map((s) => s.grade < 60)
  .reduce((a, v) => a || v, false);
const anyFailingStudents4 = students.some((s) => s.grade < 60);
console.log(anyFailingStudents);

const studentWithStatus = students.map((s) => {
  s.passed = s.grade >= 60;
  return s;
});
const studentWithStatus2 = students.map((s) => ({
  ...s,
  passed: s.grade >= 60,
}));
console.log(studentWithStatus);
console.log(studentWithStatus2);
