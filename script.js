'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;



const generateNewSecretNumber = () => {
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
}

const DisplayMessage = (message)=>{
    document.querySelector('.message').textContent = message;
}

// Display the secret number for debugging (remove this in the production code)
console.log('Secret Number:', secreteNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('Guess:', guess);

  if (!guess) {
    DisplayMessage( '❌❌ There is no number');
  } else if (guess === secreteNumber) {
   DisplayMessage('🎉 Your number is correct!');
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('body').style.backgroundColor = '#c5c5c5';
    document.querySelector('.number').style.width = '500px';

    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }


  } else if (guess !== secreteNumber) {
    if (score > 1) {
      DisplayMessage(guess > secreteNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      DisplayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// The challenge - reset the game but keep the score unless it reaches 0
document.querySelector('.again').addEventListener('click', function () {
  if (score > 0) {
    generateNewSecretNumber();
    console.log('New Secret Number:', secreteNumber);  // Display the new secret number for debugging

    DisplayMessage('Start guessing again...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#234';
    document.querySelector('.number').style.width = '500px';
  }
});
