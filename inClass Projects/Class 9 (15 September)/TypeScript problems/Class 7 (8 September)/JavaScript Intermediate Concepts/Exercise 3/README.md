
# Exercise #3: Closures - Nested functions

In class-6, create a folder called exercise-3. Create the necessary files in this folder to solve the exercise.

You may need a piece of paper.

  let x = 10;

  function foo(a) {
    let b = 20;

    function bar(c) {
      let d = 30;
      return boop(x + a + b + c + d);
    }

    function boop(e) {
      console.log(e * -1);
    }

    return bar;
  }

  let moar = foo(5); // Closure

  moar(15);

What will moar log to the console?

Before executing the code, think about this. To check your answer, execute this code.

#### You have solved this exercise when you understand the solution.