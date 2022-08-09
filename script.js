// Selectors
let again = document.querySelector('.again')
let number = document.querySelector('.number')
let guess = document.querySelector('.guess')
let check = document.querySelector('.check')
let message = document.querySelector('.message')
let scoreEl = document.querySelector('.score')
let highscoreEl = document.querySelector('.highscore')
guess.focus()
// changes
let score = 20
let highscore = 0
let gameOver = true
// RandomNumber
let randomNumber = Math.floor(Math.random() * 20 + 1)
console.log(randomNumber);
// Event
check.addEventListener('click', () => {
    guess.focus()
    if (score > 0) {
        if (guess.value && gameOver) {
            let inputValue = +guess.value

            if (inputValue == randomNumber) {
                message.textContent = 'You are win!!!'
                document.querySelector('body').style.background = '#60b347'
                number.textContent = randomNumber
                gameOver = false
                let winnerMusic = new Audio('winner.mp3')
                winnerMusic.play()
                if (score > highscore) {
                    highscore = score
                    highscoreEl.textContent = highscore
                }
            } else if (inputValue > randomNumber) {
                message.textContent = 'To High'
                score--
                scoreEl.textContent = score
                if (score <= 0){
                    message.textContent = 'Game Over'
                    let loseMusic = new Audio('lose.mp3')
                    loseMusic.play()
                }
            } else if (inputValue < randomNumber) {
                message.textContent = 'To Low'
                score--
                scoreEl.textContent = score
                if (score <= 0){
                    message.textContent = 'Game Over'
                    let loseMusic = new Audio('lose.mp3')
                    loseMusic.play()
                }
            }
            guess.value = ''
        } else {
            message.textContent = 'No Number'
        }
    } 
})


again.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 20 + 1)
    console.log(randomNumber);
    score = 20
    gameOver = true
    document.querySelector('body').style.background = '#222'
    number.textContent = "?"
    message.textContent = 'Start guessing...'
    scoreEl.textContent = '20'
})