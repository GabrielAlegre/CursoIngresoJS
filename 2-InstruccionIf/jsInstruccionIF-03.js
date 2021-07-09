/*
autor: Gabriel Alegre
enunciado ejercicio if 3:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor.
*/
function mostrar()
{
    let edad;

    edad=document.getElementById("txtIdEdad").value;
    edad=parseInt(edad);

    if(edad>=18){

 	alert("Usted es mayor de edad");
    }

    if (edad<18){

    alert("Usted es menor de edad");
    }
}