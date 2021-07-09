function mostrar()
{
 let numeroAleatorio;
 
 numeroAleatorio=Math.floor(Math.random()*10)+1;

 if (numeroAleatorio>=9){

 	alert("EXCELENTE, usted se saco un "+numeroAleatorio);
 }
 else if (numeroAleatorio>=4 && numeroAleatorio<9){

 	alert("APROBO, usted se saco un "+numeroAleatorio);
 }
 else {

 	alert("Vamos, la proxima se puede. Usted se saco un "+numeroAleatorio);
 }
}