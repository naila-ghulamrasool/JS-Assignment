let x = 10;
let y = 5;

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);

let age = prompt("Enter your age:");

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

let fruits = ["Apple", "Mango", "Cherry", "Peach"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;

alert("Hello, " + fullName);

let isAdmin = true;
let isLoggedIn = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, admin!");
  }
} else {
  console.log("Dont welcome in admin.");
}

