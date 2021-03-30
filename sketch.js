var canvas;
var music;
var block1
var block2
var block3
var block4
var moving_square

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600)
block1=createSprite(500,580,200,30)
block2=createSprite(700,580,200,30)
block3=createSprite(300,580,200,30)
block4=createSprite(100,580,200,30)
moving_square=createSprite(300,300,40,40)
moving_square.velocityX=4
moving_square.velocityY=4

}

function draw() {
    background("blue");
    edges=createEdgeSprites()
    moving_square.bounceOff(edges)
    moving_square.bounceOff(block1)
    moving_square.bounceOff(block2)
    moving_square.bounceOff(block3)
    moving_square.bounceOff(block4)

    block1.shapeColor="orange"
    block2.shapeColor="yellow"
    block3.shapeColor="red"
    block4.shapeColor="green"
    

    if(isTouching(block1,moving_square)){

        moving_square.shapeColor="orange";
      }
      
        if(isTouching(block2,moving_square)){

            moving_square.shapeColor="yellow";
          }
          
            if(isTouching(block3,moving_square)){

                moving_square.shapeColor="red";
                moving_square.velocityX=0
                moving_square.velocityY=0
              }
              

if(isTouching(block4,moving_square)){

                moving_square.shapeColor="green";
}
              


        
                
    
      
    
          
    drawSprites()
          }
function isTouching(sprite1,sprite2){
if (sprite1.x - sprite2.x <= sprite2.width/2 +sprite1.width/2
    && sprite2.x - sprite1.x <= sprite2.width/2 +sprite1.width/2
    && sprite2.y - sprite1.y <= sprite2.height/2 +sprite1.height/2
    && sprite1.y - sprite2.y <= sprite2.height/2 +sprite1.height/2) {
    
      return true;
  }
  else {
    return false;
  }
}