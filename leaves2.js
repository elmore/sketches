var colours = [
    '#55A630',
    '#80B918',
    '#AACC00',
    
  ];

var Leaf = function(colour, x, y) {

  var t = Math.random() * 2;

  var w = random(15, 35); 
  
  var scalingFactorX = 0.002;
  var scalingFactorY = 0.0001;

  var wibbleFactor = 2;

  var scalingFactorXWibble = scalingFactorX + (Math.random() * wibbleFactor);
  var scalingFactorYWibble = scalingFactorY + (Math.random() * wibbleFactor);

  var timeIncrement = 0.05;

  var _update = function() {

    t += timeIncrement;
    
    var sinT = Math.sin(t);
    var cosT = Math.cos(t);

    if (-0.01 > sinT && sinT < 0.01) {
      scalingFactorXWibble = scalingFactorX + (Math.random() * wibbleFactor);
    }

    if (-0.01 > cosT && cosT < 0.01) {
      scalingFactorYWibble = scalingFactorY + (Math.random() * wibbleFactor);
    }


    x = x + (sinT * scalingFactorXWibble);
    y = y + (cosT * scalingFactorYWibble);

    fill(colour);
    noStroke();
    ellipse(x, y, w);
  };


  return {
    getX : function() { return x; },
    getY : function() { return y; },
    update: _update
  };
};


var leafCount = 800;
var leaves = [];

function setup() {
  pixelDensity(0.2);
  createCanvas(400, 400);  
  
  for(var i=0; i<leafCount; i++) {
    var c = random(colours);
    leaves.push(new Leaf(c, (Math.random()*500)-50, (Math.random()*500)-50));
  }
}

function draw() {

  background('#64a6bd');

  for(var i=0; i<leafCount; i++) {
    leaves[i].update();
  }
  
  filter(BLUR, 1.5);
}
