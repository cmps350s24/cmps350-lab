const array = [
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
];

function flatten(array) {
  let flatArray = [];

  for (let arr of array) {
    // flatArray = flatArray.concat(arr);
    for (let ele of arr) {
      flatArray.push(ele);
    }
  }
  return flatArray;
}

function max(array) {
  let maxValue = array[0]; // initial value
  for (value of array) {
    // reducer
    if (value > maxValue) {
      maxValue = value;
    }
  }
  return maxValue;
}

console.log(array);
flat = flatten(array);
console.log(flat);
console.log(max(flat));

// function reducer(a, b) {
//   c = a;
//   if (b > a) {
//     c = b;
//   }
//   return c;
// }

// const reducer = (a, b) => (b > a ? b : a);

console.log(flat.reduce((a, b) => (b > a ? b : a)));

// flat.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
flat.sort((a, b) => b - a);
console.log(flat);

function sortd(array) {
  array.sort((a, b) => b - a);
}

// ...[1, 2, 3] -> 1, 2, 3

function square(array) {
  // const newArray = array;
  const newArray = [...array];
  for (let index in newArray) {
    newArray[index] = newArray[index] * newArray[index];
  }
  // for (let value of newArray) {
  //   value = value * value;
  // }
  return newArray;
}

console.log(square(flat));
console.log(flat);

console.log(flat.map((a) => a * a));
console.log(flat);

total = flat.reduce((a, v) => a + v, 0);
average = total / flat.length;
console.log(average);

const sumg40 = (array) =>
  array.filter((e) => e > 40).reduce((a, v) => a + v, 0);

const distinct = (array) =>
  array.filter((val, ind, arr) => arr.indexOf(val) == ind);

console.log(distinct(flat));
