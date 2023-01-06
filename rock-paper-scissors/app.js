// variables
let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultP = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

// functions
function compChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'r'){
        return 'Rock';
    }
    if(letter === 'p'){
        return 'Paper';
    }
    if(letter === 's'){
        return 'Scissors';
    }
}

function game(userChoice){
    const cc = compChoice();   

    
    switch(userChoice + cc) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, cc);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, cc);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, cc);
            break;
    }
}

function win(user, comp){
    userScore++;
    userScoreSpan.innerHTML = userScore;
    resultP.innerHTML = `${convertToWord(user)} beats ${convertToWord(comp)}. You win!`;
    
    document.getElementById(user).classList.add('green-glow')

    setTimeout(function(){
        document.getElementById(user).classList.remove('green-glow')
    }, 500)

}

function lose(user, comp){
    compScore++;
    compScoreSpan.innerHTML = compScore;
    resultP.innerHTML = `${convertToWord(comp)} beats ${convertToWord(user)}. You lose!`;
    document.getElementById(user).classList.add('red-glow')

    setTimeout(function(){
        document.getElementById(user).classList.remove('red-glow')
    }, 500)
}

function draw(user){
    resultP.innerHTML = `DRAW!!! You both picked ${convertToWord(user)}.`;
    document.getElementById(user).classList.add('grey-glow')

    setTimeout(function(){
        document.getElementById(user).classList.remove('grey-glow')
    }, 500)
}

function main(){
    // event listeners
    rockDiv.addEventListener('click', function(){
        game('r');
    })

    paperDiv.addEventListener('click', function(){
        game('p');
    })

    scissorsDiv.addEventListener('click', function(){
        game('s');
    })

    
}






main();