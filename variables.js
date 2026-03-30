// Declaring variables using let and const
let age;
const name = "John Doe";

// Assigning values to variables
age = 30;

// Following naming conventions
let userAge = age;
const firstName = "Jane";

// Checking data types
console.log(typeof age); // "number"
console.log(typeof name); // "string"

// Differentiating between primitive and non-primitive types
const person = {
  name: "Alice",
  age: 25,
};
const fruits = ["apple", "banana", "cherry"];
console.log(typeof person); // "object"
console.log(typeof fruits); // "object"

// Reassigning values to variables declared with let
let favoriteColor = "blue";
favoriteColor = "green";
console.log(favoriteColor); // "green"

// Using const and let appropriately
const birthYear = 1990;
let currentYear = 2024;

// Adding comments for clarity
// Declaring a variable to store the user's favorite color
let favoriteColor = "blue";

// Reassigning the favorite color
favoriteColor = "green";
console.log(favoriteColor); // "green"