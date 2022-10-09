const num1= Math.floor(Math.random()*11)+1;

const num2= Math.floor(Math.random()*11)+1;
let correctAns = num1*num2;

const inputEl =document.getElementById('input')

let questionEl = document.getElementById('question');
questionEl.innerText = `What is ${num1} multiplied ${num2}?`

let scoreEl = document.getElementById('score')

let score = JSON.parse(localStorage.getItem("score"));

scoreEl.innerText = `score : ${score}`
if(!score){
    score=0;
}

const formEl = document.getElementById("form")
formEl.addEventListener('submit' , () =>{
   const userAns = +inputEl.value;
   if(userAns === correctAns){
    score++;
    updateLocalStorage();
   }else{
    score--;
    updateLocalStorage();
   }
})


function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}





//since we have added a form we have to track the submission of the form and get the data from it.
//We haven't stored the score anywhere, so it's not able to track whether it wants to decrease or increase it
//the browser storage does not allow to store numbers in the local storage(it only allows to store string), this is for the security of the browser(in order to convert this number to a string we use json)