var renderer = PIXI.autoDetectRenderer(400, 400);
/*Creating global variables, stages, and staging*/

var stageInstructions = new PIXI.Container();


//instructions Sprite
var instructions = new PIXI.Texture.fromImage("p3inst.png");
var instructionsSprite = new PIXI.Sprite(instructions);





var backi = new PIXI.Texture.fromImage("back2.png");
var backSpritei = new PIXI.Sprite(backi);

backSpritei.interactive = true;
backSpritei.position.x = 0;
backSpritei.position.y = -20;




backSpritei.on('mousedown', goBack);
backSpritei.on('mouseout', offHoverBack);
backSpritei.on('mouseover', onHoverBack1);





var back = new PIXI.Texture.fromImage("back.png");
var backSprite = new PIXI.Sprite(back);

backSprite.position.x = 0;
backSprite.position.y = -20;

backSprite.interactive = true;
backSprite.on('mousedown', goBack);
backSprite.on('mouseover', onHoverBack);
backSprite.on('mouseout', offHoverBack1)



function offHoverBack1(e){
  backSpritei.visible = true;
  backSprite.visible = false;

}

function onHoverBack1(e){
  backSprite.visible = true;
  backSpritei.visible = false;
}



function offHoverBack(e){
  backSpritei.visible = false;
  backSprite.visible = true;
}

function onHoverBack(e){
  backSprite.visible = false;
  backSpritei.visible = true;
}





function goBack(e){
  hovernoise.play();
  animate();
}






//Container that holds my elements
stageInstructions.addChild(instructionsSprite);
stageInstructions.addChild(backSprite);
stageInstructions.addChild(backSpritei);


function animateInstructions() {
	requestAnimationFrame(animateInstructions);
	renderer.render(stageInstructions);
}
animateInstructions();
