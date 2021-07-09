/*
autor: Gabriel Alegre
enunciado parcial 02:
A una pareja se le pide los datos para mostrar un mensaje
"ustedes se llaman xx y xx pesan xx y xx kilos
que sumados son xx kilos y el promedio de peso xx ".
*/
function mostrar()
{
	let nombreUno;
	let nombreDos;
	let pesoUno;
	let pesoDos;
	let sumaPeso;
	let pesoPromedio;

	nombreUno=prompt("Ingrese su nombre");
	nombreDos=prompt("Ingrese su nombre");

	pesoUno=prompt("Ingrese su peso "+nombreUno);
	pesoDos=prompt("Ingrese su peso "+nombreDos);

	pesoUno=parseInt(pesoUno);
	pesoDos=parseInt(pesoDos);

	sumaPeso=pesoUno+pesoDos;
	pesoPromedio=sumaPeso/2;

	alert("Ustedes se llaman "+nombreUno+" y "+nombreDos+" pesan "+pesoUno+" y "+pesoDos+" kilos"+", que sumados son "+sumaPeso+" kilos, y el promedio de peso es "+pesoPromedio);
}
