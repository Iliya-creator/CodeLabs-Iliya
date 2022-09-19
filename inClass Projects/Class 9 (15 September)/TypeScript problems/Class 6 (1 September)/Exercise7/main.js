function isPrime(num) {
  let prime = true;
  let counter;
  let divArr = [];

  for (counter = 2; counter <= Math.ceil(num / 2); counter++) {
    divArr.push(counter);
  }
  //console.log(divArr);
  divArr.forEach(function (element) {
    if (num % element == 0) {
      prime = false;
    }
  });

  if(num <= 1 || prime == false){
    console.log(`${num} is not a prime`);
  } else {
    console.log(`${num} is a prime`);
  }
}

isPrime(10);
