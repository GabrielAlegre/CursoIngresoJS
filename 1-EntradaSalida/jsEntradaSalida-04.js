/* 
autor: Gabriel Alegre
enunciado ejr04BIS:
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
  let nombreIngresado;
  let apellidoIngresado;
  let mensaje;

  nombreIngresado=prompt("Ingrese su nombre");
  apellidoIngresado=prompt("Ingrese su apellido");


  mensaje="Su nombre es "+nombreIngresado+" y su apellido es "+apellidoIngresado; 

  document.getElementById("txtIdNombre").value=mensaje;

//EJERCICIO 4 ANTES DEL BIS
/*enunciado ejr04:
 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'

function mostrar()
{
  // Creamos una V de tipo cadena para el usuario.
  let nombre;

  // En este paso le indicamos al usuario que indique el nombre y se guarda en la V (nombre).
  nombre= prompt("Ingrese su nombre");

  // Terminando, esto se pasa de  la variable a la pagina.
  document.getElementById("txtIdNombre").value = nombre;
}
*/
}

