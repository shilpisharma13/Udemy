'use strict';

const btn = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const guessNumber = document.querySelector('.number');
const enteredValue = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let random = Math.floor(Math.random() * 20 + 1);

console.log(random);

const playAgain = () => {
  random = Math.floor(Math.random() * 20 + 1);
  console.log(random);
  score.textContent = 20;
  message.textContent = 'Start Guessing...';
  enteredValue.value = '';
  guessNumber.textContent = '?';
  document.body.style.backgroundColor = '#222';
};

const checkValue = () => {
  console.log(enteredValue.value);
  if (enteredValue.value < random) {
    message.textContent = 'Too low 📉';
    score.textContent > 0
      ? score.textContent--
      : (message.textContent = 'You lost. Start Again!💣');
  }

  if (enteredValue.value > random) {
    message.textContent = 'Too High 📈';
    score.textContent > 0
      ? score.textContent--
      : (message.textContent = 'You lost. Start Again!💣');
  }

  if (enteredValue.value == random) {
    message.textContent = 'You Won 🎉';
    highScore.textContent = score.textContent;
    guessNumber.textContent = random;
    document.body.style.backgroundColor = '#60b347';
  }
};

btn.addEventListener('click', checkValue);
btnAgain.addEventListener('click', playAgain);
