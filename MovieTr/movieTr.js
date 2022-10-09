const btnEl = document.querySelector(".btn");

const closeIconEl = document.querySelector(".close-icon");

const videoEl = document.querySelector("video");

const trailerContainerEl = document.querySelector(".trailer-container");

btnEl.addEventListener('click', ()=>{
    trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener('click', ()=>{
   trailerContainerEl.classList.add("active");
   
   videoEl.pause();

   videoEl.currentTime = 0; 
});





// 1)the wactch now button
// 2)trailer container
// 3)close button