// Aim: Fix this code so it ultimately prints 'remembers me'.

function parent(x) {
    return function closure() {
      // Closure is declared here.
      return x;
    };
  }
  
  const remember = parent("remembers me");
  console.log(remember()); 
  
  // done!