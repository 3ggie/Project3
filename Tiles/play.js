var renderer = PIXI.autoDetectRenderer(400, 400);
/*Creating global variables, stages, and staging*/

var stagePlay = new PIXI.Container();




var Credits = new PIXI.Texture.fromImage("p3credits.png");
var CreditsSprite = new PIXI.Sprite(Credits);









//Container that holds my elements
stagePlay.addChild(CreditsSprite);



function animatePlay() {
	requestAnimationFrame(animatePlay);
	renderer.render(stagePlay);
}
animatePlay();
