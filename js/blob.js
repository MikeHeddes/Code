function blob(x, y, r) {

  var pos = createVector(x, y);
  var vel = p5.Vector.random2D();
  vel.mult(random(2, 5));

  this.update = function() {
    pos.add(vel);

   if (pos.x > width - r || pos.x < 0 + r) {
     vel.x *= -1;
   }
   
   if (pos.y > height - r || pos.y < 0 + r) {
     vel.y *= -1;
   }
 }

  this.show = function() {
    noFill ();
    strokeWeight (r * 0.1);
    stroke (0);
    ellipse(pos.x, pos.y, r * 2, r * 2);
   }

  this.pos = pos;
  this.x = pos.x;
  this.y = pos.y;

}
