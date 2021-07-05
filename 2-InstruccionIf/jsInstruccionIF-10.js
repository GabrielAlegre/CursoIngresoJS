function mostrar()
{
 let numAleatorio;
 
 numAleatorio= Math.floor(Math.random()*10)+1;

 if (numAleatorio >=9){

 	alert("EXCELENTE, usted se saco un "+ numAleatorio);
 }
 else if (numAleatorio>=4 && numAleatorio<9){

 	alert("APROBO, usted se saco un "+ numAleatorio);
 }
 else {

 	alert("Vamos, la proxima se puede. Usted se saco un "+ numAleatorio);
 }
}