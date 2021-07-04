/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
  let precio1, precio, precio3, suma;

  precio1= parseInt(document.getElementById("txtIdPrecioUno").value);
  precio2= parseInt(document.getElementById("txtIdPrecioDos").value);
  precio3= parseInt(document.getElementById("txtIdPrecioTres").value);

  suma= precio1+precio2+precio3;

  alert("la suma de los precio es: "+ suma);
}

function Promedio () 
{
  let precio1, precio, precio3, promedio;

  precio1= parseInt(document.getElementById("txtIdPrecioUno").value);
  precio2= parseInt(document.getElementById("txtIdPrecioDos").value);
  precio3= parseInt(document.getElementById("txtIdPrecioTres").value);

  promedio= (precio1+precio2+precio3)/3;

  alert("El promedio es: "+ promedio);
}

function PrecioFinal () 
{
  let precio1, precio, precio3, precioTotal, iva, precioFinal;

  precio1= parseInt(document.getElementById("txtIdPrecioUno").value);
  precio2= parseInt(document.getElementById("txtIdPrecioDos").value);
  precio3= parseInt(document.getElementById("txtIdPrecioTres").value);
  
  precioTotal= precio1+precio2+precio3;
  iva= precioTotal*0.21;
  precioFinal= precioTotal + iva;

  alert("El precio final por los 3 productos mas IVA es de: "+ precioFinal);
}