namespace TicTacToeGame {
  const ticBoard = document.getElementById("game-board") as HTMLElement | null;
  const ticStatusText = document.getElementById("status") as HTMLElement | null;
  const ticResetButton = document.getElementById("reset") as HTMLElement | null;

  let ticCurrentPlayer: "X" | "O" = "X";
  let ticGameActive = true;
  let ticGameState: string[] = ["", "", "", "", "", "", "", "", ""];

  const ticWinningConditions: number[][] = [
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
  function createTicBoard(): void {
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

  function handleTicCellClick(event: Event): void {
    const cell = event.target as HTMLElement;
    const index = parseInt(cell.getAttribute("data-index")!);

    if (ticGameState[index] !== "" || !ticGameActive) return;

    ticGameState[index] = ticCurrentPlayer;
    cell.textContent = ticCurrentPlayer;
    cell.classList.add("taken");

    checkTicResult();
  }

  function checkTicResult(): void {
    let roundWon = false;

    for (let condition of ticWinningConditions) {
      const [a, b, c] = condition;
      if (ticGameState[a] && ticGameState[a] === ticGameState[b] && ticGameState[a] === ticGameState[c]) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      if (ticStatusText) {
        ticStatusText.textContent = `🎉 Player ${ticCurrentPlayer} wins!`;
      }
      ticGameActive = false;
      return;
    }

    if (!ticGameState.includes("")) {
      if (ticStatusText) {
        ticStatusText.textContent = "😐 It's a draw!";
      }
      ticGameActive = false;
      return;
    }

    ticCurrentPlayer = ticCurrentPlayer === "X" ? "O" : "X";
    if (ticStatusText) {
      ticStatusText.textContent = `Player ${ticCurrentPlayer}'s turn`;
    }
  }

  if (ticResetButton) {
    ticResetButton.addEventListener("click", createTicBoard);
  }

  createTicBoard();
} // End TicTacToeGame namespace
