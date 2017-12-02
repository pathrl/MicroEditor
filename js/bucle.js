function bucle(){
	
	// Limpia contexto para nuevo frame
	contexto.clearRect(0,0,512,512);
	
	// Actualizar circulos	
	for(var i = 0; i < circulos.length; i++){		
		// Metodos para dibujar los circulos
		circulos[i].dibujar();	// Ejemplo, para borrar
	}
	
	// Actualizar cuadrados
	for(var i = 0; i < cuadrados.length; i++){		
		// Metodos para dibujar los cuadrados
		
	}

	// Actualizar líneas
	for(var i = 0; i < lineas.length; i++){		
		// Metodos para dibujar las líneas
		
	}
	
	// Actualizar polígonos	
	for(var i = 0; i < poligonos.length; i++){		
		// Metodos para dibujar los polígonos
		
	}

	// Actualizar textos
	for(var i = 0; i < textos.length; i++){		
		// Metodos para dibujar los textos
		
	}
	
	clearTimeout(temporizador)
	temporizador = setTimeout("bucle()",33)
}