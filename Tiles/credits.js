var renderer = PIXI.autoDetectRenderer(400, 400);
/*Creating global variables, stages, and staging*/

var stageCredits = new PIXI.Container();


//Credits Sprite
var Credits = new PIXI.Texture.fromImage("p3credits.png");
var CreditsSprite = new PIXI.Sprite(Credits);





var back = new PIXI.Texture.fromImage("back.png");
var backSprite = new PIXI.Sprite(back);

backSprite.position.x = 0;
backSprite.position.y = 0;

backSprite.interactive = true;
backSprite.on('mousedown', goBack);

function goBack(e){
  animate();
}






//Container that holds my elements
stageCredits.addChild(CreditsSprite);
stageCredits.addChild(backSprite);


function animateCredits() {
	requestAnimationFrame(animateCredits);
	renderer.render(stageCredits);
}
animateCredits();
