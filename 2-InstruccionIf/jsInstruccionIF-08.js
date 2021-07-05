function mostrar()
{ 
	let edad, estado;

	edad= parseInt(document.getElementById("txtIdEdad").value);

	estado= (document.getElementById("estadoCivil").value);

	 

      if (estado == "Soltero" && edad >=18 ){

	 alert("Usted es soltero y no es menor");
	 }


}