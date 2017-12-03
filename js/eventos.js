// Función para cuando hacemos clic en el canvas
function hacerClicEnCanvas(event) {
	var ratonPos = obtenerPosicionRaton(event);

	if (ajustandoObjeto) {
		// Si estamos ajustando el objeto y hacemos clic tenemos que borrar el array de historicoFuturo;
		historicoFuturo = [];
	} else {
		// Si no estamos ajustado el objeto, lo creamos
		switch (herramientaActiva) {
			// Crear círculo
			case "circulo":
				// Creamos el círculo y lo metemos en la lista de 
				var circulo = new Circulo();
				circulo.constructor(ratonPos[0], ratonPos[1], 10);
				historicoPasado.push(circulo);
				break;

			// Crear cuadrado
			case "cuadrado":
				var cuadrado = new Cuadrado();
				cuadrado.constructor(ratonPos[0], ratonPos[1], 10, 10);
				historicoPasado.push(cuadrado);
				break;

			// Se llama a la clase línea para ajustar
			case "linea":
				var linea = new Linea();
				linea.constructor(ratonPos[0], ratonPos[1]);
				historicoPasado.push(linea);
				break;

			// Se llama a la clase polígono para ajustar
			case "poligono":

				break;

			// Se llama a la clase texto para ajustar
			case "texto":

				break;

			default:
		}
	}

	ajustandoObjeto = !ajustandoObjeto;
}

function moverRatonEnCanvas(event) {
	var ratonPos = obtenerPosicionRaton(event);
	const index = historicoPasado.length - 1;

	if (ajustandoObjeto) { // Modificamos el objeto. Siempre es el último creado (length - 1)
		switch (herramientaActiva) {
			// Se llama a la clase círculo para ajustar
			case "circulo":
				historicoPasado[index].changeRadius(ratonPos);
				break;

			// Se llama a la clase cuadrado para ajustar
			case "cuadrado":
				historicoPasado[index].changeSize(ratonPos);
				break;

			// Se llama a la clase línea para ajustar
			case "linea":
				historicoPasado[index].changePosition(ratonPos);
				break;

			// Se llama a la clase polígono para ajustar
			case "poligono":

				break;

			// Se llama a la clase texto para ajustar
			case "texto":

				break;

			default:
		}
	}
}

function hacerClicEnBoton() {
	//Se selecciona la herramienta
	//Si herramienta == poligono input pantalla que pregunta cuantos lados tiene.
	herramientaActiva = $(this).attr("herramienta");
	ajustandoObjeto = false;
	contextoSeleccion.clearRect(0, 0, 512, 512);
	
	switch (herramientaActiva) {
		case "circulo":
			// Se pone el icono de la herramienta círculo
			imgSeleccion.src = "img/circulo.png";
			contextoSeleccion.drawImage(imgSeleccion, 0, 0, 30, 30);
			break;

		case "cuadrado":
			// Se pone el icono de la herramienta cuadrado
			imgSeleccion.src = "img/cuadrado.png";
			contextoSeleccion.drawImage(imgSeleccion, 0, 0, 30, 30);
			break;

		case "linea":
			// Se pone el icono de la herramienta línea
			imgSeleccion.src = "img/linea.png";
			contextoSeleccion.drawImage(imgSeleccion, 0, 0, 30, 30);
			break;

		case "poligono":
			// Se pone el icono de la herramienta polígono
			imgSeleccion.src = "img/poligono.png";
			contextoSeleccion.drawImage(imgSeleccion, 0, 0, 30, 30);
			break;

		case "texto":
			// Se pone el icono de la herramienta texto
			imgSeleccion.src = "img/texto.png";
			contextoSeleccion.drawImage(imgSeleccion, 0, 0, 30, 30);
			break;
			
		case "deshacer":
			deshacer();
			break;
			
		case "rehacer":
			rehacer();
			break;
			
		default:
			imgSeleccion.src = "img/raton.png";
			contextoSeleccion.drawImage(imgSeleccion, 0, 0, 30, 30);
	}

	console.log("La herramienta activa es: " + herramientaActiva);
}

function obtenerPosicionRaton(event) {
	var ratonPos = [];
	// Se corrige la posición del canvas lienzo1
	var rect = lienzo1.getBoundingClientRect();
	ratonPos[0] = event.pageX - rect.left;
	ratonPos[1] = event.pageY - rect.top;
	
	return ratonPos;
}