const containerEl = document.querySelector
(".container");

for(let i=0; i<30; i++){
    const colorContainerEl = document.createElement("div");

    colorContainerEl.classList.add("color-container");

    containerEl.appendChild(colorContainerEl);
}

// const r = Math.floor(Math.random()*256)
// const g = Math.floor(Math.random()*256)
// const b = Math.floor(Math.random()*256)

// for(let j=0; j<30; j++){
//     const colr = console.log(`#${r}${g}${b}`)
//     c
// }

const colorContainerEls = document.querySelectorAll(".color-container")

generateColors();

function generateColors(){
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = '#' + newColorCode
        colorContainerEl.innerText = '#' + newColorCode
    });
}

function randomColor(){
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = ""
    for(let j=0; j<colorCodeLength; j++){
        const randomNum = Math.floor(Math.random()*chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}
