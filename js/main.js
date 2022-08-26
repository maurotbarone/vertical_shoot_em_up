const game = new Game()



function preload() {
	game.preload()
}

function setup() {
	createCanvas(600, 800) 
	game.music.play()
	game.music.setVolume(0.5)
}	

function draw() {
	game.draw() 
}

		
 







   

	
