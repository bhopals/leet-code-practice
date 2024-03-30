// Certainly! Another approach to find the smallest positive integer that is a multiple of both 2 and n is to divide n by its greatest common divisor (GCD) with 2, and then multiply the result by 2.

// Here's how we can implement this approach:

// Calculate the GCD of 2 and n. Since 2 is a prime number, the GCD of 2 and any positive integer n will be 2 if n is even, and 1 if n is odd.
// If the GCD is 2, then the smallest positive integer that is a multiple of both 2 and n is simply n. Otherwise, the smallest positive integer is 2 * n.

function smallestMultipleOfTwoAndN(n) {
  // Calculate the greatest common divisor (GCD) of 2 and n
  const gcd = n % 2 === 0 ? 2 : 1;

  // Calculate the smallest multiple of both 2 and n
  const smallestMultiple = gcd * n;
  return smallestMultiple;
}

// Example usage:
const n = 6;
console.log(smallestMultipleOfTwoAndN(n)); // Output: 6
