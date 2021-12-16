Webcam.set({
    width:350,
    height:350,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function capture1(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="result123"src="'+data_uri+'" >';
    });

}

console.log("ml5 version = ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xeNH15v2F/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function speak(){
    var synth = window.speechSynthesis;
    speak1 = "The 1st prediction is " + prediction1;
    speak2 = "The 2nd prediction is " + prediction2;
    var UtterThis = new SpeechSynthesisUtterance (speak1+speak2);
    synth.speak(UtterThis);
}