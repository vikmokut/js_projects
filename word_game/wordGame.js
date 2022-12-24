let hangMan = ['-----------',
    `   |
   |
   |
   |
   |
   |
-----------`,
    `   |----
   |
   |
   |
   |
   |
-----------`,
    `   |----
   |    |
   |
   |
   |
   |
-----------`,
    `   |----
   |    |
   |    O
   |
   |
   |
-----------`,
    `   |----
   |    |
   |    O
   |    |
   |    |
   |
-----------`,
    `   |----
   |    |
   |    O
   |   /|
   |    |
   |
-----------`,
    `   |----
   |    |
   |    O
   |   /|\\
   |    |
   |
-----------`,
    `   |----
   |    |
   |    O
   |   /|\\
   |    |
   |   /
-----------`,
    `   |----
   |    |
   |    O
   |   /|\\
   |    |
   |   / \\
-----------`
]


let secretWord = prompt("Enter your secret word: ").toUpperCase()
let guessCount = 0;
let letterCount;

console.log(`Your secret word is a ${secretWord.length} letter word,
You've got 10 guess chances to get each letter right until you get hung on the tree 😳, just kidding 😎.
   |----
   |   |
   |   O
   |  /|\\
   |   |
   |  / \\
-----------`)

let rightGuess = "";

while (guessCount < 10) {
    guess = prompt("Enter a single letter of the alphabet").toUpperCase()
    for (letterCount = 0; letterCount < secretWord.length; letterCount++) {
        if (guess === secretWord[letterCount]) {
            // handles repeating same guess letter more than once
            if (rightGuess.includes(guess)) {
                alert(`You have already guessed letter ${guess}`);
                guessCount--
                break;
            } else {
                alert("You found one correct letter")
                rightGuess += guess
                rightGuess = printProgress(secretWord, rightGuess);
                console.log(rightGuess)
                guessCount--
                break;
            }
        } else {
            /* Prevent multiple hangman displays on each for loop
            Only execute at failure of if condition above
            */
            if (letterCount === (secretWord.length - 1)) {
                console.log(hangMan[guessCount])
            }
        }
    }
    // Break loop when rightGuess === secretWord
    if (rightGuess === secretWord) {
        console.log(`You figured out the SECRET WORD 🍾🥂🎉🥂🍾`)
        break;
    }
    guessCount++;
    if (guessCount === 10) console.log("Game Over - You could not figure out the SECRET word 😜")
}

// CHECKS: Run Sample with Hipopotamus

//MY FUNCTIONS

function printProgress(secretWord, rightGuess) {
    let myWord = "";
    for (let secretWordCounter = 0; secretWordCounter < secretWord.length; secretWordCounter++) {
        for (let rightGuessCounter = 0; rightGuessCounter < rightGuess.length; rightGuessCounter++) {
            if (secretWord[secretWordCounter] === rightGuess[rightGuessCounter]) {
                myWord += rightGuess[rightGuessCounter];
                break; // prevents multiple addition of repeating letters 
            } else {
                if (rightGuessCounter === (rightGuess.length - 1)) {
                    myWord += '*';
                }
            }
        }
    }
    return myWord
}