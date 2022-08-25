class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()

		this.backgroundImages
		this.playerImage
	
		this.bullet=[]
		this.bulletImage
		this.meteor = []
		this.meteorImage
		
	}
	preload() {
		this.backgroundImages = [
			{ src: loadImage('/assets/background/Nebula Aqua-Pink2.png'), x: 0, speed: 0, },
			{ src: loadImage('/assets/background/Stars Small_1.png'), x: 0, speed: 1 },
			{ src: loadImage('/assets/background/Stars Small_2.png'), y: 0, speed: 1 },
			{ src: loadImage('/assets/background/Stars-Big_1_1_PC.png'), x: 0, speed: 1 },
			{ src: loadImage('/assets/background/Stars-Big_1_2_PC.png'), y: 0, speed: 2}
		]

		this.playerImage = loadImage('/assets/player/playerShip1_red.png')
		this.meteorImage = loadImage('/assets/meteor/meteorBrown_big1.png')
		this.bulletImage = loadImage('/assets/player/laserBlue01.png') 

	}
	draw() {

		clear()
							// console.log('drawing')
		this.background.draw()
		this.player.draw()
							// every x frames we want to push a new coin into the array 
							// console.log(frameCount)
		
		
		// if (keyIsDown(32)){
			// 
		// console.log('fire')
		// if (frameCount % 20 === 0){
		// this.bullet.push(new Bullet(this.bulletImage,this.player.x, this.player.y))
		// }
	// }	
		this.bullet.forEach(function (bullet) {
		bullet.draw()
		})

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
