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
