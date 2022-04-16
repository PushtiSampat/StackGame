const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
['load', 'resize'].forEach(event => {
    window.addEventListener(event, () => {
        main();
    }), false;
});
function setHeightAndWidthCanvas() {
    canvas.width = screen.width * 0.80;
    canvas.height = screen.height * 0.80;
}
function setBackgroudOfCanvas() {
    var background = new Image();
    background.src = "images/background.jpg";
    background.height = canvas.height;
    background.width = canvas.width;
    // Make sure the image is loaded first otherwise nothing will draw.
    background.addEventListener('load', function () {
        /*const ptrn = ctx.createPattern(background, 'repeat'); // Create a pattern with this image, and set it to "repeat".
        ctx.fillStyle = ptrn;
        ctx.fillRect(0, 0, canvas.width, canvas.height); */
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    });
}
function setgirlOnCanvas() {
    var aeroplane = new Image();
    aeroplane.src = "girl.jpg";
    var startX = canvas.width / 2;
    var startY = canvas.height - (aeroplane.height * 2.5);
    // Make sure the image is loaded first otherwise nothing will draw.
    aeroplane.addEventListener('load', function () {
        ctx.drawImage(aeroplane, startX, startY, aeroplane.width * 2.5, aeroplane.height * 2.5);
        // ctx.drawImage(aeroplane,100,100);   
    });
}
function main() {
    setHeightAndWidthCanvas();
    setBackgroudOfCanvas();
    console.log(screen.height);
}
//# sourceMappingURL=GameApp.js.map