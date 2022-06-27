const player1Score = document.querySelector('.score--0')
const player2Score = document.querySelector('.score--1')
const maxScore = document.querySelector('#maxscore')
const btn1Player = document.querySelector('.player--0')
const btn2Player = document.querySelector('.player--1')
const reset = document.querySelector('.reset')

let playing = true,
  p1Score = 0,
  p2Score = 0,
  maximum = 5

const resetGame = () => {
  playing = true
  p1Score = 0
  p2Score = 0
  player1Score.textContent = 0
  player2Score.textContent = 0
  player1Score.style.backgroundColor = 'white'
  player2Score.style.backgroundColor = 'white'
}

const play1 = () => {
  if (playing) {
    p1Score += 1
    if (p1Score === maximum) {
      playing = false
      player1Score.style.backgroundColor = 'green'
      player2Score.style.backgroundColor = 'red'
    }
    player1Score.textContent = p1Score
  }
}

const play2 = () => {
  if (playing) {
    p2Score += 1
    if (p2Score === maximum) {
      playing = false
      player2Score.style.backgroundColor = 'green'
      player1Score.style.backgroundColor = 'red'
    }
    player2Score.textContent = p2Score
  }
}

btn1Player.addEventListener('click', play1)
btn2Player.addEventListener('click', play2)
reset.addEventListener('click', resetGame)
maxScore.addEventListener('change', function () {
  maximum = parseInt(this.value)
  resetGame()
})
