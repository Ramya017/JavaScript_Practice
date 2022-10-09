const textareaEl = document.getElementById('textarea');

const totalCharEl = document.getElementById('totalChar')

const remainingEl = document.getElementById('remaining')

textareaEl.addEventListener("keyup", ()=>{
    updateCounter();
})

updateCounter();

function updateCounter(){
    totalCharEl.innerText = textareaEl.value.length;
    remainingEl.innerText = textareaEl.getAttribute("maxlength")-textareaEl.value.length;
}

//make sure you refresh the text area as well(dtl)