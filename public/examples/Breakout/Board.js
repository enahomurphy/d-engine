function Board(canvas, lives = 6) {
  this.canvas = canvas;
  this.score = 0;
  this.lives = lives;
  this.highsocre = 0;
}

Board.prototype.updateScore = function() {
  this.score += 1
}

Board.prototype.updateLives = function() {
  this.lives -= 1
}

Board.prototype.log = function() {
  console.table(this.score, this.highsocre, this.lives)
}

Board.prototype.drawScore = function() {
  const ctx = this.canvas.context;
  ctx.font = "16px Montserrat";
  ctx.fillStyle = "#000000";
  ctx.fillText(`Score: ${this.score}`, 30, 30);
}

Board.prototype.drawLives = function() {
  const ctx = this.canvas.context;
  ctx.font = "16px Montserrat";
  ctx.fillStyle = "#000000";
  ctx.fillText(`Lives: ${this.lives}`, this.canvas.width-100, 30);
}


Board.prototype.gameOver = function() {
  const ctx = this.canvas.context;
  ctx.font = "20px Montserrat";
  ctx.fillStyle = "#000000";
  ctx.fillText(`Game Over`, (this.canvas.width - 80) / 2, this.canvas.height / 2);
}


export default Board