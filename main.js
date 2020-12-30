var canvas,ctx,roverWidth,roverHeight,roverX,roverY,backgroundImage,roverImage,keyPressed,random_number;
var images_of_mars_array=["mars.jpg","mars2.jpeg","mars3.jpg","mars4.jpg"];
random_number= Math.floor(Math.random()*4);
console.log(random_number);
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverWidth=100;
roverHeight=90;
roverX=10;
roverY=10;
backgroundImage=images_of_mars_array[0];
console.log("background image is - "+ images_of_mars_array);
roverImage="rover.png";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=backgroundImage;

    rover_imgTag=new Image();
    rover_imgTag.onload=uploadRover;
    rover_imgTag.src=roverImage;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadRover(){
    ctx.drawImage(rover_imgTag,roverX,roverY,roverWidth,roverHeight);
}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        up();
        console.log("up");
    }
    if(keyPressed=="40"){
        down();
        console.log("down");
    }
    if(keyPressed=="37"){
        left();
        console.log("left");

    }
    if(keyPressed=="39"){
        right();
        console.log("right");
    }
}
function up(){
    if(roverY>=0){
        roverY=roverY-10;
        console.log("when up arrow is clicked,X= " + roverX +" | Y= " + roverY);
        uploadBackground();
            uploadRover();
        
    }
}
function down(){
    if(roverY<=500){
        roverY=roverY+10;
        console.log("when down arrow is clicked,X= " + roverX +" | Y= " + roverY);
        uploadBackground();
            uploadRover();
        
    }
}

function left(){
    if(roverX>=0){
        roverX=roverX-10;
        console.log("when left arrow is clicked,X= " + roverX +" | Y= " + roverY);
        uploadBackground();
            uploadRover();
        
    }
}

function right(){
    if(roverX<=700){
        roverX=roverX+10;
        console.log("when right arrow is clicked,X= " + roverX +" | Y= " + roverY);
        uploadBackground();
            uploadRover();
        
    }
}




