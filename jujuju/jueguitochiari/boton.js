class BotonInicio {
  constructor( txt_, x_, y_, ancho_, alto_ ) {
    this.ancho = ancho_ ;
    this.alto = alto_ ;
    this.x = x_ ;
    this.y = y_ ;
    this.colorReposo = color(225,118,169);
    this.colorOver = color(145,52,85);
    this.txt = txt_ ;
  }

  actualizar() {
    push();
    translate(this.x, this.y);
    if ( this.colisionMouse() ) {
      fill(this.colorOver);
    } else {
      fill(this.colorReposo);
    }

    rectMode(CENTER);
    rect(0, 0, this.ancho, this.alto, 5);
        noStroke();

    fill(255);
    textSize(17);
    textAlign(CENTER, CENTER);
    text(this.txt, 0, 0);
    pop();
  }

  colisionMouse() {
    if ( mouseX>this.x-this.ancho/2 &&
      mouseX<this.x+this.ancho/2 &&
      mouseY>this.y-this.alto/2 &&
      mouseY<this.y+this.alto/2) {
      return true;
    } else {
      return false;
    }
  }
}


class BotonInicioInstrucciones {
  constructor( txt_, x_, y_, ancho_, alto_ ) {
    this.ancho = ancho_ ;
    this.alto = alto_ ;
    this.x = x_ ;
    this.y = y_ ;
    this.colorReposo = color(225,118,169);
    this.colorOver = color(145,52,85);
    this.txt = txt_ ;
  }

  actualizar() {
    push();
    translate(this.x, this.y);
    if ( this.colisionMouse() ) {
      fill(this.colorOver);
    } else {
      fill(this.colorReposo);
    }

    rectMode(CENTER);
    rect(0, 0, this.ancho, this.alto, 5);
    noStroke();
    fill(255);
    textSize(17);
    textAlign(CENTER, CENTER);
    text(this.txt, 0, 0);
    pop();
  }

  colisionMouse() {
    if ( mouseX>this.x-this.ancho/2 &&
      mouseX<this.x+this.ancho/2 &&
      mouseY>this.y-this.alto/2 &&
      mouseY<this.y+this.alto/2) {
      return true;
    } else {
      return false;
    }
  }
}
//FIN BOTON INICIO

class BotonInstrucciones {
  constructor(txt_, x_, y_, ancho_, alto_) {
    this.ancho = ancho_ ;
    this.alto = alto_ ;
    this.x = x_ ;
    this.y = y_ ;
    this.colorReposo = color(225,118,169);
    this.colorOver = color(145,52,85);
    this.txt = txt_ ;
  }

  actualizar() {
    push();
    translate(this.x, this.y);
    if ( this.colisionMouse() ) {
      fill(this.colorOver);
    } else {
      fill(this.colorReposo);
    }
    rectMode(CENTER);
    rect(0, 0, this.ancho, this.alto, 5);
        noStroke();

    fill(255);
    textSize(17);
    textAlign(CENTER, CENTER);
    text(this.txt, 0, 0);
    pop();
  }

  colisionMouse() {
    if ( mouseX>this.x-this.ancho/2 &&
      mouseX<this.x+this.ancho/2 &&
      mouseY>this.y-this.alto/2 &&
      mouseY<this.y+this.alto/2) {
      return true;
    } else {
      return false;
    }
  }
}

//FIN BOTON INSTRUCCIONES

class BotonCreditos{
  constructor (txt_, x_, y_, ancho_, alto_){
     this.ancho = ancho_ ;
    this.alto = alto_ ;
    this.x = x_ ;
    this.y = y_ ;
    this.colorReposo = color(225,118,169);
    this.colorOver = color(145,52,85);
    this.txt = txt_ ;
  }

  actualizar() {
    push();
    translate(this.x, this.y);
    if ( this.colisionMouse() ) {
      fill(this.colorOver);
    } else {
      fill(this.colorReposo);
    }
    rectMode(CENTER);
    rect(0, 0, this.ancho, this.alto, 5);
        noStroke();

    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.txt, 0, 0);
    pop();
  }

  colisionMouse() {
    if ( mouseX>this.x-this.ancho/2 &&
      mouseX<this.x+this.ancho/2 &&
      mouseY>this.y-this.alto/2 &&
      mouseY<this.y+this.alto/2) {
      return true;
    } else {
      return false;
    }
  }
}

class BotonReinicio {
  constructor( txt_, x_, y_, ancho_, alto_ ) {
    this.ancho = ancho_ ;
    this.alto = alto_ ;
    this.x = x_ ;
    this.y = y_ ;
    this.colorReposo = color(225,118,169);
    this.colorOver = color(145,52,85);
    this.txt = txt_ ;
  }

  actualizar() {
    push();
    translate(this.x, this.y);
    if ( this.colisionMouse() ) {
      fill(this.colorOver);
    } else {
      fill(this.colorReposo);
    }

    rectMode(CENTER);
    rect(0, 0, this.ancho, this.alto, 5);
        noStroke();

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text(this.txt, 0, 0);
    pop();
  }

  colisionMouse() {
    if ( mouseX>this.x-this.ancho/2 &&
      mouseX<this.x+this.ancho/2 &&
      mouseY>this.y-this.alto/2 &&
      mouseY<this.y+this.alto/2) {
      return true;
    } else {
      return false;
    }
  }
}
