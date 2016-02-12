var hand1;
var hand2;
var winner;

function rps(hand1, hand2) {

    if (hand1 === 'rock' && hand2 === 'scissors') {
        winner = 'hand1W';
    } else if (hand1 === 'rock' && hand2 === 'paper') {
        winner = 'hand2W';
    } else if (hand1 === 'rock' && hand2 === 'rock') {
        winner = 'tie';
    } else if (hand1 === 'paper' && hand2 === 'scissors') {
        winner = 'hand2W';
    } else if (hand1 === 'paper' && hand2 === 'paper') {
        winner = 'tie';
    } else if (hand1 === 'paper' && hand2 === 'rock') {
        winner = 'hand1W';
    } else if (hand1 === 'scissors' && hand2 === 'scissors') {
        winner = tie;
    } else if (hand1 === 'scissors' && hand2 === 'paper') {
        winner = 'hand1W';
    } else if (hand1 === 'scissors' && hand2 === 'rock') {
        winner = 'hand2W';
    }
   
}

rps('scissors', 'paper');
console.log(winner);