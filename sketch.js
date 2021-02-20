var tom, jerry, tomImage, jerryImage, jerryImage2, jerryImage3;
var tomImage2, tomImage3;
var garden, gardenImage; 

function preload() {
    //load the images here

    gardenImage=loadImage("garden.png");

    tomImage=loadImage("cat1.png");
    tomImage2=loadAnimation("cat2.png","cat3.png");
    tomImage3=loadImage("cat4.png");

    jerryImage=loadImage("mouse1.png");
    jerryImage2=loadAnimation("mouse2.png","mouse3.png");
    jerryImage3=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here

    garden=createSprite(500,400,20,20) 
    garden.addImage(gardenImage)
    garden.scale=1.4

    tom=createSprite(850,700,20,60)
    tom.addImage(tomImage)
    tom.scale=0.191

    jerry=createSprite(150,700,20,20)
    jerry.addImage(jerryImage)
    jerry.scale=0.191

}

function draw() {
    background(0);
    
    keyPressed();
    drawSprites();

   

}

function keyPressed(){
//For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
    tom.velocityX=-5

    

    tom.addAnimation("catRunning",tomImage2);
    tom.changeAnimation("catRunning")

    jerry.addAnimation("mouseRunning",jerryImage2)
    jerry.changeAnimation("mouseRunning")
  }

    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
  
      tom.velocityX=0
      tom.addAnimation("catLastImage",tomImage3)
      tom.changeAnimation("catLastImage")
    }
}

//function isTouching(object1, object2){
    //if(object1.x-object2.x<object1.width/2+object2.width/2 && 
      //object2.x-object1.x<object1.width/2+object2.width/2 &&
      //object1.y-object2.y<object1.height/2+object2.height/2 && 
      //object2.y-object1.y<object1.height/2+object2.height/2){
      //return true  
    //}
    //else{
      //return false
    //}
  //}