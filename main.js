//  import prompt from "inquirer/lib/ui/prompt";
function genNum() {
    var randomNum = Math.floor(Math.random() * 10 + 1);
    // to check random values
    //  console.log(randomNum);
    var guess = window.prompt("Please Enter a Number Between 0 to 10");
    // Check if the user input is not null (i.e., the user didn't cancel the prompt)
    if (guess !== null) {
        // Convert the string input to a number
        var guessNum = parseInt(guess);
        //     if(guessNum == randomNum){
        //         window.alert("Congratulations you guessed a right number");
        //     }else if (guessNum != randomNum){  
        //         window.alert("oh,You guesses a wrong number Try again!");
        //     }
        //      else{
        //        window.alert("invalid number")
        //      }
        //  }
        if (isNaN(guessNum) || guessNum < 1 || guessNum > 10) {
            window.alert("Invalid number, please enter a number between 1 and 10.");
        }
        else {
            // Compare the guessed number with the random number
            if (guessNum === randomNum) {
                window.alert("Congratulations you guessed the right number!");
            }
            else {
                window.alert("Oh, you guessed the wrong number. Try again!");
            }
        }
    }
}
