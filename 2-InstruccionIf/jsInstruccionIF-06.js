function mostrar()
{
	let edad;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	if (edad>=18){

	 alert("Usted es mayor de edad");
	}
	else if (edad >= 13 && edad <= 17){

	alert("Usted es adolescente");
	}
	else {
		alert("Usted es un niño");
	}

}