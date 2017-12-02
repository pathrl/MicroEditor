function inicio(){
	
	var rect;
	var mouseX;
	var mouseY; 

	contextoSeleccion.drawImage(imgSeleccion, 0, 0,30,30);
	
	temporizador = setTimeout("bucle()",1000)

	// el primer click fija el pivote.
	$("canvas").click(function(e){
		
		// Se corrige la posición del lienzo1
		rect = lienzo1.getBoundingClientRect();
		mouseX = e.pageX - rect.left;
		mouseY = e.pageY - rect.top;
		
		// Si no se ha fijado el pivote se fija ahora para crear un objeto
		if(!pivoteFijado){
		
			switch(herramientaActiva){
				// Crear círculo
				case "circulo":					
					circulos.push(new Circulo()); 									// Ejemplo, para borrar
					circulos[circulos.length - 1].constructor(mouseX,mouseY,10);	// Ejemplo, para borrar
					break;
					
				// Crear cuadrado
				case "cuadrado":

					break;
				
				// Se llama a la clase línea para ajustar	
				case "linea":
				
					break;
				
				// Se llama a la clase polígono para ajustar
				case "poligono":
				
					break;
					
				// Se llama a la clase texto para ajustar
				case "texto":
				
					break;
					
			}
			
		}
		
		pivoteFijado = !pivoteFijado;
		
	})
	
	$("canvas").mousemove(function(e){
		
		// Se corrige la posición del lienzo1
		rect = lienzo1.getBoundingClientRect();
		mouseX = e.pageX - rect.left;
		mouseY = e.pageY - rect.top;
		
		if(pivoteFijado) { // Modificamos objeto siempre es el último creado
		
			switch(herramientaActiva){
				// Se llama a la clase círculo para ajustar
				case "circulo":
					circulos[circulos.length - 1].cambiaRadio(mouseX);	// Ejemplo, para borrar
					break;
				
				// Se llama a la clase cuadrado para ajustar			
				case "cuadrado":

					break;
				
				// Se llama a la clase línea para ajustar	
				case "linea":
				
					break;
				
				// Se llama a la clase polígono para ajustar
				case "poligono":
				
					break;
				
				// Se llama a la clase texto para ajustar
				case "texto":
				
					break;
					
				// Código para hacer
				case "hacer":
				
					break;
					
				// Código para deshacer
				case "deshacer":
				
					break;
					
					
			}
		}
	})
		
	
	$("button").click(function(){
		//Se selecciona la herramienta
		//Si herramienta == poligono input pantalla que pregunta cuantos lados tiene.
		herramientaActiva = $(this).attr("herramienta");
		pivoteFijado = false;
		contextoSeleccion.clearRect(0,0,512,512);		
		// Se pone el icono de la herramienta
		switch(herramientaActiva){
			// Se llama a la clase círculo para ajustar
			case "circulo":
				imgSeleccion.src = "img/circulo.png";
				contextoSeleccion.drawImage(imgSeleccion, 0, 0,30,30);
				break;
			
			// Se llama a la clase cuadrado para ajustar			
			case "cuadrado":
				imgSeleccion.src = "img/cuadrado.png";
				contextoSeleccion.drawImage(imgSeleccion, 0, 0,30,30);
				break;
			
			// Se llama a la clase línea para ajustar	
			case "linea":
				imgSeleccion.src = "img/linea.png";
				contextoSeleccion.drawImage(imgSeleccion, 0, 0,30,30);
				break;
			
			// Se llama a la clase polígono para ajustar
			case "poligono":
				imgSeleccion.src = "img/poligono.png";
				contextoSeleccion.drawImage(imgSeleccion, 0, 0,30,30);			
				break;
			
			// Se llama a la clase texto para ajustar
			case "texto":
				imgSeleccion.src = "img/texto.png";
				contextoSeleccion.drawImage(imgSeleccion, 0, 0,30,30);			
				break;
			
			default:
				imgSeleccion.src = "img/raton.png";
				contextoSeleccion.drawImage(imgSeleccion, 0, 0,30,30);
			
		}
			
		console.log("La herramienta activa es:" + herramientaActiva);
	})
	
}
