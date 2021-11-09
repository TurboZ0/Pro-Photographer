hold_image="";

function preload() {
    hold_image=loadImage("dog_cat.jpg")
}

function setup() {
    canvas=createCanvas(700,500);
    canvas.center();


}

function draw() {
        background("blue")
    image(hold_image, 0,0, 700,500);
    stroke("red");
    rect(100,50, 400,400);
    noFill();
    fill("red");
    textSize(20)
    text("Max the Dog", 140,80);
    fill("red");
    circle(120,78, 15);
    noFill();
    
}