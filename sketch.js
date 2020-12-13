// Creating the sprites
var bow, bowImage, redBalloon1, greenBalloon1, blueBalloon1, redBalloonImage1, greenBalloonImage, blueBalloonImage, arrow, arrowImage, pinkBalloon, pinkBalloonImage, background1, backgroundImage

var redBalloons, blueBalloons, greenBalloons, pinkBalloons, arrowGroup

// Creating the Score
var score = 0

// Creating the state for the arrow
var arrowState = "ready"

function preload() {
  //loading the Images
  bowImage = loadAnimation("bow0.png")
  redBalloonImage = loadAnimation("red_balloon0.png")
  blueBalloonImage = loadAnimation("blue_balloon0.png")
  greenBalloonImage = loadAnimation("green_balloon0.png")
  pinkBalloonImage = loadAnimation("pink_balloon0.png")
  arrowImage = loadAnimation("arrow0.png")
  backgroundImage = loadImage("background0.png")
}

function setup() {
  // Creating the Canvas
  createCanvas(400, 400);

  // Creating the Background
  background1 = createSprite(0, 0, 400, 400)
  background1.addImage("background", backgroundImage)
  background1.velocityX = -3;
  background1.scale = 2

  //creating bow sprite
  bow = createSprite(385, 100, 10, 40)
  bow.addAnimation("bow", bowImage)
  
  // Creating the groups for the balloons and the arrow
  redBalloons = new Group()
  pinkBalloons = new Group()
  greenBalloons = new Group()
  blueBalloons = new Group()
  arrowGroup = new Group()
}

function draw() {
  // Background color
  background("white")
  
  // Making a moving background
  if (background1.x < 0) {
    background1.x = background1.width / 2
  }
  
  // Giving Y velocities to all the balloons
  redBalloons.setVelocityYEach(-3)
  greenBalloons.setVelocityYEach(-3)
  pinkBalloons.setVelocityYEach(-3)
  blueBalloons.setVelocityYEach(-3)

  // Moving the bow Y with the mouse Y
  bow.y = mouseY

  // A function that choses a number between 1 and 4
  number = Math.round(random(1, 4))

  // If the framecount is 80 then we will spawn a random colored balloon
  if (frameCount % 80 === 0) {
    switch (number) {
      case 1:
        redBalloon()
        break;
      case 2:
        blueBalloon()
        break;
      case 3:
        pinkBalloon()
        break;
      case 4:
        greenBalloon()
        break;
    }
    
    /*
    If the arrow is touching the balloons it will destroy the balloon and add plus 1 score to the scoreboard
    */
    if (redBalloons.isTouching(arrowGroup)){
      score = score + 1
      redBalloons.destroyEach()
      arrowGroup.destroyEach()
    }
    
    if (blueBalloons.isTouching(arrowGroup)){
      score = score + 2
      blueBalloons.destroyEach()
      arrowGroup.destroyEach()
    }
    
    if (greenBalloons.isTouching(arrowGroup)){
      score = score + 3
      greenBalloons.destroyEach()
      arrowGroup.destroyEach()
    }
    
    if (pinkBalloons.isTouching(arrowGroup)){
      score = score + 3
      pinkBalloons.destroyEach()
      arrowGroup.destroyEach()

    }
  }
  
  // Shooting the arrow
  if (keyWentDown("space")){
     // Creating the arrow and placing it with the bow y 
  arrow = createSprite(320, 200, 10, 20)
  arrow.addAnimation("Arrow", arrowImage)
  arrow.scale = 0.3
  arrow.velocityX = -3
  arrowGroup.add(arrow)
  arrow.y = bow.y
  }
  
  // Drawing the Sprites
  drawSprites()
  
   fill("black")
   text("Score: " + score, 270, 30)
}

function redBalloon() {
  redBalloon1 = createSprite(Math.round(random(20, 370)), 400, 10, 10)
  redBalloon1.addAnimation("red balloon", redBalloonImage)
  redBalloon1.scale = 0.1
  redBalloon1.lifetime = 150
  redBalloons.add(redBalloon1)
}

function blueBalloon() {
  blueBalloon1 = createSprite(Math.round(random(20, 370)), 400, 20, 20)
  blueBalloon1.addAnimation("blueBalloon", blueBalloonImage)
  blueBalloon1.scale = 0.1
  blueBalloon1.lifetime = 150
  blueBalloons.add(blueBalloon1)
}

function greenBalloon() {
  greenBalloon1 = createSprite(Math.round(random(20, 370)), 400, 20, 20)
  greenBalloon1.addAnimation("greenBalloon", greenBalloonImage)
  greenBalloon1.scale = 0.1
  greenBalloon1.lifetime = 150
  greenBalloons.add(greenBalloon1)
}

function pinkBalloon() {
  pinkBalloon1 = createSprite(Math.round(random(20, 370)),400, 130, 10, 10)
  pinkBalloon1.addAnimation("pinkBalloon", pinkBalloonImage)
  pinkBalloon1.scale = 1.3
  pinkBalloon1.lifetime = 150
  pinkBalloons.add(pinkBalloon1)
}