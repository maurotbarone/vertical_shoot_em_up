class Background {
	draw() {
		// console.log('this is the background drawing', width)
		image(game.backgroundImages[0].src, 0, 0, width, height)
		image(game.backgroundImages[1].src, 0, 0, width, height)
		image(game.backgroundImages[2].src, 0, 0, width, height)
		image(game.backgroundImages[3].src, 0, 0, width, height)
		image(game.backgroundImages[4].src, 0, 0, width, height)

		game.backgroundImages.forEach(function (img) {
		img.y += img.speed
		image(img.src, 0, img.y, width, height)
		image(img.src, 0, img.y - width, width, height)
		if (img.y >= height) img.y = 0
		
		
	})
}
}