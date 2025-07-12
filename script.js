// const getColor = () =>{
//     //Hex Code
//     const randomNumber =Math.floor(Math.random()*16777215);
//    const randomCode = "#"+randomNumber.toString(16);
// //    console.log(randomNumber.randomCode);
//    document.body.style.backgroundColor = randomCode;
// }

// document.getElementById("btn").addEventListener(
//     "click",
//     getColor
// )
// getColor();



const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current-colr");
console.log(currentColor);


function randomColorGenrator() {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor;
}

mainButton.addEventListener("click", ()=>{
    const randomColor = randomColorGenrator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent= randomColor;
})