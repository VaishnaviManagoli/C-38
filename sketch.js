
var database, position;
var player,form,game;
var gameState = 0;
var playerCount;
var allPlayers;
var c1,c2,c3,c4;
var cars;
function setup(){
    createCanvas(displayWidth, displayHeight);
    database = firebase.database();
   game = new Game();
   game.getState();
   game.start();
   
}

function draw(){
    background("white");
    
  if(playerCount === 4){
game.update(1);


  }
if(gameState === 1){
    clear();
game.play();

}
  
}

