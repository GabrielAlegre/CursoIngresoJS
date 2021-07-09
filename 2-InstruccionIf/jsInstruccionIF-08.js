function mostrar()
{ 
	let edad, estado;

	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);

	estado=(document.getElementById("estadoCivil").value);

    if (estado== "Soltero" && edad>=18){

	alert("Usted es soltero y no es menor");
	}
}