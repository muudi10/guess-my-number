let game = {
  highscore: 0,
  secretNumber: 0,
  score: 20,
  newGame: function () {
    this.newNum();
    this.score = 20;
    this.uiScoreUpdate();
  },
  newNum: function () {
    this.secretNumber = Math.trunc(Math.random() * 20) + 1;
  },
  uiMessage: function (message) {
    document.querySelector(".message").textContent = message;
  },
  uiScoreUpdate: function () {
    document.querySelector(".score").textContent = this.score;
  },
  checkGues: function (guess) {
    let message = "";
    guess = Number(guess);
    if (guess === this.secretNumber) {
      message = "You have guessed Right";
      if (this.highscore < this.score) {
        this.highscore = this.score;
        document.querySelector(".highscore").textContent = this.highscore;
        document.querySelector(".number").textContent = this.secretNumber;
      } else {
        this.highscore = this.highscore;
      }

      this.uiMessage(message);
      this.uiScoreUpdate();
    }
    if (guess < this.secretNumber) {
      message = " Try higher";
      this.score--;
      this.uiScoreUpdate();

      this.uiMessage(message);
    }
    if (guess > this.secretNumber) {
      message = "Try Lower";
      this.score--;
      this.uiMessage(message);
      this.uiScoreUpdate();
    }
  },
};
function guessNumber() {
  var guess = document.getElementById("userInput").value;

  game.checkGues(guess);
  console.log(guess);
}
function resetGame() {
  document.querySelector(".number").textContent = "?";

  game.newGame();
}

game.newGame();
