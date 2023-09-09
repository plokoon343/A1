const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorcontainerEl = document.createElement("div");
    colorcontainerEl.classList.add(".color-container");
    containerEl.appendChild(colorcontainerEl);
     
}
const colorcontainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorcontainerEls.forEach( 
        (colorcontainerEl)=>{  
        const newColorCode = randomColor();
        colorcontainerEl.style.
        backgroundColor = "#" + newColorCode; 
        
    });
}
function randomColor(){
    const chars = "0123456789abcdef" 
    const colorcodelength = 6;
    let colorcode = " ";
    for (let index = 0; index <
         colorcodelength; index++) {
        const randomNum = Math.floor(Math.random() *
         chars.length);
        colorcode += chars.substring(randomNum, randomNum + 1);
       
    }
    return colorcode;

}