function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    video= createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#F4C2C2');
    textSize(difference);
    FileList('#FFE787');
    text('peter',50,400);
}
function modelLoaded(){
    console.log("poseNet is initialised");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x
        difference=floor(leftWristX - rightWristX); 
    }
}