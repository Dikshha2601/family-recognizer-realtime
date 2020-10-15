//teachable machine link: https://teachablemachine.withgoogle.com/models/bUHyOKiqB/model.json
function preload() { }

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
     video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier(  "https://teachablemachine.withgoogle.com/models/KXzIZNJS8/model.json",model_loaded);
}

function model_loaded() {
    window.alert("Model is loaded.");
}

function draw() {
    frameRate(10);
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_name").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = (results[0].confidence* 100 ).toFixed(2)  + "%";
    }
}