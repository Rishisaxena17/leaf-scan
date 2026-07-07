const input = document.getElementById("image");

input.onchange = () => {

preview.src = URL.createObjectURL(input.files[0]);

};

async function predict(){

let file = input.files[0];

let form = new FormData();

form.append("image",file);

let response = await fetch("/predict",{

method:"POST",

body:form

});

let result = await response.json();

document.getElementById("result").innerHTML=

`Prediction: ${result.prediction}<br>
Confidence: ${result.confidence}%`;

}
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");

let stream = null;

// Open camera only when button is clicked
document.getElementById("openCamera").onclick = async () => {

    stream = await navigator.mediaDevices.getUserMedia({
        video: true
    });

    video.srcObject = stream;

    video.style.display = "block";
    document.getElementById("capture").style.display = "inline-block";
};

// Capture image
document.getElementById("capture").onclick = () => {

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    canvas.toBlob(async (blob) => {

        const formData = new FormData();
        formData.append("image", blob, "capture.png");

        const response = await fetch("/predict", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        document.getElementById("result").innerHTML =
            `Prediction: ${result.prediction}<br>Confidence: ${result.confidence}%`;

        // Stop camera after capture
        stream.getTracks().forEach(track => track.stop());

        video.style.display = "none";
        document.getElementById("capture").style.display = "none";

    }, "image/png");
};