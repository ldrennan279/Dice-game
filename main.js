let player1score = 0;
let player2score = 0;
let player1Turn = true;

const score1 = document.getElementById("score1")
const score2 = document.getElementById("score2")
const dice1 = document.getElementById("dice1")
const dice2 = document.getElementById("dice2")
const dice1Results = document.getElementById("dice1Result")
const dice2Results = document.getElementById("dice2Result")
const message = document.getElementById("message")
const rollDiceBtn = document.getElementById("rollDice")
const resetGameBtn = document.getElementById("resetGame")

rollDiceBtn.addEventListener("click", function(){
    let randomNumber = Math.floor((Math.random()*6)+1)
    if (player1Turn){
        player1score += randomNumber
        dice1Results.textContent = randomNumber
        score1.textContent = `Score: ${player1score}`
        dice2.classList.add("active")
        dice1.classList.remove("active")
        message.innerHTML = `Player 2 roll the dice!!`
        message.style.textShadow = "0px 0px 30px red"
    } else {
        player2score += randomNumber
        dice2Results.textContent = randomNumber
        score2.textContent = `Score: ${player2score}`
        dice1.classList.add("active")
        dice2.classList.remove("active")
        message.innerHTML = `Player 1 roll the dice!!`
        message.style.textShadow = "0px 0px 30px Yellow"
    }
     if (player1score >= 20){
        message.innerHTML = `Player 1 has Won!!!!`
        message.style.background = "green"
        showresetbutton()
    } else if (player2score >= 20){
        message.innerHTML = `Player 2 has Won!!!!`
        message.style.background = "green"
        showresetbutton()
    }
    player1Turn = !player1Turn
})

function showresetbutton(){
    rollDiceBtn.style.display = "none"
    resetGameBtn.style.display = "block"
}
resetGameBtn.addEventListener("click", function(){
    player1score = 0;
    player2score = 0;
    score1.innerHTML = `Score:`
    score2.innerHTML = `Score:`
    dice1Results.innerHTML = `-`
    dice2Results.innerHTML = `-`
    message.innerHTML = `Player 1 Roll the Dice`
    dice1.classList.add("active")
    dice2.classList.remove("active")
    rollDiceBtn.style.display = "block"
    resetGameBtn.style.display = "none"
    player1Turn = true
    message.style.textShadow = " 0px 0px 30px yellow"
    message.style.background = "none"
})
   