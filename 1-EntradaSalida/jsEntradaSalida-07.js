/*
autor: Gabriel Alegre
enunciado ejr07:
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
  let numeroUno; 
  let numeroDos; 
  let suma;

  numeroUno=document.getElementById("txtIdNumeroUno").value;
  numeroDos=document.getElementById("txtIdNumeroDos").value;

  numeroUno=parseInt(numeroUno);
  numeroDos=parseInt(numeroDos);

  suma=numeroUno+numeroDos;

  alert("El resultado de la suma es: " + suma);
}

function restar()
{
  let numeroUno;
  let numeroDos;
  let resta;

  numeroUno=document.getElementById("txtIdNumeroUno").value;
  numeroDos=document.getElementById("txtIdNumeroDos").value;

  numeroUno=parseInt(numeroUno);
  numeroDos=parseInt(numeroDos);

  resta=numeroUno - numeroDos;

  alert("El resultado de la resta es: " + resta);
}

function multiplicar()
{  
  let numeroUno;
  let numeroDos;
  let multi;

  numeroUno=document.getElementById("txtIdNumeroUno").value;
  numeroDos=document.getElementById("txtIdNumeroDos").value;

  numeroUno=parseInt(numeroUno);
  numeroDos=parseInt(numeroDos);

  multi=numeroUno * numeroDos;

  alert("El resultado de la multiplicacion es: "+multi);
}

function dividir()
{
  let numeroUno;
  let numeroDos;
  let division;

  numeroUno=parseInt(document.getElementById("txtIdNumeroUno").value);
  numeroDos=parseInt(document.getElementById("txtIdNumeroDos").value);

  division=numeroUno/numeroDos;

  alert("El resultado de la division es: "+division);
}

