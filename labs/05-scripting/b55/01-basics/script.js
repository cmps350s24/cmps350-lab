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
  for (let value of array) {
    console.log(value);
  }
}

// show cars
show(cars);

// cars[100] = "Kia";
// show(cars);

// sort cars
cars.sort();
cars.reverse();

cars.sort().reverse();

// show cars
show(cars);
