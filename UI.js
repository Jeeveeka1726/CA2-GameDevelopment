export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = "ink free";
        this.livesImage = document.getElementById("lives");
    }
    draw(context){
        context.save();
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 1;
        context.shadowColor = "white";
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px '  + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        //score
        context.fillText("Score: "  + this.game.score, 20,50);
        //timer
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        context.fillText('Timer: '+ (this.game.time * 0.001).toFixed(1), 20,80);
        //lives
        for (let i = 0; i<this.game.lives;i++){
            context.drawImage (this.livesImage,25 * i + 20,95,25,25);
        }
        //game over messages
        if (this.game.gameOver){
            context.textAlign = "center";
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            if  (this.game.score >= 60){
                context.fillText('YooHoo',this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize *  0.5 + 'px ' + this.fontFamily;
                context.fillText('What are the creatures of the night afraid of? YOU!!!',this.game.width * 0.5, this.game.height * 0.5 + 20);
                var playAgainButton = document.createElement('button');
                playAgainButton.textContent = 'Play Again';
                playAgainButton.style.position = 'absolute';
                playAgainButton.style.left = '50%';
                playAgainButton.style.top = '60%';
                playAgainButton.style.backgroundColor  = 'white';
                playAgainButton.style.borderRadius  = '50%';
                playAgainButton.style.height = '30px';
                playAgainButton.style.width  = '70px';
                playAgainButton.style.transform = 'translate(-50%, -50%)';
                playAgainButton.addEventListener('click', function () {
                  resetGame();
                });
                document.body.appendChild(playAgainButton);

                var quitButton = document.createElement('button');
                quitButton.textContent = 'Quit';
                quitButton.style.position = 'absolute';
                quitButton.style.left = '50%';
                quitButton.style.top = '65%';
                quitButton.style.backgroundColor  = 'green';
                quitButton.style.borderRadius  = '50%';
                quitButton.style.transform = 'translate(-50%, -50%)';
                quitButton.addEventListener('click', function () {
                  quitGame();
                });
                document.body.appendChild(quitButton);
            
                function quitGame() {
                  window.location = "./index.html";
                }
            
                function resetGame() {
                  location.reload();
                }
            } else {
                context.fillText('BooHoo',this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize *  0.7 + 'px ' + this.fontFamily;
                context.fillText('Better luck next time',this.game.width * 0.5, this.game.height * 0.5 + 20);
                var playAgainButton = document.createElement('button');
                playAgainButton.textContent = 'Play Again';
                playAgainButton.style.position = 'absolute';
                playAgainButton.style.left = '50%';
                playAgainButton.style.top = '60%';
                playAgainButton.style.backgroundColor  = 'green';
                playAgainButton.style.borderRadius  = '50%';
                playAgainButton.style.height = '30px';
                playAgainButton.style.width  = '70px';
                playAgainButton.style.transform = 'translate(-50%, -50%)';
                playAgainButton.addEventListener('click', function () {
                  resetGame();
                });
                document.body.appendChild(playAgainButton);
            
                function resetGame() {
                  location.reload();
                }
                var quitButton = document.createElement('button');
                quitButton.textContent = 'Quit';
                quitButton.style.position = 'absolute';
                quitButton.style.left = '50%';
                quitButton.style.top = '65%';
                quitButton.style.backgroundColor  = 'red';
                quitButton.style.borderRadius  = '50%';
                quitButton.style.height = '30px';
                quitButton.style.width  = '70px';
                quitButton.style.transform = 'translate(-50%, -50%)';
                quitButton.addEventListener('click', function () {
                  quitGame();
                });
                document.body.appendChild(quitButton);
            
                function quitGame() {
                  window.location = "./index.html";
                }
            }
        }
        context.restore();
    }
}