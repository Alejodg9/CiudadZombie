/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function (sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  //Enemigo.call(/* ... */);
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov, direccion);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  this.direccion = direccion;
};

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;
/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function () {
  if (this.direccion == "v") {
    this.y += this.velocidad;
  } else {
    this.x += this.velocidad;
  };
  if (this.x > this.rangoMov.hastaX ) {
    this.x = -90;
  };
  if (this.y > this.rangoMov.hastaY){
    this.y = -90;
  };
};

// ZombieConductor.prototype.atacar = (jugador) => {
//   jugador.perdervidas(5)
// }
ZombieConductor.prototype.atacar = function (jugador){
  jugador.perderVidas(5);
}