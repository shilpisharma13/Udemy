function multiply(a: unknown) {
  if (typeof a === "number") {
    return a * 2;
  }
  return "Enter a number";
}

console.log(multiply(2));
console.log(multiply("John"));
