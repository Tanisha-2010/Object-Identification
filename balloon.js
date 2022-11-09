Status = "";

function setup() {
    canvas = createCanvas(500, 470);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerText = "Status = Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Initialised");
    Status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
}

function preload() {
    img = loadImage("Balloons.png");
}

function draw() {
    image(img, 0, 0, 500, 500);

    ///highlighting dog
    fill("red");
    text("Balloons", 90, 30);
    noFill();
    stroke("red");
    rect(80, 20, 330, 390);
}