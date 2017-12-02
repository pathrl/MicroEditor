var contexto = document.getElementById("lienzo1").getContext("2d")
var contextoSeleccion = document.getElementById("seleccion").getContext("2d")

// Cada equipo define aqui un array que contenga su elemento.
var circulos 	= new Array();
var cuadrados 	= new Array();
var lineas 		= new Array();
var poligonos 	= new Array();
var textos 		= new Array();

var imgSeleccion = new Image();
imgSeleccion.src = "img/raton.png";

//La creacion de objetos se realiza mediante eje de pivote, cada clase puede elegir donde se encuentra el suyo
var pivoteFijado = false;

// Indica qué herramienta se ha seleccionado
var herramientaActiva = "raton";

// Temporizador para controlar el bucle
var temporizador;

inicio();
