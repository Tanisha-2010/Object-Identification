Status = "";

function setup() {
    canvas = createCanvas(500, 400);
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
    img = loadImage("Untitled.png");
}

function draw() {
    image(img, 0, 0, 500, 350);

    ///highlighting pictures
    fill("red");
    text("Coffee", 395, 165);
    noFill();
    stroke("red");
    rect(390, 150, 100, 120);

    ///highlighting pictures
    fill("blue");
    text("Mobile", 90, 95);
    noFill();
    stroke("blue");
    rect(85, 80, 80, 110);

    ///highlighting pictures
    fill("yellow");
    text("Laptop", 165, 90);
    noFill();
    stroke("yellow");
    rect(160, 80, 250, 220);
}