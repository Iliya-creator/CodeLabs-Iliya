//What will moar log to the console?

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

//I think that it will return: -80