function mostrar()
{
 let numAleatorio;
 //El Math.random tira un numero random pero del 0 al 0.99, lo multiplico por 10 para que me tire numeros del mayores al 0.99 pero menores de 10 (el +1 es para que no de 0), y con el Math.floor redondeo para que no me de con coma
 numAleatorio= Math.floor(Math.random()*10)+1;

 alert(numAleatorio);
}