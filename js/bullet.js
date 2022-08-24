class Bullet {
	constructor() {
		this.image=image
		this.x=x
		// this.x=(Math.random() * 600)
		this.y=y
		this.width = 10
		this.height = 35
	}

	draw() {
		this.y--
		image(game.bulletImage, this.y, this.y, this.width, this.height)
		// image(this.image, this.x, this.y, this.width, (this.height) )
	}

	// collision(playerInfo) {
		// console.log('collision', playerInfo)
		// dist(x, y, 2ndx, 2ndy) returns the distance
		// get the middle of the obstacle
		// let meteorX = this.x + this.width / 2
		// let meteorY = this.y + this.height / 2 
		// get the middle of the player
		// let playerX = playerInfo.x + playerInfo.width / 2
		// let playerY = playerInfo.y + playerInfo.height / 2
		// if (dist(meteorX, meteorY, playerX, playerY) > 100) {
			// return false
		// } else {
			// increment the score
			// game.player.score++
			// console.log(game.player.score)
			// return true
		// }
	// }
}