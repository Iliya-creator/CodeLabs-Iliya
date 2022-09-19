// Aim: Define a function that takes an array with objects and returns the sum of people's budgets.

function getBudgets(arr){
    let sum = 0;
    arr.forEach(element => {sum += element.budget});
    return sum;
}

let budget1 = [
      { name: "John", age: 21, budget: 23000 },
      { name: "Steve",  age: 32, budget: 40000 },
      { name: "Martin",  age: 16, budget: 2700 }
    ];

let budget2 = [
      { name: "John",  age: 21, budget: 29000 },
      { name: "Steve",  age: 32, budget: 32000 },
      { name: "Martin",  age: 16, budget: 1600 }
    ];

// **************************************************
// TESTS:

// getBudgets(budget1)   // ➞    65700

// getBudgets(budget2)   // ➞    62600

console.log(getBudgets(budget1));
console.log(getBudgets(budget2));

// Good! I am correct!