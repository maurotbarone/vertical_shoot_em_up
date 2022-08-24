class Player {
	constructor() {
		this.width = 75
		this.height = 75
		this.x = 300 
		this.y = 600 - this.height
		this.score = 0
	}
	draw() {
		image(game.playerImage, this.x, this.y, this.width, this.height)
	

		if (keyIsDown(76)) {
			this.moveRight()
		}
        if (keyIsDown(74)) {
			this.moveLeft() 
		}
        if (keyIsDown(75)) {
			this.moveDown()
		}
        if (keyIsDown(73)) {
			this.moveUp()
		}
	}

	moveRight() {
        if (this.x<523){this.x += 7}
        else {this.x +=0}
	}
	moveLeft() {
        if (this.x>2){this.x -= 7}
        else {this.x -=0}
	}
	moveUp() {
        if (this.y>2){this.y -= 7}
        else{this.y-=0}
    }
	moveDown() {
        if (this.y<725){this.y += 7}
        else {this.y += 0}
}
}
