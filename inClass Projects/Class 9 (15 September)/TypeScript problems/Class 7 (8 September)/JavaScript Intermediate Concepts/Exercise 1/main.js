// The function sayHi uses an external variable name. When the function runs, which value is it going to use?

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    let num = 1;
    function checkNumber() {
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();
  number();
  // Good, I understand
  