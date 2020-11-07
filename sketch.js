const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var bgImg;

var balloon,ball,balloonImg;
var o11,o12,o13,o14,o15,o16;

function preload(){
    bgImg = loadImage("images/SDG-Bg.png");
   //balloonImg = loadImage("images/balloon.png");
}

function setup(){
    var canvas = createCanvas(500,windowHeight);
    engine = Engine.create();
    world = engine.world;

    balloon = createSprite(250,windowHeight-100,40,40);
    ball = new Ball();
    o11 = new Obstacle(175,500,30,30);
    // o12 = new Obstacle(200,windowHeight+20,30,30);
    // o13 = new Obstacle(225,windowHeight+20,30,30);
    // o14 = new Obstacle(250,windowHeight+20,30,30);
    // o15 = new Obstacle(275,windowHeight+20,30,30)
    // o16 = new Obstacle(300,windowHeight+20,30,30);
}

function draw(){
    background(0);
    ball.display();
    o11.display();
    // o12.display();
    // o13.display();
    // o14.display();
    // o15.display();
    // o16.display();
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}