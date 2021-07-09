/*
autor: Gabriel Alegre
enunciado parcial 03:
Pedir por prompt el precio y el porcentaje
de descuento y mostrar el precio final con descuento por id.
*/
function mostrar()
{
  let precio;
  let descuento;
  let precioFinal;
  let porcentaje;

  precio=prompt("Ingrese el precio del producto");
  precio=parseInt(precio);

  porcentaje=prompt("Ingrese el porcentaje de descuento");
  porcentaje=parseInt(porcentaje);

  descuento=(porcentaje*precio)/100;

  precioFinal=precio-descuento;

  document.getElementById("elPrecioFinal").value=precioFinal;
}
