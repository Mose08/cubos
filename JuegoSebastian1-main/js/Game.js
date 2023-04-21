class Game{
    constructor(){
      this.blast=false

this.resetTitle=createElement("h2")
this.resetButton=createButton("")

    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }

      play(){
        this.handleElements();
        this.handleResetButton();
        Player.getPlayersInfo();
        playerCount = player.getCount();
    

        database.ref("/").update({
        carsAtEnd: 0
        });

/*     fill ("purple")
    rect(50,160,30,30)
    fill ("blue")
    rect(windowWidth-80,160,30,30)
    fill ("yellow")
    rect(50,windowHeight-190,30,30)
    fill ("pink")
    rect(windowWidth-80,windowHeight-190,30,30) */
    //image(generador1,windowWidth/2-25,windowHeight/2-25,100,100)
  
    var index = 0;
    if (allPlayers !== undefined) {
      for (var plr in allPlayers) {
        index = index + 1;
        var x = allPlayers[plr].positionX;
        var y = allPlayers[plr].positionY;
        switch (index) {
          case 1:
            fill ("red")
            rect(x,y,30,30)
            if(redflag == false){
              xRedTemp = x;
              yRedTemp = y;
              redflag = true
            }
            noStroke()
            rect(xRedTemp-20,yRedTemp-20,100,10)
            rect(xRedTemp+70,yRedTemp-10,10,100)

            break;
          case 2:
            fill ("blue")
            rect(x,y,30,30)
            if(blueflag==false){
              xBlueTemp=x;
              yBlueTemp=y;
              blueflag=true
              }
              noStroke()
              rect(xBlueTemp-60,yBlueTemp-20,100,10)
              rect(xBlueTemp-60,yBlueTemp-10,10,100)
  
  
            break;
          case 3:
            fill ("yellow")
            rect(x,y,30,30)
            if(yellowflag==false){
              xYellowTemp=x;
              yYellowTemp=y;
              yellowflag=true
              }
              noStroke()
              rect(xYellowTemp-20,yYellowTemp-20,100,10)
              rect(xYellowTemp+70,yYellowTemp-10,10,100)

            break;
          case 4:
            fill ("green")
            rect(x,y,30,30)
            if(greenflag==false){
              xGreenTemp=x;
              yGreenTemp=y;
               greenflag=true
             }
             noStroke()
             rect(xGreenTemp-55,yGreenTemp-20,100,10)
             rect(xGreenTemp-60,yGreenTemp-20,10,100)
 
            break;
          default:
            break;
        }
      }
    }



this.handlePlayerControls();
    drawSprites();
      }
      
      handleResetButton() {
        this.resetButton.mousePressed(() => {
          database.ref("/").set({
            playerCount: 0,
            gameState: 0,
            players: {}
          });
          window.location.reload();
        });
      }

      start() {
        player = new Player();
        playerCount = player.getCount();
    
        form = new Form();
        form.display();
    
        vidas= new Group()
        bombas= new Group()
        cajas= new Group()
        escudos= new Group()

        this.addSprites(vidas,5,vida,0.1)
        this.addSprites(bombas,3,bomba,0.1)
        this.addSprites(cajas,3,caja,0.1)
        this.addSprites(escudos,2,proteger,0.1)


      }
      addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
        for (var i = 0; i < numberOfSprites; i++) {
          var x, y;
          if (positions.length > 0) {
            x = positions[i].x;
            y = positions[i].y;
            spriteImage = positions[i].image;
          } else {
          x = random(200, width -200);
          y = random(20, height-40 );
          }
          var sprite = createSprite(x, y);
          sprite.addImage("sprite", spriteImage);
    
    
          sprite.scale = scale;
          spriteGroup.add(sprite);
        }
      }
    
      handleElements(){
        this.resetTitle.html("Reiniciar juego");
        this.resetTitle.class("resetText");
        this.resetTitle.position(width / 2 + 600, 10);
    
    
        this.resetButton.class("resetButton");
        this.resetButton.position(width / 2 + 650, 70);

  }

      

      handlePlayerControls() {
   
        if(!this.blast){
          if (keyIsDown(UP_ARROW) && player.positionY > 10) {
            player.positionY -= 10;
            player.update();
          }
       
          if (keyIsDown(LEFT_ARROW) && player.positionX > 10) {
            player.positionX -= 5;
            player.update();
          }
       
          if (keyIsDown(RIGHT_ARROW) && player.positionX < width - 40) {
            player.positionX += 5;
            player.update();
          }
    
    
          if (keyIsDown(DOWN_ARROW) && player.positionY < height - 40) {
            player.positionY += 5;
            player.update();
          }
        }
       
      }
    

}