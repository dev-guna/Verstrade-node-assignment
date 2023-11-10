const findFibonacci = (n, memoization = {}) => {
  if (n <= 1) return n;
  if (memoization[n]) return memoization[n];
  memoization[n] = findFibonacci(n - 1, memoization) + findFibonacci(n - 2, memoization);
  return memoization[n];
}

const position_number = 10;
const response = findFibonacci(position_number);

console.log(`Fibonacci position number ${position_number} => ${response}`);
