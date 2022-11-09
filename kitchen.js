Status = "";
object = [];

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
        object = result;
    }
}

function preload() {
    img = loadImage("kitchen.png");
}

function draw() {
    image(img, 0, 0, 500, 500);

    if (Status != "") {
        for (i = 0; i < object.length; i++) {
            document.getElementById("status").innerHTML = "Object Detected !!!";
            fill("red");
            percent = floor(object[i].confidence * 100);

            text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
            noFill();
            stroke("red");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);


        }
    }
}