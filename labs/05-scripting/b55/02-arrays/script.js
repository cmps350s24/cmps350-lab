const array = [
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
];

// ...[a, b, c] => a, b, c
// [...[1, 2, 3], ...[4, 5, 6]]->
// [1, 2, 3, 4, 5, 6]

// [a, b, c] + d
// [...[a, b, c], d]

// [1, 2, 3] -> f(1, 2, 3)
// f(...[1, 2, 3])

function flatten(array) {
  let flatArray = [];

  for (let subArray of array) {
    flatArray = flatArray.concat(subArray);
    // flatArray = [...flatArray, ...subArray];
  }

  return flatArray;
}

console.log(flatten(array));

// const array1 = [1, 2, 3];
// const array2 = [...array1];
// array2[0] = -1;

// console.log(array2);
// console.log(array1);

function max(array) {
  let maxValue = array[0];

  for (let value of array) {
    // if (value > maxValue) {
    //   maxValue = value;
    // }
    maxValue = value > maxValue ? value : maxValue;
    // maxValue = max2(value, maxValue);
    // total = total + value;
    // minValue = value < minValue ? value : minValue;
  }

  return maxValue;
}

console.log(max(array));

// function max(a, b) {
//   return a > b ? a : b;
// };

const max2 = (a, b) => (a > b ? a : b);
console.log(max2(1, 2));

const flat = flatten(array);
console.log(flat.reduce(max2, flat[0]));
console.log((total = flat.reduce((a, b) => a + b, 0))); // total
console.log(flat.map((a) => a * a)); // squared
console.log(total / flat.length); // average
console.log(flat.filter((a) => a > 40).reduce((a, b) => a + b, 0)); // sumg40
console.log(flat.filter((v, i, arr) => arr.indexOf(v) == i)); // distinct
