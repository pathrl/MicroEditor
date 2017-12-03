var contexto = document.getElementById("lienzo1").getContext("2d")
var contextoSeleccion = document.getElementById("seleccion").getContext("2d")

// Matrices que contienen el histórico de objetos dibujados (a pasado y a futuro)
var historicoPasado = new Array();
var historicoFuturo = new Array();

var imgSeleccion = new Image();
imgSeleccion.src = "img/raton.png";

// Variable para saber si estamos haciendo click en el canvas para crear el objeto o para ajustarlo
var ajustandoObjeto = false;

// Indica qué herramienta se ha seleccionado
var herramientaActiva = "raton";

// Temporizador para controlar el bucle
var temporizador;

inicio();
