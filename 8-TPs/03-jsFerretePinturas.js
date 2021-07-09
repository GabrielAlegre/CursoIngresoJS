/*
autor: Gabriel Alegre
enunciado TP3:
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
  let gradosCentigrados;
  let temperaturaIngresada;

  temperaturaIngresada=document.getElementById("txtIdTemperatura").value;

  temperaturaIngresada=parseInt(temperaturaIngresada);

  gradosCentigrados=(temperaturaIngresada-32)/1.8;

  alert("Los "+temperaturaIngresada+" grados Fahrenheit que ingreso son "+gradosCentigrados+" grados centigrados");
}

function CentigradosFahrenheit () 
{
  let gradosFahrenheit
  let temperaturaIngresada;

  temperaturaIngresada=document.getElementById("txtIdTemperatura").value;
  temperaturaIngresada=parseInt(temperaturaIngresada);
    
  gradosFahrenheit=(temperaturaIngresada*1.8)+ 32;

  alert("Los "+temperaturaIngresada+" grados Centigrados que ingreso son "+gradosFahrenheit+" grados Fahrenheit");
}
