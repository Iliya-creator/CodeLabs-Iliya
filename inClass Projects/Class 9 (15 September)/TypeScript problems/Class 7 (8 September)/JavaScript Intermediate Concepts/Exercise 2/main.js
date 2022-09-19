// What will sayHelloClosure() log to the console?


function sayHello() {
    let say = function () {
      console.log(hello);
    };
    // Local variable that ends up within the closure
    let hello = "Hello, world!";
    return say;
  }
  var sayHelloClosure = sayHello();
  sayHelloClosure();
// Good, I understand
