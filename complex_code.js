/* 
   File: complex_code.js
   Description: A complex JavaScript code example demonstrating various advanced concepts and techniques.
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to get the person's details
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Function to generate Fibonacci numbers using an iterative approach
function generateFibonacciSeries(count) {
  const series = [0, 1];
  if (count <= 2) {
    return series.slice(0, count);
  } else {
    for (let i = 2; i < count; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
  }
  return series;
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// Array of person objects
const people = [
  new Person("John Doe", 25),
  new Person("Jane Smith", 30),
  new Person("Mark Johnson", 35)
];

// Print the details of each person
for (let person of people) {
  console.log(person.getDetails());
}

// Execute factorial function and log the result
const num = 5;
console.log(`Factorial of ${num} is: ${factorial(num)}`);

// Execute generateFibonacciSeries function and log the result
const fibonacciCount = 10;
console.log(`Fibonacci series (${fibonacciCount} numbers): ${generateFibonacciSeries(fibonacciCount)}`);

// Check if a string is a palindrome
const palindromeStr = "madam";
console.log(`"${palindromeStr}" is a palindrome: ${isPalindrome(palindromeStr)}`);