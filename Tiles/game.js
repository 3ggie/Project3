var gameport = document.getElementById("gameport");
//Refresh rate of browser
//Size of game
var renderer = PIXI.autoDetectRenderer(400, 400);
gameport.appendChild(renderer.view);





PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;

PIXI.loader
.add("dooropen.wav")
.add("doorclose.wav")
.add("hovernoise.wav")
.load(ready);

var dooropen;
var doorclose;
var hovernoise;
function ready(){
	dooropen = PIXI.audioManager.getAudio("dooropen.wav");
  doorclose = PIXI.audioManager.getAudio("doorclose.wav");
	hovernoise = PIXI.audioManager.getAudio("hovernoise.wav");

}

var background = new PIXI.Texture.fromImage("p3bk.png");
var backgroundSprite = new PIXI.Sprite(background);


var background2 = new PIXI.Texture.fromImage("p3bk2.png");
var backgroundSprite2 = new PIXI.Sprite(background2);
backgroundSprite2.visible = false;


var bullet = new PIXI.Texture.fromImage("keyb.png");
var bulletSprite = new PIXI.Sprite(bullet);
bulletSprite.visible = false;

var keyman = new PIXI.Texture.fromImage("keyman.png");
var keymanSprite = new PIXI.Sprite(keyman);
keymanSprite.visible = false;




var MainScreen = new PIXI.Container();

var StartGame = new PIXI.Text("Start Game", {font:"30px Castellar", fill:"black"});
StartGame.position.x = 100;
StartGame.position.y = 200;

var Instructions = new PIXI.Text("Instructions", {font:"30px Castellar", fill:"black"});
Instructions.x = 100;
Instructions.y = 250;

var Credits = new PIXI.Text("Credits", {font:"30px Castellar", fill:"black"});
Credits.x = 100;
Credits.y = 300;

StartGame.interactive = true;
StartGame.on('mouseover', onHoverStartGame);
StartGame.on('mouseout', offHoverStartGame);


Instructions.interactive = true;
Instructions.on('mouseover', onHoverInstructions);
Instructions.on('mouseout', offHoverInstructions);





Credits.interactive = true;
Credits.on('mousedown', onDownCredits);
Credits.on('mouseover', onHoverCredits);
Credits.on('mouseout', offHoverCredits);



function onHoverStartGame(e){
	if(this == StartGame ){
		dooropen.play();
		bulletSprite.visible = true;
		bulletSprite.position.x = 40;
		bulletSprite.position.y = 180;
		backgroundSprite2.visible = true;
		keymanSprite.x = -70;
		keymanSprite.y = -20;
		keymanSprite.scale.x = 2;
		keymanSprite.scale.y = 2;

		keymanSprite.visible = true;
	}
}

function offHoverStartGame(e){
	if(this == StartGame){
		doorclose.play();
		bulletSprite.visible = false;
		backgroundSprite2.visible = false;
		keymanSprite.visible = false;


	}
}

function onHoverInstructions(e){
	if(this == Instructions ){
		hovernoise.play();
		bulletSprite.visible = true;
		bulletSprite.position.x = 40;
		bulletSprite.position.y = 230;

	}
}

function offHoverInstructions(e){
	if(this == Instructions){
		bulletSprite.visible = false;

	}
}


function onHoverCredits(e){
	if(this == Credits ){
		hovernoise.play();
		bulletSprite.visible = true;
		bulletSprite.position.x = 40;
		bulletSprite.position.y = 280;

	}
}

function offHoverCredits(e){
	if(this == Credits){
		bulletSprite.visible = false;

	}
}


function onDownStartGame(e){

}

function onDownInstructions(e){

}

function onDownCredits(e){
	animateCredits();
}










MainScreen.addChild(backgroundSprite);
MainScreen.addChild(backgroundSprite2);
MainScreen.addChild(bulletSprite);
MainScreen.addChild(keymanSprite);
MainScreen.addChild(StartGame);
MainScreen.addChild(Instructions);
MainScreen.addChild(Credits);





function animate() {
	requestAnimationFrame(animate);
	renderer.render(MainScreen);
}
animate();
