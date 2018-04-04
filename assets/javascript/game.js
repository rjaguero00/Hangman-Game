var guessWords = [
    'hawks',
    'celtics',
    'nets',
    'hornets',
    'bulls',
    'cavaliers',
    'mavericks',
    'nuggets',
    'pistons',
    'warriors',
    'rockets',
    'pacers',
    'clippers',
    'lakers',
    'grizzlies',
    'heat',
    'bucks',
    'timberwolves',
    'pelicans',
    'knicks',
    'thunder',
    'magic',
    'sixers',
    'suns',
    'blazers',
    'kings',
    'spurs',
    'raptors',
    'jazz'
];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var word = '';
var lives = 10;
var wins = 0;
var losses = 0;
word = chooseRandomWord(guessWords);
console.log(word);
reset();

function chooseRandomWord(wordArray) {
    //Pick a random word from wordArray and return it
    return wordArray[Math.floor(Math.random() * wordArray.length)];
}


//display length of word using underscores
function displayGuessedLetters() {
    var underscores = '';
    for (i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) > -1) {
            underscores = underscores + word[i];
        } else {
            underscores = underscores + " _ ";
        }
    }
    return underscores;
}


function checkForLetter(input) {
    //checks if input is a letter and has not been used - return true or false
    if (letters.indexOf(input) > -1 && guessedLetters.indexOf(input) === -1) {
        return true;
    } else {
        return false;
    }
}



function checkWordForLetter(word, letter) {
    //return true if letter is in word and false if not
    if (word.indexOf(letter) > -1) {
        return true;
    } else {
        return false;
    }
    // var index = word.indexOf(letter) > -1;
    // return index;
}

function checkForWin() {
    //Check to see if all letters have been guessed, return true if winner, otherwise return false
    if (checkWordForLetter(displayGuessedLetters(), "_") === false) {
        return true;
    } else {
        return false;
    }
}



function checkForLoss() {
    //Check to see if the user is out of guesses, return true if lost, otherwise return false
    if (lives === 0) {
        return true;
    } else {
        return false;
    }
}

function decrementLives() {
    //Check to see if valid letter is in word, lose a life if it is not
    lives--;
}

function reset() {
    // Choose a new word
    // Set lives back to 7
    // Set guessedLetters back to empty array
    word = chooseRandomWord(guessWords);
    lives = 10;
    guessedLetters = [];
    resetDisplay();
}

function updateDisplay(guessedArray, wordString, liveCounter) {
    //Update Guessed Letters display on screen
    document.querySelector("#lettersguessed").textContent = "Letters Guessed " + guessedArray;
    //Update underscore/word Letters display on screen
    document.querySelector("#letters").textContent = wordString;
    //Update lives display on screen
    document.querySelector("#guessesremaining").textContent = "Guesses Remaining " + liveCounter;

}

function resetDisplay() {
    updateDisplay(guessedLetters, displayGuessedLetters(), lives);
    //Update win / loss on screen

    document.querySelector("#wins").textContent = "Wins " + wins;
    document.querySelector("#losses").textContent = "Losses " + losses;
}

function playGame(input) {
    guessedLetters.push(input);
    if (checkWordForLetter(word, input) === false) {
        decrementLives();
    }
    console.log("Word Display: " + displayGuessedLetters());
    console.log("Lives remaining: " + lives);
    if (checkForWin() === true) {
        console.log("You win!")
        wins++;
        console.log("Wins " + wins);
        reset();
    } else {
        if (checkForLoss() === true) {
            console.log("You lose!")
            losses++;
            console.log("Losses " + losses);
            reset();
        }
    }
    updateDisplay(guessedLetters, displayGuessedLetters(), lives);
}

document.onkeyup = function (event) {
    //stores and saves keys pressed by userGuess
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    if (checkForLetter(userGuess) === true) {
        playGame(userGuess);
    } else {
        console.log('Not a valid guess');
    }
}