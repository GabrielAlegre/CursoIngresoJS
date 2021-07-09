/*
autor: Gabriel Alegre
enunciado ejr03:
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
  let nombreIngresado;
  let mensaje;

  nombreIngresado=document.getElementById('txtIdNombre').value;

  mensaje="Su nombre es: "+nombreIngresado;

  alert(mensaje);
}


