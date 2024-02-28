import promptSync from "prompt-sync";
const prompt = promptSync();
// const number = prompt("How many? ");
// console.log(number);

// console.log(Object.values(Array.from({ length: 5 })));

function readStudents(size = 5) {
  return Array.from({ length: size }).map(() =>
    // const student = {};
    // student.name = prompt("Name: ");
    // student.gender = prompt("Gender: ");
    // return student;

    ({
      name: prompt("Name: "),
      gender: Number(prompt("Gender: ")),
      age: 17 + Math.floor(Math.random() * (35 - 17 + 1)),
      grade: 0 + Math.floor(Math.random() * (100 - 0 + 1)),
    })
  );
}

// const students = readStudents(2);
// console.log(students);

const students = [
  { name: "John", gender: "Male", grade: 85, age: 23 },
  { name: "Jane", gender: "Female", grade: 77, age: 31 },
  { name: "Dohn", gender: "Male", grade: 92, age: 29 },
  { name: "Fane", gender: "Female", grade: 63, age: 20 },
  { name: "Xohn", gender: "Male", grade: 54, age: 22 },
];

const youngestStudent = students.reduce((a, v) => (a.age < v.age ? a : v));
// students.reduce((a, v) => {
//   if (a.age < v.age) {
//     return a;
//   } else {
//     return v;
//   }
// });
console.log(youngestStudent);

const oldestStudent = students.reduce((a, v) => (a.age > v.age ? a : v));
console.log(oldestStudent);

const averageAge =
  students.map((s) => s.age).reduce((a, v) => a + v, 0) / students.length;
console.log(averageAge);

// const studentsCopy = [].concat(students);
// const studentsCopy2 = [...students];
// const studentsCopy3 = students.map((s) => s);
// const studentsCopy4 = students.filter(() => true);
// const studentsCopy5 = students.reduce((a, v) => [...a, v], []);
// const studentsCopy6 = Array.from(students);
// const medianAge = Array.from(students).sort((a, b) =>
//   a.age < b.age ? -1 : a.age > b.age ? 1 : 0
// );
const sortedAge = Array.from(students)
  .map((s) => s.age)
  .sort((a, b) => a - b);
const medianAge =
  sortedAge.length % 2
    ? sortedAge[(sortedAge.length - 1) / 2]
    : 0.5 *
      (sortedAge[sortedAge.length / 2 - 1] + sortedAge[sortedAge.length / 2]);
console.log(medianAge);

const averageGrade =
  students.map((s) => s.grade).reduce((a, v) => a + v, 0) / students.length;
console.log(averageGrade);

const varianceGrade =
  students
    .map((s) => s.grade)
    .reduce((a, v) => a + Math.pow(v - averageGrade, 2), 0) / students.length;

const varianceGrade2 =
  students
    .map((s) => s.grade)
    .map((g) => Math.pow(g - averageGrade, 2))
    .reduce((a, v) => a + v, 0) / students.length;
console.log(varianceGrade);

const maleStudents = students.filter((s) => s.gender === "Male");
console.log(maleStudents);

const femaleStudents = students.filter((s) => s.gender === "Female");
console.log(femaleStudents);

const averageMaleGrade =
  maleStudents.map((s) => s.grade).reduce((a, v) => a + v, 0) /
  maleStudents.length;
console.log(averageMaleGrade);

const studentsNameAsc = Array.from(students).sort((a, b) =>
  a.name < b.name ? -1 : a.name > b.name ? +1 : 0
);
console.log(studentsNameAsc);

const studentsGradeDesc = Array.from(students).sort(
  (a, b) => b.grade - a.grade
);
console.log(studentsGradeDesc);

const highestGrade = students
  .map((s) => s.grade)
  .reduce((a, v) => (a > v ? a : v));
const studentsHighestGrade = students.filter((s) => s.grade === highestGrade);
console.log(studentsHighestGrade);

const femaleHighestGrade = students
  .filter((s) => s.gender === "Female")
  .map((s) => s.grade)
  .reduce((a, v) => (a > v ? a : v));
const femaleStudentsHighestGrade = students
  .filter((s) => s.gender === "Female")
  .filter((s) => s.grade === femaleHighestGrade);
const femaleStudentsHighestGrade2 = students.filter(
  (s) => s.gender === "Female" && s.grade === femaleHighestGrade
);
console.log(femaleStudentsHighestGrade);

const anyFailingStudents =
  students.map((s) => s.grade).filter((g) => g < 60).length !== 0;
const anyFailingStudents2 = students.reduce((a, v) => a || v.grade < 60, false);
const anyFailingStudents3 = students
  .map((s) => s.grade < 60)
  .reduce((a, v) => a || v, false);
const anyFailingStudents4 = students.some((s) => s.grade < 60);
const anyFailingStudents5 = !students.every((s) => !(s.grade < 60));
console.log(anyFailingStudents);
console.log(anyFailingStudents2);
console.log(anyFailingStudents3);
console.log(anyFailingStudents4);
console.log(anyFailingStudents5);

console.log(students);
const studentsWithPassed = students.map((s) => ({
  ...s,
  passed: s.grade >= 60,
}));
console.log(students);
const studentsWithPassed2 = students.map((s) => {
  s = { ...s };
  s.passed = s.grade >= 60;
  return s;
});
console.log(students);

console.log(studentsWithPassed);
console.log(studentsWithPassed2);

// [...a, e]
// a = { 0: v0, 1: v1, 2: v2 };
// [0: v0, 1: v1, 2: v2, 3: v3, 3: va3]
// {...oldestStudent, k: v}
