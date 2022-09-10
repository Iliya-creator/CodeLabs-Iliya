function redundantReturn() {
    return (str) => {
        return `Hello, this is an example of nested functions: ${str}`;
    }
}

let printText = redundantReturn();

console.log(printText("This is the string passed in as an argument."));
