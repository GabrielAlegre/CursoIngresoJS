/*
autor: Gabriel Alegre
enunciado TP2:
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 let largo;
 let ancho;
 let alambre;
 let alambreTotal;

 largo=document.getElementById("txtIdLargo").value;
 ancho=document.getElementById("txtIdAncho").value;

 largo=parseInt(largo);
 ancho=parseInt(ancho);

//multiplico por dos porque un rectangulo tiene dos largos y dos anchos. Luego lo sumo para saber la cantidad de alambre que debo combrar para una sola vuelta
 alambre=(largo*2)+(ancho*2);
 //multiplico por tres porque son 3 hilos de alambre, osea 3 vueltas de alambre.
 alambreTotal= alambre*3;

alert("La cantidad de alambre a comprar son: "+alambreTotal+" metros");
}

function Circulo () 
{
 let radio;
 let perimetro;
 let alambreTotal;

 radio=document.getElementById("txtIdRadio").value;

 radio=parseInt(radio);
 
 //si saco el perimetro se la circuferencia del circulo, y por lo tanto se cuanta cantidad de alambre debo comprar.
 perimetro= (2 * 3.14)* radio;

 alambreTotal=perimetro*3;

 alert("La cantidad de alambre a comprar son: "+ alambreTotal+" metros");
}

function Materiales () 
{
 let cal;
 let cemento;
 let largo;
 let ancho;
 let metrosCuadrados;

 largo=document.getElementById("txtIdLargo").value;
 ancho=document.getElementById("txtIdAncho").value;

 largo=parseInt(largo);
 ancho=parseInt(ancho);

 metrosCuadrados=largo*ancho;

//cada 1 metro cuadrado son 2 de cemento y 3 de cal.
 cal=metrosCuadrados*3;
 cemento=metrosCuadrados*2;

alert("Para los "+metrosCuadrados+" metros cuadrados de su propiedad debe comprar "+cemento+" bolsas de cemento y "+ cal+" de cal");
}