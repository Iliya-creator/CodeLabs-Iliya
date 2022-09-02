let arr1 = [
  [1, 2],
  [1, 1],
  [2, 3],
];
let arr2 = [
  [10, 2],
  [5, 0],
  [2, 3],
];
let arr3 = [
  [1, 2],
  [2, 3],
  [3, 4],
];
let arr4 = [
  [1, 2],
  [0, 3],
  [3, 0],
];

function product(array) {
  let multArr = [];
  let sum = 0;
  array.forEach((element) => {
    multArr.push(element[0] * element[1]);
  });

  multArr.forEach((element) => {
    sum = sum + element;
  });
  return sum;
}

console.log(
  product([
    [1, 2],
    [1, 1],
    [2, 3],
  ])
); //➞    9
// 1 * 2 + 1 * 1 + 2 * 3

console.log(
  product([
    [10, 2],
    [5, 0],
    [2, 3],
  ])
); //➞    26
// 10 * 2 + 5 * 0 + 2 * 3

console.log(
  product([
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); //➞    20
// 1 * 2 + 2 * 3 + 3 * 4

console.log(
  product([
    [1, 2],
    [0, 3],
    [3, 0],
  ])
); //➞    2
// 1 * 2 + 0 * 3 + 3 * 0
