// Aim: Create the function that takes an array with objects and returns the sum of people's budgets.

function getBudgets(arr) {
  let sum = 0;
  arr.forEach((element) => (sum += element.budget));
  return sum;
}

let one = getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
]); // ➞    65700

let two = getBudgets([
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve", age: 32, budget: 32000 },
  { name: "Martin", age: 16, budget: 1600 },
]); // ➞    62600

console.log(one);
console.log(two);
