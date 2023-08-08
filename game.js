const gameStatusElement = document.getElementById("game-status");
const computerMoveElement = document.getElementById("computer-move");

const GameEnum = {
  Rock: 'rock',
  Paper: 'paper',
  Scissors: 'scissors',
}

function getWinner(moveP1, moveP2) {
  if (moveP1 === moveP2) {
    return 0;
  }

  if (moveP1 === GameEnum.Rock) {
    return moveP2 === GameEnum.Scissors ? 1 : -1;
  }
  else if (moveP1 === GameEnum.Paper) {
    return moveP2 === GameEnum.Rock ? 1 : -1;
  } else {
    return moveP2 === GameEnum.Paper ? 1 : -1;
  }
}

function generateComputerMove() {
  const seed = Math.floor(Math.random() * 3);
  return Object.values(GameEnum)[seed];
}

function computeGame(playerMove) {
  const computerMove = generateComputerMove();
  computerMoveElement.innerText = `Computer Move: ${computerMove}`;

  const gameResult = getWinner(playerMove, computerMove);

  gameStatusElement.innerText = gameResult === 0 ? "Draw" : gameResult === 1 ? "You Win!" : "You Lost";
}

function main() {
  const rockBtn = document.getElementById(GameEnum.Rock);
  const paperBtn = document.getElementById(GameEnum.Paper);
  const scissorsBtn = document.getElementById(GameEnum.Scissors);

  rockBtn.addEventListener("click", () => computeGame(GameEnum.Rock));
  paperBtn.addEventListener("click", () => computeGame(GameEnum.Paper));
  scissorsBtn.addEventListener("click", () => computeGame(GameEnum.Scissors));
}

main();
