<!-- 
(canvas.width / 2) - 50, (canvas.height / 2) + 90)
ctx.fillText => doesn't add line breaks
 -->

## Basic
1) select the canvas element
2) create a drawing object : `ctx = canvas.getContext("2d")`
3) draw on the canvas : `ctx.fillStyle = "#DC143C"` & you many need to _repaint_ again
4) `ctx.fillRect(x, y, width, height)`
___

<!-- 
img
var myImage = new Image(100, 200);
myImage.src = 'picture.jpg';
document.body.appendChild(myImage);
 -->