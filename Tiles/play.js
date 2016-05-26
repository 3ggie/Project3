

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0xffffff});
/*Creating global variables, stages, and staging*/

var stagePlay = new PIXI.Container();
stagePlay.scale.x = 3;
stagePlay.scale.y = 3;

PIXI.loader
  .add('map_json', 'map.json')
  .add('tileset', 'tileset.png')
	.add('assets.json')
  .load(ready);

function ready() {
  var tu = new TileUtilities(PIXI);
  world = tu.makeTiledWorld("map_json", "tileset.png");
  stagePlay.addChild(world);

  var frames = [];

  for (var i=1; i<=5; i++) {
    frames.push(PIXI.Texture.fromFrame('p3move' + i + '.png'));
  }

  runner = new PIXI.extras.MovieClip(frames);
  runner.scale.x = 1;
  runner.scale.y = 1;
  runner.position.x = 32;
  runner.position.y = 32;
  runner.animationSpeed = 0.1;
  runner.play();
  stagePlay.addChild(runner);
}


// var Credits = new PIXI.Texture.fromImage("p3credits.png");
// var CreditsSprite = new PIXI.Sprite(Credits);









//Container that holds my elements
//stagePlay.addChild(CreditsSprite);



function animatePlay() {
	requestAnimationFrame(animatePlay);
	renderer.render(stagePlay);
}
animatePlay();
