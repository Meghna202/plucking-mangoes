const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var world,boy 
var chain1, chain2, chain3, chain4, chain5, chain6, chain7, chain8;
var launch;





function preload(){
	//boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone=new Stone(280,450,50,50); 
	ground=new Ground(width/2,600,width,20);
  boy = new Boy(170, 240, 200,450)

	mango1=new Mango(1100,100,30);
  mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,250,40);
	mango8=new Mango(1140,200,40);
  tree=new Tree(1050,350, 400, 800);
  chain1 = new Chain(mango1.body, {x:1100, y:100})
  chain2= new Chain(mango2.body, {x:1170, y:130})
  chain3= new Chain(mango3.body, {x:1010, y:140})
  chain4= new Chain(mango4.body, {x:1000, y:70})
  chain5= new Chain(mango5.body, {x:1100, y:70})
  chain6= new Chain(mango6.body, {x:1000, y:230})
  chain7= new Chain(mango7.body, {x:900, y:250})
  chain8= new Chain(mango8.body, {x:1140, y:200})
  launch=new Chain(stone.body,{x:280, y:360})

  Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  text("Press Space to retry!!",50 ,50);

  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  ground.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  chain6.display();
  chain7.display();
  chain8.display();
  boy.display();
  launch.display();

  /*if(stone.body.isTouching(mango1)){
    chain1.detach()
  }
  if(stone.body.isTouching(mango2)){
    chain2.detach()
  }
  if(stone.body.isTouching(mango3)){
    chain3.detach()
  }
  if(stone.body.isTouching(mango4)){
    chain4.detach()
  }
  if(stone.body.isTouching(mango5)){
    chain5.detach()
  }
  if(stone.body.isTouching(mango6)){
    chain6.detach()
  }
  if(stone.body.isTouching(mango7)){
    chain7.detach()
  }
  if(stone.body.isTouching(mango8)){
    chain8.detach()
  }*/
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  launch.fly();
}

function keyPressed(){
  if(keyCode===32){
      launch.attach(stone.body)
  }
}
