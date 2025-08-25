var TicTacToe;
(function (TicTacToe) {
    const ticBoard = document.getElementById("game-board");
    const ticStatusText = document.getElementById("status");
    const ticResetButton = document.getElementById("reset");
    
    let ticCurrentPlayer = "X";
    let ticGameActive = true;
    let ticGameState = ["", "", "", "", "", "", "", "", ""];
    
    const ticWinningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    // Create board cells
    function createTicBoard() {
        if (!ticBoard || !ticStatusText) return;
        
        ticBoard.innerHTML = "";
        ticGameState = ["", "", "", "", "", "", "", "", ""];
        ticCurrentPlayer = "X";
        ticGameActive = true;
        ticStatusText.textContent = `Player ${ticCurrentPlayer}'s turn`;
        
        for (let i = 0; i < 9; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.setAttribute("data-index", i.toString());
            cell.addEventListener("click", handleTicCellClick);
            ticBoard.appendChild(cell);
        }
    }
    
    function handleTicCellClick(event) {
        const cell = event.target;
        const index = parseInt(cell.getAttribute("data-index"));
        
        if (ticGameState[index] !== "" || !ticGameActive) return;
        
        ticGameState[index] = ticCurrentPlayer;
        cell.textContent = ticCurrentPlayer;
        cell.classList.add("taken");
        
        checkTicResult();
    }
    
    function checkTicResult() {
        let roundWon = false;
        
        for (let condition of ticWinningConditions) {
            const [a, b, c] = condition;
            if (ticGameState[a] && ticGameState[a] === ticGameState[b] && ticGameState[a] === ticGameState[c]) {
                roundWon = true;
                break;
            }
        }
        
        if (roundWon) {
            ticStatusText.textContent = `🎉 Player ${ticCurrentPlayer} wins!`;
            ticGameActive = false;
            return;
        }
        
        if (!ticGameState.includes("")) {
            ticStatusText.textContent = "😐 It's a draw!";
            ticGameActive = false;
            return;
        }
        
        ticCurrentPlayer = ticCurrentPlayer === "X" ? "O" : "X";
        ticStatusText.textContent = `Player ${ticCurrentPlayer}'s turn`;
    }
    
    if (ticResetButton) {
        ticResetButton.addEventListener("click", createTicBoard);
    }
    
    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createTicBoard);
    } else {
        createTicBoard();
    }
})(TicTacToe || (TicTacToe = {}));