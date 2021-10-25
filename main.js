noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;
difference = 0;
difference2 = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);

    canvas = createCanvas(550 , 490);
    canvas.position(560 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    document.getElementById("square_sides").innerHTML = difference;

    background('#bac6e6');
    fill('#05eaff');
    stroke('#05eaff');
    //rect(noseX , noseY , difference , difference2);
    circle(noseX , noseY , difference);
}

function modelLoaded() 
{
    console.log('poseNet is loaded');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
      console.log(results);
      noseY = results[0].pose.nose.y;
      noseX = results[0].pose.nose.x;
      console.log("noseX = " + noseX + "noseY = " + noseY);

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      //leftWristY = results[0].pose.leftWrist.y;
      //rightWristY = results[0].pose.rightWrist.y;
      difference = floor(leftWristX - rightWristX);
      //difference2 = floor(leftWristY - rightWristY);
      console.log("leftwristX = " + leftWristX + "rightwristX = " + rightWristX + " and difference is = " + difference);
  }
}
