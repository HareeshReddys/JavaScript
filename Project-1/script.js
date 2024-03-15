"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

// condition check for all numbers

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // not Entered any value
  if (!guess) {
    displayMessage("⛔️ No Number !");

    // Game wins
  } else if (guess == secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(32, 224, 32)";
    document.querySelector(".number").style.width = "30rem";

    // heigest Score
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    // value is greater then secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? " 📈to High" : " 📉to low");
      score--;
      displayScore(score);
    } else {
      displayMessage(" 👎 You Lose the Game!");
      document.querySelector(".score").textContent = 0;
    }
  }

  // Again button function
  document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage(" Start guessing...");
    document.querySelector("body").style.backgroundColor = "rgb(0,0,0)";
    document.querySelector(".number").style.width = "15rem";
    displayScore(score);
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    score = 20;
  });
});

////////////////////// Large Code ///////

// // console.log(document.querySelector(".message").textContent);

// // document.querySelector(".message").textContent = "🎉 Correct Number!";

// // document.querySelector(".number").textContent = 13;
// // document.querySelector(".score").textContent = 10;

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message) {
//   document.querySelector(".message").textContent = message;
// };

// const diplayNumber = function (number) {
//   document.querySelector(".number").textContent = message;
// };

// document.querySelector(".check").addEventListener("click", function () {
//   const guess = Number(document.querySelector(".guess").value);
//   console.log(guess);
//   // not Entered any value

//   if (!guess) {
//     // document.querySelector(".message").textContent = "⛔️ No Number !";
//     displayMessage("⛔️ No Number !");

//     // Game wins
//   } else if (guess == secretNumber) {
//     // document.querySelector(".message").textContent = "";
//     displayMessage("🎉 Correct Number!");

//     // document.querySelector(".number").textContent = secretNumber;
//     diplayNumber(secretNumber);

//     document.querySelector("body").style.backgroundColor = "rgb(32, 224, 32)";

//     document.querySelector(".number").style.width = "30rem";
//     displayNumber;

//     // heigest Score

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector(".highscore").textContent = highscore;
//     }

//     // value is greater then secretNumber
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       displayMessage(guess > secretNumber ? " 📈to High" : " 📉to low");
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       // document.querySelector(".message").textContent = " 👎 You Lose the Game!";
//       displayMessage(" 👎 You Lose the Game!");

//       document.querySelector(".score").textContent = 0;
//     }
//   }

//   //   } else if (guess > secretNumber) {
//   //     if (score > 1) {
//   //       document.querySelector(".message").textContent = " 📈to High";
//   //       score--;
//   //       document.querySelector(".score").textContent = score;
//   //     } else {
//   //       document.querySelector(".message").textContent = " 👎 You Lose the Game!";
//   //       document.querySelector(".score").textContent = 0;
//   //     }
//   //     // value is samller then secret Number
//   //   } else if (guess < secretNumber) {
//   //     if (score > 1) {
//   //       document.querySelector(".message").textContent = " 📉to low";
//   //       score--;
//   //       document.querySelector(".score").textContent = score;
//   //     } else {
//   //       document.querySelector(".message").textContent = " 👎 You Lose the Game!";
//   //       document.querySelector(".score").textContent = 0;
//   //     }
//   //   }

//   // Again button function
//   document.querySelector(".again").addEventListener("click", function () {
//     // score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     // document.querySelector(".message").textContent = " Start guessing...";
//     displayMessage(" Start guessing...");

//     document.querySelector("body").style.backgroundColor = "rgb(0,0,0)";
//     document.querySelector(".number").style.width = "15rem";
//     document.querySelector(".score").textContent = score;
//     document.querySelector(".number").textContent = "?";
//     document.querySelector(".guess").value = "";

//     score = 20;
//   });
// });
