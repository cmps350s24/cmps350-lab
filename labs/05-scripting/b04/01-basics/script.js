// document.addEventListener("DOMContentLoaded", () => {
//   console.log("hello 5!");
// });

console.log("hello 4!");

// print odd numbers between 1 and 100
let number = 1;
while (number < 100) {
  console.log(number);
  number += 2;
}

// print odd numbers between 1 and 100
for (let number = 1; number < 100; number += 2) {
  console.log(number);
}

const cars = ["Toyota", "Honda", "BMW"];

// add "Volvo" to the end of cars
cars.push("Volvo");

// add "Mercedes" to the beginning of cars
cars.unshift("Mercedes");

function show(array) {
  for (let val of array) {
    console.log(val);
  }

  // for (let key in array) {
  //   console.log(key);
  // }
}

// show cars
show(cars);

// cars[1000] = null;
// show(cars);
// cars[-1] = "hello";
// cars["a"] = undefined;
// show(cars);

// sort cars
cars.sort();
show(cars);

console.log(["+1", 2, 10, -1].sort());

// show cars

cars.sort().reverse();
show(cars);
