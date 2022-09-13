// Aim: Create a function that takes a string as input, capitalizes a letter if its ASCII code is even, and returns its lower case version if its ASCII code is odd.

function asciiCapitalize(string){
    let newString = "";
    for(let i of string){
        if (i.charCodeAt()  % 2 == 0){
            newString += i.toUpperCase();
        }else{
            newString += i.toLowerCase();
        }
    }
    return newString;
}


console.log(asciiCapitalize("to be or not to be!"))    //➞    "To Be oR NoT To Be!"

console.log(asciiCapitalize("THE LITTLE MERMAID"))    //➞    "THe LiTTLe meRmaiD"

console.log(asciiCapitalize("Oh what a beautiful morning."))    //➞    "oH wHaT a BeauTiFuL moRNiNg."