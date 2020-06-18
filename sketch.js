var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;



var drawing = [];

var dbDrawing = [];

function preload(){

}

function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

}

function mouseDragged(){
  var point = {x:mouseX , y:mouseY}
  drawing.push(point);
  var drawingRef = database.ref('drawing');
  drawingRef.set({
    'd':drawing
  })

}

function readData(){
  database.ref('drawing').on("value",(data)=>{
    dbDrawing = data.val().d
  })

  
}
