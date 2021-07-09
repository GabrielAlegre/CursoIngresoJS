/*
autor: Gabriel Alegre
enunciado parcial 01:
Realizar el algoritmo que pida los datos necesarios
para un triángulo equilátero por prompt
y que muestre el perímetro por alert.
*/
function mostrar()
{
	let lados;
	let perimeto;

	lados=prompt("Cuanto valen los lados de su triangulo");
	lados=parseInt(lados);

    //al ser un triangulo equilatero todos sus lados son iguales
	perimetro=lados*3;

	alert("El perimetro del triangulo equilatero es: "+perimetro);
}
