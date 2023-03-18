function getComputerChoice() {
    let arr = ['rock','paper','scissors']
    return arr[Math.floor(Math.random()*arr.length)]
}

let playerScore = 0
let computerScore = 0

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}

const computerSelection = getComputerChoice()

let buttons = document.querySelectorAll('#btn')

buttons.forEach((btn) => {
    let result = ''
    let choice = ''
    btn.addEventListener('click', (e) => {
        if ((e.target.value == 'rock' && computerSelection=='scissors') || (e.target.value=='paper' && computerSelection=='rock') || (e.target.value=='scissors' && computerSelection=='paper')) {
            result = 'You Won!\n'
            choice =  'You chose ' +e.target.value+ ' computer chose ' +computerSelection
            playerScore = playerScore + 1
        }
        else if ((e.target.value == 'scissors' && computerSelection=='rock') || (e.target.value=='rock' && computerSelection=='paper') || (e.target.value=='paper' && computerSelection=='scissors')) {
            result = 'You Lost!\n'
            choice =  'You chose ' +e.target.value+ ' computer chose ' +computerSelection
            computerScore = computerScore + 1
        }
        else if (e.target.value == computerSelection) {
            result = 'It\'s a Tie!'
            choice = choice =  'You both chose ' +e.target.value
        }
        if (playerScore == 5) {
            result = 'You Won the game!'
            disableButtons()
        }
        else if (computerScore == 5) {
            result = 'You Lost the game!'
            disableButtons()
        }
        document.querySelector('.choice').innerText = choice
        document.querySelector('.result').innerText = result
        document.querySelector('.score1').innerText = 'Player Score:' + playerScore
        document.querySelector('.score2').innerText = 'ComputerScore: ' + computerScore
        return
    })
})
