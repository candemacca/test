class Corazones { //moscas
  constructor() {
    this.reiniciarUbicacion();

    this.despX=0;
    this.despY= 0;
    this.lado = 50; //tamaño 

    this.img = loadImage("data/corazon.png");
  }
  actualizar() {

    this.mover();
    this.dibujar();
  }
  mover() {
    this.y+=4; //bajan mas rapido

    if ( this.y>height+15) {
      this.reiniciarUbicacion();
    }
  }
  dibujar() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.img, 0, -18, this.lado, this.lado ) ; //el -18 para que no aparezcan en la esquina
    pop();
  }


  reiniciarUbicacion() {
    this.x = random (0+this.lado/2, width-this.lado/2);
    this.y = -random(10, 200);
  }

  evaluaColision( x_, y_ ) {

    if ( dist( this.x, this.y, x_, y_ ) < this.lado ) {
      this.reiniciarUbicacion();
      return true;
    } else {
      return false;
    }
  }
}
//fin de la clase de ingredientes malos

class CorazonesRotos { //moscas
  constructor() {
    this.reiniciarUbicacion();

    this.despX=0;
    this.despY= 0;
    this.lado = 45; //tamaño 

    this.img = loadImage("data/cosaronmalo.png");
  }
  actualizar() {

    this.mover();
    this.dibujar();
  }
  mover() {
    this.y+=5; //bajan mas rapido

    if ( this.y>height+15) {
      this.reiniciarUbicacion();
    }
  }
  dibujar() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(this.img, 0, -18, this.lado, this.lado ) ; //el -18 para que no aparezcan en la esquina
    pop();
  }


  reiniciarUbicacion() {
    this.x = random (0+this.lado/2, width-this.lado/2);
    this.y = -random(10, 200);
  }

  evaluaColision( x_, y_ ) {

    if ( dist( this.x, this.y, x_, y_ ) < this.lado ) {
      this.reiniciarUbicacion();
      return true;
    } else {
      return false;
    }
  }
}
//fin de la clase de ingredientes malos
