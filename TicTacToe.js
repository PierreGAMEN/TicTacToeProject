function spooky(){

    const buttonTC = document.querySelector(".buttonTC");
    
    const link = document.getElementById("myLink");

    if(buttonTC.innerHTML === "NEON") {
        buttonTC.innerHTML = "SPKY"
    } else {
        buttonTC.innerHTML = "NEON"
    }

    if (link.getAttribute("href") === "TicTacToe.css") {
    link.setAttribute("href", "spooky.css");
  } else {
    link.setAttribute("href", "TicTacToe.css");
  }
};


// Variables pour suivre l'état du jeu
let currentPlayer = 'X'; // Joueur actuel (X ou O)
let board = Array(9).fill(''); // Tableau pour suivre les coups
let gameOver = false; // Indique si le jeu est terminé
let winningCombos = [ // Combinaisons gagnantes
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Lignes
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colonnes
    [0, 4, 8], [2, 4, 6] // Diagonales
];

// Fonction pour gérer les coups
function makeMove(index) {
    if (board[index] === '' && !gameOver) {
        board[index] = currentPlayer;
        document.getElementById(`cell-${index}`).textContent = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('winner').textContent = `${currentPlayer} gagne !`;
            gameOver = true;
        } else if (board.every(cell => cell !== '')) {
            document.getElementById('winner').textContent = "Égalité !";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

// Fonction pour vérifier si un joueur a gagné
function checkWin() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

// Fonction pour redémarrer le jeu
function restartGame() {
    currentPlayer = 'X';
    board = Array(9).fill('');
    gameOver = false;
    document.getElementById('winner').textContent = '';
    document.querySelectorAll('.ligne button').forEach(button => button.textContent = '');
}

// Initialisation
document.querySelectorAll('.ligne button').forEach(button => button.textContent = '');
