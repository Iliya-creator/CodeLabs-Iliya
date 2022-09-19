// Exercise #5: Range
// Aim: Write a function that returns an array containing all the numbers inclusive to that range given the start and end values. See examples below.

// Examples

// reversibleInclusiveList(1, 5)    ➞    [1, 2, 3, 4, 5]

// reversibleInclusiveList(2, 8)    ➞    [2, 3, 4, 5, 6, 7, 8]

// reversibleInclusiveList(10, 20)    ➞   [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// reversibleInclusiveList(24, 17)    ➞   [24, 23, 22, 21, 20, 19, 18, 17]
// Notes

// The resulting array's sort order is dependent on the input values.
// All inputs provided in the test scenarios are valid.
// If the start is greater than the end, return a descendingly sorted array; otherwise, ascendingly sorted.

function reversibleInclusiveList(num1, num2) {
    let Arr = [];
    let diff = num1-num2;
    let n1 = num1;
    let n2 = num2;
    if (Math.sign(diff) == -1){
        while (n1 <= n2){
            Arr.push(n1);
            n1++;
        } 
    } else {
        while (n1 >= n2){
            Arr.push(n1);
            n1--;
        }
    }
    return Arr;
}

console.log(reversibleInclusiveList(1, 5)); 
console.log(reversibleInclusiveList(2, 8)); 
console.log(reversibleInclusiveList(10, 20)); 
console.log(reversibleInclusiveList(24, 17)); 
