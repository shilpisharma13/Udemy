"use strict";

const reset = document.querySelector(".btn--new");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const image = document.querySelector(".dice");
const player1Score = document.querySelector("#score--0");
const player2Score = document.querySelector("#score--1");
const player1Current = document.querySelector("#current--0");
const player2Current = document.querySelector("#current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

let activePlayer, currentScore, playing, scores;

const newGame = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;

  image.classList.add("hidden");
  player1.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
};
newGame();
const switchPlayer = () => {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

const rollDice = () => {
  if (playing) {
    const random = Math.floor(Math.random() * 6 + 1);
    image.classList.remove("hidden");
    image.src = `dice-${random}.png`;

    if (random !== 1) {
      currentScore += random;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

const holdScore = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
  }
  if (scores[activePlayer] >= 20) {
    playing = false;
    image.classList.add("hidden");

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  }
};

roll.addEventListener("click", rollDice);
reset.addEventListener("click", newGame);
hold.addEventListener("click", holdScore);
