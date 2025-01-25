function foo(a, b) {
  if (b === 0) {
    if (a === 0) {
      return 0; // Handle both a and b being 0
    } else {
      return Infinity; // or throw an error: throw new Error('Division by zero');
    }
  }
  return a / b;
}