var mario1,bg,mario2,hero,block,reward,ground,super1,super2;
var mario1_img,bg_img,enemy_img,mario2_img,hero_img,block_img,reward_img,super1_img,super2_img;
var enemyGroup;
var score=0
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  mario1_img=loadAnimation("images/hero.png","images/heromove.png");
  mario2_img=loadImage("images/jump.png");
  hero_img=loadAnimation("images/bigmove1.png","images/bigmove2.png");
  hero2_img=loadImage("images/bigjump.png");
  block_img=loadImage("images/block.png");
  reward_img=loadImage("images/reward.jpg");
  super1_img=loadAnimation("images/supermove1.png","images/supermove2.png","images/supermove3.png");
  super2_img=loadImage("images/superjump.png");
  score1_img=loadImage("images/100.png");
  score2_img=loadImage("images/200.png");
  coin_img=loadImage("images/coin.png");
  groundimg = loadImage("images/ground.png");
  enemy_img=loadImage("images/enemy.png");
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-110)

  bg=createSprite(500,640,5000,650);
  bg.addImage(groundimg);
  bg.scale=0.7;

  ground=createSprite(displayWidth/2,displayHeight-230,displayWidth,20);
  ground.visible=false;

  mario1=createSprite(displayWidth/20,displayHeight/1.5,50,50);
  mario1.addAnimation("mario",mario1_img);
  mario1.addAnimation("mario",hero_img); 
  mario1.addAnimation("mario",super1_img);
  mario1.scale=0.8;
  mario1.setCollider("circle",0,0,30)

  enemyGroup =new Group();
  enemyGroup2=new Group();
  enemyGroup3=new Group();
  blockGroup=new Group();
  blockGroup2=new Group();
  blockGroup3=new Group();
  scoreGroup=new Group();
}
function draw(){
  background(145,145,250)

  if(gameState=PLAY){
  bg.velocityX=-5;
  
  if(keyDown("space") ){
    mario1.velocityY=-10;
    mario1.addImage("mario",super2_img)
  }
  if(keyWentUp("space")){
    mario1.addAnimation("mario",super1_img)
  }
  mario1.velocityY=mario1.velocityY+0.7;

  if(keyIsDown(LEFT_ARROW)) {
    mario1.x -= 5;
  }

  if(keyIsDown(RIGHT_ARROW)) {
    mario1.x += 5;
  }

  if(bg.x<450){
    bg.x=displayWidth/2;
  }

  if(enemyGroup.isTouching(mario1)){
    enemyGroup.destroyEach();
  }

  if(enemyGroup2.isTouching(mario1)){
    enemyGroup2.destroyEach();
  }
  
  if(enemyGroup3.isTouching(mario1)){
    enemyGroup3.destroyEach();
  }
}
  if(gameState=END){
    mario1.destroy();
    bg.velocityX=0;
    enemyGroup.setVelocityXEach(0);
    enemyGroup2.setVelocityXEach(0);
    enemyGroup3.setVelocityXEach(0);
  }
  if(mario1.isTouching(blockGroup)){
    gameState=END;
    spawnScore();
  }

  if(mario1.isTouching(blockGroup2)){
    gameState=END;
  }
  if(blockGroup3.isTouching(mario1)){
    gameState=END;
  }
  mario1.collide(ground)
  
  drawSprites();
  textSize(20)
  text("SCORE: "+score,1200,50)
  spawnEnemy1();
  spawnEnemy2();
  spawnEnemy3();
  spawnBlock();
  spawnBlock2();
  spawnBlock3();
} 

function spawnEnemy1(){
  if(frameCount % 100 == 0){
    var enemy = createSprite(displayWidth,displayHeight/2+130);
    enemy.velocityX = -4;
    enemy.addImage(enemy_img);
    enemy.scale=0.25;
    enemy.setCollider("rectangle",0,-100,20,20)
    enemyGroup.add(enemy);
  }
}

function spawnEnemy2(){
  if(frameCount % 160 == 0){
    var enemy2 = createSprite(displayWidth,displayHeight/2+130);
    enemy2.velocityX = -4;
    enemy2.addImage(enemy_img);
    enemy2.scale=0.25;
    enemy2.setCollider("rectangle",0,-100,20,20)
    enemyGroup2.add(enemy2);
  }
}

function spawnEnemy3(){
  if(frameCount % 270 == 0){
    var enemy3 = createSprite(displayWidth,displayHeight/2+130);
    enemy3.velocityX = -4;
    enemy3.addImage(enemy_img);
    enemy3.scale=0.25;
    enemy3.setCollider("rectangle",0,-100,20,20)
    enemyGroup3.add(enemy3);
  }
}

function spawnBlock(){
  if(frameCount % 100 == 0){
    var block = createSprite(displayWidth-30,displayHeight/2+130,10,30);
    block.shapeColor=color(255)
    block.velocityX = -4;
    block.scale=0.25;
    block.visible=false;
    blockGroup.add(block);
  }
}

function spawnBlock2(){
  if(frameCount % 160 == 0){
    var block2 = createSprite(displayWidth-30,displayHeight/2+130,10,30);
    block2.shapeColor=color(255)
    block2.velocityX = -4;
    block2.scale=0.25;
    block2.visible=false;
    blockGroup2.add(block2);
  }
}

function spawnBlock3(){
  if(frameCount % 270 == 0){
    var block3 = createSprite(displayWidth-30,displayHeight/2+130,10,30);
    block3.shapeColor=color(255)
    block3.velocityX = -4;
    block3.scale=0.25;
    blockGroup3.add(block3);
    block3.visible=false;
  }
}

function spawnScore(){
  if(frameCount % 100 == 0){
    var score = createSprite(displayWidth,displayHeight/2+80,10,30);
    score.shapeColor=color(255)
    score.velocityX = -4;
    score.scale=0.25;
    scoreGroup.add(score);
  }
}
