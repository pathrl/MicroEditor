// Ejemplo, para borrar
function Circulo() {
	// Propiedades
	this.cx; // Posición x en el canvas
	this.cy; // Posición y en el canvas
	this.cr; // Radio
	
	// Métodos
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