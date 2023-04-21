class Form{
    constructor(){
        this.input = createInput("").attribute("placeholder", "Introduce tu nombre");
        this.playButton = createButton("Jugar");
        this.titleImg = createImg("./assets/title.png", "game title");
        this.greeting = createElement("h2");
    }

    setElementsPosition() {
        this.titleImg.position(120, 160);
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.playButton.position(width / 2 - 90, height / 2 - 20);
        this.greeting.position(width / 2 - 300, height / 2 - 100);
      }
      setElementsStyle() {
        this.titleImg.class("gameTitle");
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
      }

      hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
        this.titleImg.hide();
      }
      handleMousePressed() {
        this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          var message = `
          Hola, ${this.input.value()}
          </br>espera a que se una otro jugador...`;
          this.greeting.html(message);
          playerCount += 1;
          switch (playerCount) {
            case 1:
              player.positionX = 50;
              player.positionY = 160;
              break;
            case 2:
              player.positionX = windowWidth-50;
              player.positionY = 160;
              break;
            case 3:
              player.positionX = 50;
              player.positionY = windowHeight-160;
              break;
            case 4:
              player.positionX = windowWidth-50;
              player.positionY = windowHeight-160;
              break;
            default:
              break;
          }

  
             
              //player.name = this.input.value();
              player.index = playerCount;
              player.addPlayer();//aaa
              player.updateCount(playerCount); // BP
        });
      }

      display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
      }



}