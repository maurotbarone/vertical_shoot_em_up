 const game = new Game()

function preload() {
	game.preload()
}

function setup() {
	createCanvas(600, 800)
	
	game.music.setVolume(0.5)
	game.music.play()

	
}

function draw() {
	game.draw() 
}
 







   

	
