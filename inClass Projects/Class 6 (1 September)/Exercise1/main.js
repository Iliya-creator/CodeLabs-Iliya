// Exercise #1: Scopes - Will it show "John" or "Pete"?
// Create a folder in class-6 called exercise-1. Create the necessary files in this folder to solve the exercise.

// The function sayHi uses an external variable name. When the function runs, which value is it going to use?

// let name = "John";

// function sayHi() {
//   alert("Hi, " + name);
// }

// name = "Pete";

// sayHi(); // what will it show: "John" or "Pete"?
// Such situations are common both in browser and server-side development. A function may be scheduled to execute later than it is created, for instance after a user action or a network request.

// So, the question is: does it pick up the latest changes?

// Will the sayHi call show 'john' or 'pete'. Before executing the code, think about this. To check your answer, execute this code.

// You have solved this exercise when you understand the solution.

// source

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

//It will be Pete.


