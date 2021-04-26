var cat
var mouse
var garden


function preload() {
    //load the images here
    cat1=loadImage(cat1.png)
    cat2=loadImage(cat2.png)
    cat3=loadImage(cat3.png)
    cat4=loadImage(cat4.png)

    mouse1=loadimage(mouse1.png)
    mouse2=loadimage(mouse2.png)
    mouse3=loadimage(mouse3.png)
    mouse4=loadimage(mouse4.png)

    garden=loadimage(garden.png)

}

function setup(){
    createCanvas(1000,800);
//create tom and jerry sprites here
cat=createSprites(100,100)
mouse=createSprites(200,200)

}

function draw() {

    background(garden)
    //Write condition here to evalute if tom and jerry collide
     if(catisTouching(mouse)){
     


     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
