scoreleftwrist =0;
leftwristX =0;
rightwristY =0;
leftwristY =0;
rightwristX=0;
song ="";
function preload(){
song = loadSound("music.mp3")

}
function setup(){
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotPoses)
}
function draw(){
    image(video,0,0,600,500)

    fill("#cb74b3")
    stroke("#cb74b3")
    if(scoreleftwrist > 0){
        circle(leftwristX, leftwristY, 20)
        in_number_leftwrist_y = Number(leftwristY)
        remove_decimals = floor(in_number_leftwrist_y) 
        volume = remove_decimals/500;
        document.getElementById("VOLUME").innerHTML = "Volume = "+volume;
        song.setVolume(volume)
    }
}
function play(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function modelloaded(){
    console.log("model has been loaded")
}
function gotPoses(results){
if(results.length > 0){
    scoreleftwrist = results[0].pose.keypoints[9].score;
    console.log(results);
    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;
    rightwristX = results[0].pose.rightWrist.x;
    rightwristY = results[0].pose.rightWrist.y;
    console.log("Leftwrist X ="+ leftwristX +" Leftwrist Y ="+ leftwristY)
    console.log("Rightwrist X ="+ rightwristX +" Rightwrist Y ="+ rightwristY)
}
}