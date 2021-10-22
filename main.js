Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

Webcam.attach("#camera")

function takeSnapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src='"+ data_uri +"'>";
    });
}

console.log('ml5 version', ml5.version);

Classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yenbaDdMk/model.json", modelLoaded);

function modelLoaded()
{
    console.log("Model Loaded!")
}

function check()
{
    image = document.getElementById("captured_image");
    Classifier.classify(image, gotResult);
}

function gotResult(error, results)
{
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("results_object_name").innerHTML = results[0].label;
        document.getElementById("results_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

