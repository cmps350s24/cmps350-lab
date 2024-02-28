export function max(...args) {
  //args is an array
  return Math.max(...args);
}

export function range(a, b) {
  return Array.from({ length: b - a + 1 }).map((_, ind) => a + ind);
}

export function rand(a, b) {
  return a + Math.floor(Math.random() * (b - a));
}

export function randoms(n, a, b) {
  return Array.from({ length: n }).map(() => rand(a, b));
}

export function factorial(n) {
  return range(1, n).reduce((a, v) => a * v, 1);
}

export function divisors(n) {
  return range(1, n).filter((k) => n % k === 0);
}

export function isPrime(n) {
  // return divisors(n).length === 2;
  return range(2, n - 1).every((k) => n % k !== 0);
}

export function primeProduct(a, b) {
  return range(a, b)
    .filter(isPrime)
    .reduce((a, v) => a * v, 1);
}

const array = range(1, 20);

console.log("Max:", max(7, 1, 2, -3));
console.log("Max:", max(1, 5, -10, 23, 0, -7, 18));
console.log("Range 1 to 10:", range(1, 10));
console.log("Random 20, 1 to 100:", randoms(20, 1, 100));
console.log("Factorial 0:", factorial(0));
console.log("Factorial 5:", factorial(5));
console.log("Divisors 1:", divisors(1));
console.log("Divisors 7:", divisors(7));
console.log("Divisors 12:", divisors(12));
// console.log("Prime 1:", isPrime(1));
// console.log("Prime 23:", isPrime(23));
// console.log("Primes < 100:", range(1, 100).filter(isPrime));
// console.log("PrimeProduct 1 to 100:", primeProduct(1, 100));
// console.log("FactorialSum 1 to 100:", factorialSum(1, 100));
// console.log("Tally 1 to 20:", tally(array));
// console.log("Reverse 1 to 20:", reverse(array));

// export { max, range };
