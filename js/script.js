alert("O jogo irá começar!");

var redGamePiece, blueGamePiece, yellowGamePiece;

function startGame(){
    myGameArea.start();
    redGamePiece = new component(30, 30, "red", 10, 10);
    blueGamePiece = new component(30, 30, "blue", 50, 60);
    yellowGamePiece = new component(30, 30, "yellow", 10, 110);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(){
          this.canvas.width = 400;
          this.canvas.height = 270;
          this.context = this.canvas.getContext("2d");
          document.body.insertBefore(this.canvas, document.body.childNodes[0]);
          this.interval = setInterval(updateGameArea, 20); //será atualizado a cada 20 milésimos de segundo
    },
    clear : function(){
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, speedX, speedY){
      this.width = width;
      this.height = height;
      this.speedX = 0;
      this.speedY = 0;
      this.x = x;
      this.y = y;
      this.update = function(){  //essa função vai ficar atualizando o quadrado
          ctx = myGameArea.context;
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function(){ // função que adiciona uma nova posição X e Y
          this.x += this.speedX;
          this.y += this.speedY;
    }
}

function updateGameArea(){
  myGameArea.clear(); // Irá ficar limpando a game Area.
  yellowGamePiece.newPos(); // Chamando a função de mover para o quadrado amarelo.
  redGamePiece.update(); // Ficará atualizando o desenho do quadrado
  blueGamePiece.update();
  yellowGamePiece.update();
}

function moveup(){
    yellowGamePiece.speedY -= 1;
}
