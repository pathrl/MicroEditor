function Cuadrado() {
	// Attr
  this.posX; // X Position
  this.posY; // Y Position
  this.size; // Size

	// Methods
	this.constructor = function(x,y,size) {
		this.posX = x;
		this.posY = y;
		this.size = size;
	}

	this.draw = function() {
		contexto.strikeStyle = "black";
		contexto.beginPath();
		contexto.rect(this.posX, this.posY, this.size, this.size);
		contexto.stroke();
	}

	this.changeSize = function(posicion) {
		const index = historicoPasado.length - 1;
		this.size = Math.sqrt(Math.pow(posicion[0] - historicoPasado[index].posX, 2) + Math.pow(posicion[1] - historicoPasado[index].posY, 2));
	}

}
