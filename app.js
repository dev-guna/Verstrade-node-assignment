const findFibonacci = (n) => {
  if (n <= 1) return n;
  return findFibonacci(n - 1) + findFibonacci(n - 2);
}

const position_number = 10;
const response = findFibonacci(position_number);

console.log(`Fibonacci position number ${position_number} => ${response}`);
