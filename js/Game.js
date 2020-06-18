class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    
  }

  play(){
    form.hide();
   // textSize(30);
    //text("Game Start", 120, 100)
    Player.getPlayerInfo();

   


    if(allPlayers !== undefined){

      readData();
      beginShape();
      stroke("green");
      strokeWeight(4);
      noFill();
     for(var i = 0; i<dbDrawing.length; i++){
     vertex(dbDrawing[i].x , dbDrawing[i].y);
     
      endShape();
     }
     
      // var display_position = 130;
      // index of array
     var index = 0;

     //x and y position of cars 
     

      for(var plr in allPlayers){
       //add 1 to index for every loop
        index = index+1;

      }
    }


    
    drawSprites();
  }

}
