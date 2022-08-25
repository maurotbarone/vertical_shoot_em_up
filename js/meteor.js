class Meteor {
	constructor(image) {
		this.image = image
		this.x=(Math.random() * 500)
		this.y=-100
		this.width = 60
		this.height = 75
	}

	draw() {
		this.y+=5
		image(this.image, this.x, this.y, this.width, this.height)
	}

collision(playerInfo) { 
		
		let meteorX = this.x + this.width / 2
		let meteorY = this.y + this.height / 2

		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
		if (dist(meteorX, meteorY, playerX, playerY) > 65) {
			return false
		} else {
		
			game.player.score-=200
		
			return true
		} 
	}

collision2(bulletInfo){

		let meteorX = this.x + this.width / 2
		let meteorY = this.y + this.height / 2

			let bulletX = bulletInfo.x + bulletInfo.width / 2
			let bulletY = bulletInfo.y + bulletInfo.height / 2

			if(dist(meteorX,meteorY, bulletX, bulletY)>65) {
				return false
			} 
			
			else {
				game.player.score+=100
				return true
		}

}

}


