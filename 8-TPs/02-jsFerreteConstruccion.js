/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 let largo, ancho, alambre, alambreTotal;

 largo= parseInt(document.getElementById("txtIdLargo").value);
 ancho= parseInt(document.getElementById("txtIdAncho").value);

 alambre= (largo*2)+(ancho*2);
 alambreTotal= alambre * 3;

alert("La cantidad de alambre a comprar son: "+alambreTotal+" metros");
}

function Circulo () 
{
 let radio, perimetro, alambreTotal;
 radio= parseInt(document.getElementById("txtIdRadio").value);
 
 //Sacando el perimetro se la circuferencia del circulo, y por lo tanto se cuanta cantidad de alambre debo comprar.
 perimetro= (2 * 3.14)* radio;

 alambreTotal= perimetro*3;

 alert("La cantidad de alambre a comprar son: "+ alambreTotal+" metros");
}

function Materiales () 
{
// cada 1 metro cuadrado son 2 de cemento y 3 de cal

 let cal, cemento, largo, ancho, metrosCuadrados;

 largo= parseInt(document.getElementById("txtIdLargo").value);
 ancho= parseInt(document.getElementById("txtIdAncho").value);

 metrosCuadrados= largo*ancho;

 cal= metrosCuadrados*3;
 cemento= metrosCuadrados*2;

alert("Para los " + metrosCuadrados + " metros cuadrados de su propiedad debe comprar "+cemento+" bolsas de cemento y "+ cal+ " de cal");
}