// ********** Setup ****************
function setup(){

  var w = window.innerWidth;
  var h = window.innerHeight;

  createCanvas(w, h);

}

// *********** Draw ****************

function draw(){
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}

// *********************************
