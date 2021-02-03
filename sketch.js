const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,groudn2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground12,ground13,ball,ball2,ball3,ball4,ball5
var ball6,ball7,ball8,ball9,ball10,ball11,ball12,ball13,ball14,ball15,ball16,ball17,ball18,ball19,ball20
var ball21,ball22,ball23,ball24,ball25,ball26,ball7,ball8,ball29
function setup() {
  createCanvas(500,700);
 
  engine = Engine.create();
	world = engine.world;
 
  ground = new Ground(50,700,110,30)
  groudn2 = new Ground(10,700,10,500)
  ground3 = new Ground(110,700,10,500)
ground4 = new Ground(170,700,110,30)
ground5 = new Ground(230,700,10,500)
ground6 = new Ground(290,700,110,30)
ground7 = new Ground(340,700,10,500)
ground8 = new Ground(400,700,110,30)
ground9 = new Ground(451,700,10,500)
ground10 = new Ground(511,700,110,30)
ground11 = new Ground(570,700,10,500)
ground12 = new Ground(630,700,110,30)
ground13 = new Ground(690,700,10,500)
ball = new Ball(20,200,30)
ball2 = new Ball(70,200,30)
ball3 = new Ball(130,200,30)
ball4 = new Ball(190,200,30)
ball5 = new Ball(250,200,30)
ball6 = new Ball(320,200,30)
ball7 = new Ball(380,200,30)
ball8 = new Ball(440,200,30)
ball9 = new Ball(490,200,30)
ball10 = new Ball(540,200,30)
ball11 = new Ball(36,250,30)
ball12 = new Ball(100,250,30)
ball13 = new Ball(150,250,30)
ball14 = new Ball(152,250,30)
ball15 = new Ball(220,250,30)
ball16 = new Ball(283,250,30)
ball17 = new Ball(330,250,30)
ball18 = new Ball(370,250,30)
ball19 = new Ball(420,250,30)
ball20 = new Ball(490,250,30)
//ball21 = new Ball()






	Engine.run(engine);
}

function draw() {
  background("black"); 
  Engine.update(engine);
 rectMode(CENTER);
   
ball.display()
ball4.display()
ground.display()
groudn2.display()
ground3.display()
ground4.display()
ground5.display()
ground6.display()
ground7.display()
ground8.display()
ground9.display()
ground10.display()
ground11.display()
ground12.display()
ground13.display()
ball2.display()
ball3.display()
ball5.display()
ball6.display()
ball7.display()
ball8.display()
ball9.display()
ball10.display()
ball11.display()
ball12.display()
ball14.display()
ball15.display()
ball16.display()
ball17.display()
ball18.display()
ball19.display()
ball20.display()









//for (var k = 0; k <=width; k = k + 80) {
  //divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));

//}


 //for (var j = 75; j <=width; j=j+50) 
 //{
 
 //   ball.push(new ball(j,75));
// }

 //for (var j = 50; j <=width-10; j=j+50) 
// {
 
  //  ball2.push(new ball2(j,175));
// }

  //for (var j = 75; j <=width; j=j+50) 
// {
 
  //  ball3.push(new ball3(j,275));
 //}

  //for (var j = 50; j <=width-10; j=j+50) 
 //{
 
   // ball3.push(new ball3(j,375));
 //}

 
























  drawSprites();
}