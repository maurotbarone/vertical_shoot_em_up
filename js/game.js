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
	
		this.background.draw()
		this.player.draw()

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
	
		this.meteor = this.meteor.filter(meteor => {
			for (let i=0;i<this.bullet.length; i++){
				if (meteor.collision2(this.bullet[i]) || meteor.y> 800) {	
				return false
			} else {
				return true
			}
		}
		return true;
		})

		// this.meteor = this.meteor.filter(meteor => {
			// if (meteor.collision(this.player) || meteor.y>800) {	
				// return false
			// } else {
				// return true
			// }
		// })

		fill(255)
		textSize(50)
		text(game.player.score, 450,60)


		
	}

}
