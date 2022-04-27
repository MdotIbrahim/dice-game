let score1 = 0;
let score2 = 0;

let scoreInHTML = document.getElementById("score");
let diceClass = document.getElementsByClassName("dice");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
let dice4 = document.getElementById("dice4");
let dice5 = document.getElementById("dice5");
let dice6 = document.getElementById("dice6");
const rollButton = document.getElementById("roll");
const startButton = document.getElementById("startAgain");

diceList = [dice1, dice2, dice3, dice4 , dice5 , dice6];

const checkDice = (dicenum, score1) => {
    if (score1 > 20) {
        scoreInHTML.textContent = `You won! Final Score: ${score1}`;
        rollButton.style.display = "none";
        startButton.style.display = "block";
    }else if (dicenum == 1) {
            scoreInHTML.textContent = `You rolled the forbidden ${dicenum}! Final Score: ${score1}.`;
            rollButton.style.display = "none";
            startButton.style.display = "block";
        }
}

let randomDiceNumber = 0;
rollButton.addEventListener("click", () => {
    randomDiceNumber = Math.floor((Math.random()* 6) + 1);

    dice1.style.display = "none";
    dice2.style.display = "none";
    dice3.style.display = "none";
    dice4.style.display = "none";
    dice5.style.display = "none";
    dice6.style.display = "none";
    
    // diceClass.style.display="block";
    // for (let dice in diceList) {
    //     if (dice.style.display == "block")
    //         dice.style.display = "none"
    // }
    
    diceList[randomDiceNumber - 1].style.display="block";
    score1 += randomDiceNumber;
    scoreInHTML.textContent = `You rolled a ${randomDiceNumber}. Score: ${score1}`;
    checkDice(randomDiceNumber, score1);
    
})

startButton.addEventListener("click", () => {
    rollButton.style.display = "block";
    score1 = 0;
    scoreInHTML.textContent = `Score: ${score1}`;
    dice1.style.display = "none";
    dice2.style.display = "none";
    dice3.style.display = "none";
    dice4.style.display = "none";
    dice5.style.display = "none";
    dice6.style.display = "none";
    startButton.style.display = "none";
})

// console.log(randomDiceNumber)