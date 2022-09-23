'use strict';

    let secretNumber = Math.trunc(Math.random()*20) + 1;
    let score = 20; //state variables   
    let highScore = 0;

    const displayMessage = function(message){
        document.querySelector('.message').textContent = message;
    }

//an event listener with the name of event and an event handler which is the function, the function only callen when the event happen
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess); //input data from user is string by default

    // when guess is empty its 0 (falsy value), so we use the not operator to convert it to true
    //when ther's no input
    if(!guess){ 
        document.querySelector('.message').textContent = '⛔No number!';
    }

    //when player wins
    else if(guess === secretNumber){
        // document.querySelector('.message').textContent = '🎉correct number!';
        displayMessage('🎉correct number!');
        document.querySelector('.number').textContent = secretNumber;
        //changing styles
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

    //when guess is wrong
    else if (guess != secretNumber){
        if(score > 1){
            // document.querySelector('.message').textContent = guess > secretNumber? '📈Too high!': '📉Too low!';
            displayMessage(guess > secretNumber? '📈Too high!': '📉Too low!');
            score--;
            document.querySelector('.score').textContent =  score;
        }
        else{
            // document.querySelector('.message').textContent = '💥You lost the game!';
            displayMessage('💥You lost the game!');
            document.querySelector('.score').textContent =  0;
        }
    }
    // //when guess is too high
    // else if (guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈Too high!';
    //         score--;
    //         document.querySelector('.score').textContent =  score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = '💥You lost the game!';
    //         document.querySelector('.score').textContent =  0;
    //     }
        
    // }

    // //when guess is too low
    // else if (guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📉Too low!';
    //         score--;
    //         document.querySelector('.score').textContent =  score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = '💥You lost the game!';
    //         document.querySelector('.score').textContent =  0;
    //     }
    // }
})

//Reseting the game
document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.score').textContent = 20; 
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value= '';
    document.querySelector('body').style.backgroundColor = '#222';
})