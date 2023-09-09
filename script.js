let currentPlayer = Math.random() < 0.5 ? 1 : 2;
let score1 = 0;
let score2 = 0;
let gameOver = false;

function rollDice(player) {
    if (gameOver) return;

    const diceResult = Math.floor(Math.random() * 6) + 1;
    const scoreSpan = document.getElementById(`score${player}`);
    const rollButton = document.getElementById(`roll${player}`);

    scoreSpan.textContent = (player === 1 ? score1 : score2) + diceResult;
    if (player === 1) {
        score1 += diceResult;
    } else {
        score2 += diceResult;
    }

    if (score1 >= 30) {
        document.getElementById('result').textContent = 'Player 1 wins!';
        gameOver = true;
    } else if (score2 >= 30) {
        document.getElementById('result').textContent = 'Player 2 wins!';
        gameOver = true;
    }

    rollButton.disabled = true;
    document.getElementById(`roll${3 - player}`).disabled = false;

    if (gameOver) {
        document.getElementById('reset').disabled = false;
    }
}

function resetGame() {
    currentPlayer = Math.random() < 0.5 ? 1 : 2;
    score1 = 0;
    score2 = 0;
    gameOver = false;

    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    document.getElementById('result').textContent = '';

    document.getElementById('roll1').disabled = currentPlayer === 2;
    document.getElementById('roll2').disabled = currentPlayer === 1;

    document.getElementById('reset').disabled = true;
}

// Initial setup
resetGame();
