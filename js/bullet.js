class Bullet {
		constructor(image,x,y) {
			this.image = image
			this.x=x+33
			this.y=y-25
			this.width = 10
			this.height = 30
		}
	
		draw() {
			
			this.y-=7
	
			image(this.image, this.x, this.y, this.width, this.height)
}
}


function keyPressed() {
	if (keyCode === 32) {
		game.bullet.push(new Bullet(game.bulletImage,game.player.x, game.player.y))
		game.laser.play()
	}

}
 
