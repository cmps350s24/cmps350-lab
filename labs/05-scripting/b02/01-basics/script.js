// console.log("Hello 2!");

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Hello 3!");
// });

// print odd numbers between 1 and 100
// let number = 1;
// while (number <= 100) {
//   console.log(number);
//   number += 2;
// }

// print odd numbers between 1 and 100
// for (let number = 1; number <= 100; number += 2) {
//   console.log(number);
// }

const cars = ["Toyota", "Honda", "BMW"];

// add "Volvo" to the end of cars
cars.push("Volvo");
console.log(cars);

// add "Mercedes" to the beginning of cars
cars.unshift("Mercedes");
console.log(cars);

function show(array) {
  for (let car of array) {
    console.log(car);
  }
}

// show(cars);
// cars[10000] = "Kia";
// show(cars);

// show cars
show(cars);

// sort cars
// cars.sort()
// cars.reverse();
cars.sort().reverse();

// show cars
show(cars);
