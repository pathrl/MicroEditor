// Ejemplo, para borrar
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
	
	this.dibujar = function() {		
		contexto.strikeStyle = "black";
		contexto.beginPath();
		contexto.arc(this.cx, this.cy, this.cr, 0, Math.PI * 2, true);		
		contexto.stroke();		
	}
	
	this.cambiaRadio = function(posicion) {		
		this.cr = posicion - this.cx;
		if(this.cr < 0){
			this.cr = 1;
		}
	}
	
}