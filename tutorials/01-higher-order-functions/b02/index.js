export function max(...args) {
  return Math.max(...args);
}

export function range(a, b) {
  return Array.from({ length: b - a + 1 }).map((_, ind) => a + ind);
}

export function rand(a, b) {
  return Math.round(a + (b - a) * Math.random());
}

export function randoms(n, a, b) {
  return Array.from({ length: n }).map(() => rand(a, b));
}

export function factorial(n) {
  if (n < 0) {
    return 0;
  } else if (n === 0 || n === 1) {
    return 1;
  }

  // return n === 0 ? 1 : n * factorial(n - 1);
  return range(2, n).reduce((acc, val) => acc * val, 1);
}

export function divisors(n) {
  return range(1, n).filter((k) => n % k === 0);
}

export function isPrime(n) {
  return divisors(n).length === 2;
}

export function primeProduct(a, b) {
  return range(a, b)
    .filter(isPrime)
    .reduce((a, v) => a * v, 1);
}

function tally(array) {
  return array.reduce(
    (a, v) => [...a, (a.length ? a[a.length - 1] : 0) + v],
    []
  );
}

function reverse(array) {
  return array.reduce((a, v) => [v, ...a], []);
}

function filter(array, p) {
  return array.reduce((a, v) => (p(v) ? [...a, v] : a), []);
}

function map(array, f) {
  return array.reduce((a, v) => [...a, f(v)], []);
}

// export { max };

const array = range(1, 20);

console.log("Max:", max(7, 1, 2, -3));
console.log("Max:", max(1, 5, -10, 23, 0, -7, 18));
console.log("Range 1 to 10:", range(1, 10));
console.log("Random 20, 1 to 100:", randoms(20, 1, 100));
console.log("Factorial 0:", factorial(0));
console.log("Factorial 5:", factorial(5));
console.log("Divisors 7:", divisors(7));
console.log("Divisors 12:", divisors(12));
console.log("Prime 1:", isPrime(1));
console.log("Prime 23:", isPrime(23));
console.log("PrimeProduct 1 to 100:", primeProduct(1, 100));
console.log("Tally 1 to 20:", tally(array));
console.log("Reverse 1 to 20:", reverse(array));
