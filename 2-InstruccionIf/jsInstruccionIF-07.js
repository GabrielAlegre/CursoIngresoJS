function mostrar()
{
	let edad, estado;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	estado=(document.getElementById("estadoCivil").value);

	if (edad<18 && estado != "Soltero"){

	 alert("Usted es muy pequeño para NO ser soltero");
	}

}