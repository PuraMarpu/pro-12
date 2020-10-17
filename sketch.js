
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var terra,copy,wall,wal,wa,walll,ma;
var engine,world,cop;

function preload(){
   ma = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800,400);

	engine = Engine.create();
	world = engine.world;
 
    copy = new Paper(160,360);

	terra = new Ground();

	wa = new Bin(600,345,60,10);
	wal = new Bin(565,310,10,80);
	wall = new Bin(635,310,10,80);
	walll = createSprite(600,310,10,10);
	walll.addImage("red",ma);
	walll.scale = 0.235;

	Engine.run(engine);
}


function draw() {
  background(255);
  
  copy.display();

  terra.earth();

  wa.hiro();
  wal.hiro();
  wall.hiro();
  
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(copy.pap,copy.pap.position,{x:45,y:-70});
	}
}
