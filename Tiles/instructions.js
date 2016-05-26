var renderer = PIXI.autoDetectRenderer(400, 400);
/*Creating global variables, stages, and staging*/

var stageInstructions = new PIXI.Container();


//instructions Sprite
var instructions = new PIXI.Texture.fromImage("p3inst.png");
var instructionsSprite = new PIXI.Sprite(instructions);





var back = new PIXI.Texture.fromImage("back.png");
var backSprite = new PIXI.Sprite(back);

backSprite.position.x = 0;
backSprite.position.y = -20;

backSprite.interactive = true;
backSprite.on('mousedown', goBack);

function goBack(e){
  hovernoise.play();
  animate();
}






//Container that holds my elements
stageInstructions.addChild(instructionsSprite);
stageInstructions.addChild(backSprite);


function animateInstructions() {
	requestAnimationFrame(animateInstructions);
	renderer.render(stageInstructions);
}
animateInstructions();
