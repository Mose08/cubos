var j1,j2,j3,j4
var generador, playerCount
var gameState,player,form,game,allPlayers
var vidas,cajas,bombas,escudos


function preload() {
fondo=loadImage("../assets/fondo2.jpg");
 
caja=loadImage("../assets/Objetos especiales/caja-de-madera.png")
bomba=loadImage("../assets/Objetos especiales/bomba.png")
vida=loadImage("../assets/Objetos especiales/favorito.png")
proteger=loadImage("../assets/Objetos especiales/proteger.png")

}

function setup() {
createCanvas(windowWidth,windowHeight);

redflag=false
blueflag=false
yellowflag=false
greenflag=false
xRedTemp = 0;
yRedTemp = 0;
xBlueTemp = 0;
yBlueTemp = 0;
xYellowTemp = 0;
yYellowTemp = 0;
xGreenTemp = 0;
yGreenTemp = 0;

database = firebase.database();

game = new Game();
game.getState();
game.start();  



var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });


    
}

function draw() {
    /* if(playerCount != undefined && playerCount <4){
        for(let i=0;i<1;i++){
            player = new Player();
            playerCount += 1;
            player.positionX = 50;
            player.positionY = 160;
            //player.name = this.input.value();
            player.index = playerCount;
            player.addPlayer();//aaa
            player.updateCount(playerCount); // BP
        }
    } */


    background(220);
    image(fondo,0,0,width,height)

     if (playerCount === 4) {
        game.update(1);
        form.hide();
      }
    
      if (gameState === 1) {
        game.play();
      }
     


    drawSprites();
}