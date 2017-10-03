function pixel(x, y) {

  var pos = createVector(x, y);
  var distance = [];
  var color = createVector(0);
  var cdiv = createVector(blobs.length);
  cdiv.mult(blobs.length);
  cdiv.mult(r * 10);

  this.update = function () {

    for (var i = 0; i < blobs.length; i++) {
      distance[i] = pos.dist(blobs[i].pos)
    }
    for (var j = 0; j < blobs.length; j++) {
      color.add(distance[j]);
    }
    color.div(cdiv.x);
    color.limit(1);
  }

  this.show = function () {

    colorMode(HSB, 255);
    stroke(color.x * 255, 255, 255);
    strokeWeight(res);
    point(pos.x, pos.y);

   }

}
