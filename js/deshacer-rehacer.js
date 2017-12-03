function deshacer() {
	if (historicoPasado.length > 0 && !ajustandoObjeto) {
		historicoFuturo.unshift(historicoPasado.pop());
	} else {
		console.log("No se puede deshacer");
	}
}

function rehacer() {
	if (historicoFuturo.length > 0 && !ajustandoObjeto) {
		historicoPasado.push(historicoFuturo.shift());
	} else {
		console.log("No se puede rehacer");
	}
}