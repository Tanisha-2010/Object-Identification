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
    img = loadImage("Bedroom.png");
}

function draw() {
    image(img, 0, 0, 500, 500);

    ///highlighting bed
    fill("red");
    text("Bed", 105, 190);
    noFill();
    stroke("red");
    rect(100, 170, 230, 250);

    ///highlighting pictures
    fill("red");
    text("Paintings", 325, 110);
    noFill();
    stroke("red");
    rect(320, 100, 130, 120);
}