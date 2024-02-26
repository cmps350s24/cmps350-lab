const array = [
  [2, 3],
  [34, 89],
  [55, 101, 34],
  [34, 89, 34, 99],
];

function flatten(array) {
  let flatArray = [];
  for (let subArray of array) {
    // for (let val of subArray) {
    //   flatArray.push(val);
    // }
    flatArray = flatArray.concat(subArray);
  }
  return flatArray;
}

function totalValue(array) {
  let total = 0;
  for (let val of array) {
    total = total + val;
  }
  return total;
}

function reduction(array, reducer, initialValue) {
  let accumulator = initialValue;
  for (let val of array) {
    accumulator = reducer(accumulator, val);
  }
  return accumulator;
}

const flat = flatten(array);
console.log(flat);

function sum(a, b) {
  return a + b;
}

// const total = reduction(flat, (a, b) => a + b, 0); // total
const total = flat.reduce((a, b) => a + b, 0);
console.log(total);

const max = flat.reduce((a, v) => (v > a ? v : a), flat[0]);
console.log(max);

const square = flat.map((v) => v * v);
console.log(square);

// ...[1, 2, 3, 4] -> 1, 2, 3, 4
// [a, b, c] -> f(a, b, c)
// f(...[a, b, c])
// [a, b, c] + [d, e] -> [...[a, b, c], ...[e, f]]
//   [...array]-> array(copy)

// const array2 = flat.concat([]).sort();
// const sortd = [...flat].sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
const sortd = [...flat].sort((a, b) => b - a);
console.log(sortd);

const average = flat.reduce((a, b) => a + b, 0) / flat.length;

const sumg40 = flat.filter((a) => a > 40).reduce((a, v) => a + v, 0);
console.log(sumg40);

const distinct = flat.filter((val, ind, arr) => arr.indexOf(val) === ind);
console.log(distinct);
