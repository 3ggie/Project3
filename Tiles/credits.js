var renderer = PIXI.autoDetectRenderer(400, 400);
/*Creating global variables, stages, and staging*/

var stageCredits = new PIXI.Container();


//Credits Sprite
var Credits = new PIXI.Texture.fromImage("p3credits.png");
var CreditsSprite = new PIXI.Sprite(Credits);



var back2 = new PIXI.Texture.fromImage("back2.png");
var backSprite2 = new PIXI.Sprite(back2);



backSprite2.interactive = true;
backSprite2.position.x = 0;
backSprite2.position.y = 0;
backSprite2.visible = false;



backSprite2.on('mousedown', goBack);
backSprite2.on('mouseout', offHoverBack);
backSprite2.on('mouseover', onHoverBack1);


var back = new PIXI.Texture.fromImage("back.png");
var backSprite = new PIXI.Sprite(back);

backSprite.position.x = 0;
backSprite.position.y = 0;


backSprite.interactive = true;
backSprite.on('mousedown', goBack);
backSprite.on('mouseover', onHoverBack);
backSprite.on('mouseout', offHoverBack1)


function offHoverBack1(e){
  backSprite2.visible = true;
  backSprite.visible = false;

}

function onHoverBack1(e){
  backSprite.visible = true;
  backSprite2.visible = false;
}

function offHoverBack(e){
  backSprite2.visible = false;
  backSprite.visible = true;
}

function onHoverBack(e){
  backSprite.visible = false;
  backSprite2.visible = true;
}


function goBack(e){
  hovernoise.play();
  animate();
}











//Container that holds my elements
stageCredits.addChild(CreditsSprite);
stageCredits.addChild(backSprite);
stageCredits.addChild(backSprite2);



function animateCredits() {
	requestAnimationFrame(animateCredits);
	renderer.render(stageCredits);
}
animateCredits();
