function Cuadrado() {
	// Attr
  this.posX; // X Position
  this.posY; // Y Position
	this.width; // Width
	this.height; // width

	// Methods
	this.constructor = function(x,y,w, h) {
		this.posX = x;
		this.posY = y;
		this.width = w;
		this.height = h;
	}

	this.draw = function() {
		contexto.strikeStyle = "black";
		contexto.beginPath();
		contexto.rect(this.posX, this.posY, this.width, this.height);
		contexto.stroke();
	}

	this.changeSize = function(posicion) {
		const index = historicoPasado.length - 1;
		this.width = posicion[0] - historicoPasado[index].posX;
		this.height = posicion[1] - historicoPasado[index].posY;
	}

}
