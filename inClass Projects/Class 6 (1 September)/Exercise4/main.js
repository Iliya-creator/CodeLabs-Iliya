let triangleHeight = 123;
let triangleBase = 12345;

function triangleArea(baseLength, height){
return (0.5*baseLength*height);
}

console.log(`The area of a triangle with base ${triangleBase} units and height ${triangleHeight} units, is ${triangleArea(triangleBase, triangleHeight)} units squared.`)