/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var gamePlayer = true;
var dice,
  activePlayer = 0;
var finalRound = 0;
newGame();

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlayer) {
    var random = Math.floor(Math.random() * 6) + 1;
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + random + ".png";
    if (random !== 1) {
      finalRound += random;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = finalRound;
    } else {
      document.querySelector("#current-" + activePlayer).textContent = 0;
      nextPlayer();
    }
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlayer) {
    var hold = document.querySelector("#score-" + activePlayer).textContent;
    if (hold > 0) {
      var holdDice = parseInt(hold) + parseInt(finalRound);
      document.querySelector("#score-" + activePlayer).textContent = holdDice;
      document.querySelector("#current-" + activePlayer).textContent = 0;
    } else {
      document.querySelector("#score-" + activePlayer).textContent = finalRound;
      document.querySelector("#current-" + activePlayer).textContent = 0;
    }

    if (document.querySelector("#score-" + activePlayer).textContent >= 10) {
      document.getElementById("name-" + activePlayer).textContent = "Winner";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlayer = false;
    }
    nextPlayer();
  }
});

document.querySelector(".btn-new").addEventListener("click", function () {
  activePlayer = 0;
  console.log(finalRound);
  finalRound = 0;
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  newGame();
});
function newGame(params) {
  gamePlayer = true;
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".dice").style.display = "none";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2 ";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
}
function nextPlayer(params) {
  if (gamePlayer) {
    activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
    finalRound = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
  }
}
