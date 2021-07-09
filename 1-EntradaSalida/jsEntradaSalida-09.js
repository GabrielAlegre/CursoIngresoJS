/*
autor: Gabriel Alegre
enunciado ejr09BIS:
Debemos lograr tomar el importe por ID, y
Transformarlo a entero (parseInt), luego
mostrar en el cuadro de texto "RESULTADO" 
el importe con un aumento del porcentaje
que ingrese el user"*/
function mostrarAumento()
{
  let sueldo;
  let aumento;
  let sueldoFinal;
  let porcentaje;

  porcentaje=prompt("Ingrese el porcentaje");

  sueldo=document.getElementById("txtIdSueldo").value;
  sueldo=parseInt(sueldo);

  aumento=(porcentaje*sueldo)/100;

  sueldoFinal=sueldo+aumento;

  document.getElementById("txtIdResultado").value=sueldoFinal;

  /*
//EJERCICIO 9 ANTES DEL BIS
enunciado ejr09:
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO"./
function mostrarAumento()
{
// En estas variables aclaramos que "El sueldo"= (Salario), "Los extras"= (Aumento 10%) y "El salarioFinal" = (Valor final).
  let salario;
  let extras;
  let salarioFinal;

  salario = document.getElementById("txtIdSueldo").value;
  salario = parseFloat(salario);

  // En esta operacion sacamos el 10%.
  extras = salario0.10;

 // Se le suma al Importe final. 
 salarioFinal = salario + extras;

 // El resultado  de variable "salarioFinal" se le asigna a Id("txtIdResultado") para que aparezca en  la caja "Resultado".
  document.getElementById("txtIdResultado").value = salarioFinal;
*/
}


