'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let displayMessage = document.querySelector('.message');
let displayNumber = document.querySelector('.number');
let body = document.querySelector('body');
let displayScore = document.querySelector('.score');
let highScore = 0;

const displayMessageFunction = function (message) {
  displayMessage.textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  displayMessageFunction('Start guessing...');
  displayNumber.textContent = '?';
  displayNumber.style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  displayScore.textContent = score;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Where there is no input
  if (!guess) {
    displayMessageFunction('⛔ No number!');

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessageFunction('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayNumber.style.width = '30rem';
    displayNumber.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessageFunction(
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      displayScore.textContent = score;
    } else {
      displayMessageFunction('You lost the game! 💥');
      displayScore.textContent = 0;
    }
  }

  // First Attempt
  // When the player guesses too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage.textContent = '📈 Too high!';
  //     score--;
  //     displayScore.textContent = score;
  //   } else {
  //     displayMessage.textContent = 'You lost the game! 💥';
  //     displayScore.textContent = 0;
  //   }

  //   // When the player guesses too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage.textContent = '📉 Too low!';
  //     score--;
  //     displayScore.textContent = score;
  //   } else {
  //     displayMessage.textContent = 'You lost the game! 💥';
  //     displayScore.textContent = 0;
  //   }
  // }
});
