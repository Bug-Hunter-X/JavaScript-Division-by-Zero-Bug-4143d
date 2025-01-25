function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling for the edge case
  }
  return a / b; // Potential division by zero error
}