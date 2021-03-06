let score1 = 0;
let score2 = 0;
let saveScore1 = 0;
let saveScore2 = 0;
let holdValue = 1;
let randomDiceNumber = 0;
let winCount1 = 0;
let winCount2 = 0;

let score1InHTML = document.getElementById("score1");
let score2InHTML = document.getElementById("score2");
let saveScore1InHTML = document.getElementById("saveScore1");
let saveScore2InHTML = document.getElementById("saveScore2");
let player1InHTML = document.getElementById("player1");
let player2InHTML = document.getElementById("player2");
// let diceClass = document.getElementsByClassName("dice");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
let dice4 = document.getElementById("dice4");
let dice5 = document.getElementById("dice5");
let dice6 = document.getElementById("dice6");
let diceList = [dice1, dice2, dice3, dice4 , dice5 , dice6];
const rollButton = document.getElementById("roll");
const startButton = document.getElementById("startAgain");
const holdButton = document.getElementById("hold");
let winCount1InHTML = document.getElementById("wincount1");
let winCount2InHTML = document.getElementById("wincount2");

const checkDice = (dicenum, score1, score2) => {
    if (dicenum == 1) {
        switchSide()
    }else if (score1 > 20) {
        score1InHTML.style.color = "#016FB9"
        score1InHTML.textContent = `Score: ${score1}`;
        player1InHTML.textContent = `You Won!`;
        rollButton.style.display = "none";
        holdButton.style.display = "none";
        winCount1 += 1
        winCount1InHTML.style.display = "block";
        winCount1InHTML.textContent = `${winCount1}`
    }else if (score2 > 20) {
        score2InHTML.style.color = "#016FB9"
        score2InHTML.innerHTML  = `Score: ${score2}`;
        player2InHTML.textContent = `You Won!`;
        rollButton.style.display = "none";
        holdButton.style.display = "none";
        winCount2 += 1
        winCount2InHTML.style.display = "block";
        winCount2InHTML.textContent = `${winCount2}`
    }
}

const switchSide = () => {
    if (holdValue == 1) {
        if (randomDiceNumber != 1){
            saveScore1 = score1;
        }else{
            score1InHTML.textContent = `Score reset to ${saveScore1}`;
            // score1 = 0 //error
            score1 = saveScore1 
        }
        saveScore1InHTML.textContent = `Current Reset: ${saveScore1}`;
        holdValue = 2;
        player2InHTML.style.color = "red";
        player1InHTML.style.color = "white";
        player2InHTML.textContent = `Player 2's Turn`;
        player1InHTML.textContent = `Player 1`; 
    }else{
        if (randomDiceNumber != 1){
            saveScore2 = score2;
        }else{
            score2InHTML.textContent = `Score reset to ${saveScore2}!`;
            // score2 = 0 //error
            score2 = saveScore2
        }
        saveScore2InHTML.textContent = `Current Reset: ${saveScore2}`
        holdValue = 1
        player1InHTML.style.color = "red";
        player2InHTML.style.color = "white";
        player1InHTML.textContent = `Player 1's Turn`;
        player2InHTML.textContent = `Player 2`;
    }
}

rollButton.addEventListener("click", () => {
    randomDiceNumber = Math.floor((Math.random()* 6) + 1);
    for (let i = 0; i < diceList.length; i++) {
        diceList[i].style.display = "none"
    }
    if (holdValue == 1){
        diceList[randomDiceNumber - 1].style.display="block";
        score1 += randomDiceNumber;
        // score1 += saveScore1;
        score1InHTML.textContent = `Score: ${score1}`;
        checkDice(randomDiceNumber, score1, score2);
    }else {
        diceList[randomDiceNumber - 1].style.display="block";
        score2 += randomDiceNumber;
        // score2 += saveScore2;
        score2InHTML.textContent = `Score: ${score2}`;
        checkDice(randomDiceNumber, score1, score2);
    }
})

startButton.addEventListener("click", () => {
    rollButton.style.display = "block";
    holdButton.style.display = "block";
    score1 = 0;
    score2 = 0;
    saveScore1 = 0;
    saveScore2 = 0;
    holdValue = 1;
    score1InHTML.textContent = `Score: ${score1}`;
    score2InHTML.textContent = `Score: ${score2}`;
    score1InHTML.style.color = "white";
    score2InHTML.style.color = "white";
    saveScore1InHTML.textContent = `Current Reset: ${saveScore1}`;
    saveScore2InHTML.textContent = `Current Reset: ${saveScore2}`;
    player1InHTML.style.color = "red";
    player1InHTML.textContent = `Player 1's Turn`;
    player2InHTML.style.color = "white";
    player2InHTML.textContent = `Player 2`;
    for (let i = 0; i < diceList.length; i++) {
        diceList[i].style.display = "none"
    }
    // for (let dice in diceList) {
    //     dice.style.display = "none"
    // }
    // startButton.style.display = "none";
})

holdButton.addEventListener("click", () => {
    switchSide()
})


