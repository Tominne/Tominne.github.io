console.log("Welcome to Tic-Tac-Toe! Enjoy!");

let cells = document.getElementsByTagName("TD");

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = click;
}

let noughtsTurn = true;

let gameIsOver = false;

function click(e) {
  if (gameIsOver) {
    return;
  }
  let cell = e.target;
  if (cell.innerHTML !== "") {
    return;
  }
  if (noughtsTurn) {
    cell.innerHTML = `0`;
  } else {
    cell.innerHTML = `X`;
  }
  noughtsTurn = !noughtsTurn;
  checkForWin(noughtsTurn ? "X" : "0");
  if (gameIsOver) {
    document.getElementById("resetButton").style.display = "block";
  } else if (isBoardFull()) {
    gameIsOver = true;
    document.getElementById("subtitle").innerHTML = `It's a draw!`;
    document.getElementById("resetButton").style.display = "block";
  }
}

function isBoardFull() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === "") {
      return false;
    }
  }
  return true;
}

function checkForWin(symbol) {
  // HORIZONTAL LINES //

  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true;
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true;
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true;
  // VERTICAL LINES //
  else if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true;
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true;
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true;
  // DIAGONAL LINES //
  else if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true;
  else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true;
  // ...

  if (gameIsOver && noughtsTurn === false) {
    document.getElementById(`subtitle`).innerHTML = `Noughts Win!`;
  } else if (gameIsOver && noughtsTurn === true) {
    document.getElementById(`subtitle`).innerHTML = `Crosses Win!`;
  }
}

function resetGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  noughtsTurn = true;
  gameIsOver = false;
  document.getElementById("resetButton").style.display = "none";
}
