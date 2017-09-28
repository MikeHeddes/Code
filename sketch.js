var blobs = [];
var pixels = [];
var index = 0;
var w = 400;
var res = 5;
var r = 15;
var a = 2;

function setup () {
  createCanvas(w, w);
  frameRate(25);

  for (var i = 0; i < a; i++) {
    var x = random(0 + r, width - r);
    var y = random(0 + r, height - r);
    blobs[i] = new blob(x, y, r);
  }

for (var x = res; x < w; x += res) {
  for (var y = res; y < w; y += res){
    pixels[index] = new pixel(x, y);
    index += 1;
  }
}

}

function draw () {
  background (255);

  for (var i = 0; i < blobs.length; i++) {
    blobs[i].update();
  }

  for (var j = 0; j < pixels.length; j++) {
    pixels[j].update();
    pixels[j].show();
  }

/*  for (var i = 0; i < blobs.length; i++) {
    blobs[i].show();
  }
*/
}
