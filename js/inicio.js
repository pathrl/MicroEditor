function inicio() {
	contextoSeleccion.drawImage(imgSeleccion, 0, 0, 30, 30);

	temporizador = setTimeout("bucle()", 1000);

	// Evento para empezar a crear un elemento
	$("canvas").click(hacerClicEnCanvas);

	// Evento para alterar (modificar) un elemento mientras se crea
	$("canvas").mousemove(moverRatonEnCanvas);

	// Evento para seleccionar la herramienta
	$("button").click(hacerClicEnBoton);
	
	// Evento para deshacer
	$(document).bind('keydown', 'ctrl+z', deshacer);
	
	// Evento para rehacer
	$(document).bind('keydown', 'ctrl+y', rehacer);
}