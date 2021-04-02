var helecopterIMG,helecopterSprite,packageSprite,packageIMG;
var packagebody,ground;
var line1,line2,line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload() {
    helecopterIMG=loadImage("helecopter.png")
    packageIMG=loadImage("package.png")
}
function setup() {
    createCanvas(800,700);
    rectMode(CENTER);
    packageSprite=createSprite(width/2,80,10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2
    helecopterSprite=createSprite(width/2,200,10,10);
    helecopterSprit.addImage(helecopterIMG)
    helecopterSprite.scale=0.6
    groundSprite=createSprite(width/2,height=35,width,10);
    groundSprite.shapeColour=colour("pink")
    engine=Engine.create();
    World=engine.world;
   packagebody=Bodies.circle(width/2,200,5,{restution:04,isStatic:true});
   world.add(world,packagebody)
  ground=Bodies.rectangle(width/2,650,width,10,{isStatic:true});
   world.add(world,ground);
   Engine.run(engine);
   line1=createSprite(width/2,height=50,200,20);
   line1.shapeColour("red");
   line2=createSprite(510,610,20,100);
   line2.shapeColour("red");
   line3=createSprite(310,610,20,100);
   line3.shapeColour("red");
}
function draw() {
    rectMode(CENTER);
    background(0);
    packageSprite.x=packagebody.position.x
    packageSprite.y=packagebody.position.y

    package1Sprite.x=packagebody1.position.x
    package1Sprite.y=packagebody1.position.y

    package2Sprite.x=packagebody2.position.x
    package2Sprite.y=packagebody2.position.y

    packageSprite .collide(line1);
    packageSprite1 .collide(line1);
    packageSprite2 .collide(line1);

    packageSprite .collide(line2);
    packageSprite1 .collide(line2);
    packageSprite2 .collide(line2);

    packageSprite .collide(line3);
    packageSprite1 .collide(line3);
    packageSprite2 .collide(line3);
    drawSprites();
}
if (keyCode === DOWN_ARROW) {

Matter.Body.setStatic(packageBody,false);
Matter.Body.setStatic(packageBody1,false);
Matter.Body.setStatic(packageBody2,false);
 }