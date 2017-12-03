function Circulo() {
	// Propiedades
	this.cx; // Posici�n x en el canvas
	this.cy; // Posici�n y en el canvas
	this.cr; // Radio

	// M�todos
	this.constructor = function(x,y,radio) {
		this.cx = x;
		this.cy = y;
		this.cr = radio;
	}

	this.draw = function() {
		contexto.strikeStyle = "black";
		contexto.beginPath();
		contexto.arc(this.cx, this.cy, this.cr, 0, Math.PI * 2, true);
		contexto.stroke();
	}

	this.changeRadius = function(posicion) {
		const index = historicoPasado.length - 1;
		this.cr = Math.sqrt(Math.pow(posicion[0] - historicoPasado[index].cx, 2) + Math.pow(posicion[1] - historicoPasado[index].cy, 2));
	}

}
