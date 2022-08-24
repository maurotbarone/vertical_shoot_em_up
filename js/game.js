class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()

		this.backgroundImages
		this.playerImage
	

		this.meteor = []
		this.meteorImage
		
	}
	preload() {
		this.backgroundImages = [
			{ src: loadImage('/assets/background/Nebula Aqua-Pink2.png'), x: 0, speed: 0, },
			{ src: loadImage('/assets/background/Stars Small_1.png'), x: 0, speed: 1 },
			{ src: loadImage('/assets/background/Stars Small_2.png'), y: 0, speed: 2 },
			{ src: loadImage('/assets/background/Stars-Big_1_1_PC.png'), x: 0, speed: 1 },
			{ src: loadImage('/assets/background/Stars-Big_1_2_PC.png'), y: 0, speed: 1 }
		]

		this.playerImage = loadImage('/assets/player/playerShip1_red.png')
		this.meteorImage = loadImage('/assets/player/enemies/12.png') 

	}
	draw() {
		clear()
		// console.log('drawing')
		this.background.draw()
		this.player.draw()
		// every x frames we want to push a new coin into the array 
		// console.log(frameCount)
		if (frameCount % 90 === 0) {
			this.meteor.push(new Meteor(this.meteorImage))
			// console.log(this.obstacles)
		}
		this.meteor.forEach(function (meteor) {
			meteor.draw()
		})
		// we need an arrow function here so that 'this' has the right context 
		// (that of the game object)
		this.meteor = this.meteor.filter(meteor => {
			// console.log(this)
			if (meteor.collision(this.player) || meteor.x < 0) {
				return false
			} else {
				return true
			}
		})
	}

}
