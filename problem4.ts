// Solution 1: Mathematical formula approach - O(1) time complexity and O(1) space complexity
function sum_to_n_a(n: number): number {
  if (n <= 0) return 0;

  // Use the mathematical formula for sum of first n natural numbers
  // This has O(1) time complexity as it's a direct calculation
  return (Math.floor(n) * (Math.floor(n) + 1)) / 2;
}

// Solution 2: Iterative approach - O(n) time complexity and O(1) space complexity
function sum_to_n_b(n: number): number {
  if (n <= 0) return 0;
  n = Math.floor(n);

  // Use a loop to calculate the sum
  // This has O(n) time complexity as we iterate from 1 to n
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// Solution 3: Recursive approach - O(n) time and O(n) space complexity
function sum_to_n_c(n: number): number {
  if (n <= 0) return 0;
  n = Math.floor(n);

  // Use recursion to calculate the sum
  // This has O(n) time complexity and O(n) space complexity due to the call stack
  return n + sum_to_n_c(n - 1);
}

// Test the functions
function testFunctions() {
  const testValues = [5, 10, 100, 0, -5, 3.7];

  console.log("Testing sum calculation functions:\n");

  testValues.forEach((n) => {
    console.log(`n = ${n}:`);
    console.log(`  sum_to_n_a (Mathematical): ${sum_to_n_a(n)}`);
    console.log(`  sum_to_n_b (Iterative):    ${sum_to_n_b(n)}`);
    console.log(`  sum_to_n_c (Recursive):    ${sum_to_n_c(n)}`);
    console.log("");
  });
}

// Run the tests
testFunctions();
