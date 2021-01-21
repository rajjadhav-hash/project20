var cat,tomImage1,tomImage2,tomImage3,tomImage4;
var mouse,jerryImage1,jerryImage2,jerryImage3,jerryImage4;
var garden,gardenImage;




function preload() {
    gardenImage=loadImage("images/garden.png");
    

}

function setup(){
    createCanvas(1000,700);
    text(mouseX+','+mouseY,10,45);

}

function draw() {
    
    background(gardenImage);
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunning",catImage2);
        cat.changeAnimation("catRunning");
    }


}
