

function Take(){
    save("मुझे मूछों का फोटो दे दो.png");
}


function modelloaded(){
    console.log("Pose Net jaag chuka Hai");
}































nosex = 0;
nosey = 0;


function preload() {
clownnose = loadImage("https://i.postimg.cc/prKHv6Yk/nathulal-removebg-preview.png");
}

function draw() {
image(Video,0,0,350,350);
fill(255,0,0);
stroke(0,255,0);

image(clownnose,nosex,nosey,100,80);
}

function setup(){
    canvas = createCanvas(350,350);
    canvas.center();
Video = createCapture(VIDEO);
Video.size(350,350);
Video.hide();
poseyournet = ml5.poseNet(Video,modelloaded);
poseyournet.on("pose",gotposes);

}




function gotposes(results){
 if (results.length>0){
    console.log(results);
    console.log("nose X = "+results[0].pose.nose.x +" nose y = "+results[0].pose.nose.y);
    nosex = results[0].pose.nose.x-48;
    nosey = results[0].pose.nose.y-8;
    console.log(nosex);
    console.log(nosey);
}
}