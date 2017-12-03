function Linea() {
	// Attr
  this.posX; // X Position Initial
  this.posY; // Y Position
  this.posXFinal;
  this.posYFinal;

	// Methods
	this.constructor = function(x,y) {
		this.posX = x;
    this.posY = y;
    this.posXFinal = x;
    this.posYFinal = y;
	}

	this.draw = function() {
		contexto.strikeStyle = "black";
		contexto.beginPath();
    contexto.moveTo(this.posX, this.posY);
    contexto.lineTo(this.posXFinal, this.posYFinal);
		contexto.stroke();
	}

	this.changePosition = function(posicion) {
		const index = historicoPasado.length - 1;
		this.posXFinal = posicion[0];
		this.posYFinal = posicion[1];
	}
}
