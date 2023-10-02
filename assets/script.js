var wins = 0;
var losses = 0;
var ties = 0;

var options = ["1", "2", "3", "4", "5", "6"]



var playGame = function () {

    var rollDice = window.confirm("Roll the dice!")

    if (!rollDice) {
        return;
    }

    var index = Math.floor(Math.random() * options.length);
    var userChoice = options[index];

    window.alert("You rolled " + userChoice);


    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];

    window.alert("The computer rolled " + computerChoice);

    if (userChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");

    } else if (
        (userChoice === "2" && computerChoice < "2") ||
        (userChoice === "3" && computerChoice < "3") ||
        (userChoice === "4" && computerChoice < "4") ||
        (userChoice === "5" && computerChoice < "5") ||
        (userChoice === "6" && computerChoice < "6")
    ) {
        wins++;
        window.alert("You win!");


    } else {
        losses++;
        window.alert("You lost!");
    }

    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    var playAgain = window.confirm("Play again?");

    if (playAgain) {
        playGame();
    }
};


playGame();