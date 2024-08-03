let boxes = document.querySelectorAll(".box");
let playerTurn = document.querySelector(".turn");

let turn = "X";
let isGameOver = false;

boxes.forEach((e) => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;

      checkWin();
      checkDraw();
      changeTurn();
    }
  });
});

function changeTurn() {
  if (turn === "X") {
    turn = "O";
    playerTurn.innerHTML = turn + "'s " + "turn";
  } else {
    turn = "X";
    playerTurn.innerHTML = turn + "'s " + "turn";
  }
}

function checkWin() {
  let winConditions = [
    [0, 1, 2],
    [0, 4, 8],
    [2, 5, 8],
    [6, 7, 8],
    [0, 3, 6],
    [2, 4, 6],
    [1, 4, 7],
    [3, 4, 5],
  ];
  for (let i = 0; i < winConditions.length; i++) {
    let b0 = boxes[winConditions[i][0]].innerHTML;
    let b1 = boxes[winConditions[i][1]].innerHTML;
    let b2 = boxes[winConditions[i][2]].innerHTML;

    if (b0 != "" && b0 === b1 && b0 === b2) {
      isGameOver = true; 
      document.querySelector("#result").innerHTML = "Player " + turn + " Won";
      for (j = 0; j < 3; j++) {
        boxes[winConditions[i][j]].style.backgroundColor = "rgb(114, 29, 240)";
        boxes[winConditions[i][j]].style.color = "#fff";
       
      }
    }
  }
}

function checkDraw() {
  if (!isGameOver) {
    let isDraw = true;
    boxes.forEach((e) => {
      if (e.innerHTML === "") {
        isDraw = false;
      }
    });

    if (isDraw) {
      isGameOver = true;
      document.querySelector("#result").innerHTML = "Game Draw";
      playerTurn.innerHTML = "";
    }
  }
}

document.querySelector(".restart").addEventListener("click", () => {
    playerTurn.innerHTML = "";
  isGameOver = false;
  turn = "X";
  document.querySelector("#result").innerHTML = "";

  boxes.forEach((e) => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "#000";
    playerTurn.innerHTML = "";
  });
});
