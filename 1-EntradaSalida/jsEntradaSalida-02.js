/*
autor: Gabriel Alegre
enunciado ejr02:
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
  let nombreIngresado;
  let mensaje;

 //El usuario ingresa su nombre, el nombre que ingreso se guarda en la variable "nombreIngresado"
  nombreIngresado=prompt("Ingrese un nombre");

 //en la variable "mensaje" guardamos el mensaje con el nombre concatenado
  mensaje="Su nombre es: " + nombreIngresado;

 //con el alert mostramos el contenido de la variable "mensaje"
  alert(mensaje);
}

