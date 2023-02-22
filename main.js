var canvas = new fabric.Canvas('myCanvas');
var blockY = 1;
var blockX = 1;

var blockImageWidth = 350;
var blockImageHeight = 430;

var blockImageObject = "";

function newImage(getImage) {
	fabric.Image.fromURL(getImage, function (img) {
		var block_image_object = img;
		block_image_object.scaleToWidth(blockImageWidth);
		block_image_object.scaleToHeight(blockImageHeight);
		block_image_object.set({
			top: blockY,
			left: blockX
		});

		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	var keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '82') {
		blockX = 0;
		newImage('rr1.png');
		console.log("r");
	}

	if (keyPressed == '86') {
		blockX = 200;
		newImage('gr.png');
		console.log("v");
	}

	if (keyPressed == '65') {
		blockX = 350;
		newImage('yr.png');
		console.log("a");
	}

	if (keyPressed == '69') {
		blockX = 600;
		newImage('pr.png');
		console.log("e");
	}

	if (keyPressed == '73') {
		blockX = 700;
		newImage('br.png');
		console.log("i");
	}
}