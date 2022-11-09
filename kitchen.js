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
    img = loadImage("kitchen.png");
}

function draw() {
    image(img, 0, 0, 500, 500);

    ///highlighting light
    fill("red");
    text("Lights", 135, 145);
    noFill();
    stroke("red");
    rect(130, 130, 220, 50);

    ///highlighting light
    fill("red");
    text("Chairs", 135, 350);
    noFill();
    stroke("red");
    rect(130, 330, 250, 130);

    ///highlighting cabinates
    fill("red");
    text("Cabinates", 325, 110);
    noFill();
    stroke("red");
    rect(320, 100, 130, 120);
}