// Filename: complexFile.js
// Description: Code demonstrating a complex and sophisticated function

// ComplexCalculation function
function ComplexCalculation(num1, num2) {
  // Check if either number is 0
  if (num1 === 0 || num2 === 0) {
    return "One of the numbers is zero.";
  }

  // Initialize variables
  let result = 0;
  let tempResult = 0;

  // Perform calculations
  for (let i = 1; i <= num1; i++) {
    tempResult += i + num2;
    result += tempResult;
  }

  // Return final result
  return result;
}

// Main program
function main() {
  // Ask user for input
  const num1 = parseInt(prompt("Enter a number:"));
  const num2 = parseInt(prompt("Enter another number:"));

  // Validate input
  if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input. Please enter numbers only.");
    return;
  }

  // Perform complex calculation
  const output = ComplexCalculation(num1, num2);

  // Display result
  console.log("The result of the complex calculation is:", output);
}

// Call the main function when the script is executed
main();
