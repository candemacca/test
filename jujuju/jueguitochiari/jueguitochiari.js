let juego;
let sonidoMusica;


function preload() {
  fuente = loadFont("data/fuente/BeMyGlittertine.ttf");
  imgInicio = loadImage("data/fondoInicio2.jpg");
  imgCande = loadImage("data/candepixel.png");
  imgChiari = loadImage("data/chiarinpixel.png");
  imgCandeuwu= loadImage ("data/candesonrojada.png");
  imgCandetriste= loadImage( "data/candetriste.png");
  
}
function setup() {
  createCanvas (640, 480);
    sonidoMusica = document.getElementById("sonido-musica");

  juego = new Juego();
}

function draw() {
  textFont(fuente);
  background(255,232,240);
  juego.actualizar();
}

function keyPressed() {
  juego.teclaPresionada(keyCode);
}

function mousePressed() {
  juego.mousePressed();
}
