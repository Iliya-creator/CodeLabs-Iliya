function changeBackgroundColor(color){
    //let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.querySelector("*").style.backgroundColor = color;
    document.querySelector("button").style.backgroundColor = color;
}

function changeBackground(color) {
    console.log("it works")

    document.body.style.backgroundColor = color
}

function colorChanged() {
    console.log("Color Changed")
    console.log()
}
const colorPicker = document.getElementById("colorPicker")
colorPicker.addEventListener("change", colorChanged)


// function changeBackgroundAndTextColors(){
//     let color1 = "#" + Math.floor(Math.random()*16777215).toString(16);
//     let color2 = "#" + Math.floor(Math.random()*16777215).toString(16);
//     document.querySelector("*").style.color = color1;
//     document.querySelector("*").style.backgroundColor = color2;
//     document.querySelector("button").style.color = color1;
//     document.querySelector("button").style.backgroundColor = color2;
    
// }