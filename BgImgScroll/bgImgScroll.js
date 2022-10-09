const bgImageEl = document.getElementById("bg-image")

window.addEventListener("scroll", ()=>{
    // console.log("scrolled");
    updateImage();
})

function updateImage(){
    bgImageEl.style.opacity = 1 - window.pageYOffset/900;

    // console.log(window.pageYOffset, 1-window.pageYOffset/800) //a big number like 900 because we want the opacity to go down from 1(less the 1)

    bgImageEl.style.backgroundSize = 160 - window.pageYOffset/12 + "%"

    // console.log(window.pageYOffset, window.pageYOffset/12)

}