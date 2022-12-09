"use strict";

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const finalResult = document.querySelector("#final");
const again = document.querySelector("button");

let result = 0;
let hitPosition;
let currentTime = 30;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

// function moveMole() {
//   console.log(currentTime);
//   if (currentTime <= currentTime / 2) {
//     timerId = setInterval(randomSquare, 500);
//   } else {
//     timerId = setInterval(randomSquare, 1000);
//   }
// }
// moveMole();

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}
moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    finalResult.textContent = `GAME OVER! Your final score is: ${result}`;
    // alert("GAME OVER! Your final score is: " + result);
  }
}

// if (currentTime <= currentTime / 2) {
//   function move1Mole() {
//     timerId = setInterval(randomSquare, 500);
//   }
//   move1Mole();
// } else {
//   function moveMole() {
//     timerId = setInterval(randomSquare, 100);
//   }
//   moveMole();
// }

let countDownTimerId = setInterval(countDown, 1000);

again.addEventListener("click", function () {
  window.location.reload();
});
