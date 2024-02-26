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

const students = Array.from({ length: 5 }).map((_, ind) => {
  // numbers[ind] = prompt("Number #" + ind + ": ");
  const name = prompt("Name: ");
  const age = prompt("Age: ");
  return {
    name: name,
    age: age,
  };
});
console.log(students);
