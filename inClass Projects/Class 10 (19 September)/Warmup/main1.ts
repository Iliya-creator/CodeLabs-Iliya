// Exercise 1:
// Add two to every value of the array except to odd numbers.

function addTwoExceptToOddNumbers(numbers) {
  let newArr = [];
    numbers.forEach(element => {
    if element % 2 == 0 {
        newArr.push(element + 2);
    }else{
        newArr.push(element);
    }
  })
  return newArr;
}






console.log(addTwoExceptToOddNumbers([1,2,3,4,5])); // [1,4,3,6,5]
console.log(addTwoExceptToOddNumbers([101,1,4,10])); // [101,1,6,12]