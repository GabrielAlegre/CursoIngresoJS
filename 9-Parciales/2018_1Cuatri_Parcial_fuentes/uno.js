
function mostrar()
{
	let ancho;
	let largo;
	let perimetro;

	ancho=prompt("Ingrese el ancho del rectangulo");
	ancho=parseInt(ancho);

	largo=prompt("Ingrese el largo del rectangulo");
	largo=parseInt(largo);

	perimetro=(ancho*2)+(largo*2);

	alert("el perimetro del rectangulo: "+perimetro)

}
