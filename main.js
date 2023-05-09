noseX = 0;
noseY = 0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/ryhnsx4k/png-clipart-moustache-moustache-thumbnail.png")
}

function setup(){
canvas = createCanvas(350, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(350,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function draw(){
image(video, 0, 0, 350, 300);
image(moustache, noseX, noseY, 40, 40);
}

function takeSnapshot(){
save('myFilterImage.png')
}   
function modelLoaded(){
console.log("PoseNet Is Initialized");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x - 19;
noseY = results[0].pose.nose.y - 25;
console.log("nose x = " + noseX);
console.log("nose y = " + noseY);

console.log("lefteye x = " + results[0].pose.leftEye.x);
console.log("lefteye y = " + results[0].pose.leftEye.y);

console.log("righteye x = " + results[0].pose.rightEye.x);
console.log("righteye y = " + results[0].pose.rightEye.y);
}
}