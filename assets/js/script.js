let score = document.getElementById('score')
let message = document.getElementById('choice')
let buttons = document.querySelectorAll('button')
let playershow = document.getElementById("player-points")
let pcshow = document.getElementById("pc-points")

let pPaper = document.querySelector(".p-paper")// player : rock  , paper and scissors img
let pRock = document.querySelector(".p-rock")
let pScissors = document.querySelector(".p-scissors")

let pcPaper = document.querySelector(".pc-paper")// pc : rock  , paper and scissors img
let pcRock = document.querySelector(".pc-rock")
let pcScissors = document.querySelector(".pc-scissors")

let rockBtn = document.getElementById("rock")//buttons
let paperBtn = document.getElementById("paper")
let scissorsBtn = document.getElementById("scissors")

let winnerScore = [0, 0]   // the first index is for player     ...    the second is for computer
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame)
}

function playGame(e) {
    let playerSelection = e.target.innerHTML

    let computerSelection = Math.random()

    if (computerSelection < .34) {
        computerSelection = 'rock'
        pcRock.classList.add("active-pc")
        setTimeout(() => {
            pcRock.classList.remove("active-pc")
        }, 1500);
    } else if (computerSelection < .68) {
        computerSelection = 'paper'
        pcPaper.classList.add("active-pc")
        setTimeout(() => {
            pcPaper.classList.remove("active-pc")
        }, 1500);
    } else {
        computerSelection = 'scissors'
        pcScissors.classList.add("active-pc")
        setTimeout(() => {
            pcScissors.classList.remove("active-pc")
        }, 1500);
    }


    let result = checkWinner(playerSelection, computerSelection)

    if (result == 'equal') {
        result = 'equal'
    }
    else if (result == 'player') {
        result += ' Win!'
        winnerScore[0]++
    }
    else if (result == 'computer') {
        result += ' Win!'
        winnerScore[1]++
    }
    else {
        alert('invalid data')
    }
    playershow.innerHTML = winnerScore[0]
    pcshow.innerHTML = winnerScore[1]
    message.innerHTML = result
}

function checkWinner(player, computer) {

    if (player === computer) {
        return 'equal'
    }

    if (player === 'rock') {
        if (computer === 'paper') {
            return 'computer'
        } else {
            return 'player'
        }
    }

    if (player === 'paper') {
        if (computer === 'scissors') {
            return 'computer'
        } else {
            return 'player'
        }
    }

    if (player === 'scissors') {
        if (computer === 'rock') {
            return 'computer'
        } else {
            return 'player'
        }
    }

}
rockBtn.addEventListener("click", () => {
    pRock.classList.add('active')
    setTimeout(() => {
        pRock.classList.remove('active')
    }, 1500);
})
paperBtn.addEventListener("click", () => {
    pPaper.classList.add('active')
    setTimeout(() => {
        pPaper.classList.remove('active')
    }, 1500);
})
scissorsBtn.addEventListener("click", () => {
    pScissors.classList.add('active')
    setTimeout(() => {
        pScissors.classList.remove('active')
    }, 1500);
})
