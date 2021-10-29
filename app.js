// for simplicity sake
const $ = selector => document.querySelector(selector)
const lg = val => console.log(val)


// selecting HTML elements
const   formContainer = $('#form-container'),
        canvasContainer = $('#canvas-container')
        inputColor = $('#input-color'),
        inputColor2 = $('#input-color-2')
        job = $('#job'),
        describtion = $('#describtion');


// debugging purposes
const   img = new Image(100, 100);
img.src = 'https://avatars.githubusercontent.com/u/69036567?v=4';


// canvas drawing
const   canvas = $('canvas'),
        ctx = canvas.getContext("2d");


// render text function
const renderCanvasText = (str, x, y) => {
    let arr = str.split(' ')
    for (i in arr)
        ctx.fillText(arr[i].toUpperCase(), x, y + (i*55))
}


// generate pic fucntion
const generatePic = _ => {
    formContainer.style.display = 'none';
    canvasContainer.style.display = 'block';

    ctx.fillStyle = inputColor.value;
    ctx.fillRect(0, 0, 380, 600)

    ctx.fillStyle = inputColor2.value;
    ctx.fillRect(380, 0, 400, 600)

    // text color 1
    ctx.font = "bold 37px Arial";
    ctx.textAlign = 'right'
    ctx.textBaseline = 'bottom'
    // debugging purposes
    renderCanvasText(job.value, 355, 470)

    // text color 2
    ctx.fillStyle = inputColor.value;
    ctx.textAlign = 'left'
    renderCanvasText(describtion.value, 410, 470)

    // add img
    ctx.textAlign = 'center'
    ctx.drawImage(img, 265, 160, 240, 240);
}

// debugging purposes
generatePic()