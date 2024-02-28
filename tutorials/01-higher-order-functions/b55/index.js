// export const max = () => undefined;

export function max(...args) {
  return Math.max(...args);
}

export function range(a, b) {
  return Array.from({ length: b - a + 1 }).map((_, ind) => ind + a);
}

// export { max };
