const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var ball;

function preload() {

    
}

function setup(){

    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,700,1200,20);

    box1 = new Box(800,650,50,50);
    box2 = new Box(860,650,50,50);
    box3 = new Box(920,650,50,50);
    box4 = new Box(800,600,50,50);
    box5 = new Box(860,600,50,50);
    box6 = new Box(920,600,50,50);
    box7 = new Box(800,550,50,50);
    box8 = new Box(860,550,50,50);
    box9 = new Box(920,550,50,50);
    box10 = new Box(800,450,50,50);
    box11 = new Box(860,450,50,50);
    box12 = new Box(920,450,50,50);
    box13 = new Box(800,350,50,50);
    //box14 = new Box(860,350,50,50);
    box15 = new Box(920,350,50,50);
    box16 = new Box(800,250,50,50);

    ball = new wreckingBall(600,200,50);

    slingshot = new SlingShot(ball.body, {x:600, y:200});
}

function draw(){

    Engine.update(engine);

    background(255,0,0);

    ground.display();

    slingshot.display();  
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    //box14.display();
    box15.display();
    box16.display();

    ball.display();

}

function mouseDragged(){
    
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}