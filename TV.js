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
    img = loadImage("TV & AC.png");
}

function draw() {
    image(img, 0, 0, 500, 350);

    ///highlighting pictures
    fill("red");
    text("Lamp", 300, 150);
    noFill();
    stroke("red");
    rect(300, 150, 90, 100);

    ///highlighting pictures
    fill("blue");
    text("AC", 175, 25);
    noFill();
    stroke("blue");
    rect(170, 10, 150, 60);

    ///highlighting pictures
    fill("yellow");
    text("TV", 145, 135);
    noFill();
    stroke("yellow");
    rect(140, 120, 170, 100);
}