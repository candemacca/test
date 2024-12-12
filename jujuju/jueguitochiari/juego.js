class Juego {
  constructor() {
    this.estado="inicio";
    this.crearPersonaje();
    this.crearCorazones();

    this.botonInicio = new BotonInicio ("EMPEZAR", width/2-150, height*0.82, 150, 40);
    this.botonInstrucciones = new BotonInstrucciones("INSTRUCCIONES", width / 2+150, height * 0.82, 150, 40);
    this.botonReinicio = new BotonReinicio ("VOLVER", width/2, height*0.80, 150, 40);
    this.botonCreditos = new BotonCreditos ("CRÉDITOS", width/2, height*0.70, 150, 40);
    this.botonInicioInstrucciones = new BotonInicioInstrucciones ("EMPEZAR", width/2, height*0.82, 150, 40);


    this.puntos=0;
    this.vidas = 3;


    this.coraoznes = [];
    this.corazonesRotos= [];
  }

  actualizar() { //declaro todos los estados
    if (this.estado==="inicio") {
          sonidoMusica.currentTime=0;

      this.pantallaInicio();
    } else if (this.estado ==="instrucciones") {
      this.pantallaInstrucciones();
    } else if (this.estado==="jugando") {
      this.juego();
    } else if (this.estado==="perder") {
      this.pantallaPerder();
    } else if (this.estado==="ganar") {
      this.pantallaGanar();
    } else if (this.estado==="creditos") {
      this.pantallaCreditos();
    }
  }

  juego() {
    fill(225, 118, 169);
    rect(0-20, 420, width+35, 70); //rectangulo abajo

    for ( let i=0; i<this.corazones.length; i++) {
      this.corazones[i].actualizar();
      if ( this.corazones[i].evaluaColision( this.personaje.x, this.personaje.y, this.personaje.ancho, this.personaje.alto) ) {
        this.puntos++;
        if (this.puntos>= 20) {
          this.estado = "ganar";
        }
      }
    }
    for (let i = 0; i < this.corazonesRotos.length; i++) {
      this.corazonesRotos[i].actualizar();
      if (this.corazonesRotos[i].evaluaColision(this.personaje.x, this.personaje.y, this.personaje.ancho, this.personaje.alto)) {
        this.vidas--;
        if (this.vidas <= 0) {
          this.estado = "perder";
        }
      }
    }

    this.personaje.actualizar();
    this.mostrarPuntosYVidas();
  }

  //****** PANTALLAS ******

  pantallaInicio() {
    push();
    background(255,201,221);
    
    image(imgCande,width/2-180,160,270,270);
    image(imgChiari,width/2-70,180,250,250);
    
    fill(225,118,169, 200);
    rect(50, 50, 535, 135,5);
strokeWeight(2);
stroke(0);
    textSize(64);
    fill(255,222,234);
    textAlign(CENTER, CENTER);
    text("`Heart Attack´", 320, 90);
    fill(255);
    textSize(30);
    text("Una historia romántica y homosexual", 320, 145);

     strokeWeight(1);
stroke(0);//para el texto en los botones
    this.botonInicio.actualizar();
    this.botonInstrucciones.actualizar();
    pop();
  }


  pantallaGanar() {
    push();
    background(255,201,221);
    
    image (imgCandeuwu,400,250,300,300);

    fill(175, 44, 92, 200);
    rect(120, 45, 405, 100,5);

    fill(255);
    strokeWeight(4);
    textAlign(CENTER, TOP);
    textSize(70);
    text("¡GANASTE!", 320, 55);
    strokeWeight(2);
    textSize(29);
    text("Atrapaste todos los corazones correctos\n¡Felicidades! Ahora que tenes el corazón de Cande,\nespero que vivan juntas y felices por siempre\n(no lo digo yo, lo dice el juego)", 320, 160);

    stroke(0); //para el texto en los botones
    strokeWeight(1);
    this.botonCreditos.actualizar();
    pop();
  }

  pantallaPerder() {
    push();
    background(255,201,221);
    
        image (imgCandetriste,400,250,300,300);


    fill(175, 44, 92, 200);
    rect(120, 45, 405, 100,5);

    fill(255);
    strokeWeight(4);
    textAlign(CENTER, TOP);
    textSize(70);
    text("Perdiste", 320, 60);
    strokeWeight(2);
    textSize(29);
    text("No atrapaste todos los corazones y\nahora Cande quedó triste y sola.\nQuizá la proxima...", 320, 180);

    stroke(0); //para el texto en los botones
    strokeWeight(1);
    this.botonCreditos.actualizar();
    pop();
  }


  pantallaInstrucciones() {
    push();

    background(175,44,92);
    
      stroke(255); //para el texto en los botones
    strokeWeight(1);
    textSize(55);
    noFill();
    textAlign(CENTER, TOP);
    text("INSTRUCCIONES", 320, 30);
    noStroke();
    fill(255);
    textSize(24);
    text("¡Hay una lluvia de corazones!\n¿Sos la indicada para atrapar el corazón que perdió Cande?\n Si es así, ¡Quizá conseguis quedártelo!\n\n- Mové a tu personaje con las flechas del teclado\n- Evitá los corazones rotos\n ¡Mucha suerte!", 320, 120);

    stroke(0); //para el texto en los botones
    strokeWeight(1);
    this.botonInicioInstrucciones.actualizar();
    pop();
  }

  pantallaCreditos() {
    push();
    background(175,44,92);
    noStroke();
    fill(255,222,234,80);
    rectMode(CENTER);
    rect(width/2, 130, 520, 210,5);
    
    fill(255,222,234);
    stroke(0);
    strokeWeight(4);
    textSize(65);
    textAlign(CENTER,TOP);
    
    text("¡Feliz aniversario!", 320, 30);
    strokeWeight(2);
    textSize(45);
    text("Regalito hecho\ncon muchiiisimo amor :v", 320,110);
    textSize(30);
    noStroke();
    fill(255);
    text ( "De : Cande", 320,255);
    text( "Para : Chiari (la novia más linda)", 320,295);


    stroke(0); //para el texto en los botones
    strokeWeight(1);
    this.botonReinicio.actualizar();
    pop();
  }

  //****** FIN DE PANTALLAS ******

  mostrarPuntosYVidas() {
    stroke(0);
    fill(255, 118, 169);
    textSize(30);
    text("Corazones : " + this.puntos+" / 20", 20, 40);
    text("Vidas : " + this.vidas, 520, 40);
  }

  crearCorazones() {
    this.corazones = [];
    for (let i=0; i<3; i++) { //cantidad de ingredinetes q caen
      this.corazones[i] = new Corazones();
    }
    this.corazonesRotos = [];
    for (let i=0; i<2; i++) { //cantidad de ingredinetes q caen
      this.corazonesRotos[i] = new CorazonesRotos();
    }
  }

  crearPersonaje() {
    this.personaje = new Personaje(width/2, 300);
  }

  mousePressed() {
    if ( this.estado==="inicio") {
sonidoMusica.pause();
      if (this.botonInicio.colisionMouse() ) {
 sonidoMusica.play();
        this.estado = "jugando";
        this.puntos=0;
        this.vidas=3;
        this.crearCorazones();
      } else if (this.botonInstrucciones.colisionMouse()) {
        sonidoMusica.pause();
        this.estado="instrucciones";
      }
    }
    if (this.estado==="instrucciones") {
      if (this.botonInicioInstrucciones.colisionMouse()) {
        sonidoMusica.play();

        this.estado = "jugando";
        this.puntos=0;
        this.vidas=3;
        this.crearCorazones();
      }
    }


    if (this.estado==="ganar") {
      if (this.botonCreditos.colisionMouse()) {
        this.estado="creditos";
      }
    }
    if (this.estado==="perder") {
      if (this.botonCreditos.colisionMouse()) {
        this.estado="creditos";
      }
    }
    if (this.estado==="creditos") {
      if (this.botonReinicio.colisionMouse()) {
        this.estado="inicio";
      }
    }
  }

  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
}
