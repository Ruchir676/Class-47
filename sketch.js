var backgroundImage, goonImage, knightImage, motorcycle_img;
var ground, roof
var motorcycle, motorcycleGroup;
var goon, goonGroup; 



function preload() {
    backgroundImage = loadImage("images/back.png");
    goonImage = loadImage("images/goon.png");
    knightImage = loadImage("images/Knight.png");
    motorcycle_img = loadImage("images/motorcycle.png");

}

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);

    backgr = createSprite(950,500,10,10);
    backgr.addImage(backgroundImage);
    backgr.scale=2;

    knight = createSprite(300,700,10,10);
    knight.debug=true;
    knight.setCollider("rectangle",0,0,300,300);
    knight.addImage(knightImage);
    knight.scale=0.8;

    ground = createSprite(950,1000,windowWidth,10);
    ground.visible = false;

    motorcycleGroup= new Group();
    goonGroup = new Group();

    
 

}

function draw() {
 background("white")
    backgr.velocityX=-3;
    if(backgr.x<200) {
    backgr.x=800;
    }
    console.log(knight.y);
    if(keyWentDown(UP_ARROW)&& knight.y>=607) {
        knight.velocityY=-8;
    }
    if(keyWentUp(UP_ARROW)&& knight.y>=607) {
        knight.velocityY=0;
    }
    if(keyWentDown(DOWN_ARROW)) {
        knight.velocityY=8;
    }
    if(keyWentUp(DOWN_ARROW)) {
        knight.velocityY=0;
    }
    knight.collide(ground);

    if(knight.isTouching(motorcycleGroup)) {
        motorcycleGroup.destroyEach();
        knight.destroy();
    }

    if(keyWentDown("A") && knight.isTouching(goonGroup)) {
        goonGroup.destroyEach();
    }else if(knight.isTouching(goonGroup)) {
        knight.destroy();
    }




    
    

    spawnMotorcycle();
    spawnGoons();
   

    drawSprites();
  

}

function spawnMotorcycle() {
    if(frameCount%300===0) {
        motorcycle = createSprite(windowWidth-15, Math.round(random(450,950)),10,10);
        motorcycle.debug=true;
        motorcycle.setCollider("rectangle",0,0,500,400);
        motorcycle.addImage(motorcycle_img);
        motorcycle.scale=0.4;
        motorcycle.velocityX=-25;
        motorcycle.lifetime=windowWidth/25;
        motorcycleGroup.add(motorcycle);
    }
}

function spawnGoons() {
    if(frameCount%150===0) {
        goon = createSprite(windowWidth-15, Math.round(random(450,950)),10,10);
        goon.debug=true;
        goon.setCollider("rectangle",0,0,320,320);
        goon.addImage(goonImage);
        goon.scale=0.4;
        goon.velocityX=-10;
        goon.lifetime=windowWidth/10;
        goonGroup.add(goon);
        
    }
}


