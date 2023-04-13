'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function () {

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.add('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if(playing) {

        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random()*6 + 1);
        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `${dice}.png`;
        // 3. Check for rolled 1; if true, switch to the next player
        if(dice !== 1) {
            // Add dice to the current score.
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch to the next player
            currentScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            player0El.classList.toggle('player--active');
            player1El.classList.toggle('player--active');
        }
    }
})

btnHold.addEventListener('click', function() {
    // 1. Add current score to the active players
    scores[activePlayer] += currentScore;
    
    document.getElementById(`score--${activePlayer}`).textContent = currentScore[activePlayer];
    // 2. Check if the score is already at 100
    if(score[activePlayer] >= 20) {
        playing = false;
        diceEl.classList.remove('hidden');

        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    }
    // 3. If yes, finish the game or switch to the next player
} else {
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
);

btnNew.addEventListener('click', init);