'use strict';

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highestScore = 0;

// Display the secret number for debugging (remove this in the production code)
console.log('Secret Number:', secreteNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('Guess:', guess);

  if (!guess) {
    document.querySelector('.message').textContent = '❌❌ There is no number';
  } else if (guess === secreteNumber) {
    document.querySelector('.message').textContent = '🎉 Your number is correct!';
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('body').style.backgroundColor = '#c5c5c5';
    document.querySelector('.number').style.width = '500px';


    if (score > highestScore) {
      highestScore = score;
      document.querySelector('.highscore').textContent = highestScore;
    }

    //when guess is too hiegh
  } else if (guess > secreteNumber) {
    document.querySelector('.message').textContent = '📉 Your number is higher than the secret number';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secreteNumber) {
    document.querySelector('.message').textContent = '📈 Your number is lower than the secret number';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
