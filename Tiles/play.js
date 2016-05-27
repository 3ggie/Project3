var GAME_WIDTH = 400;
var GAME_HEIGHT = 400;
var GAME_SCALE = 1;

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0xffffff});
/*Creating global variables, stages, and staging*/

var stagePlay = new PIXI.Container();
stagePlay.scale.x = GAME_SCALE;
stagePlay.scale.y = GAME_SCALE;

var score = 0;

var tu;
var player;


PIXI.loader
  .add('map_json', 'map.json')
  .add('tileset', 'tileset.png')
	.add('assets.json')
  .load(ready);

function ready() {
  tu = new TileUtilities(PIXI);
  world = tu.makeTiledWorld("map_json", "tileset.png");
  stagePlay.addChild(world);
  stagePlay.addChild(yellowkeySprite);
  stagePlay.addChild(redkeySprite);
  stagePlay.addChild(orangekeySprite);
  stagePlay.addChild(greenkeySprite);
  stagePlay.addChild(whitekeySprite);
  stagePlay.addChild(bluekeySprite);
  stagePlay.addChild(pinkkeySprite);
	stagePlay.addChild(ydoorcSprite);
	stagePlay.addChild(ydooroSprite);
	stagePlay.addChild(rdoorcSprite);
	stagePlay.addChild(rdooroSprite);

  var frames = [];

  for (var i=1; i<=5; i++) {
    frames.push(PIXI.Texture.fromFrame('p3move' + i + '.png'));
  }

  player = new PIXI.extras.MovieClip(frames);
  player.scale.x = 1;
  player.scale.y = 1;
  player.position.x = 32;
  player.position.y = 32;
  player.animationSpeed = 0.1;
  player.play();
  stagePlay.addChild(player);

document.addEventListener('keydown', Controller);
  //wasd and arrow keys funcionality
  function Controller(key) {
        if (key.keyCode === 87 || key.keyCode === 38) {

          key.preventDefault();
            if (player.position.y >= 5) {
                createjs.Tween.get(player).to({y: player.y - 16}, 500);
            }
        }

        if (key.keyCode === 65 || key.keyCode === 37) {
          key.preventDefault();
            if (player.position.x >= 5) {
                createjs.Tween.get(player).to({x: player.x - 16}, 500);
            }
        }

        if (key.keyCode === 68 || key.keyCode === 39) {
          key.preventDefault();
            if (player.position.x <= 348) {
                createjs.Tween.get(player).to({x: player.x + 16}, 500);
            }
        }
        if (key.keyCode === 83 || key.keyCode === 40) {
          key.preventDefault();
            if (player.position.y <= 345) {
                createjs.Tween.get(player).to({y: player.y + 16}, 500);
            }
        }
      }
  }


	var ydoorc = PIXI.Texture.fromImage("ydoorc.png");
	var ydoorcSprite = new PIXI.Sprite(ydoorc);

	ydoorcSprite.position.x = 200;
	ydoorcSprite.position.y = 200;


	var ydooro = PIXI.Texture.fromImage("ydooro.png");
	var ydooroSprite = new PIXI.Sprite(ydooro);

	ydooroSprite.position.x = 200;
	ydooroSprite.position.y = 200;
	ydooroSprite.visible = false;



	var rdoorc = PIXI.Texture.fromImage("rdoorc.png");
	var rdoorcSprite = new PIXI.Sprite(rdoorc);

	rdoorcSprite.position.x = 200;
	rdoorcSprite.position.y = 250;


	var rdooro = PIXI.Texture.fromImage("rdooro.png");
	var rdooroSprite = new PIXI.Sprite(rdooro);

	rdooroSprite.position.x = 200;
	rdooroSprite.position.y = 250;
	rdooroSprite.visible = false;


//Key Instantiation


var yellowkey = PIXI.Texture.fromImage("yellowkey.png");
var yellowkeySprite = new PIXI.Sprite(yellowkey);



var whitekey = PIXI.Texture.fromImage("whitekey.png");
var whitekeySprite = new PIXI.Sprite(whitekey);



var redkey = PIXI.Texture.fromImage("redkey.png");
var redkeySprite = new PIXI.Sprite(redkey);


var orangekey = PIXI.Texture.fromImage("orangekey.png");
var orangekeySprite = new PIXI.Sprite(orangekey);

var greenkey = PIXI.Texture.fromImage("greenkey.png");
var greenkeySprite = new PIXI.Sprite(greenkey);

var bluekey = PIXI.Texture.fromImage("bluekey.png");
var bluekeySprite = new PIXI.Sprite(bluekey);

var pinkkey = PIXI.Texture.fromImage("pinkkey.png");
var pinkkeySprite = new PIXI.Sprite(pinkkey);


function spawnyellowkey() {
  	var randx = 10 * Math.floor((Math.random() * 30) + 1);
	  var randy = 10 * Math.floor((Math.random() * 30) + 1);
    yellowkeySprite.position.x = randx;
    yellowkeySprite.position.y = randy;

}

spawnyellowkey();

function spawnpinkkey() {
    var randx = 10 * Math.floor((Math.random() * 30) + 1);
    var randy = 10 * Math.floor((Math.random() * 30) + 1);
    pinkkeySprite.position.x = randx;
    pinkkeySprite.position.y = randy;

}

spawnpinkkey();

function spawnbluekey() {
    var randx = 10 * Math.floor((Math.random() * 30) + 1);
    var randy = 10 * Math.floor((Math.random() * 30) + 1);
    bluekeySprite.position.x = randx;
    bluekeySprite.position.y = randy;

}

spawnbluekey();


function spawnwhitekey() {
    var randx = 10 * Math.floor((Math.random() * 30) + 1);
    var randy = 10 * Math.floor((Math.random() * 30) + 1);
    whitekeySprite.position.x = randx;
    whitekeySprite.position.y = randy;

}

spawnwhitekey();

function spawnredkey() {
    var randx = 10 * Math.floor((Math.random() * 30) + 1);
    var randy = 10 * Math.floor((Math.random() * 30) + 1);
    redkeySprite.position.x = randx;
    redkeySprite.position.y = randy;

}

spawnredkey();


function spawnorangekey() {
    var randx = 10 * Math.floor((Math.random() * 30) + 1);
    var randy = 10 * Math.floor((Math.random() * 30) + 1);
    orangekeySprite.position.x = randx;
    orangekeySprite.position.y = randy;

}

spawnorangekey();


function spawngreenkey() {
    var randx = 10 * Math.floor((Math.random() * 30) + 1);
    var randy = 10 * Math.floor((Math.random() * 30) + 1);
    greenkeySprite.position.x = randx;
    greenkeySprite.position.y = randy;

}

spawngreenkey();



var haskey = false;
var hasyellow = false;
var hasred = false;
var hasblue = false;
var haswhite = false;
var haspink = false;
var hasorange = false;
var hasgreen = false;



function GrabbedKey() {

	if(haskey == false){
		if(tu.getIndex(yellowkeySprite.x, yellowkeySprite.y, 32, 32, 12) == tu.getIndex(player.x, player.y, 32, 32, 12)){
			spawnyellowkey();
			haskey = true;
			hasyellow = true;
			openDoors();
		}
		if(tu.getIndex(bluekeySprite.x, bluekeySprite.y, 32, 32, 12) == tu.getIndex(player.x, player.y, 32, 32, 12)){
			spawnbluekey();
			hasblue = true;
			haskey = true;
			openDoors();
		}
		if(tu.getIndex(whitekeySprite.x, whitekeySprite.y, 32, 32, 12) == tu.getIndex(player.x, player.y, 32, 32, 12)){
			spawnwhitekey();
			haswhite = true;
			haskey = true;
			openDoors();
		}
		if(tu.getIndex(greenkeySprite.x, greenkeySprite.y, 32, 32, 12) == tu.getIndex(player.x, player.y, 32, 32, 12)){
			spawngreenkey();
			hasgreen = true;
			haskey = true;
			openDoors();
		}
		if(tu.getIndex(redkeySprite.x, redkeySprite.y, 32, 32, 12) == tu.getIndex(player.x, player.y, 32, 32, 12)){
			spawnredkey();
			hasred = true;
			haskey = true;
			openDoors();
		}
		if(tu.getIndex(pinkkeySprite.x, pinkkeySprite.y, 32, 32, 12) == tu.getIndex(player.x, player.y, 32, 32, 12)){
			spawnpinkkey();
			haspink = true;
			haskey = true;
			openDoors();
		}
		if(tu.getIndex(orangekeySprite.x, orangekeySprite.y, 32, 32, 12) == tu.getIndex(player.x, player.y, 32, 32, 12)){
			spawnorangekey();
			hasorange = true;
			haskey = true;
			openDoors();
		}

	}


}

function openDoors(){

	if(tu.getIndex(ydoorcSprite.x, ydoorcSprite.y, 32, 32, 12) == tu.getIndex(player.x, player.y, 32, 32, 12)){
		if(haskey && hasyellow){
		ydoorcSprite.visible = false;
		ydooroSprite.visible = true;
		haskey = false;
		hasyellow = false;
		}
	}
  if(tu.getIndex(rdoorcSprite.x, rdoorcSprite.y, 32, 32, 12) == tu.getIndex(player.x, player.y, 32, 32, 12)){
		if(haskey && hasred){
		rdoorcSprite.visible = false;
		rdooroSprite.visible = true;
		haskey = false;
		hasred = false;
		}
	}

}






function animatePlay() {
	requestAnimationFrame(animatePlay);
	renderer.render(stagePlay);
  update_camera();
	GrabbedKey();
	openDoors();
}
animatePlay();




function update_camera() {
  stagePlay.x = -player.x*GAME_SCALE + GAME_WIDTH/2 - player.width/2*GAME_SCALE;
  stagePlay.y = -player.y*GAME_SCALE + GAME_HEIGHT/2 + player.height/2*GAME_SCALE;
  stagePlay.x = -Math.max(0, Math.min(world.worldWidth*GAME_SCALE - GAME_WIDTH, -stagePlay.x));
  stagePlay.y = -Math.max(0, Math.min(world.worldHeight*GAME_SCALE - GAME_HEIGHT, -stagePlay.y));
}
