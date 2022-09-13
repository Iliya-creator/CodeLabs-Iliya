
// Aim: Create a function that takes a "base number" as an argument. This function should return another function that takes a new argument and returns the sum of the "base number" and the new argument.


// Calling makePlusFunction(5) returns a new function that takes an input,
// and returns the result when adding 5 to it.



// Calling makePlusFunction(10) returns a new function that takes an input,
// and returns the result when adding 10 to it.


function makePlusFunction(base){
    return ((number)=>{
        return base + number;
    });
}

const plusFive = makePlusFunction(5)

plusFive(2)    //➞    7

plusFive(-8)    //➞    -3

const plusTen = makePlusFunction(10);
plusTen(0)    //➞    10

plusTen(188)    //➞    198

plusFive(plusTen(0))    //➞    15


plusTen(0)    //➞    10

plusTen(188)    //➞    198

plusFive(plusTen(0))    //➞    15


console.log(plusFive(plusTen(0)));