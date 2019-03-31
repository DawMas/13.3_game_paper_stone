'use strict';

var output = document.getElementById('output');

var log = function (text) {
    output.innerHTML += text + '<br>';
    if (gameNumber == playerWins) {
        output.innerHTML += 'YOU WON THE ENTIRE GAME' + '<br>';
    }
    else if (gameNumber == computerWins) {
        output.innerHTML += 'COMPUTER WON THE ENTIRE GAME' + '<br>';
    }
}

var numberOfGames = document.getElementById('game-number');

var gamesToWin = function () {
    if (gameNumber <= 0 || isNaN(gameNumber)) {
        numberOfGames.innerHTML = 'wrong value, please insert number > 0';
        startGame = false;
    }
    else {
        if (playerWins >= computerWins) {
            gamesleft = gameNumber - playerWins;
            numberOfGames.innerHTML = gamesleft + ' win rounds left to win' + '<br>';

        }
        else {
            gamesleft = gameNumber - computerWins;
            numberOfGames.innerHTML = gamesleft + ' win rounds left to win' + '<br>';

        }

    }
}

var randomNumber = function () {
    return Math.floor(Math.random() * 3) + 1;
}

var result = document.getElementById('result');

var resultWrite = function (playerWins, compWins) {
    result.innerHTML = 'YOU - COMPUTER' + '<br>' + playerWins + '-' + compWins + '<br>';
}

var gameButton = document.getElementById('new-game');
var gameNumber = 0;
var playerWins = 0;
var computerWins = 0;
var gamesleft;
var startGame = true;


var counterPlayer = 0;
var counterComp = 0;

gameButton.addEventListener('click', function () {

    gameNumber = window.prompt('How many rounds would You like to play ?');
    gamesleft = 0;
    counterComp = 0;
    counterPlayer = 0;
    playerWins = 0;
    computerWins = 0;
    gamesToWin(gameNumber);
    output.innerHTML = '';
    result.innerHTML = '';

});



var playerMove = function (moveAsAText) {
    var move = 1;
    var number = randomNumber();
    if (gamesleft > 0) {
        if (moveAsAText === 'rock') {
            move = 2;
        }
        else if (moveAsAText === 'scissors') {
            move = 3;
        }

        if (move === 1) {
            if (move == number) {
                log('ITs DRAW: you played PAPER, computer played PAPER')
                resultWrite(counterPlayer, counterComp);
            }
            else if (number === 2) {
                playerWins += 1;
                log('YOU WON: you played PAPER, computer played ROCK')
                counterPlayer += 1;
                resultWrite(counterPlayer, counterComp);

                gamesToWin();

            }
            else if (number === 3) {
                computerWins += 1;
                log('YOU LOSE: you played PAPER, computer played SCISSORS')
                counterComp += 1;
                resultWrite(counterPlayer, counterComp);

                gamesToWin();
            }
        }
        else if (move === 2) {
            if (move === number) {
                log('ITs DRAW: you played ROCK, computer played STONE')
            }
            else if (number === 1) {
                computerWins += 1;
                log('YOU LOSE: you played ROCK, computer played PAPER')
                counterComp += 1;
                resultWrite(counterPlayer, counterComp);

                gamesToWin();
            }
            else if (number === 3) {
                playerWins += 1;
                log('YOU WIN: you played ROCK, computer played SCISSORS')
                counterPlayer += 1;
                resultWrite(counterPlayer, counterComp);

                gamesToWin();
            }
        }

        else if (move === 3) {
            if (move === number) {
                log('ITs DRAW: you played SCISSORS, computer played SCISSORS')
            }
            else if (number === 2) {
                playerWins += 1;
                log('YOU WON: you played SCISSORS, computer played PAPER')
                counterPlayer += 1;
                resultWrite(counterPlayer, counterComp);

                gamesToWin();
            }
            else if (number === 3) {
                computerWins += 1;
                log('YOU LOSE: you played SCISSORS, computer played ROCK')
                counterComp += 1;
                resultWrite(counterPlayer, counterComp);

                gamesToWin();
            }
        }

    }
    else if (gamesleft === 0) {
        output.innerHTML += 'Game over, please press the new game button' + '<br>';
    }


}

if (startGame = true) {

    var buttons = document.querySelectorAll(".player-move");
    console.log(buttons);
    
        for (var i=0; i<= buttons.length; i++){
            
            var temp = buttons[i].getAttribute("data-move");
            buttons[i].addEventListener('click', playerMove(temp));
            
        }

    /*
    var paperbutton = document.getElementById('paper-button');
    paperbutton.addEventListener('click', function () {
        playerMove('paper');
    })


    var rockbutton = document.getElementById('rock-button');
    rockbutton.addEventListener('click', function () {
        playerMove('rock');
    })

    var cutbutton = document.getElementById('cut-button');
    cutbutton.addEventListener('click', function () {
        playerMove('scissors');
    })*/
}




