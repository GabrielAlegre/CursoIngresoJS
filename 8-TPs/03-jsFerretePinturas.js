/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
  let gradosCentigrados, temperatura;

  temperatura= parseInt(document.getElementById("txtIdTemperatura").value);
    
  gradosCentigrados= (temperatura-32)/1.8;

  alert("Los " +temperatura+" grados Fahrenheit que ingreso son "+gradosCentigrados+" grados centigrados");
}

function CentigradosFahrenheit () 
{
  let gradosFahrenheit, temperatura;

  temperatura= parseInt(document.getElementById("txtIdTemperatura").value);
    
  gradosFahrenheit= (temperatura*1.8)+ 32;

  alert("Los " +temperatura+" grados Centigrados que ingreso son "+gradosFahrenheit+" grados Fahrenheit");
}
