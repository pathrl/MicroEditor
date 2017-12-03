function bucle(){

	// Limpia contexto para nuevo frame
	contexto.clearRect(0, 0, 512, 512);

	// Pintamos todos los objetos de nuestra matriz histórica
	for (var i = 0; i < historicoPasado.length; i++) {
		historicoPasado[i].dibujar();
	}

	clearTimeout(temporizador)
	temporizador = setTimeout("bucle()",33)
}