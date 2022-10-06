let team1Score = document.getElementById("count-team1");
let team2Score = document.getElementById("count-team2");
let homeScore = 0;
let homeScore1 = 0

//code for the dice one or team one

function team1Dice1() {
    homeScore1 += 1;
    team1Score.innerText = homeScore1;
}
function team1Dice2() {
    homeScore1 += 2
    team1Score.innerText = homeScore1;
}

function team1Dice3() {
    homeScore1 += 3;
    team1Score.innerText = homeScore1;
}

// the code for the team two  or dice two

function team2Dice1() {
    homeScore += 1;
    team2Score.innerText = homeScore;
}
function team2Dice2() {
    homeScore += 2
    team2Score.innerText = homeScore;
}

function team2Dice3() {
    homeScore += 3;
    team2Score.innerText = homeScore;
}

function newGame() {
   team1Score.innerText = 0;
   team2Score.innerText = 0;
   homeScore = 0;
   homeScore1 = 0;
}



















// function calc3(){
//     team2Score.innerText = num3 = num3 + 3;
// }