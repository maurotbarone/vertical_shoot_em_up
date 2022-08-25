 
const game = new Game()
// here we load all the game assets
function preload() {
	game.preload()
}

function setup() {
	createCanvas(600, 800);
	
}

function draw() {
	game.draw() 
}

// if (keyIsDown(32)){
			// 
	// console.log('fire')
	// 
	// game.bullet.push(new Bullet(game.bulletImage,game.player.x, game.player.y))
// }

function keyPressed() {
	if (keyCode === 32) {
		game.bullet.push(new Bullet(game.bulletImage,game.player.x, game.player.y))
	}
}
 







   

	
