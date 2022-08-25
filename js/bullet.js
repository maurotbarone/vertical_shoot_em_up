class Bullet {
		constructor(image,x,y) {
			this.image = image
			this.x=x+33
			this.y=y-25
			this.width = 10
			this.height = 30
		}
	
		draw() {
			
			this.y--
	
			image(this.image, this.x, this.y, this.width, this.height)
}
}
