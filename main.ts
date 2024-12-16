//  import prompt from "inquirer/lib/ui/prompt";

function genNum(){

    let randomNum= Math.floor(Math.random()*10+1 )
    // to check random values
    //  console.log(randomNum);
    
    let guess=window.prompt("Please Enter a Number Between 0 to 10");


    // Check if the user input is not null (i.e., the user didn't cancel the prompt)
    if (guess !== null) {
      // Convert the string input to a number
        let guessNum= parseInt(guess);


if (isNaN(guessNum) || guessNum < 1 || guessNum > 10) {
    window.alert("Invalid number, please enter a number between 1 and 10.");
} else {
    // Compare the guessed number with the random number
    if (guessNum === randomNum) {
        window.alert("Congratulations you guessed the right number!");
    } else {
        window.alert("Oh, you guessed the wrong number. Try again!");
    }
}
}
}