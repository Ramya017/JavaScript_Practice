const p1 = {
    Score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}
const p2 = {
    Score : 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const WinningScoreSelect = document.querySelector("#playto");
const resetButton = document.querySelector("#reset")

let isGameOver = false;
let winningScore = 5;

function updateScore(player, opponent){
    if(!isGameOver){
        player.Score += 1;
        if(player.Score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            //we have to get rid of this when we reset
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.Score;
    }
}


p1.button.addEventListener('click', () => {
    updateScore(p1,p2)
})
p2.button.addEventListener('click', () => {
    updateScore(p2,p1)
})

WinningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset )
//note: we are just passing it as a refrence and not executing it like reset()
function reset() {
    isGameOver = false;
    for(let p of [p1,p2]){
        p.Score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false;
    }
}
