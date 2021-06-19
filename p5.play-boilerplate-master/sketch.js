var iss,spacecraft,hasDocked = false;
var issImg,spaceCraftImg,spaceBg;

function preload()
{
  issImg = loadImage("images/iss.png");
  spaceCraftImg = loadImage("images/spacecraft1.png");
  spaceCraftImg1 = loadImage("images/spacecraft3.png");
  spaceCraftImg2 = loadImage("images/spacecraft4.png");
  spaceCraftImg3 = loadImage("images/spacecraft2.png");
  spaceBg = loadImage("images/spacebg.jpg");

}

function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 200, 50, 50);
  iss.addAnimation("space",issImg);
  iss.scale = 0.5;

  spaceCraft = createprite(400,400.50,50);
  spaceCraft.addAnimation("craft",spaceCraftImg);
  spaceCraft.addAnimation("leftCraft",spaceCraftImg1);
  spaceCraft.addAnimation("rightCraft",spaceCraftImg2);
  spaceCraft.addAnimation("downCraft",spaceCraftImg3);
  spaceCraft.scale = 0.5;

}

function draw() {
  background(255,255,255);  

  if(!hasDocked)
  {

    if(keyPressed(LEFT_ARROW))
    {
      spaceCraft.changeAnimation("left",spaceCraftImg1);
      spaceCraft.x.position = spaceCraft.x.position-5;
    }

    if(keyPressed(RIGHT_ARROW))
    {
      spaceCraft.changeAnimation("right",spaceCraftImg2);
      spaceCraft.x.position = spaceCraft.x.position+5;
    }

    if(keyPressed(DOWN_ARROW))
    {
      spaceCraft.changeAnimation("down",spaceCraftImg3);
    }

    if(keyPressed(UP_ARROW))
    {
      spaceCraft.y.position = spaceCraft.y.position-5;
    }
  }
  drawSprites();
}