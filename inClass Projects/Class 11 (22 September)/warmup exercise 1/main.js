// Exercise 1:
// Evaluate the expression of a and b depending on what operator is (..see defined function below).

function calculate(a, b, operator) {
    if (operator == "+"){
        return a+b;
    } else if (operator == "-"){
        return a-b;
    } else if (operator == "*"){
        return a*b;
    } else if (operator == "/"){
        return a/b;
    }
}

console.log(calculate(1,1, "+")); // 2
console.log(calculate(2, 2, '-')); // 0